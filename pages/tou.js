import React from 'react';
import Style from '../styles/tou.module.css';

const TermsOfUse = () => {
  return (
    <div className={Style.terms}>
      <h1>Terms of Use</h1>
      <section>
        <h2>1. Introduction</h2>
        <p>Welcome to Decentralized Chat. By using our service, you agree to these terms of use. Please read them carefully.</p>
      </section>
      <section>
        <h2>2. Privacy</h2>
        <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and share information about you.</p>
      </section>
      <section>
        <h2>3. Using Our Services</h2>
        <p>You must follow any policies made available to you within the services. Do not misuse our services, and only use them as permitted by law.</p>
      </section>
      <section>
        <h2>4. Your Content</h2>
        <p>Our services allow you to post content. You retain ownership of any intellectual property rights that you hold in that content. However, you give us a worldwide license to use, host, store, reproduce, modify, create derivative works, communicate, publish, publicly perform, publicly display, and distribute such content.</p>
      </section>
      <section>
        <h2>5. Modifications and Termination</h2>
        <p>We may modify or terminate our services at any time, without notice, for any reason, and without liability to you.</p>
      </section>
      <section>
        <h2>6. Disclaimer of Warranties</h2>
        <p>We provide our services using a commercially reasonable level of skill and care, but there are certain things that we don’t promise about our services.</p>
      </section>
      <section>
        <h2>7. Limitation of Liability</h2>
        <p>When permitted by law, Decentralized Chat will not be responsible for lost profits, revenues, or data, financial losses, or indirect, special, consequential, exemplary, or punitive damages.</p>
      </section>
      <section>
        <h2>8. About these Terms</h2>
        <p>We may modify these terms or any additional terms that apply to a service to, for example, reflect changes to the law or changes to our services.</p>
      </section>
    </div>
  );
};

export default TermsOfUse;
