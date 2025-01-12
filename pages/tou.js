import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Style from '../styles/tou.module.css';

const terms = [
  {
    title: "Introduction",
    content: "Welcome to Decentralized Chat. By using our service, you agree to these terms of use. Please read them carefully."
  },
  {
    title: "Privacy",
    content: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and share information about you."
  },
  {
    title: "Using Our Services",
    content: "You must follow any policies made available to you within the services. Do not misuse our services, and only use them as permitted by law."
  },
  {
    title: "Your Content",
    content: "Our services allow you to post content. You retain ownership of any intellectual property rights that you hold in that content. However, you give us a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display, and distribute such content."
  },
  {
    title: "Modifications and Termination",
    content: "We may modify or terminate our services at any time, without notice, for any reason, and without liability to you."
  },
  {
    title: "Disclaimer of Warranties",
    content: "We provide our services using a commercially reasonable level of skill and care, but there are certain things that we don’t promise about our services."
  },
  {
    title: "Limitation of Liability",
    content: "When permitted by law, Decentralized Chat will not be responsible for lost profits, revenues, or data, financial losses, or indirect, special, consequential, exemplary, or punitive damages."
  },
  {
    title: "About these Terms",
    content: "We may modify these terms or any additional terms that apply to a service to, for example, reflect changes to the law or changes to our services."
  }
];

const TermsOfUse = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className={Style.terms}>
      <h1>Terms of Use</h1>
      {terms.map((term, index) => (
        <div key={index} className={`${Style.termSection} ${openSections[index] ? Style.active : ''}`}>
          <div className={Style.termHeader} onClick={() => toggleSection(index)}>
            <h2>{term.title}</h2>
            <span>{openSections[index] ? <FaChevronUp /> : <FaChevronDown />}</span>
          </div>
          {openSections[index] && (
            <div className={Style.termContent}>
              <p>{term.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TermsOfUse;
