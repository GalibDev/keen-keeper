import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="mt-16 bg-[#1f5b49] text-white">
      <div className="container-width py-16 text-center">
        <h2 className="text-5xl font-bold md:text-6xl">KeenKeeper</h2>
        <p className="mx-auto mt-3 max-w-2xl text-xs text-gray-200">
          Your personal shelf of meaningful connections. Browse, trend, and nurture
          the relationships that matter most.
        </p>

        <h4 className="mt-6 text-sm font-semibold">Social Links</h4>

        <div className="mt-3 flex justify-center gap-3">
          {[instagram, facebook, twitter].map((icon, index) => (
            <a
              key={index}
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
            >
              <img src={icon} alt="social" className="h-4 w-4 object-contain" />
            </a>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 text-[11px] text-gray-300 md:flex-row">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-4 md:gap-6">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;