import React from 'react';
import { GraduationCap, Brain, Rocket, Cloud } from 'lucide-react';
import microsoftLogo from '../Microsoft-for-startup-logo.png';
import awsLogo from '../aws-logo.png';
import nvidiaLogo from '../nvidia-inception-program-badge-rgb-for-screen.png';

const About: React.FC = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-8 h-8 text-amber-400" />,
      title: "IIT Madras",
      description: "Pursuing BS in Data Science from India's premier technical institute"
    },
    {
      icon: <Brain className="w-8 h-8 text-gray-400" />,
      title: "AI & ML Passion",
      description: "Deep expertise in artificial intelligence and machine learning technologies"
    },
    {
      icon: <Rocket className="w-8 h-8 text-yellow-500" />,
      title: "Entrepreneur",
      description: "Founder of IntrinsAI, building innovative AI solutions for the future"
    },
    {
      icon: <Cloud className="w-8 h-8 text-orange-400" />,
      title: "AWS for Startups",
      description: "Selected for AWS for Startups program, leveraging cloud infrastructure for AI development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At 24, I'm driven by a passion for artificial intelligence and its potential to transform industries. 
            Currently pursuing my degree while building the next generation of AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a Data Science student at IIT Madras with a deep fascination for AI and Machine Learning. 
              My journey began with curiosity about how machines can learn and make decisions, which evolved 
              into a mission to create intelligent solutions that make a real difference.
            </p>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              As the founder of IntrinsAI, I'm focused on developing cutting-edge AI technologies. Currently, 
              I'm building an AI agent specialized in fitness, diet, workouts, and nutrition - combining my 
              technical expertise with a passion for health and wellness.
            </p>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-amber-400 mb-4">Supported By</h4>
              <div className="flex justify-between items-center max-w-md">
                <img src={microsoftLogo} alt="Microsoft for Startups" className="h-20 w-auto hover:scale-110 transition-transform duration-300" />
                <img src={awsLogo} alt="AWS for Startups" className="h-20 w-auto hover:scale-110 transition-transform duration-300" />
                <img src={nvidiaLogo} alt="NVIDIA Inception" className="h-16 w-auto hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-colors duration-300">
                    {highlight.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{highlight.title}</h3>
                    <p className="text-gray-300">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
