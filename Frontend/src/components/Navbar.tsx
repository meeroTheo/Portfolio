import { useState } from 'react';
import { FiMonitor, FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = [
    { title: 'About', href: '#about-section' },
    { title: 'Projects', href: '#projects-section' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50
                 bg-white/80 backdrop-blur-md shadow-sm
                 text-black"
    >
      <div className="max-w-[1208px] mx-auto flex justify-between items-center px-4 sm:px-8 py-3 md:py-4">
        <a href="#" className="flex items-center gap-2 group" aria-label="Homepage">
          <div className="font-bold text-lg sm:text-xl border-2 border-black p-1 leading-none group-hover:border-sky-500 transition-colors">
            ME<span className="inline-block transform -scale-y-100">G</span>R
          </div>
          <span className="text-lg sm:text-xl font-semibold group-hover:text-sky-600 transition-colors">Meer Theodore Baloch</span>
        </a>

        <div className="hidden md:flex items-center gap-5 lg:gap-7 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="hover:text-sky-600 transition-colors"
            >
              {link.title}
            </a>
          ))}
          <button aria-label="Toggle theme" className="ml-2 hover:text-sky-600 transition-colors">
            <FiMonitor className="w-5 h-5" />
          </button>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 pb-3">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-100"
              >
                {link.title}
              </a>
            ))}
            <button aria-label="Toggle theme" className="w-full text-left mt-2 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-gray-100 flex items-center">
                <FiMonitor className="w-5 h-5 mr-2" /> Toggle Theme
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
