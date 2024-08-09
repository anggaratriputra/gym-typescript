import React from "react";
import Logo from "@/assets/Logo.png";



const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Unrivaled Gym, Unparalleled Training Fitness Classes. <br /> 
            World Class Studios to get the Body Shapes that you dream of. <br />
            <span className="text-primary-500 font-bold">Get Your Dream Body Now. </span>
          </p>
          <p>&copy; Evogym. All rights reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">
            Links
        </h4>
        <p className="my-5">
            Terms & Conditions
        </p>
        <p className="my-5">
            Privacy Policy
        </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
        <h4 className="font-bold">
            Contact Us
        </h4>
        <p>
            Address: 12 Radar Atas VI St, East Jakarta, Indonesia, 13790 <br />
            Phone: (+62) 8128399921 <br />
            Email: support@evogym.com <br />
            Fax: (021) 654-3210 <br />
        </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
