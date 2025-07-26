import React from 'react';
import { Brain, Lightbulb, Target, Zap } from 'lucide-react';

const About = () => {
  const traits = [
    {
      icon: <Brain className="text-primary" size={32} />,
      title: 'Tech-Savvy',
      description: 'Always staying ahead with the latest technologies and best practices to deliver cutting-edge solutions.'
    },
    {
      icon: <Lightbulb className="text-accent-mustard" size={32} />,
      title: 'Creative',
      description: 'Bringing innovative ideas to life with unique designs and creative problem-solving approaches.'
    },
    {
      icon: <Target className="text-accent-salmon" size={32} />,
      title: 'Organized',
      description: 'Structured workflows and clear communication ensure projects are delivered on time and within scope.'
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: 'Solution-Driven',
      description: 'Focused on understanding your business needs and creating solutions that drive real results.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm Your <span className="text-primary">Tech Partner</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            With years of experience in web development and automation, I help businesses transform their digital presence and streamline their operations. My passion lies in creating beautiful, functional solutions that make a real difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {traits.map((trait, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-background to-highlight p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-6">{trait.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{trait.title}</h3>
              <p className="text-gray-600 leading-relaxed">{trait.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can create a digital solution that perfectly fits your needs and drives your business forward.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-primary px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;