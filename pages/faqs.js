import React, { useState } from 'react';
import Style from '../styles/faqs.module.css';

const ques = [
  { 
    question: "How do I connect my wallet?", 
    answer: "You can connect your wallet by clicking the 'Connect wallet' button on the top right corner." 
  },
  { 
    question: "How do I add a friend?", 
    answer: "You can add a friend by navigating to the 'All Users' section and sending a friend request." 
  },
  { 
    question: "How do I send a message?", 
    answer: "You can send a message by selecting a friend from your friend list and typing your message in the chat window." 
  },
  { 
    question: "Is my chat data secure?", 
    answer: "Yes, the chat data is secured using blockchain and peer-to-peer (P2P) technology to ensure privacy and security." 
  },
  { 
    question: "Can I use this app on mobile?", 
    answer: "Yes, the app is designed to be responsive and can be used on mobile devices." 
  },
  { 
    question: "What is the purpose of this app?", 
    answer: "The app is a decentralized chat application that leverages blockchain to enable secure and private messaging." 
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={Style.faqs}>
      <h1>Frequently Asked Questions</h1>
      <div className={Style.faqsList}>
        {ques.map((q, i) => (
          <div 
            key={i} 
            className={`${Style.faqItem} ${openIndex === i ? Style.active : ''}`}
            onClick={() => toggleAnswer(i)}
          >
            <h3 className={Style.question}>Question: {q.question}</h3>
            {openIndex === i && <p className={Style.answer}>Answer: {q.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
