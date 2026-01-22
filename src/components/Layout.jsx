import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <>
      {/* Logo - Top Left Corner with Pulse Glow Animation */}
      <div className="fixed top-6 left-6 z-50">
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="group cursor-pointer transition-all duration-300 hover:scale-105 flex items-center space-x-3"
        >
          {/* Small Icon-Sized Logo */}
          <div className="relative flex-shrink-0">
            <img 
              src="/astronova-logo.jpeg" 
              alt="AstraNova" 
              className="h-12 w-12 object-cover rounded-lg animate-pulse-glow hover:drop-shadow-[0_0_40px_rgba(0,212,255,1)] transition-all duration-300 ring-2 ring-astronova-cyan/30 ring-offset-2 ring-offset-transparent"
            />
          </div>
          
          {/* Unique Typography - Company Name */}
          <div className="hidden md:flex flex-col leading-none">
            <h1 className="text-[26px] font-black tracking-[0.15em] mb-0.5" style={{ 
              fontFamily: "'Orbitron', 'Rajdhani', sans-serif",
              background: 'linear-gradient(135deg, #00d4ff 0%, #ffffff 50%, #9d4edd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
              letterSpacing: '0.15em'
            }}>
              ASTRONOVA
            </h1>
            <div className="flex items-center space-x-2">
              <div className="h-[2px] w-8 bg-gradient-to-r from-astronova-cyan to-transparent"></div>
              <p className="text-[10px] text-astronova-cyan/90 tracking-[0.4em] uppercase font-bold">
                GROUP
              </p>
              <div className="h-[2px] w-8 bg-gradient-to-l from-astronova-cyan to-transparent"></div>
            </div>
          </div>
        </button>
      </div>

      {/* Dark Mode Toggle - Top Right - Hide on Home Page */}
      {location.pathname !== '/' && (
        <div className="fixed top-6 right-6 z-50">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full border-2 border-gray-300 dark:border-astronova-cyan bg-white/10 dark:bg-astronova-dark-blue/50 backdrop-blur-md hover:bg-white/20 dark:hover:bg-astronova-cyan/10 transition-all duration-300 hover:scale-110 hover:rotate-12"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <FaSun className="text-astronova-gold text-xl" />
            ) : (
              <FaMoon className="text-gray-700 dark:text-white text-xl" />
            )}
          </button>
        </div>
      )}

      {/* Hidden Menu - Appears on Logo Click */}
      {menuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 animate-fadeIn"
            onClick={() => setMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-0 left-0 h-screen w-80 bg-gradient-to-br from-astronova-dark-blue via-astronova-purple/20 to-astronova-dark-blue border-r border-astronova-cyan/30 z-50 p-8 animate-slideInLeft shadow-2xl">
            
            {/* Close Button */}
            <button 
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-white hover:text-astronova-cyan transition-all duration-300 hover:rotate-90"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Logo in Menu - Compact */}
            <div className="mb-10 mt-4 flex flex-col items-center space-y-4">
              {/* Icon with Glow */}
              <div className="relative">
                <div className="absolute inset-0 bg-astronova-cyan/20 blur-2xl rounded-full animate-pulse"></div>
                <img 
                  src="/astronova-logo.jpeg" 
                  alt="AstraNova Group" 
                  className="relative h-24 w-24 object-cover rounded-2xl shadow-2xl animate-pulse-glow ring-4 ring-astronova-cyan/40"
                />
              </div>
              
              {/* Shorter Company Name */}
              <div className="text-center">
                <h2 className="text-3xl font-black tracking-[0.15em] mb-2" style={{ 
                  fontFamily: "'Orbitron', sans-serif",
                  background: 'linear-gradient(135deg, #00d4ff 0%, #ffffff 30%, #9d4edd 60%, #ff006e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'drop-shadow(0 0 15px rgba(0, 212, 255, 0.4))'
                }}>
                  ASTRONOVA
                </h2>
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-transparent via-astronova-cyan to-transparent"></div>
                  <p className="text-xs text-astronova-cyan tracking-[0.4em] uppercase font-bold">
                    GROUP
                  </p>
                  <div className="h-[2px] w-8 bg-gradient-to-l from-transparent via-astronova-cyan to-transparent"></div>
                </div>
                
              </div>
            </div>

            {/* Navigation Links - Numbered (No Colored Arrows) */}
            <nav className="space-y-5">
              <Link 
                to="/"
                onClick={() => setMenuOpen(false)}
                className="flex items-center text-lg font-bold text-white hover:text-astronova-cyan transition-all duration-300 transform hover:translate-x-2 group"
              >
                <span className="mr-4 text-astronova-cyan/60 text-sm font-black group-hover:text-astronova-cyan transition-colors" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  01
                </span>
                <span className="group-hover:scale-105 transition-transform">Home</span>
              </Link>
              
              <Link 
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="flex items-center text-lg font-bold text-white hover:text-astronova-cyan transition-all duration-300 transform hover:translate-x-2 group"
              >
                <span className="mr-4 text-astronova-cyan/60 text-sm font-black group-hover:text-astronova-cyan transition-colors" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  02
                </span>
                <span className="group-hover:scale-105 transition-transform">About</span>
              </Link>
              
              <Link 
                to="/companies"
                onClick={() => setMenuOpen(false)}
                className="flex items-center text-lg font-bold text-white hover:text-astronova-cyan transition-all duration-300 transform hover:translate-x-2 group"
              >
                <span className="mr-4 text-astronova-cyan/60 text-sm font-black group-hover:text-astronova-cyan transition-colors" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  03
                </span>
                <span className="group-hover:scale-105 transition-transform">Companies</span>
              </Link>
              
              <Link 
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center text-lg font-bold text-white hover:text-astronova-cyan transition-all duration-300 transform hover:translate-x-2 group"
              >
                <span className="mr-4 text-astronova-cyan/60 text-sm font-black group-hover:text-astronova-cyan transition-colors" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                  04
                </span>
                <span className="group-hover:scale-105 transition-transform">Contact</span>
              </Link>
            </nav>

            {/* Decorative Bottom Text - Shorter */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="h-px bg-gradient-to-r from-transparent via-astronova-cyan to-transparent mb-3 animate-pulse"></div>
              <p className="text-[10px] text-white/40 text-center tracking-[0.15em] uppercase font-semibold">
                Empowering Excellence
              </p>
            </div>
          </div>
        </>
      )}

      {/* Page Content */}
      {children}
    </>
  );
}

export default Layout;
