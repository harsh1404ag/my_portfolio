import React from 'react';
import { Mail, Linkedin, Github, Globe, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "harsh@intrinsai.com",
      color: "text-amber-400"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      label: "Website",
      value: "intrinsai.com",
      link: "https://intrinsai.com",
      color: "text-yellow-500"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/harsh-agnihotri-750ab6215/",
      color: "text-gray-400"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "View my code",
      link: "https://github.com/harsh1404ag",
      color: "text-slate-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Interested in AI, machine learning, or potential collaborations? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Get in Touch</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Whether you're interested in AI development, data science projects, or discussing the future 
                of artificial intelligence, I'm always open to meaningful conversations and potential collaborations.
              </p>
              
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span>India</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-amber-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">Currently</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mt-2"></div>
                  <span>Building AI fitness agent at intrinsAi</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <span>Pursuing BS in Data Science at IIT Madras</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span>Exploring new AI/ML opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 group"
              >
                <div className={`p-3 bg-gray-800/50 rounded-lg ${method.color} group-hover:bg-gray-700/50 transition-colors duration-300`}>
                  {method.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{method.label}</h4>
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {method.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
