import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-row w-full bg-gray-900 text-white py-4">
      <div className="flex-1 text-center">
        <h4 className="font-bold mb-2">Contributors</h4>
        <p>Audrey DAMIBA</p>
        <p>Mélissa LACHEB</p>
        <p>Eyfeline TALA</p>
        <p>Kevin TRAN</p>
        <p>Charles FAZI</p>
        <p>Vincent LAM</p>
      </div>
      <div className="flex-1 text-center">
        <h4 className="font-bold mb-2">Contact Us</h4>
        <p>We'd love to hear from you!</p>
      </div>
      <div className="flex-1 text-center">
        <h4 className="font-bold mb-2">Development Tools</h4>
        <p>React</p>
        <p>Tailwind CSS</p>
        <p>Node.js</p>
        <p>Express</p>
      </div>
    </footer>
  );
};

export default Footer;
