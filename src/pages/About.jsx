import { useEffect, useRef, useState } from 'react';
import { FaRocket, FaUsers, FaAward, FaChartLine, FaHandshake, FaLightbulb, FaStar, FaQuoteLeft } from 'react-icons/fa';

function About() {
  const statsRef = useRef(null);
  const [activeYear, setActiveYear] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.stat-item, .timeline-item, .team-card, .value-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // TODO: Update these milestones with your company's actual history and achievements
  const milestones = [
    {
      year: '2015',
      title: 'Foundation',
      description: 'AstraNova Group was established with a vision to revolutionize the integration of digital, design, and construction services.',
      icon: <FaRocket />
    },
    {
      year: '2017',
      title: 'Expansion',
      description: 'Grew to 5 specialized companies, expanding our service offerings across multiple industries.',
      icon: <FaChartLine />
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched digital-first initiatives, embracing cutting-edge technology and innovation.',
      icon: <FaLightbulb />
    },
    {
      year: '2023',
      title: 'Complete Ecosystem',
      description: 'Reached our current milestone of 10 specialized companies, creating a comprehensive service ecosystem.',
      icon: <FaAward />
    },
    {
      year: '2025',
      title: 'Industry Leadership',
      description: 'Recognized as a leader in integrated solutions, serving 500+ clients worldwide.',
      icon: <FaStar />
    }
  ];

  // TODO: Replace with your actual leadership team members
  const leadership = [
    {
      name: 'Chief Executive Officer', // TODO: Replace with actual CEO name
      role: 'Leadership & Strategy',
      bio: 'Visionary leader with 20+ years in technology and business innovation', // TODO: Update with actual bio
      image: '👔'
    },
    {
      name: 'Chief Technology Officer', // TODO: Replace with actual CTO name
      role: 'Technology & Innovation',
      bio: 'Expert in digital transformation and enterprise architecture', // TODO: Update with actual bio
      image: '💻'
    },
    {
      name: 'Chief Creative Officer', // TODO: Replace with actual CCO name
      role: 'Design & Creativity',
      bio: 'Award-winning designer with a passion for innovative solutions', // TODO: Update with actual bio
      image: '🎨'
    },
    {
      name: 'Chief Operations Officer', // TODO: Replace with actual COO name
      role: 'Operations & Delivery',
      bio: 'Specialist in construction management and operational excellence', // TODO: Update with actual bio
      image: '⚙️'
    }
  ];

  // TODO: Replace with actual client testimonials (get permission first)
  const testimonials = [
    {
      quote: "AstraNova Group transformed our entire digital infrastructure. Their integrated approach saved us time and delivered exceptional results.", // TODO: Replace with actual client testimonial
      author: "Technology Company CEO", // TODO: Replace with actual client name
      position: "Software & Digital Services Industry", // TODO: Replace with actual company/position
      rating: 5
    },
    {
      quote: "Working with multiple companies under one umbrella made our construction project seamless. Highly professional team!", // TODO: Replace with actual client testimonial
      author: "Development Director", // TODO: Replace with actual client name
      position: "Real Estate & Construction Sector", // TODO: Replace with actual company/position
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-astronova-dark-blue transition-colors">
      
      {/* Hero Section - MOBILE OPTIMIZED */}
      <section className="relative bg-gradient-to-br from-astronova-blue via-astronova-purple to-astronova-pink py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-astronova-cyan rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px sm:40px sm:40px'
            }}></div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium mb-2 sm:mb-4">
              <FaAward className="text-astronova-cyan text-sm sm:text-base" />
              <span className="hidden xs:inline">Award-Winning Integrated Solutions Since 2015</span>
              <span className="xs:hidden">Since 2015</span>
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
              About <span className="text-astronova-cyan">AstraNova</span> Group
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed px-4 sm:px-6">
              Where digital innovation meets creative excellence and construction expertise. 
              A unified ecosystem of 10 specialized companies delivering comprehensive solutions.
            </p>
            
            {/* Quick Stats - MOBILE OPTIMIZED */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12 px-4">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">10+</div>
                <div className="text-white/80 text-xs sm:text-sm">Years of Excellence</div>
              </div>
              <div className="w-px h-12 sm:h-16 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-white/80 text-xs sm:text-sm">Projects Delivered</div>
              </div>
              <div className="w-px h-12 sm:h-16 bg-white/30"></div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
                <div className="text-white/80 text-xs sm:text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,100 L0,100 Z" 
                  className="fill-white dark:fill-astronova-dark-blue"/>
          </svg>
        </div>
      </section>

      {/* Mission Statement Section - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-astronova-dark-blue">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-astronova-blue to-astronova-purple rounded-2xl mb-6 sm:mb-8 shadow-xl">
            <FaRocket className="text-white text-2xl sm:text-3xl" />
          </div>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 px-2">
            Our Mission
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-white/80 leading-relaxed mb-6 sm:mb-8 px-4">
            To empower businesses through integrated solutions that seamlessly blend digital innovation, 
            creative design, and construction excellence—transforming visions into reality with 
            unparalleled expertise and dedication.
          </p>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-astronova-blue via-astronova-purple to-astronova-pink mx-auto"></div>
        </div>
      </section>

      {/* Our Story Section - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
            
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-3 sm:space-y-4">
                <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Our <span className="text-astronova-blue dark:text-astronova-cyan">Vision</span>
                </h2>
                <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-astronova-blue to-astronova-purple"></div>
              </div>
              
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 dark:text-white/80 leading-relaxed">
                <p>
                  AstraNova Group represents a unified vision of excellence across multiple industries. 
                  We bring together <strong className="text-astronova-blue dark:text-astronova-cyan">10 specialized companies</strong>, 
                  each a leader in their field, working in harmony to deliver comprehensive solutions that transform businesses.
                </p>
                
                <p>
                  Our unique integrated approach means you get the expertise of multiple companies working seamlessly together—eliminating 
                  communication gaps, reducing project timelines, and ensuring consistent quality across all services.
                </p>
                
                <p className="text-astronova-purple dark:text-astronova-pink font-medium text-base sm:text-lg md:text-xl">
                  One Group. Multiple Expertise. Infinite Possibilities.
                </p>
              </div>
            </div>

            {/* Core Values Cards - MOBILE OPTIMIZED */}
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4 sm:gap-6">
              <div className="value-card bg-gradient-to-br from-astronova-blue/10 to-astronova-cyan/10 dark:from-astronova-blue/20 dark:to-astronova-cyan/20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-astronova-blue/20 dark:border-astronova-cyan/30 hover:scale-105 transition-transform duration-300 opacity-0">
                <FaLightbulb className="text-3xl sm:text-4xl text-astronova-blue dark:text-astronova-cyan mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Innovation</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                  Pushing boundaries with cutting-edge technology and creative solutions
                </p>
              </div>

              <div className="value-card bg-gradient-to-br from-astronova-purple/10 to-astronova-pink/10 dark:from-astronova-purple/20 dark:to-astronova-pink/20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-astronova-purple/20 dark:border-astronova-pink/30 hover:scale-105 transition-transform duration-300 opacity-0">
                <FaHandshake className="text-3xl sm:text-4xl text-astronova-purple dark:text-astronova-pink mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Collaboration</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                  Working together to achieve exceptional results for our clients
                </p>
              </div>

              <div className="value-card bg-gradient-to-br from-astronova-cyan/10 to-astronova-blue/10 dark:from-astronova-cyan/20 dark:to-astronova-blue/20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-astronova-cyan/20 dark:border-astronova-blue/30 hover:scale-105 transition-transform duration-300 opacity-0">
                <FaAward className="text-3xl sm:text-4xl text-astronova-cyan dark:text-astronova-blue mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Excellence</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                  Delivering quality that exceeds expectations in every project
                </p>
              </div>

              <div className="value-card bg-gradient-to-br from-astronova-pink/10 to-astronova-gold/10 dark:from-astronova-pink/20 dark:to-astronova-gold/20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-astronova-pink/20 dark:border-astronova-gold/30 hover:scale-105 transition-transform duration-300 opacity-0">
                <FaUsers className="text-3xl sm:text-4xl text-astronova-pink dark:text-astronova-gold mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Client-First</h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                  Your success is our priority, always putting clients at the center
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-astronova-dark-blue">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Our <span className="text-astronova-purple dark:text-astronova-pink">Journey</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto px-4">
              A decade of growth, innovation, and excellence
            </p>
          </div>

          {/* Timeline - MOBILE OPTIMIZED */}
          <div className="relative">
            {/* Center line - hidden on mobile, visible on tablet+ */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-astronova-blue via-astronova-purple to-astronova-pink"></div>

            <div className="space-y-8 sm:space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`timeline-item opacity-0 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card - MOBILE OPTIMIZED */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/10 p-4 sm:p-6 rounded-2xl border-2 border-gray-200 dark:border-white/10 hover:border-astronova-cyan dark:hover:border-astronova-cyan transition-all shadow-lg hover:shadow-xl">
                      <div className="flex items-center gap-3 mb-3 md:hidden">
                        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-astronova-purple to-astronova-pink rounded-xl flex items-center justify-center text-white shadow-lg">
                          {milestone.icon}
                        </div>
                        <span className="text-2xl sm:text-3xl font-black text-astronova-blue dark:text-astronova-cyan">
                          {milestone.year}
                        </span>
                      </div>
                      <span className="hidden md:block text-3xl font-black text-astronova-blue dark:text-astronova-cyan mb-2">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon (desktop only) */}
                  <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-gradient-to-br from-astronova-purple to-astronova-pink rounded-2xl items-center justify-center text-white text-2xl shadow-xl z-10">
                    {milestone.icon}
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Leadership <span className="text-astronova-blue dark:text-astronova-cyan">Team</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto px-4">
              Visionary leaders driving innovation and excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {leadership.map((leader, index) => (
              <div 
                key={index}
                className="team-card opacity-0 bg-white dark:bg-white/5 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 dark:border-white/10 hover:border-astronova-cyan dark:hover:border-astronova-cyan transition-all hover:shadow-2xl hover:-translate-y-2 duration-300"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-astronova-blue to-astronova-purple rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 text-4xl sm:text-5xl shadow-xl">
                    {leader.image}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-astronova-purple dark:text-astronova-pink font-semibold mb-3 sm:mb-4">
                    {leader.role}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white dark:bg-astronova-dark-blue">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Client <span className="text-astronova-purple dark:text-astronova-pink">Testimonials</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto px-4">
              Hear what our clients say about working with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-gray-200 dark:border-white/10 hover:border-astronova-cyan dark:hover:border-astronova-cyan transition-all shadow-lg hover:shadow-2xl"
              >
                <div className="flex items-center gap-1 mb-4 sm:mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-astronova-gold text-base sm:text-lg" />
                  ))}
                </div>
                <FaQuoteLeft className="text-2xl sm:text-3xl text-astronova-blue/20 dark:text-astronova-cyan/20 mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base text-gray-700 dark:text-white/80 leading-relaxed mb-4 sm:mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="border-t-2 border-gray-200 dark:border-white/10 pt-4">
                  <p className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-white/60">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The AstraNova Difference - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-astronova-blue via-astronova-purple to-astronova-pink relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px sm:40px sm:40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl font-bold text-white mb-3 sm:mb-4">
              The AstraNova <span className="text-astronova-cyan">Difference</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4">
              What sets us apart in the industry
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <FaUsers className="text-white text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Integrated Approach</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                10 companies working as one unified team, ensuring seamless communication and consistent quality across all services.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <FaLightbulb className="text-white text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Cutting-edge technology and creative solutions that keep you ahead of the competition in a rapidly evolving market.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <FaAward className="text-white text-2xl sm:text-3xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">Proven Excellence</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                500+ successful projects, 98% client satisfaction, and a decade of industry leadership speak to our commitment to quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-astronova-blue/20 to-astronova-purple/20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            <div className="stat-item text-center opacity-0">
              <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 sm:mb-3">10</div>
              <div className="text-xs sm:text-sm md:text-base text-white/70 uppercase tracking-wider">Companies</div>
            </div>
            <div className="stat-item text-center opacity-0">
              <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 sm:mb-3">500+</div>
              <div className="text-xs sm:text-sm md:text-base text-white/70 uppercase tracking-wider">Projects</div>
            </div>
            <div className="stat-item text-center opacity-0">
              <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 sm:mb-3">10+</div>
              <div className="text-xs sm:text-sm md:text-base text-white/70 uppercase tracking-wider">Years</div>
            </div>
            <div className="stat-item text-center opacity-0">
              <div className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-white mb-2 sm:mb-3">98%</div>
              <div className="text-xs sm:text-sm md:text-base text-white/70 uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stat-item.animate-in,
        .timeline-item.animate-in,
        .team-card.animate-in,
        .value-card.animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .stat-item:nth-child(1).animate-in { animation-delay: 0.1s; }
        .stat-item:nth-child(2).animate-in { animation-delay: 0.2s; }
        .stat-item:nth-child(3).animate-in { animation-delay: 0.3s; }
        .stat-item:nth-child(4).animate-in { animation-delay: 0.4s; }
        
        .value-card:nth-child(1).animate-in { animation-delay: 0.1s; }
        .value-card:nth-child(2).animate-in { animation-delay: 0.2s; }
        .value-card:nth-child(3).animate-in { animation-delay: 0.3s; }
        .value-card:nth-child(4).animate-in { animation-delay: 0.4s; }
      `}</style>
    </div>
  );
}

export default About;