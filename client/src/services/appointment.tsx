import React, { useState } from 'react';
import { Calendar, Clock, User, Phone } from 'lucide-react';
import { createAppointment } from '../Api/appointmentsApi';

const Appointments = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send the form data to the backend
      const response = await createAppointment(formData);
      console.log('Appointment request submitted:', response);
      alert('Your appointment request has been submitted. We will contact you shortly to confirm.');

      // Reset form
      setFormData({
        name: '',
        contact: '',
        date: '',
        time: '',
      });
    } catch (error) {
      console.error('Error submitting appointment request:', error);
      alert('There was an error submitting your appointment request. Please try again.');
    }
  };

  return (
    <section id="appointments" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-800">Book an Appointment</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="bg-blue-600 text-white p-8 md:w-1/3">
              <h3 className="text-2xl font-bold mb-6">Appointment Information</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-semibold">Working Days</p>
                    <p className="text-sm opacity-80">Monday - Saturday</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p className="text-sm opacity-80">8:00 AM - 8:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3" />
                  <div>
                    <p className="font-semibold">Emergency Contact</p>
                    <p className="text-sm opacity-80">+251 25 666 0700</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-4">Why Choose Us?</h4>
                <ul className="space-y-2 text-sm opacity-90">
                  <li>✓ Experienced medical professionals</li>
                  <li>✓ State-of-the-art facilities</li>
                  <li>✓ Personalized patient care</li>
                  <li>✓ Affordable healthcare services</li>
                  <li>✓ 24/7 emergency services</li>
                </ul>
              </div>
            </div>
            
            <div className="p-8 md:w-2/3">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="contact" className="block text-gray-700 font-medium mb-2">Contact Number</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Phone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        id="contact"
                        name="contact"
                        value={formData.contact}
                        onChange={handleChange}
                        required
                        className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="+251 9XX XXX XXX"
                      />
                    </div>
                  </div>
                  
                  
                  
                  <div>
                    <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Preferred Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                
                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300 font-medium"
                  >
                    Book Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointments;