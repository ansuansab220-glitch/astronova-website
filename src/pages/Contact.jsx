import { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane, FaCheckCircle, FaClock, FaLinkedin, FaTwitter, FaQuestionCircle, FaChevronDown, FaChevronUp, FaHeadset, FaCalendarAlt, FaGlobe } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success
  const [focusedField, setFocusedField] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);

  // TODO: Update with your actual contact information
  const contactInfo = {
    phone: '+1234567890',
    phoneDisplay: '+1 (234) 567-890',
    email: 'info@astronovagroup.com',
    whatsapp: '+1234567890',
    address: '123 Business Avenue, Tech District, Innovation City, 12345',
    supportEmail: 'support@astronovagroup.com',
    salesEmail: 'sales@astronovagroup.com'
  };

  const services = [
    'Digital Solutions',
    'Creative & Design',
    'Construction & Infrastructure',
    'Smart Home Automation',
    'Marketing & Media',
    'Architecture & Planning',
    'Other / Consultation'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Not sure yet'
  ];

  const faqs = [
    {
      question: 'What is your typical response time?',
      answer: 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly or use WhatsApp for immediate assistance.'
    },
    {
      question: 'Do you offer free consultations?',
      answer: 'Yes! We offer a complimentary 30-minute consultation to discuss your project requirements and how we can help. Contact us to schedule your free consultation.'
    },
    {
      question: 'Can you handle projects across multiple services?',
      answer: 'Absolutely! One of our key advantages is the ability to provide integrated solutions across digital, design, and construction services through our 10 specialized companies.'
    },
    {
      question: 'What is your project timeline?',
      answer: 'Project timelines vary based on scope and complexity. After our initial consultation, we provide a detailed timeline and milestones specific to your project requirements.'
    },
    {
      question: 'Do you work with clients internationally?',
      answer: 'Yes, we work with clients globally. While our headquarters is local, we have experience delivering projects for international clients across various time zones.'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // TODO: Integrate with your actual form submission API
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
        setFormStatus('idle');
      }, 4000);
    }, 1500);
  };

  const handleCall = () => window.location.href = `tel:${contactInfo.phone}`;
  const handleEmail = () => window.location.href = `mailto:${contactInfo.email}`;
  const handleWhatsApp = () => window.open(`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`, '_blank');

  useEffect(() => {
    // Animate contact cards on load
    const cards = document.querySelectorAll('.contact-card, .faq-item');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-in');
      }, index * 100);
    });
  }, []);

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-astronova-dark-blue transition-colors">
      
      {/* Hero Section - MOBILE OPTIMIZED */}
      <section className="relative bg-gradient-to-br from-astronova-blue via-astronova-purple to-astronova-pink py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                                   radial-gradient(circle at 75% 75%, white 2px, transparent 2px)`,
                 backgroundSize: '40px 40px sm:60px sm:60px'
               }}>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-astronova-cyan/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <FaClock className="text-astronova-cyan" />
            <span className="hidden xs:inline">Available Monday - Saturday | Response within 24 hours</span>
            <span className="xs:hidden">24h Response Time</span>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Let's Start a <span className="text-astronova-cyan">Conversation</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            Whether you have a project in mind or just want to explore possibilities, 
            we're here to help bring your vision to life
          </p>

          {/* Quick Contact Stats - MOBILE OPTIMIZED */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24h</div>
              <div className="text-white/80 text-xs sm:text-sm">Response Time</div>
            </div>
            <div className="w-px h-10 sm:h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-white/80 text-xs sm:text-sm">Happy Clients</div>
            </div>
            <div className="w-px h-10 sm:h-12 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-white/80 text-xs sm:text-sm">WhatsApp Support</div>
            </div>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0,50 C360,80 720,20 1080,50 C1440,80 1440,100 0,100 Z" 
                  className="fill-white dark:fill-astronova-dark-blue"/>
          </svg>
        </div>
      </section>

      {/* Main Contact Section - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-astronova-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
            
            {/* Left Column - Contact Methods (2 cols on desktop) */}
            <div className="lg:col-span-2 space-y-4 sm:space-y-6">
              
              {/* Section Header */}
              <div className="mb-6 sm:mb-8">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                  Get in Touch
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white/70">
                  Choose your preferred way to reach us
                </p>
              </div>

              {/* Email Card - MOBILE OPTIMIZED */}
              <div className="contact-card opacity-0 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-astronova-blue/5 to-astronova-cyan/5 dark:from-astronova-blue/10 dark:to-astronova-cyan/10 group-hover:from-astronova-blue/10 group-hover:to-astronova-cyan/10 transition-all"></div>
                <div className="relative bg-white dark:bg-white/5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-white/10 group-hover:border-astronova-cyan dark:group-hover:border-astronova-cyan transition-all shadow-md group-hover:shadow-xl">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-astronova-blue to-astronova-cyan rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <FaEnvelope className="text-white text-base sm:text-lg md:text-xl" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">Email Us</h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-white/60 mb-2">Send us a detailed message</p>
                      <div className="space-y-1">
                        <a href={`mailto:${contactInfo.email}`} 
                           className="block text-xs sm:text-sm text-astronova-blue dark:text-astronova-cyan hover:underline font-medium break-all">
                          General: {contactInfo.email}
                        </a>
                        <a href={`mailto:${contactInfo.salesEmail}`} 
                           className="block text-xs sm:text-sm text-astronova-blue dark:text-astronova-cyan hover:underline font-medium break-all">
                          Sales: {contactInfo.salesEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={handleEmail} 
                    className="w-full bg-gradient-to-r from-astronova-blue to-astronova-cyan text-white px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn">
                    <FaEnvelope />
                    <span>Send Email</span>
                    <FaPaperPlane className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Phone Card - MOBILE OPTIMIZED */}
              <div className="contact-card opacity-0 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-astronova-purple/5 to-astronova-pink/5 dark:from-astronova-purple/10 dark:to-astronova-pink/10 group-hover:from-astronova-purple/10 group-hover:to-astronova-pink/10 transition-all"></div>
                <div className="relative bg-white dark:bg-white/5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-white/10 group-hover:border-astronova-purple dark:group-hover:border-astronova-purple transition-all shadow-md group-hover:shadow-xl">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-astronova-purple to-astronova-pink rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <FaPhone className="text-white text-base sm:text-lg md:text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">Call Us</h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-white/60 mb-2">Speak with our team directly</p>
                      <a href={`tel:${contactInfo.phone}`} 
                         className="text-astronova-purple hover:underline font-medium text-base sm:text-lg">
                        {contactInfo.phoneDisplay}
                      </a>
                      <p className="text-[10px] sm:text-xs text-gray-500 dark:text-white/50 mt-1">
                        Mon-Fri: 9AM-6PM | Sat: 10AM-4PM
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={handleCall} 
                    className="w-full bg-gradient-to-r from-astronova-purple to-astronova-pink text-white px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn">
                    <FaPhone />
                    <span>Call Now</span>
                    <FaPaperPlane className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* WhatsApp Card - MOBILE OPTIMIZED */}
              <div className="contact-card opacity-0 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-500/10 dark:to-emerald-500/10 group-hover:from-green-100 group-hover:to-emerald-100 dark:group-hover:from-green-500/20 dark:group-hover:to-emerald-500/20 transition-all"></div>
                <div className="relative bg-white dark:bg-white/5 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-white/10 group-hover:border-green-500 dark:group-hover:border-green-500 transition-all shadow-md group-hover:shadow-xl">
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <FaWhatsapp className="text-white text-base sm:text-lg md:text-xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">WhatsApp</h3>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-white/60 mb-2">Quick chat and instant replies</p>
                      <span className="text-green-600 dark:text-green-400 font-medium text-sm sm:text-base">
                        {contactInfo.phoneDisplay}
                      </span>
                      <div className="mt-2 inline-flex items-center gap-1 px-2 py-1 bg-green-100 dark:bg-green-500/20 rounded-full">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] sm:text-xs text-green-700 dark:text-green-400 font-medium">Available 24/7</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={handleWhatsApp} 
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn">
                    <FaWhatsapp />
                    <span>Chat on WhatsApp</span>
                    <FaPaperPlane className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Location Card - MOBILE OPTIMIZED */}
              <div className="contact-card opacity-0 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-white/10">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-astronova-pink to-astronova-gold rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    <FaMapMarkerAlt className="text-white text-base sm:text-lg md:text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">Visit Our Office</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 leading-relaxed">
                      {contactInfo.address}
                    </p>
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-300 dark:border-white/20">
                      <div className="flex items-center gap-2 mb-2">
                        <FaClock className="text-astronova-blue dark:text-astronova-cyan text-sm" />
                        <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-white/80">
                          Office Hours:
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 ml-5 sm:ml-6">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Schedule Meeting Card - MOBILE OPTIMIZED */}
              <div className="contact-card opacity-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-500/10 dark:to-indigo-500/10 p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl border-2 border-blue-200 dark:border-blue-500/30">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                    <FaCalendarAlt className="text-white text-base sm:text-lg md:text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2">Schedule a Meeting</h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 mb-3 sm:mb-4">
                      Book a free 30-minute consultation with our team
                    </p>
                    <button className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all text-xs sm:text-sm">
                      <FaCalendarAlt />
                      <span>Book Now</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Social Links - MOBILE OPTIMIZED */}
              <div className="contact-card opacity-0 pt-4 sm:pt-6">
                <h3 className="text-xs sm:text-sm font-semibold text-gray-600 dark:text-white/60 uppercase tracking-wide mb-3 sm:mb-4">
                  Connect With Us
                </h3>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
                    <FaLinkedin className="text-lg sm:text-xl" />
                  </a>
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-sky-400 to-sky-500 rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
                    <FaTwitter className="text-lg sm:text-xl" />
                  </a>
                  <a href="#" className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-astronova-blue to-astronova-purple rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform shadow-md">
                    <FaGlobe className="text-lg sm:text-xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form (3 cols on desktop) - MOBILE OPTIMIZED */}
            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-24">
                <div className="relative">
                  {/* Form Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-astronova-purple/20 to-astronova-pink/20 dark:from-astronova-purple/10 dark:to-astronova-pink/10 rounded-2xl sm:rounded-3xl blur-2xl"></div>
                  
                  {/* Main Form Container */}
                  <div className="relative bg-white dark:bg-white/5 p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border-2 border-gray-200 dark:border-white/10 shadow-2xl">
                    <div className="mb-6 sm:mb-8">
                      <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                        Send a Message
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white/70">
                        Fill out the form below and we'll get back to you shortly
                      </p>
                    </div>

                    {formStatus === 'success' ? (
                      // Success State - MOBILE OPTIMIZED
                      <div className="text-center py-12 sm:py-16">
                        <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full mb-4 sm:mb-6 animate-bounce">
                          <FaCheckCircle className="text-white text-4xl sm:text-5xl" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-base sm:text-lg text-gray-600 dark:text-white/70 mb-2">
                          Thank you for reaching out to AstraNova Group.
                        </p>
                        <p className="text-sm sm:text-base text-gray-500 dark:text-white/60">
                          Our team will respond within 24 hours.
                        </p>
                      </div>
                    ) : (
                      // Form - MOBILE OPTIMIZED
                      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                        {/* Name Field */}
                        <div className="relative">
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-white/80 mb-2 uppercase tracking-wide">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 bg-white dark:bg-astronova-dark-blue text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none transition-all ${
                              focusedField === 'name'
                                ? 'border-astronova-cyan ring-4 ring-astronova-cyan/20'
                                : 'border-gray-300 dark:border-white/20'
                            }`}
                            placeholder="Enter your full name"
                          />
                        </div>

                        {/* Email and Company Grid - MOBILE OPTIMIZED */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <div className="relative">
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-white/80 mb-2 uppercase tracking-wide">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('email')}
                              onBlur={() => setFocusedField(null)}
                              required
                              className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 bg-white dark:bg-astronova-dark-blue text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none transition-all ${
                                focusedField === 'email'
                                  ? 'border-astronova-cyan ring-4 ring-astronova-cyan/20'
                                  : 'border-gray-300 dark:border-white/20'
                              }`}
                              placeholder="your.email@company.com"
                            />
                          </div>

                          <div className="relative">
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-white/80 mb-2 uppercase tracking-wide">
                              Company Name
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('company')}
                              onBlur={() => setFocusedField(null)}
                              className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 bg-white dark:bg-astronova-dark-blue text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none transition-all ${
                                focusedField === 'company'
                                  ? 'border-astronova-cyan ring-4 ring-astronova-cyan/20'
                                  : 'border-gray-300 dark:border-white/20'
                              }`}
                              placeholder="Company or Organization Name"
                            />
                          </div>
                        </div>

                        {/* Service and Budget Grid - MOBILE OPTIMIZED */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                          <div className="relative">
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-white/80 mb-2 uppercase tracking-wide">
                              Service Interested In
                            </label>
                            <select
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('service')}
                              onBlur={() => setFocusedField(null)}
                              className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 bg-white dark:bg-astronova-dark-blue text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none transition-all appearance-none cursor-pointer ${
                                focusedField === 'service'
                                  ? 'border-astronova-cyan ring-4 ring-astronova-cyan/20'
                                  : 'border-gray-300 dark:border-white/20'
                              }`}
                            >
                              <option value="">Select a service...</option>
                              {services.map((service, idx) => (
                                <option key={idx} value={service}>{service}</option>
                              ))}
                            </select>
                          </div>

                          <div className="relative">
                            <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-white/80 mb-2 uppercase tracking-wide">
                              Budget Range
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              onFocus={() => setFocusedField('budget')}
                              onBlur={() => setFocusedField(null)}
                              className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 bg-white dark:bg-astronova-dark-blue text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none transition-all appearance-none cursor-pointer ${
                                focusedField === 'budget'
                                  ? 'border-astronova-cyan ring-4 ring-astronova-cyan/20'
                                  : 'border-gray-300 dark:border-white/20'
                              }`}
                            >
                              <option value="">Select budget range...</option>
                              {budgetRanges.map((budget, idx) => (
                                <option key={idx} value={budget}>{budget}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        {/* Message Field - MOBILE OPTIMIZED */}
                        <div className="relative">
                          <label className="block text-xs sm:text-sm font-semibold text-gray-700 dark:text-white/80 mb-2 uppercase tracking-wide">
                            Your Message *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('message')}
                            onBlur={() => setFocusedField(null)}
                            required
                            rows="5"
                            className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg sm:rounded-xl border-2 bg-white dark:bg-astronova-dark-blue text-gray-900 dark:text-white text-sm sm:text-base focus:outline-none transition-all resize-none ${
                              focusedField === 'message'
                                ? 'border-astronova-cyan ring-4 ring-astronova-cyan/20'
                                : 'border-gray-300 dark:border-white/20'
                            }`}
                            placeholder="Describe your project goals, timeline, budget range, and any specific requirements. The more details you provide, the better we can assist you."
                          ></textarea>
                          <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 text-xs sm:text-sm text-gray-400 dark:text-white/40">
                            {formData.message.length} characters
                          </div>
                        </div>

                        {/* Submit Button - MOBILE OPTIMIZED */}
                        <button
                          type="submit"
                          disabled={formStatus === 'submitting'}
                          className={`w-full bg-gradient-to-r from-astronova-purple via-astronova-pink to-astronova-blue text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg transition-all shadow-xl flex items-center justify-center gap-2 sm:gap-3 group ${
                            formStatus === 'submitting'
                              ? 'opacity-75 cursor-not-allowed'
                              : 'hover:shadow-2xl active:scale-95 sm:hover:scale-105'
                          }`}
                        >
                          {formStatus === 'submitting' ? (
                            <>
                              <div className="w-5 h-5 sm:w-6 sm:h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                              <span>Send Message</span>
                            </>
                          )}
                        </button>

                        <p className="text-xs sm:text-sm text-gray-500 dark:text-white/50 text-center">
                          By submitting this form, you agree to our privacy policy
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50 dark:bg-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-astronova-blue to-astronova-purple rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
              <FaQuestionCircle className="text-white text-2xl sm:text-3xl" />
            </div>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white/70 px-4">
              Quick answers to common questions
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item opacity-0" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="bg-white dark:bg-white/5 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-white/10 overflow-hidden hover:border-astronova-cyan dark:hover:border-astronova-cyan transition-all">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                  >
                    <span className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </span>
                    {expandedFaq === index ? (
                      <FaChevronUp className="text-astronova-blue dark:text-astronova-cyan flex-shrink-0 text-sm sm:text-base" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0 text-sm sm:text-base" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-2">
                      <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-white/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm sm:text-base text-gray-600 dark:text-white/70 mb-3 sm:mb-4">
              Still have questions?
            </p>
            <button className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-astronova-blue to-astronova-purple text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm sm:text-base">
              <FaHeadset />
              <span>Contact Support</span>
            </button>
          </div>
        </div>
      </section>

      {/* Map Section - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 bg-white dark:bg-astronova-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-6 sm:mb-8 text-center">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Find Us Here
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-white/70">
              Visit our office or explore the area
            </p>
          </div>
          <div className="bg-gray-200 dark:bg-white/10 rounded-2xl sm:rounded-3xl overflow-hidden h-64 sm:h-80 md:h-96 flex items-center justify-center border-2 border-gray-300 dark:border-white/10">
            <div className="text-center px-4">
              <FaMapMarkerAlt className="text-4xl sm:text-5xl md:text-6xl text-gray-400 dark:text-white/30 mx-auto mb-3 sm:mb-4" />
              <p className="text-gray-600 dark:text-white/60 text-base sm:text-lg font-semibold mb-2">
                Interactive Map Placeholder
              </p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-white/40">
                Integrate Google Maps or similar service here
              </p>
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

        .contact-card.animate-in,
        .faq-item.animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Contact;