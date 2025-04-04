import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center">
        {/* Quick Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/services" className="hover:text-yellow-400">Services</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-xl mb-6">
          <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
          <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
          <a href="#" className="hover:text-red-500"><FaYoutube /></a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} GymFit. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
