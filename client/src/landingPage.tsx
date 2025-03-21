import React from 'react';
import { Heart, Activity, Users, Award, ArrowRight, Menu, X } from 'lucide-react';
import Appointments from './services/appointment';
import Contacts from './services/contacts';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-blue-600 mr-2" />
              <span className="text-2xl font-bold text-blue-800">Medinik Hospital</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-blue-800 font-medium hover:text-blue-600 transition">Home</a>
              <a href="#services" className="text-gray-600 font-medium hover:text-blue-600 transition">Services</a>
              <a href="#about" className="text-gray-600 font-medium hover:text-blue-600 transition">About Us</a>
              <a href="#appointments" className="text-gray-600 font-medium hover:text-blue-600 transition">Appointments</a>
              <a href="#contacts" className="text-gray-600 font-medium hover:text-blue-600 transition">Contact</a>
            </div>

            <div className="hidden md:block">
              <a
                href="#appointments"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-blue-800 font-medium hover:text-blue-600 transition" onClick={toggleMenu}>Home</a>
              <a href="#services" className="text-gray-600 font-medium hover:text-blue-600 transition" onClick={toggleMenu}>Services</a>
              <a href="#about" className="text-gray-600 font-medium hover:text-blue-600 transition" onClick={toggleMenu}>About Us</a>
              <a href="#appointments" className="text-gray-600 font-medium hover:text-blue-600 transition" onClick={toggleMenu}>Appointments</a>
              <a href="#contacts" className="text-gray-600 font-medium hover:text-blue-600 transition" onClick={toggleMenu}>Contact</a>
              <a
                href="#appointments"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition text-center"
                onClick={toggleMenu}
              >
                Book Appointment
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="relative h-screen bg-cover bg-center flex items-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
          }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-blue-800">
                Your Health Is Our Priority
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8 bg-blue-800 text-white px-6 py-3 rounded-full text-center w-full sm:w-[90%] md:w-[75%] lg:w-[60%] mx-auto">
                Providing exceptional healthcare services since 1985. Harar Hospital provides exceptional healthcare services with state-of-the-art facilities and experienced medical professionals.
              </p>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="#appointments"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition text-center"
                >
                  Book Appointment
                </a>
                <a
                  href="#services"
                  className="bg-white text-blue-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition text-center"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Our Medical Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of medical services to meet the healthcare needs of our community with the highest standards of care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Activity className="h-12 w-12 text-blue-600" />,
                title: "Emergency Care",
                description: "24/7 emergency services with rapid response teams ready to provide immediate medical attention."
              },
              {
                icon: <Heart className="h-12 w-12 text-blue-600" />,
                title: "Cardiology",
                description: "Comprehensive cardiac care including diagnostics, treatment, and rehabilitation services."
              },
              {
                icon: <Users className="h-12 w-12 text-blue-600" />,
                title: "Pediatrics",
                description: "Specialized healthcare for infants, children, and adolescents in a child-friendly environment."
              },
              {
                title: "Surgery",
                description: "Advanced surgical procedures performed by experienced surgeons using modern techniques."
              },
              {
                title: "Obstetrics & Gynecology",
                description: "Complete women's health services including prenatal care, delivery, and gynecological treatments."
              },
              {
                title: "Diagnostic Imaging",
                description: "State-of-the-art imaging services including X-ray, CT scan, MRI, and ultrasound."
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="mb-4">
                  {service.icon || <Activity className="h-12 w-12 text-blue-600" />}
                </div>
                <h3 className="text-xl font-bold mb-3 text-blue-800">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a href="#" className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">About Harar Hospital</h2>
              <p className="text-gray-600 mb-6">
                Founded in 1985, Harar Hospital has been providing exceptional healthcare services to the community for over 40 years. Our mission is to deliver compassionate, high-quality care to improve the health and wellbeing of the people we serve.
              </p>
              <p className="text-gray-600 mb-6">
                With state-of-the-art facilities and a team of experienced medical professionals, we are committed to providing the best possible care for our patients. We continuously invest in advanced medical technologies and training to ensure we meet the highest standards of healthcare.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Users className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">100+ Doctors</h4>
                    <p className="text-sm text-gray-600">Experienced specialists</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Award className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Award Winning</h4>
                    <p className="text-sm text-gray-600">Healthcare services</p>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition"
              >
                Learn more about our history <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Harar Hospital Building"
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-2 rounded-full mr-3">
                      <Activity className="text-blue-600 w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-gray-800">Our Mission</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    To provide exceptional healthcare with compassion and respect, improving the health of our community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "40+", label: "Years of Experience" },
              { number: "100+", label: "Medical Specialists" },
              { number: "50,000+", label: "Patients Served" },
              { number: "24/7", label: "Emergency Service" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Patient Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear what our patients have to say about their experience at Harar Hospital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Abdi Mohammed",
                role: "Patient",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                testimonial: "The care I received at Harar Hospital was exceptional. The doctors were knowledgeable and the staff was friendly throughout my stay."
              },
              {
                name: "Fatima Ahmed",
                role: "Mother",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                testimonial: "I delivered my baby at Harar Hospital and the experience was amazing. The maternity ward staff was supportive and the facilities were clean and modern."
              },
              {
                name: "Dawit Tadesse",
                role: "Patient",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                testimonial: "After my surgery, I was impressed by the follow-up care. The doctors checked on me regularly and the rehabilitation program helped me recover quickly."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointments Section */}
      <Appointments />

      {/* Contacts Section */}
      <Contacts />

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-white mr-2" />
                <span className="text-2xl font-bold">Harar Hospital</span>
              </div>
              <p className="text-blue-200 mb-4">
                Providing exceptional healthcare services with compassion and excellence since 1985.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-200 transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-200 transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm4.957 7.571h-1.65c-.186 0-.4.2-.4.457v1.2h2.05l-.305 2.095h-1.745v5.486h-2.1v-5.486H10.86v-2.095h1.947v-1.39c0-1.714.809-2.657 2.745-2.657h1.405v2.39z" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-200 transition">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5.636 13.636c-.172.172-.454.172-.626 0L12 10.636l-5.01 5c-.172.172-.454.172-.626 0-.172-.172-.172-.454 0-.626L11.374 10 6.364 4.99c-.172-.172-.172-.454 0-.626.172-.172.454-.172.626 0L12 9.364l5.01-5c.172-.172.454-.172.626 0 .172.172.172.454 0 .626L12.626 10l5.01 5.01c.172.172.172.454 0 .626z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-blue-200 hover:text-white transition">Home</a></li>
                <li><a href="#services" className="text-blue-200 hover:text-white transition">Services</a></li>
                <li><a href="#about" className="text-blue-200 hover:text-white transition">About Us</a></li>
                <li><a href="#appointments" className="text-blue-200 hover:text-white transition">Appointments</a></li>
                <li><a href="#contacts" className="text-blue-200 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-200 hover:text-white transition">Emergency Care</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Cardiology</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Pediatrics</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Surgery</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition">Obstetrics & Gynecology</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Working Hours</h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-blue-200">Monday - Friday:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-blue-200">Saturday:</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-blue-200">Sunday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-blue-200">Emergency:</span>
                  <span>24/7</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-200">
            <p>&copy; {new Date().getFullYear()} Harar Hospital. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;