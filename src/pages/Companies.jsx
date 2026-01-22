import { useState, useEffect } from 'react';
import { FaSearch, FaTimes, FaArrowRight, FaLightbulb, FaRocket, FaBuilding, FaAward, FaCheckCircle, FaPhone, FaEnvelope, FaGlobe, FaUsers } from 'react-icons/fa';

function Companies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCompany, setHoveredCompany] = useState(null);

  // TODO: Update with your actual company information
  const companiesData = [
    {
      category: 'Digital Solutions',
      icon: <FaRocket />,
      gradient: 'from-astronova-blue to-astronova-cyan',
      description: 'Cutting-edge technology and digital innovation',
      companies: [
        { 
          name: 'NovaTech Digital', 
          description: 'Software development and digital solutions',
          tagline: 'Engineering Tomorrow\'s Technology',
          services: ['Custom Software', 'Web Apps', 'Mobile Apps', 'Cloud Solutions'],
          founded: '2015',
          employees: '50+',
          certifications: ['ISO 9001', 'Microsoft Partner'],
          contact: {
            phone: '+1 (234) 567-8901',
            email: 'info@novatech.com',
            website: 'novatech.com'
          },
          color: 'blue',
          bgGradient: 'from-astronova-blue/10 to-astronova-cyan/10'
        },
        { 
          name: 'Apex Smart Homes', 
          description: 'Smart home technology and automation',
          tagline: 'Intelligence in Every Corner',
          services: ['Home Automation', 'IoT Integration', 'Smart Security', 'Energy Management'],
          founded: '2017',
          employees: '30+',
          certifications: ['Smart Home Certified', 'IoT Specialist'],
          contact: {
            phone: '+1 (234) 567-8902',
            email: 'info@apexsmarthomes.com',
            website: 'apexsmarthomes.com'
          },
          color: 'cyan',
          bgGradient: 'from-astronova-cyan/10 to-astronova-blue/10'
        },
        { 
          name: 'SkyCore Media', 
          description: 'Digital marketing and media campaigns',
          tagline: 'Elevating Your Digital Presence',
          services: ['SEO', 'Social Media', 'Content Marketing', 'PPC Campaigns'],
          founded: '2016',
          employees: '40+',
          certifications: ['Google Partner', 'Meta Business Partner'],
          contact: {
            phone: '+1 (234) 567-8903',
            email: 'info@skycoremedia.com',
            website: 'skycoremedia.com'
          },
          color: 'purple',
          bgGradient: 'from-astronova-purple/10 to-astronova-pink/10'
        },
      ]
    },
    {
      category: 'Creative & Design',
      icon: <FaLightbulb />,
      gradient: 'from-astronova-purple to-astronova-pink',
      description: 'Innovative design and creative excellence',
      companies: [
        { 
          name: 'Astra Design Studio', 
          description: 'Brand identity and creative design',
          tagline: 'Where Vision Meets Design',
          services: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Print Design'],
          founded: '2015',
          employees: '25+',
          certifications: ['Adobe Certified', 'Design Award Winner'],
          contact: {
            phone: '+1 (234) 567-8904',
            email: 'info@astradesign.com',
            website: 'astradesign.com'
          },
          color: 'purple',
          bgGradient: 'from-astronova-purple/10 to-astronova-pink/10'
        },
        { 
          name: 'Lumina Interiors', 
          description: 'Interior design and fit-out solutions',
          tagline: 'Illuminating Spaces with Style',
          services: ['Residential Design', 'Commercial Fit-Out', '3D Visualization', 'Space Planning'],
          founded: '2016',
          employees: '35+',
          certifications: ['NCIDQ Certified', 'LEED Accredited'],
          contact: {
            phone: '+1 (234) 567-8905',
            email: 'info@luminainteriors.com',
            website: 'luminainteriors.com'
          },
          color: 'pink',
          bgGradient: 'from-astronova-pink/10 to-astronova-gold/10'
        },
        { 
          name: 'Helios Architects', 
          description: 'Architecture and space planning',
          tagline: 'Designing the Future, One Space at a Time',
          services: ['Architectural Design', 'Urban Planning', 'BIM Modeling', 'Project Management'],
          founded: '2015',
          employees: '45+',
          certifications: ['AIA Member', 'LEED AP'],
          contact: {
            phone: '+1 (234) 567-8906',
            email: 'info@heliosarchitects.com',
            website: 'heliosarchitects.com'
          },
          color: 'gold',
          bgGradient: 'from-astronova-gold/10 to-astronova-pink/10'
        },
        { 
          name: 'TerraForm Landscapes', 
          description: 'Landscape design and development',
          tagline: 'Sculpting Nature, Crafting Beauty',
          services: ['Landscape Architecture', 'Garden Design', 'Irrigation Systems', 'Outdoor Living'],
          founded: '2017',
          employees: '20+',
          certifications: ['ASLA Member', 'Sustainable Design Certified'],
          contact: {
            phone: '+1 (234) 567-8907',
            email: 'info@terraformlandscapes.com',
            website: 'terraformlandscapes.com'
          },
          color: 'cyan',
          bgGradient: 'from-astronova-cyan/10 to-astronova-blue/10'
        },
      ]
    },
    {
      category: 'Construction & Infrastructure',
      icon: <FaBuilding />,
      gradient: 'from-astronova-gold to-astronova-pink',
      description: 'Building excellence from foundation to finish',
      companies: [
        { 
          name: 'Zenith Constructions', 
          description: 'Civil and commercial construction',
          tagline: 'Building Tomorrow, Today',
          services: ['Commercial Building', 'Residential Projects', 'Renovation', 'Project Management'],
          founded: '2015',
          employees: '100+',
          certifications: ['ISO 45001', 'Green Building Certified'],
          contact: {
            phone: '+1 (234) 567-8908',
            email: 'info@zenithconstructions.com',
            website: 'zenithconstructions.com'
          },
          color: 'gold',
          bgGradient: 'from-astronova-gold/10 to-astronova-pink/10'
        },
        { 
          name: 'Orbit InfraWorks', 
          description: 'Infrastructure development',
          tagline: 'Engineering Tomorrow\'s Infrastructure',
          services: ['Road Construction', 'Bridge Engineering', 'Utilities', 'Site Development'],
          founded: '2016',
          employees: '75+',
          certifications: ['Heavy Construction License', 'Safety Excellence Award'],
          contact: {
            phone: '+1 (234) 567-8909',
            email: 'info@orbitinfraworks.com',
            website: 'orbitinfraworks.com'
          },
          color: 'blue',
          bgGradient: 'from-astronova-blue/10 to-astronova-purple/10'
        },
        { 
          name: 'NovaBuild Projects', 
          description: 'Project management and execution',
          tagline: 'Your Vision, Our Execution',
          services: ['Construction Management', 'Cost Estimation', 'Quality Control', 'Safety Management'],
          founded: '2017',
          employees: '40+',
          certifications: ['PMP Certified', 'OSHA Certified'],
          contact: {
            phone: '+1 (234) 567-8910',
            email: 'info@novabuildprojects.com',
            website: 'novabuildprojects.com'
          },
          color: 'purple',
          bgGradient: 'from-astronova-purple/10 to-astronova-blue/10'
        },
      ]
    }
  ];

  const allCompanies = companiesData.flatMap(cat => 
    cat.companies.map(company => ({ ...company, category: cat.category }))
  );

  const filteredCompanies = allCompanies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.services.some(service => service.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || company.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    const cards = document.querySelectorAll('.company-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('slide-in');
      }, index * 100);
    });
  }, [filteredCompanies, selectedCategory]);

  return (
    <div className="min-h-screen pt-16 bg-white dark:bg-astronova-dark-blue transition-colors">
      
      {/* Hero Section - MOBILE OPTIMIZED */}
      <section className="relative bg-gradient-to-br from-astronova-purple via-astronova-pink to-astronova-blue py-16 sm:py-20 md:py-24 lg:py-28 overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                 backgroundSize: '30px 30px sm:50px sm:50px'
               }}>
          </div>
        </div>

        {/* Floating orbs */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-astronova-cyan/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <FaAward className="text-astronova-cyan" />
            <span>Excellence Across Every Industry</span>
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Our <span className="text-astronova-cyan">Companies</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-2 sm:mb-4 px-4">10 Specialized Companies, One Unified Vision</p>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
            Explore our ecosystem of specialized companies, each a leader in their field, 
            working together to deliver comprehensive solutions.
          </p>
          
          {/* Quick Stats - MOBILE OPTIMIZED */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-8 sm:mt-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">350+</div>
              <div className="text-white/80 text-xs sm:text-sm">Team Members</div>
            </div>
            <div className="w-px h-12 sm:h-14 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-white/80 text-xs sm:text-sm">Certifications</div>
            </div>
            <div className="w-px h-12 sm:h-14 bg-white/30"></div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">3</div>
              <div className="text-white/80 text-xs sm:text-sm">Industries</div>
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0,50 C360,80 720,20 1080,50 C1440,80 1440,100 0,100 Z" 
                  className="fill-white dark:fill-astronova-dark-blue"/>
          </svg>
        </div>
      </section>

      {/* Industry Overview Section - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 bg-white dark:bg-astronova-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Our Industries
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-white/70 max-w-2xl mx-auto px-4">
              Three core sectors, united by excellence
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {companiesData.map((sector, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-white/5 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-gray-200 dark:border-white/10 hover:border-astronova-purple dark:hover:border-astronova-cyan transition-all hover:shadow-2xl hover:-translate-y-2 duration-300"
              >
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${sector.gradient} flex items-center justify-center text-white text-xl sm:text-2xl mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  {sector.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {sector.category}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 mb-3 sm:mb-4">
                  {sector.description}
                </p>
                <div className="text-xs sm:text-sm font-semibold text-astronova-purple dark:text-astronova-cyan">
                  {sector.companies.length} {sector.companies.length === 1 ? 'Company' : 'Companies'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter Section - MOBILE OPTIMIZED */}
      <section className="py-8 sm:py-12 bg-gray-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Search Bar - MOBILE OPTIMIZED */}
          <div className="relative max-w-3xl mx-auto mb-6 sm:mb-8">
            <FaSearch className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 text-gray-400 text-base sm:text-xl" />
            <input
              type="text"
              placeholder="Search companies, services, or industries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 sm:pl-16 pr-12 sm:pr-16 py-3 sm:py-5 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-800 dark:text-white text-sm sm:text-base md:text-lg focus:outline-none focus:border-astronova-cyan dark:focus:border-astronova-cyan focus:ring-4 focus:ring-astronova-cyan/20 transition-all shadow-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 text-gray-400 hover:text-astronova-pink transition-colors p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full"
              >
                <FaTimes className="text-base sm:text-xl" />
              </button>
            )}
          </div>

          {/* Category Filters - MOBILE OPTIMIZED */}
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-center mb-6 sm:mb-8">
            {['All', ...companiesData.map(cat => cat.category)].map((category) => {
              const categoryData = companiesData.find(c => c.category === category);
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`group relative px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl text-sm sm:text-base font-semibold transition-all transform hover:scale-105 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r ' + (categoryData?.gradient || 'from-astronova-blue to-astronova-purple') + ' text-white shadow-2xl scale-105'
                      : 'bg-white dark:bg-white/5 text-gray-700 dark:text-white border-2 border-gray-200 dark:border-white/10 hover:border-astronova-purple dark:hover:border-astronova-cyan shadow-md'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Results Count - MOBILE OPTIMIZED */}
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-sm sm:text-base text-gray-600 dark:text-white/70">
              Showing <span className="font-bold text-astronova-purple dark:text-astronova-cyan">{filteredCompanies.length}</span> {filteredCompanies.length === 1 ? 'company' : 'companies'}
              {searchQuery && <span> matching "<span className="font-semibold">{searchQuery}</span>"</span>}
            </p>
          </div>
        </div>
      </section>

      {/* Companies Grid - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 bg-white dark:bg-astronova-dark-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {filteredCompanies.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {filteredCompanies.map((company, index) => (
                <div
                  key={index}
                  className={`company-card opacity-0 group relative bg-gradient-to-br ${company.bgGradient} dark:from-white/5 dark:to-white/10 rounded-2xl sm:rounded-3xl border-2 border-gray-200 dark:border-white/10 hover:border-astronova-cyan dark:hover:border-astronova-cyan transition-all duration-500 overflow-hidden hover:shadow-2xl hover:-translate-y-1`}
                  onMouseEnter={() => setHoveredCompany(index)}
                  onMouseLeave={() => setHoveredCompany(null)}
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-astronova-cyan/0 to-astronova-purple/0 group-hover:from-astronova-cyan/5 group-hover:to-astronova-purple/5 transition-all duration-500"></div>
                  
                  <div className="relative p-6 sm:p-8">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-astronova-blue dark:group-hover:text-astronova-cyan transition-colors">
                          {company.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 dark:text-white/70 mb-2">
                          {company.description}
                        </p>
                        <p className="text-xs sm:text-sm italic text-astronova-purple dark:text-astronova-pink font-medium">
                          "{company.tagline}"
                        </p>
                      </div>
                    </div>

                    {/* Company Info - MOBILE OPTIMIZED */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b-2 border-gray-200 dark:border-white/10">
                      <div>
                        <p className="text-xs text-gray-500 dark:text-white/50 mb-1">Founded</p>
                        <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">{company.founded}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-white/50 mb-1">Team Size</p>
                        <p className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">{company.employees}</p>
                      </div>
                    </div>

                    {/* Services - MOBILE OPTIMIZED */}
                    <div className="mb-4 sm:mb-6">
                      <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-white/80 mb-2 sm:mb-3">Key Services</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {company.services.map((service, idx) => (
                          <span 
                            key={idx}
                            className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white dark:bg-white/10 text-xs sm:text-sm text-gray-700 dark:text-white rounded-lg border border-gray-200 dark:border-white/20 hover:border-astronova-cyan dark:hover:border-astronova-cyan hover:bg-astronova-cyan/10 transition-colors"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Certifications - MOBILE OPTIMIZED */}
                    <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b-2 border-gray-200 dark:border-white/10">
                      <p className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-white/80 mb-2 sm:mb-3">Certifications</p>
                      <div className="space-y-1.5 sm:space-y-2">
                        {company.certifications.map((cert, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <FaCheckCircle className="text-green-500 flex-shrink-0 text-sm sm:text-base" />
                            <span className="text-xs sm:text-sm text-gray-600 dark:text-white/70">{cert}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info - MOBILE OPTIMIZED */}
                    <div className="space-y-2 sm:space-y-3">
                      <a 
                        href={`tel:${company.contact.phone}`}
                        className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 dark:text-white/80 hover:text-astronova-blue dark:hover:text-astronova-cyan transition-colors group/link"
                      >
                        <FaPhone className="text-astronova-blue dark:text-astronova-cyan flex-shrink-0" />
                        <span className="group-hover/link:underline">{company.contact.phone}</span>
                      </a>
                      <a 
                        href={`mailto:${company.contact.email}`}
                        className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 dark:text-white/80 hover:text-astronova-blue dark:hover:text-astronova-cyan transition-colors group/link break-all"
                      >
                        <FaEnvelope className="text-astronova-blue dark:text-astronova-cyan flex-shrink-0" />
                        <span className="group-hover/link:underline">{company.contact.email}</span>
                      </a>
                      <a 
                        href={`https://${company.contact.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-xs sm:text-sm text-gray-700 dark:text-white/80 hover:text-astronova-blue dark:hover:text-astronova-cyan transition-colors group/link"
                      >
                        <FaGlobe className="text-astronova-blue dark:text-astronova-cyan flex-shrink-0" />
                        <span className="group-hover/link:underline">{company.contact.website}</span>
                        <FaArrowRight className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 dark:bg-white/10 rounded-full mb-4 sm:mb-6">
                <FaSearch className="text-2xl sm:text-3xl text-gray-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">No companies found</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-white/70 mb-4 sm:mb-6">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-astronova-purple to-astronova-pink text-white rounded-xl font-semibold hover:shadow-lg transition-all text-sm sm:text-base"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Section - MOBILE OPTIMIZED */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-astronova-blue via-astronova-purple to-astronova-pink relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px sm:40px sm:40px'
          }}></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Why Choose <span className="text-astronova-cyan">Our Companies</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4">
              The advantages of working with our integrated ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <FaUsers className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Unified Team</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                All companies work together seamlessly for your success
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <FaAward className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Quality First</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Industry-leading certifications and standards
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <FaLightbulb className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Cutting-edge solutions across all industries
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 md:p-8 rounded-2xl border-2 border-white/20 hover:bg-white/20 transition-all">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <FaRocket className="text-white text-xl sm:text-2xl" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2">Fast Delivery</h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                Efficient execution with proven project management
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .company-card.slide-in {
          animation: slideIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Companies;