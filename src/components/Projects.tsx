import React from 'react';
import { ExternalLink, Brain, Activity, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "intrinsAi",
      description: "A cutting-edge AI platform focused on developing intelligent solutions for various industries. Building the future of artificial intelligence with innovative algorithms and user-centric design.",
      icon: <Brain className="w-8 h-8 text-amber-400" />,
      link: "https://intrinsai.com",
      tech: ["AI/ML", "Deep Learning", "NLP", "Computer Vision"],
      status: "Live"
    },
    {
      title: "AI Fitness Agent",
      description: "Currently developing an intelligent AI agent that provides personalized fitness, diet, workout, and nutrition recommendations. Using advanced ML algorithms to create tailored health solutions.",
      icon: <Activity className="w-8 h-8 text-yellow-500" />,
      link: null,
      tech: ["Machine Learning", "NLP", "Health Analytics", "Personalization"],
      status: "In Development"
    }
  ];

  const recognitions = [
    {
      title: "Microsoft for Startups Founders Hub",
      description: "Selected for Microsoft's prestigious program supporting high-potential startups with resources, mentorship, and technology credits.",
      icon: <Globe className="w-6 h-6 text-amber-400" />
    },
    {
      title: "NVIDIA Inception Program",
      description: "Member of NVIDIA's program for cutting-edge AI startups, providing access to advanced GPU resources and technical support.",
      icon: <Globe className="w-6 h-6 text-gray-400" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Projects & Recognition
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Building innovative AI solutions and gaining recognition from industry leaders.
          </p>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Current Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        project.status === 'Live' 
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                          : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-amber-500/30 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Industry Recognition</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-2 bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-colors duration-300">
                    {recognition.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{recognition.title}</h4>
                    <p className="text-gray-300 leading-relaxed">{recognition.description}</p>
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

export default Projects;