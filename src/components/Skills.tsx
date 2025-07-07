import React from 'react';
import { Code, Database, Bot, TrendingUp, Zap, Settings } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Machine Learning",
      icon: <Bot className="w-8 h-8 text-amber-400" />,
      skills: ["Deep Learning", "Neural Networks", "NLP", "Computer Vision", "Reinforcement Learning"],
      color: "from-amber-500/20 to-yellow-500/20",
      borderColor: "border-amber-500/30"
    },
    {
      title: "Data Science",
      icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
      skills: ["Statistical Analysis", "Data Visualization", "Predictive Modeling", "A/B Testing", "Time Series"],
      color: "from-yellow-500/20 to-amber-500/20",
      borderColor: "border-yellow-500/30"
    },
    {
      title: "Programming",
      icon: <Code className="w-8 h-8 text-gray-400" />,
      skills: ["Python", "R", "JavaScript", "SQL", "TensorFlow", "PyTorch"],
      color: "from-gray-500/20 to-slate-400/20",
      borderColor: "border-gray-500/30"
    },
    {
      title: "Data Engineering",
      icon: <Database className="w-8 h-8 text-slate-400" />,
      skills: ["Data Pipelines", "ETL", "Apache Spark", "Hadoop", "Cloud Computing"],
      color: "from-slate-500/20 to-gray-500/20",
      borderColor: "border-slate-500/30"
    },
    {
      title: "AI Development",
      icon: <Zap className="w-8 h-8 text-amber-500" />,
      skills: ["Model Deployment", "MLOps", "API Development", "AI Ethics", "Optimization"],
      color: "from-amber-600/20 to-yellow-600/20",
      borderColor: "border-amber-600/30"
    },
    {
      title: "Tools & Platforms",
      icon: <Settings className="w-8 h-8 text-gray-300" />,
      skills: ["Docker", "Kubernetes", "AWS", "Azure", "Git", "Jupyter"],
      color: "from-gray-600/20 to-slate-500/20",
      borderColor: "border-gray-600/30"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive skills in AI, ML, and data science with hands-on experience in cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.color} backdrop-blur-sm rounded-lg p-6 border ${category.borderColor} hover:border-amber-500/50 transition-all duration-300 group`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-gray-700/50 transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional highlight */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-lg p-8 border border-gray-700 hover:border-amber-500/50 transition-all duration-300 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Current Focus
              </span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Specializing in developing AI agents for health and fitness applications, combining machine learning 
              with domain expertise in nutrition and wellness. Building intelligent systems that provide personalized 
              recommendations and insights for better health outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;