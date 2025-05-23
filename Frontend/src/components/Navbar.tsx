import { FiMonitor } from 'react-icons/fi';

const Navbar = () => {
  const navLinks = ['About', 'Work', 'Projects'];

  return (
    <nav 
      className="w-full max-w-[1176px] h-14 p-3 rounded-[32px] bg-white bg-opacity-30 z-40 relative backdrop-blur-3xl border-[1px]
                    dark:bg-opacity-40 grid grid-rows-1 grid-cols-[60px_auto_60px] items-center border-neutral-200 animate-pulse"
    > 
        <div className="flex items-center sm:w-[350px] gap-2">
          <div className="font-bold text-lg sm:text-xl border-2 border-black p-1 leading-none">
            ME<span className="inline-block transform -scale-y-100">G</span>R
          </div>
          <span className="ml-3 font-bold text-xl text-black z-40">Meer Theodore Baloch</span>
        </div>

        <div className="md:text-lg text-black h-full sm:w-[350px] justify-self-end flex items-center justify-between z-40 col-start-3">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`} 
              className="hover:text-purple-600 transition-colors"
            >
              {link}
            </a>
          ))}
          <FiMonitor className="w-5 h-5 cursor-pointer hover:text-purple-600" />
        </div>
        
    </nav>
  );
};

export default Navbar;