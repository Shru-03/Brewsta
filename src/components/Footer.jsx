import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#211B19] text-white py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">
            Brewsta
            <img
              src="/favicon.webp"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
          </h2>
          <p className="text-sm">
            Savor handcrafted brews made from premium beans and poured with
            passion. Start and end your day the Brewsta way.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-[#d0b185]">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#d0b185]">
                About
              </a>
            </li>
            <li>
              <a href="/brew" className="hover:text-[#d0b185]">
                Brew Bar
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[#d0b185]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-[#d0b185]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#d0b185]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#d0b185]">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-[#d0b185]">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Caffeinated</h3>
          <p className="text-sm mb-4">Subscribe for updates & brew tips</p>
          <form className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border border-white/50 rounded-md text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#d0b185] hover:bg-[#b8925e] text-black py-2 rounded-md font-semibold transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Brewsta. All rights reserved.{" "}
        <a
          href="https://www.linkedin.com/in/shruti-sharma-developer/"
          target="_blank"
          className="underline text-[#d0b185]"
        >
          Shruti Sharma
        </a>
      </div>
    </footer>
  );
};

export default Footer;
