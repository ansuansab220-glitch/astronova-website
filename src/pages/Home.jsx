import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '/astronova-logo.jpeg';
// Ultra-Professional 3D Company Card Component (Desktop)
function CompanyCard3D({ name, subtitle, icon, delay }) {
  return (
    <div 
      className="hidden lg:block w-60 xl:w-72 bg-gradient-to-br from-[#0a1929]/95 via-[#0d2137]/90 to-[#0a1929]/95 backdrop-blur-2xl border border-astronova-cyan/20 rounded-3xl p-8 shadow-[0_20px_80px_-20px_rgba(0,212,255,0.3)] hover:shadow-[0_30px_100px_-20px_rgba(0,212,255,0.5)] transition-all duration-700 cursor-pointer group hover:scale-105 hover:border-astronova-cyan/60 animate-fadeInUp relative overflow-hidden hover:-translate-y-2"
      style={{ 
        animationDelay: delay,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-astronova-cyan/0 via-astronova-cyan/5 to-astronova-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-astronova-cyan/40 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-astronova-cyan/10 blur-3xl rounded-full group-hover:bg-astronova-cyan/20 transition-all duration-700"></div>
      
      <div className="flex justify-center mb-6 relative z-10">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-astronova-cyan/30 via-astronova-purple/30 to-astronova-cyan/30 blur-xl group-hover:blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
          <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-astronova-cyan/20 via-astronova-purple/20 to-transparent border-2 border-astronova-cyan/40 group-hover:border-astronova-cyan flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-xl backdrop-blur-sm">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent"></div>
            <span className="relative text-3xl font-black text-astronova-cyan group-hover:text-white transition-colors duration-300" style={{ fontFamily: "'Orbitron', sans-serif" }}>
              {icon}
            </span>
          </div>
          <div className="absolute top-0 right-0 w-2 h-2 bg-astronova-cyan rounded-full blur-sm animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-astronova-purple rounded-full blur-sm animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      <h3 className="relative z-10 font-black text-xl lg:text-2xl text-white mb-3 text-center group-hover:text-astronova-cyan transition-colors duration-500 tracking-tight" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
        {name}
      </h3>

      <div className="relative z-10 mb-3 flex items-center justify-center">
        <div className="h-px w-8 bg-gradient-to-r from-transparent to-astronova-cyan/40"></div>
        <div className="mx-2 w-1 h-1 rounded-full bg-astronova-cyan/60"></div>
        <div className="h-px w-8 bg-gradient-to-l from-transparent to-astronova-cyan/40"></div>
      </div>

      <p className="relative z-10 text-astronova-cyan/60 text-sm lg:text-base uppercase tracking-[0.2em] text-center font-bold group-hover:text-astronova-cyan/90 transition-colors duration-500">
        {subtitle}
      </p>

      <div className="relative z-10 mt-6 h-1 w-full bg-gradient-to-r from-transparent via-astronova-cyan/20 to-transparent rounded-full overflow-hidden">
        <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-astronova-cyan via-white to-astronova-purple transition-all duration-1000 ease-out shadow-[0_0_20px_rgba(0,212,255,0.5)]"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-20 h-20 border-l border-b border-astronova-cyan/10 rounded-bl-3xl group-hover:border-astronova-cyan/30 transition-colors duration-500"></div>
      <div className="absolute top-0 right-0 w-20 h-20 border-r border-t border-astronova-cyan/10 rounded-tr-3xl group-hover:border-astronova-cyan/30 transition-colors duration-500"></div>
      
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent rounded-3xl"></div>
      </div>
    </div>
  );
}

// Mobile Simplified Circle Component
function MobileCompanyCircle({ name, icon, index, total }) {
  const angle = (index * 360) / total;
  const radius = 42; // Percentage from center
  
  // Calculate position
  const x = 50 + radius * Math.cos((angle - 90) * Math.PI / 180);
  const y = 50 + radius * Math.sin((angle - 90) * Math.PI / 180);
  
  return (
    <div 
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)',
        animationDelay: `${index * 0.1}s`
      }}
    >
      <div className="relative group cursor-pointer animate-fadeInUp">
        <div className="absolute -inset-2 bg-astronova-cyan/20 rounded-2xl blur-lg opacity-0 group-active:opacity-100 transition-opacity"></div>
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#0a1929] via-[#0d2137] to-[#0a1929] border-2 border-astronova-cyan/40 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-sm group-active:scale-95 transition-all">
          <span className="text-lg sm:text-xl font-black text-astronova-cyan" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            {icon}
          </span>
        </div>
      </div>
      <div className="mt-2 text-center">
        <p className="text-[9px] sm:text-[10px] text-white font-bold tracking-wider" style={{ fontFamily: "'Barlow Condensed', sans-serif" }}>
          {name.split(' ').map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
        </p>
      </div>
    </div>
  );
}

