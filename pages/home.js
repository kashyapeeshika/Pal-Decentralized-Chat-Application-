import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Style from '../styles/Home.module.css';
import images from '../assets'; // Assuming you have an assets folder with images

const features = [
  { title: "Secure Messaging", description: "All your messages are encrypted end-to-end.", image: images.secure },
  { title: "Decentralized", description: "No central servers, complete privacy.", image: images.decen },
  { title: "User Friendly", description: "Easy to use interface with powerful features.", image: images.userfreindly },
  { title: "Cross Platform", description: "Available on web and mobile.", image: images.cross },
];

const Home = () => {
  return (
    <div className={Style.home}>
      {/* Hero Section */}
      <section className={Style.hero}>
        <Image src={images.logo} alt="App Logo" width={100} height={100} className={Style.logo} />
        <h1>Welcome to Decentralized Chat</h1>
        <p>Your privacy, our priority. Experience seamless and secure messaging.</p>
        <Link href="">
          <a className={Style.getStartedButton}>Get Started</a>
        </Link>
      </section>

      {/* Features Section */}
      <section className={Style.features}>
        <h2>Features</h2>
        <div className={Style.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={Style.featureItem}>
              <Image src={feature.image} alt={feature.title} width={50} height={50} />
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* More Details Section */}
      <section className={Style.details}>
        <h2>Why Choose Us?</h2>
        <div className={Style.detailsContent}>
          <div className={Style.detail}>
            <Image src={images.trust} alt="Trust" width={100} height={100} />
            <h3>Trustworthy</h3>
            <p>Our app ensures your data is always safe and secure.</p>
          </div>
          <div className={Style.detail}>
            <Image src={images.community} alt="Community" width={100} height={100} />
            <h3>Community</h3>
            <p>Join a community of like-minded individuals.</p>
          </div>
          <div className={Style.detail}>
            <Image src={images.support} alt="Support" width={100} height={100} />
            <h3>24/7 Support</h3>
            <p>Our support team is always here to help you.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={Style.footer}>
        <p>&copy; 2024 Decentralized Chat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
