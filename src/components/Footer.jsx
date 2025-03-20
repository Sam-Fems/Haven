import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200/60 text-center">
      <div className="grid max-sm:block sm:grid-cols-2 max-sm:ml-0 lg:grid-cols-4 gap-2 ml-20 mt-10">
        <div className="flex items-center max-sm:justify-center max-sm:mb-5 flex-shrink-0">
          <img src={logo} className="h-12 w-12" alt="logo" />
          <span className="text-3xl tracking-tight text-neutral-200">
            WarmHaven
          </span>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4 text-neutral-200">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-200 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4 text-neutral-200">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-200 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4 text-neutral-200">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-200 hover:text-white"
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
