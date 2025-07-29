import { motion } from 'framer-motion';
import { Users, Target, Award, BrainCircuit } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-indigo-500" />,
      title: "Who We Are",
      description: "A collective of passionate strategists, creatives, and data analysts."
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-500" />,
      title: "Who We Serve",
      description: "Ambitious brands of all sizes, from startups to enterprise leaders."
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-500" />,
      title: "What We Deliver",
      description: "Measurable growth, tangible results, and a commanding digital presence."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-12 items-center">
          {/* Image */}
          <motion.div
            className="lg:w-5/12 mb-10 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/img/about.jpg"
              className="rounded-xl shadow-2xl"
              alt="About Ripplex Vision Team"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="lg:w-7/12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="content">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                Empowering Brands in the Digital World.
              </h3>
              <p className="mb-8 text-gray-600 leading-relaxed">
                At <span className="font-semibold text-indigo-600">Ripplex Vision</span>, we're dedicated to making sophisticated digital marketing strategies accessible. We deliver outcome-focused solutions that drive authentic business transformation and measurable growth.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 bg-indigo-100 rounded-full p-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;