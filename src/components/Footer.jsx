import { FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-pink-200 to-pink-300 text-pink-900 text-center py-10 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
        <p className="text-lg font-semibold font-serif max-w-md">
          Merci de votre visite chez Celina Beauty Queen
        </p>
        <div className="flex gap-8 text-4xl">
          <a
            href="https://instagram.com/tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition transform hover:scale-110"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@tonprofil"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600 transition transform hover:scale-110"
            aria-label="TikTok"
          >
            <FaTiktok />
          </a>
          <br />
          <br />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
