import { useEffect, useState } from "react";
import Krono5 from "../assets/krono5.png";
import Krono6 from "../assets/krono6.png";
import Krono7 from "../assets/krono7.png";
import krono1 from "../assets/Krono-1.png";
import krono2 from "../assets/Krono-2.png";
import BackgroundImage from "../assets/KronossysBackground.jpg"
import BackgroundLogo from "../assets/KronosisLogo.png"


const KronosisLanding = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel auto-advance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 animate-fadeIn">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={BackgroundLogo} alt="Kronosis Logo" className="h-10 w-10 mr-3" />
            </div>
            {/* Desktop Navigation - Visible on Desktop Only */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-purple-600 transition">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 transition">
                About Us
              </a>
              <button className="text-gray-700 hover:text-purple-600 transition flex items-center">
                <a href="#products" className="text-gray-700 hover:text-purple-600 transition">
                  Products
                </a>
              </button>
              <a href="#services" className="text-gray-700 hover:text-purple-600 transition">
                Our Services
              </a>
              <a
                href="#contact"
                className="bg-[#464646] text-white px-6 py-2 rounded-lg hover:bg-[#333333] transition"
              >
                Contact Us
              </a>
            </div>
            {/* Mobile Menu Button - Only Visible on Mobile */}
            <button
              className="md:hidden text-gray-700 transition-transform duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Animated Slide Down */}
      <div className={`md:hidden fixed top-0 left-0 right-0 bg-white shadow-lg z-40 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
        <div className="pt-20 pb-6 px-6">
          <div className="space-y-1">
            <a href="#home" className="block py-3 px-4 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
              Home
            </a>
            <a href="#about" className="block py-3 px-4 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
              About Us
            </a>
            <a href="#products" className="block py-3 px-4 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
              Products
            </a>
            <a href="#services" className="block py-3 px-4 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-200">
              Our Services
            </a>
            <a href="#contact" className="block py-3 px-4 mt-4 bg-purple-600 text-white text-center rounded-lg hover:bg-purple-700 transition-all duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="absolute inset-0">
          <img
            src={BackgroundImage}
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 pt-20">
          <div className="max-w-3xl animate-slideUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Enabling Secure, Transparent and Intelligent Transport Management
            </h1>
            <div className="flex space-x-2 mt-8">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`carousel-dot ${i === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(i)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-purple-600 mb-8">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Kronosys Limited is a Nigerian private company committed to pioneering advancements in Artificial Intelligence, Robotics, Cloud Computing, and innovative technology solutions. We exist to empower businesses, governments, and communities with intelligent systems that enhance efficiency, security, and productivity while addressing human and societal challenges.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With a strong focus on innovation, collaboration, and sustainability, we deliver tailored solutions in software and hardware development, data security, consulting, procurement, and training — ensuring that our clients remain ahead in the fast-evolving digital economy.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden h-40 bg-gradient-to-br from-blue-900 to-blue-600">
                <img src={Krono5} alt="krono5" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-40 bg-gradient-to-br from-purple-900 to-purple-600">
                <img src={Krono6} alt="krono6" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-xl overflow-hidden h-40 bg-gradient-to-br from-orange-900 to-orange-600">
                <img src={Krono7} alt="krono7" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition, Vision & Mission Cards */}
      <section className="py-20 bg-[#464646]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">💎</div>
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Value Proposition</h3>
              <p className="text-gray-700 leading-relaxed">
                At Kronosys Limited, we bridge the gap between technology and real-world impact. Our value lies in combining cutting-edge innovation with local market insight to deliver solutions that are not only advanced and secure but also relevant, scalable, and sustainable for businesses and communities in Africa and beyond.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To become a global leader in driving technological innovation from Africa, setting the standard for intelligent systems that solve complex challenges and shape a smarter future.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-purple-600 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To harness the power of Artificial Intelligence, Robotics, and emerging technologies to create intelligent, secure, and sustainable solutions that transform industries and improve lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Cards */}
      <section className="py-20 purple-gradient text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-white/90">We embrace creativity and cutting-edge technologies to design impactful solutions.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition">
              <div className="text-3xl mb-3">🤝</div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-white/90">We uphold transparency, honesty, and ethical standards in all our dealings.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition">
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-white/90">We deliver superior quality solutions that meet and exceed client expectations.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-white/90">We work with partners, clients, and communities to co-create value.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-white/90">We are committed to solutions that positively impact people, society, and the environment.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="text-xl font-bold mb-3">Security</h3>
              <p className="text-white/90">We prioritize trust, data protection, and safety in all our technological offerings.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-purple-600 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="service-icon">🤖</div>
              <h3 className="text-xl font-bold mb-3">Artificial Intelligence & Robotics</h3>
              <p className="text-gray-600">Developing intelligent automation systems and robotics solutions to solve real-world problems.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="service-icon">☁️</div>
              <h3 className="text-xl font-bold mb-3">Data Processing, Cloud Computing & Security</h3>
              <p className="text-gray-600">Enabling businesses to store, process, and secure data with advanced cloud and cybersecurity solutions.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="service-icon">💻</div>
              <h3 className="text-xl font-bold mb-3">Software & Hardware Development</h3>
              <p className="text-gray-600">Designing and deploying innovative applications and hardware tailored to industry-specific needs.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="service-icon">📊</div>
              <h3 className="text-xl font-bold mb-3">Consulting, Contracting, Training & Procurement</h3>
              <p className="text-gray-600">Providing expert advisory services, professional development training, and reliable technology procurement.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="service-icon">🚀</div>
              <h3 className="text-xl font-bold mb-3">Technological Innovations</h3>
              <p className="text-gray-600">Creating and deploying advanced systems to address human and societal challenges.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="service-icon">⚙️</div>
              <h3 className="text-xl font-bold mb-3">Ancillary & Support Services</h3>
              <p className="text-gray-600">Delivering all other related services that support the achievement of our mission and client success.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-purple-600 mb-12">Our Products</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Kronos Track is an intelligent security-first platform designed to revolutionize transport operations in Nigeria and Africa through operational structure, user behaviour and enforcement
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">●</span>
                  <span className="text-gray-700">Real-time tracking and monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">●</span>
                  <span className="text-gray-700">Smart RFID-based ticketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">●</span>
                  <span className="text-gray-700">Revenue assurance systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-600 mr-2">●</span>
                  <span className="text-gray-700">Crime detection and compliance enforcement</span>
                </li>
              </ul>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Built around a customized Android device and supported by a centralized admin dashboard, Kronos Track ensures that transport agencies, government regulators, ticketers, and commercial drivers operate in a connected, transparent, and accountable ecosystem.
              </p>
              <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition">
                Click Here
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="rounded-xl overflow-hidden bg-gray-200 h-64">
                <img src={krono1} alt="krono1" />
              </div>
              <div className="rounded-xl overflow-hidden bg-gray-200 h-64">
                <img src={krono2} alt="krono2" className="" />
              </div>
            </div>
          </div>
        </div>
      </section>



      <footer id="contact" className="pt-14 pb-6 bg-[#5F0195] text-white">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="flex items-start mb-4">
                <svg className="w-5 h-5 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <div>
                  <p>+2347037532376</p>
                  <p>+2348130963475</p>
                  <p>+2348162202606</p>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <div>
                  <p>kronosyslimited@gmail.com</p>
                  <p>info@kronosyslimited.com</p>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Address</h2>
              <div className="flex items-start mb-2">
                <svg className="w-5 h-5 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                </svg>
                <p>www.kronosysltd.com</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <div>
                  <p>40, Okigwe Road, Aba, Abia State</p>
                  <p className="mt-2 font-semibold">Lagos Address:</p>
                  <p>20, Peter Agha Street, Okeafa</p>
                  <p>Isolo, Lagos</p>
                </div>
              </div>
            </div>

            {/* Socials Section */}
            <div className="flex space-x-4 items-start">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                <span className="text-lg">in</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                <span className="text-lg">ig</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition">
                <span className="text-lg">yt</span>
              </a>
            </div>
          </div>

          <div className="text-center mt-4 pt-4 border-t border-white/20">
            <p className="text-white/80 text-sm">© 2025 Kronosys Limited</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default KronosisLanding;