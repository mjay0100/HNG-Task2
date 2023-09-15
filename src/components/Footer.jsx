import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" mt-12 mb-5 p-8">
      <div className="flex gap-10 items-center justify-center m-5 text-xl">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaYoutube />
      </div>
      <div className="flex gap-5 items-center justify-center list-none m-8">
        <li>Conditions of Use</li>
        <li>Privacy & Policy</li>
        <li>Press Room</li>
      </div>
      <p className="text-center">© 2021 MovieBox by Adriana Eka Prayudha </p>
    </footer>
  );
};

export default Footer;