// Main Home Component
function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const companies = [
    { name: 'NovaTech Digital', subtitle: 'DIGITAL SOLUTIONS', icon: 'NT' },
    { name: 'Astra Design Studio', subtitle: 'CREATIVE DESIGN', icon: 'AD' },
    { name: 'Zenith Constructions', subtitle: 'CONSTRUCTION', icon: 'ZC' },
    { name: 'Apex Smart Homes', subtitle: 'SMART TECHNOLOGY', icon: 'SH' },
    { name: 'Lumina Interiors', subtitle: 'INTERIOR DESIGN', icon: 'LI' },
    { name: 'SkyCore Media', subtitle: 'DIGITAL MARKETING', icon: 'SM' },
    { name: 'Helios Architects', subtitle: 'ARCHITECTURE', icon: 'HA' },
    { name: 'TerraForm Landscapes', subtitle: 'LANDSCAPE DESIGN', icon: 'TL' },
    { name: 'Orbit InfraWorks', subtitle: 'INFRASTRUCTURE', icon: 'OI' },
    { name: 'NovaBuild Projects', subtitle: 'PROJECT MANAGEMENT', icon: 'NB' }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0a1929]">
      
      {/* Background Image - Separate images for desktop and mobile with PARALLAX */}
      <div 
        className="fixed inset-0 w-full h-full"
        style={{
          zIndex: 0,
          overflow: 'hidden',
          transform: `translateY(${scrollY * 0.5}px)`, // Parallax effect - moves slower than content
        }}
      >
        {/* Desktop Background - Uses landscape image */}
        <div 
          className="hidden sm:block absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('./space-bg-desktop.png')", // Updated path
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.7)'
          }}
        />
        {/* Mobile Background - Uses iPhone XR dimension image */}
        <div 
          className="sm:hidden absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('./space-bg-mobile.jpg')", // Updated path
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundColor: '#0a1929',
            filter: 'brightness(0.7)'
          }}
        />
      </div>
      
      {/* Overlay - Extended to cover entire page */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-astronova-dark-blue/40 to-[#0a1929]" style={{ zIndex: 1 }}></div>

      {/* First Section - Parallax Background */}
      <div className="relative z-10 h-screen flex items-center justify-center px-4">
        {/* Parallax content can go here if needed */}
      </div>

      {/* Hero Text Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-b from-transparent via-astronova-dark-blue/95 to-astronova-dark-blue">
        <div className="text-center max-w-5xl w-full space-y-6 sm:space-y-8 md:space-y-12">
          
          <h1 className="font-black leading-[0.95] animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <span className="block text-white text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-2xl mb-3 sm:mb-4 md:mb-6" style={{ 
              fontFamily: "'Barlow Condensed', 'Bebas Neue', 'Rajdhani', sans-serif",
              fontWeight: '900',
              letterSpacing: '0.05em'
            }}>
              One Vision,
            </span>
            <span className="block text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[11rem] bg-gradient-to-r from-astronova-cyan via-white to-astronova-purple bg-clip-text text-transparent drop-shadow-2xl" style={{ 
              fontFamily: "'Barlow Condensed', 'Bebas Neue', 'Rajdhani', sans-serif",
              fontWeight: '900',
              letterSpacing: '0.1em'
            }}>
              INFINITE
            </span>
            <span className="block text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white drop-shadow-2xl mt-3 sm:mt-4 md:mt-6" style={{ 
              fontFamily: "'Barlow Condensed', 'Bebas Neue', 'Rajdhani', sans-serif",
              fontWeight: '900',
              letterSpacing: '0.15em'
            }}>
              POSSIBILITIES
            </span>
          </h1>

          <div className="flex items-center justify-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-astronova-cyan to-transparent"></div>
          </div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed animate-fadeInUp px-4" style={{ 
            fontFamily: "'Barlow', sans-serif",
            animationDelay: '0.5s'
          }}>
            Empowering Excellence Across Industries
          </p>

          <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <button className="group relative px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-astronova-purple to-astronova-pink text-white font-black text-sm sm:text-base md:text-lg rounded-full overflow-hidden shadow-2xl hover:shadow-astronova-cyan/50 transition-all duration-500 active:scale-95 sm:hover:scale-105 md:hover:scale-110" style={{ 
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: '0.15em'
            }}>
              <span className="relative z-10">EXPLORE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-astronova-cyan to-astronova-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="relative z-10 py-12 sm:py-16 md:py-24 lg:py-40 xl:py-48 bg-gradient-to-b from-astronova-dark-blue via-[#0a1929] to-astronova-dark-blue overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-astronova-cyan/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-astronova-purple/10 rounded-full blur-[60px] sm:blur-[80px] md:blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          <div className="absolute inset-0 opacity-[0.02]" style={{ 
            backgroundImage: 'linear-gradient(rgba(0,212,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.5) 1px, transparent 1px)',
            backgroundSize: '20px 20px sm:30px sm:30px'
          }}></div>
        </div>

        <div className="max-w-[1900px] mx-auto px-4 sm:px-6 relative">
          
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16 md:mb-24 lg:mb-32 xl:mb-40">
            <div className="inline-block mb-4 sm:mb-6 md:mb-8 animate-fadeInUp">
              <div className="px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-2.5 md:py-3 border border-astronova-cyan/30 rounded-full text-astronova-cyan text-[9px] xs:text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.3em] font-bold backdrop-blur-xl bg-white/5 shadow-lg shadow-astronova-cyan/10 relative overflow-hidden group cursor-pointer hover:border-astronova-cyan/60 transition-all">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-astronova-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center">
                  <span className="mr-1.5 sm:mr-2 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-astronova-cyan rounded-full animate-pulse"></span>
                  Our Portfolio
                </span>
              </div>
            </div>
            
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6 md:mb-8 animate-fadeInUp tracking-tight px-4" style={{ 
              fontFamily: "'Barlow Condensed', sans-serif",
              animationDelay: '0.1s',
              letterSpacing: '0.02em'
            }}>
              <span className="inline-block bg-gradient-to-r from-white via-astronova-cyan to-white bg-clip-text text-transparent">
                Our Ecosystem
              </span>
            </h2>
            
            <div className="flex items-center justify-center mb-3 sm:mb-4 md:mb-6 animate-fadeInUp px-4" style={{ animationDelay: '0.2s' }}>
              <div className="h-px w-6 sm:w-8 md:w-12 lg:w-20 xl:w-32 bg-gradient-to-r from-transparent to-astronova-cyan"></div>
              <p className="mx-2 sm:mx-4 md:mx-6 lg:mx-8 text-astronova-cyan text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-bold tracking-wide text-center">
                10 Specialized Companies
              </p>
              <div className="h-px w-6 sm:w-8 md:w-12 lg:w-20 xl:w-32 bg-gradient-to-l from-transparent to-astronova-cyan"></div>
            </div>
            
            <p className="text-white/50 text-xs xs:text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed animate-fadeInUp px-4 sm:px-6" style={{ animationDelay: '0.3s' }}>
              Excellence across digital, creative, and construction industries
            </p>
          </div>

          {/* Mobile Circular View */}
          <div className="lg:hidden relative w-full max-w-md mx-auto mb-12" style={{ paddingTop: '100%' }}>
            <div className="absolute inset-0">
              {/* Circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-full border border-astronova-cyan/10 rounded-full"></div>
                <div className="absolute w-[85%] h-[85%] border border-astronova-cyan/20 rounded-full"></div>
              </div>

              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-4 bg-astronova-cyan/20 blur-2xl rounded-full animate-pulse"></div>
                  <div className="relative bg-gradient-to-br from-[#0a1929] via-[#0d2137] to-[#0a1929] p-6 sm:p-8 rounded-full border-2 border-astronova-cyan/30 shadow-[0_0_60px_rgba(0,212,255,0.3)] backdrop-blur-xl">
                    <div className="text-center">
                      <div className="mb-3 relative">
                        <div className="absolute inset-0 bg-astronova-cyan/20 blur-xl rounded-full"></div>
                        <img 
                          src="/astronova-logo.jpeg" 
                          alt="AstraNova" 
                          className="relative h-16 w-16 sm:h-20 sm:w-20 object-cover rounded-2xl mx-auto shadow-2xl ring-2 ring-astronova-cyan/30"
                        />
                      </div>
                      
                      <h3 className="text-xl sm:text-2xl font-black text-white mb-2 tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        ASTRONOVA
                      </h3>
                      
                      <p className="text-astronova-cyan text-xs sm:text-sm font-bold tracking-[0.3em] uppercase">
                        GROUP
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Icons in Circle */}
              {companies.map((company, index) => (
                <MobileCompanyCircle 
                  key={index}
                  name={company.name}
                  icon={company.icon}
                  index={index}
                  total={companies.length}
                />
              ))}
            </div>
          </div>

          {/* Desktop Orbital View - UNCHANGED */}
          <div className="hidden lg:block relative w-full max-w-[1500px] mx-auto animate-fadeIn" style={{ height: '1200px', animationDelay: '0.4s' }}>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="absolute w-[106%] h-[106%] border border-astronova-cyan/5 rounded-full animate-spin-slowest"></div>
              <div className="absolute w-[100%] h-[100%] border-2 border-astronova-purple/5 rounded-full"></div>
              <div className="absolute w-[94%] h-[94%] border border-astronova-cyan/10 rounded-full animate-spin-slower shadow-[0_0_100px_rgba(0,212,255,0.1)]"></div>
              <div className="absolute w-[88%] h-[88%] border-2 border-astronova-cyan/15 rounded-full shadow-[0_0_80px_rgba(0,212,255,0.15)] blur-[0.5px]"></div>
            </div>

            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
              <defs>
                <linearGradient id="lineGradient" x1="50%" y1="50%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#00d4ff', stopOpacity: 0.8 }} />
                  <stop offset="50%" style={{ stopColor: '#00d4ff', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#00d4ff', stopOpacity: 0 }} />
                </linearGradient>
                <filter id="professionalGlow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              <line x1="50%" y1="50%" x2="50%" y2="2%" stroke="url(#lineGradient)" strokeWidth="2.5" filter="url(#professionalGlow)" opacity="0.7" />
              <line x1="50%" y1="50%" x2="85%" y2="9%" stroke="url(#lineGradient)" strokeWidth="2.5" filter="url(#professionalGlow)" opacity="0.7" />
              <line x1="50%" y1="50%" x2="98%" y2="27%" stroke="url(#lineGradient)" strokeWidth="2.5" filter="url(#professionalGlow)" opacity="0.7" />
              <line x1="50%" y1="50%" x2="98%" y2="73%" stroke="url(#lineGradient)" strokeWidth="2.5" filter="url(#professionalGlow)" opacity="0.7" />
              <line x1="50%" y1="50%" x2="85%" y2="91%" stroke="url(#lineGradient)" strokeWidth="2.5" filter="url(#professionalGlow)" opacity="0.7" />
              <line x1="50%" y1="50%" x2="50%" y2="98%" stroke="url(#lineGradient)" strokeWidth="2.5" filter="url(#professionalGlow)" opacity="0.7" />
              <line x1="50%" y1="50%" x2="15%" y2="91%" stroke="url(#lineGradient)" strokeWidth="2.5" filter="url(#professionalGlow)" opacity="0.7" />
              <line x1="50%" y1="50%" x2="2%" y2="73%" stroke="url(#lineGradient)" strokeWidth="2.5" filter="url(#professionalGlow)" opacity="0.7" />
              <line x1="50%" y1="50%" x2="2%" y2="27%" stroke="url(#lineGradient)" strokeWidth="2.5" filter="url(#professionalGlow)" opacity="0.7" />
              <line x1="50%" y1="50%" x2="15%" y2="9%" stroke="url(#lineGradient)" strokeWidth="2.5" filter="url(#professionalGlow)" opacity="0.7" />
            </svg>

            {/* Central Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-8 bg-gradient-to-r from-astronova-cyan/20 via-astronova-purple/20 to-astronova-cyan/20 blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute -inset-4 bg-astronova-cyan/10 blur-2xl animate-pulse" style={{ animationDuration: '3s' }}></div>
                <div className="absolute -inset-2 rounded-full border-2 border-transparent bg-gradient-to-r from-astronova-cyan via-astronova-purple to-astronova-cyan animate-spin-slow opacity-30" style={{ padding: '2px' }}></div>
                
                <div className="relative bg-gradient-to-br from-[#0a1929] via-[#0d2137] to-[#0a1929] p-16 md:p-20 rounded-full border-4 border-astronova-cyan/30 shadow-[0_0_100px_rgba(0,212,255,0.3)] hover:border-astronova-cyan/60 hover:shadow-[0_0_150px_rgba(0,212,255,0.5)] transition-all duration-700 hover:scale-105 backdrop-blur-xl">
                  <div className="text-center">
                    <div className="mb-6 relative">
                      <div className="absolute inset-0 bg-astronova-cyan/20 blur-2xl rounded-full"></div>
                      <img 
                        src="/astronova-logo.jpeg" 
                        alt="AstraNova" 
                        className="relative h-28 md:h-32 w-28 md:w-32 object-cover rounded-3xl mx-auto animate-pulse-glow shadow-2xl ring-4 ring-astronova-cyan/30"
                      />
                    </div>
                    
                    <h3 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-wider" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                      ASTRONOVA
                    </h3>
                    
                    <div className="relative inline-block mb-4">
                      <p className="text-astronova-cyan text-xl md:text-2xl font-bold tracking-[0.4em] uppercase">
                        GROUP
                      </p>
                      <div className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-astronova-cyan to-transparent animate-pulse"></div>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-center space-x-4">
                      <div className="h-1 w-16 bg-gradient-to-r from-transparent to-astronova-cyan rounded-full"></div>
                      <div className="relative">
                        <div className="h-3 w-3 bg-astronova-cyan rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 bg-astronova-cyan rounded-full blur-md animate-pulse"></div>
                      </div>
                      <div className="h-1 w-16 bg-gradient-to-l from-transparent to-astronova-cyan rounded-full"></div>
                    </div>
                    
                    <div className="mt-8 pt-6 border-t border-astronova-cyan/20">
                      <p className="text-white/40 text-sm uppercase tracking-[0.2em] font-semibold">
                        10 Companies • One Vision
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All 10 Company Cards */}
            <div className="absolute" style={{ top: '2%', left: '50%', transform: 'translateX(-50%) rotateX(8deg)' }}>
              <CompanyCard3D name="NovaTech Digital" subtitle="DIGITAL SOLUTIONS" icon="NT" delay="0.5s" />
            </div>
            <div className="absolute" style={{ top: '9%', right: '2%', transform: 'rotateX(8deg) rotateY(-5deg)' }}>
              <CompanyCard3D name="Astra Design Studio" subtitle="CREATIVE DESIGN" icon="AD" delay="0.6s" />
            </div>
            <div className="absolute" style={{ top: '27%', right: '-1%', transform: 'rotateX(5deg) rotateY(-8deg)' }}>
              <CompanyCard3D name="Zenith Constructions" subtitle="CONSTRUCTION" icon="ZC" delay="0.7s" />
            </div>
            <div className="absolute" style={{ bottom: '27%', right: '-1%', transform: 'rotateX(-5deg) rotateY(-8deg)' }}>
              <CompanyCard3D name="Apex Smart Homes" subtitle="SMART TECHNOLOGY" icon="SH" delay="0.8s" />
            </div>
            <div className="absolute" style={{ bottom: '9%', right: '2%', transform: 'rotateX(-8deg) rotateY(-5deg)' }}>
              <CompanyCard3D name="Lumina Interiors" subtitle="INTERIOR DESIGN" icon="LI" delay="0.9s" />
            </div>
            <div className="absolute" style={{ bottom: '2%', left: '50%', transform: 'translateX(-50%) rotateX(-8deg)' }}>
              <CompanyCard3D name="SkyCore Media" subtitle="DIGITAL MARKETING" icon="SM" delay="1s" />
            </div>
            <div className="absolute" style={{ bottom: '9%', left: '2%', transform: 'rotateX(-8deg) rotateY(5deg)' }}>
              <CompanyCard3D name="Helios Architects" subtitle="ARCHITECTURE" icon="HA" delay="1.1s" />
            </div>
            <div className="absolute" style={{ bottom: '27%', left: '-1%', transform: 'rotateX(-5deg) rotateY(8deg)' }}>
              <CompanyCard3D name="TerraForm Landscapes" subtitle="LANDSCAPE DESIGN" icon="TL" delay="1.2s" />
            </div>
            <div className="absolute" style={{ top: '27%', left: '-1%', transform: 'rotateX(5deg) rotateY(8deg)' }}>
              <CompanyCard3D name="Orbit InfraWorks" subtitle="INFRASTRUCTURE" icon="OI" delay="1.3s" />
            </div>
            <div className="absolute" style={{ top: '9%', left: '2%', transform: 'rotateX(8deg) rotateY(5deg)' }}>
              <CompanyCard3D name="NovaBuild Projects" subtitle="PROJECT MANAGEMENT" icon="NB" delay="1.4s" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative z-10 py-10 sm:py-12 md:py-14 lg:py-16 bg-gradient-to-r from-astronova-purple/80 to-astronova-pink/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-white/90 mb-5 sm:mb-6 md:mb-8 px-2 sm:px-4">
            Discover how our specialized companies work together to deliver excellence
          </p>
          <Link to="/companies">
            <button className="bg-white text-astronova-purple px-5 xs:px-6 sm:px-8 py-2.5 xs:py-3 rounded-full font-bold text-sm xs:text-base md:text-lg hover:bg-astronova-cyan hover:text-white transition shadow-lg active:scale-95 sm:hover:scale-105">
              View All Companies
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;