import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* About Section */}
        <div>
          <h2 className="text-3xl font-bold text-gold">About Us</h2>
          <p className="text-gray-400 mt-3">
            We provide top-tier fitness training, expert guidance, and state-of-the-art equipment to help you achieve your goals.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-3xl font-bold text-gold">Quick Links</h2>
          <ul className="mt-4 space-y-3">
            {["Home", "About", "Plans", "Services", "Contact"].map((link, index) => (
              <li key={index}>
                <Link 
                  to={`/${link.toLowerCase()}`} 
                  className="text-gray-400 hover:text-gold transition duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h2 className="text-3xl font-bold text-gold">Follow Us</h2>
          <div className="flex space-x-4 mt-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="bg-gray-800 p-3 rounded-full text-gray-400 hover:text-gold hover:bg-gray-700 transition duration-300"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          {/* Contact Info */}
          <h2 className="text-3xl font-bold text-gold mt-8">Contact</h2>
          <p className="text-gray-400 mt-3">📍 123 Gym Street, City, Country</p>
          <p className="text-gray-400">📧 support@gym.com</p>
          <p className="text-gray-400">📞 +123 456 7890</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-12 px-6">
        <h2 className="text-center text-3xl font-bold text-gold">Subscribe to Our Newsletter</h2>
        <p className="text-center text-gray-400 mt-2">
          Get the latest fitness tips, updates, and exclusive discounts!
        </p>
        <div className="flex justify-center mt-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full md:w-1/3 px-4 py-3 rounded-l-lg bg-gray-800 text-white outline-none"
          />
          <button className="bg-gold text-white px-6 py-3 rounded-r-lg font-bold hover:bg-yellow-500 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-12 text-gray-500 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Gym Website. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
