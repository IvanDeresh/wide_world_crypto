import React from "react";

const TheFooter = () => {
  return (
    <footer className="max-container font-montserrat max-2xl:mx-[5%]">
      <div className="flex gap-6 mx-[5%] flex-wrap font-montserrat">
        <div className="w-[280px] gap-4 h-[300px] border-2 rounded-2xl flex flex-col justify-start items-start p-5">
          <h4 className="text-[30px]">Markets</h4>
          <div className="flex flex-col gap-3 text-[20px] cursor-pointer">
            <p>Bitcoin</p>
            <p>Ethereum</p>
            <p>Ripple</p>
            <p>Litecoin</p>
            <p>Cardano</p>
          </div>
        </div>
        <div className="w-[320px] gap-4 h-[300px] border-2 rounded-2xl flex flex-col justify-start items-start p-5">
          <h4 className="text-[30px]">Contacts</h4>
          <div className="flex flex-col gap-3 text-[18px] cursor-pointer">
            <p>Email: info@example.com</p>
            <p>Phone: +123456789</p>
            <p>Address: 123 Crypto Street</p>
            <p>Social Media: @cryptosite</p>
            <p>Support: support@example.com</p>
          </div>
        </div>
        <div className="w-[280px] gap-4 h-[300px] border-2 rounded-2xl flex flex-col justify-start items-start p-5">
          <h4 className="text-[30px]">About Us</h4>
          <div className="flex flex-col gap-3 text-[20px] cursor-pointer">
            <p>Our Mission</p>
            <p>Team Members</p>
            <p>Company History</p>
            <p>Partnerships</p>
            <p>Press Releases</p>
          </div>
        </div>
        <div className="w-[320px] gap-4 h-[300px] border-2 rounded-2xl flex flex-col justify-start items-start p-5">
          <h4 className="text-[30px]">Resources</h4>
          <div className="flex flex-col gap-3 text-[20px] cursor-pointer">
            <p>Guides</p>
            <p>FAQs</p>
            <p>Terms of Service</p>
            <p>Privacy Policy</p>
            <p>Blog</p>
          </div>
        </div>
        <div className="w-[280px] gap-4 h-[300px] border-2 rounded-2xl flex flex-col justify-start items-start p-5">
          <h4 className="text-[30px]">Connect</h4>
          <div className="flex flex-col gap-3 text-[20px] cursor-pointer">
            <p>Newsletter Signup</p>
            <p>Community Forum</p>
            <p>Events</p>
            <p>Affiliate Program</p>
            <p>Developer API</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TheFooter;
