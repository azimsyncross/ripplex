import { icons } from "lucide-react";
import { User } from "lucide-react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "" });

  // Contact information array
  const contactInfo = [
    {
      icon: User,
      title: "Excutive Director",
      content: "SALAVAT MIDKATOVICH YUSUPOV",
    },
    {
      icon: MapPin,
      title: "Our Location",
      content:
        "Southeast Division Street 7413, Portland, Oregon, 97206, United States of America",
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+1 6266122248",
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "perrycalebsfw853@hotmail.com",
    },
  ];

  // Services array
  const services = [
    "Social Media Advertising",
    "Google Ads Management",
    "YouTube Advertising",
    "App Store Optimization (ASO)",
    "Search Engine Optimization (SEO)",
    "TikTok Advertising",
  ];

  // Budget ranges array
  const budgetRanges = [
    "Under $1,000",
    "$1,000 - $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "Over $50,000",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setLoading(true);
    setStatus({ message: "", type: "" });

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setStatus({
        message: "Your message has been sent. Thank you!",
        type: "success",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  const ContactInfo = ({ icon: Icon, title, content }) => (
    <div className="flex items-start space-x-4 mb-6">
      <div className="bg-indigo-100 p-2 rounded-full">
        <Icon className="w-5 h-5 text-indigo-600" />
      </div>
      <div>
        <h3 className="text-sm font-semibold text-indigo-100">{title}</h3>
        <p className="text-sm text-indigo-200">{content}</p>
      </div>
    </div>
  );

  const InputField = ({ name, type = "text", placeholder }) => (
    <div className="mb-4">
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
      />
    </div>
  );

  const SelectField = ({ name, placeholder, options }) => (
    <div className="mb-4">
      <select
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Contact Info */}
            <div className="w-full md:w-2/5 p-8 bg-gradient-to-br from-indigo-600 to-indigo-800 text-white">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8 text-indigo-100">
                We're here to help and answer any questions you might have.
                Don't hesitate to reach out.
              </p>

              {contactInfo.map((info, index) => (
                <ContactInfo
                  key={index}
                  icon={info.icon}
                  title={info.title}
                  content={info.content}
                />
              ))}
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-3/5 p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Send Us a Message
              </h2>
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField name="name" placeholder="Your Name" />
                  <InputField
                    name="email"
                    type="email"
                    placeholder="Your Email"
                  />
                </div>
                <InputField name="company" placeholder="Company Name" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <SelectField
                    name="service"
                    placeholder="Select Service"
                    options={services}
                  />
                  <SelectField
                    name="budget"
                    placeholder="Budget Range"
                    options={budgetRanges}
                  />
                </div>
                <InputField name="subject" placeholder="Project Title" />
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Your Project Details"
                    className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  {status.message && (
                    <p
                      className={`mb-4 text-sm ${
                        status.type === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {status.message}
                    </p>
                  )}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-8 bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
            Find Us On Map
          </h2>
          <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
           
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.2590374830806!2d-122.59131251101299!3d45.50577329649293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5495a051bed146f9%3A0xa9cd73487ad72b1c!2s7413%20SE%20Division%20St%2C%20Portland%2C%20OR%2097206%2C%20USA!5e1!3m2!1sen!2sbd!4v1753791867666!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
