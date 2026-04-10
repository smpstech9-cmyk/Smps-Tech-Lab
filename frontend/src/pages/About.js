import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div data-testid="about-page" className="pt-20">
      <section className="py-20 sm:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              About SMPS Tech Lab
            </p>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-6 tracking-tight">
              National Innovation Ecosystem
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Driving India's technological sovereignty through cutting-edge R&D, strategic partnerships, and transformative innovation across critical sectors.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-heading font-semibold text-foreground">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To position India as a global leader in deep technology innovation by creating a self-sustaining ecosystem that connects research, industry, government, and academia. We envision a future where India's intellectual property drives technological advancement worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1768661770207-9aa46d5ed526?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBidWlsZGluZyUyMGJsdWUlMjBza3l8ZW58MHx8fHwxNzc1ODE4ODQzfDA&ixlib=rb-4.1.0&q=85"
                alt="Modern corporate building"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-80 rounded-xl overflow-hidden order-2 lg:order-1"
            >
              <img
                src="https://images.unsplash.com/photo-1766297247924-6638d54e7c89?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxOTB8MHwxfHNlYXJjaHwzfHx0ZWNoJTIwbGFib3JhdG9yeSUyMGlubm92YXRpb24lMjB0ZWFtfGVufDB8fHx8MTc3NTgxODg0M3ww&ixlib=rb-4.1.0&q=85"
                alt="Technology laboratory"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Lightbulb className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-heading font-semibold text-foreground">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                To develop and commercialize cutting-edge intellectual properties that solve real-world challenges in telecommunications, artificial intelligence, healthcare, defense, clean energy, and smart infrastructure.
              </p>
              <ul className="space-y-3">
                {[
                  'Build 50+ IPs across critical technology sectors by 2028',
                  'Engage 10L+ students in innovation and skill development',
                  'Establish 500+ strategic partnerships with global leaders',
                  'Incubate 100+ deep-tech startups driving Indian economy',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Core Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-4 tracking-tight">
              What Sets Us Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Deep Tech Innovation',
                description: 'Expertise in 5G/6G, quantum computing, AI/ML, IoT, blockchain, and advanced manufacturing technologies.',
              },
              {
                icon: Users,
                title: 'Strategic Ecosystem',
                description: 'Collaboration with IITs, DRDO, ISRO, government agencies, and industry leaders for rapid commercialization.',
              },
              {
                icon: Target,
                title: 'Proven Track Record',
                description: '34 patents filed, ₹150 Cr funding raised, 12 startups incubated, multiple national and international awards.',
              },
            ].map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                data-testid={`capability-${index}`}
                className="bg-white rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_12px_32px_rgba(10,102,194,0.1)]"
              >
                <div className="w-16 h-16 bg-accent-blue rounded-xl flex items-center justify-center mb-6">
                  <capability.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Government Credibility
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-4 tracking-tight">
              Trusted Partner of National Initiatives
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { org: 'VTU', certification: 'Technology Partner', desc: 'Academic Excellence' },
              { org: 'DoT', certification: 'Approved Vendor', desc: 'Telecom Innovation' },
              { org: 'Bharat 6G Alliance', certification: 'Core Member', desc: '6G Development' },
              { org: 'DRDO', certification: 'Research Collaborator', desc: 'Defense Technologies' },
              { org: 'ISRO', certification: 'Space Tech Partner', desc: 'Satellite Systems' },
              { org: 'C-DAC', certification: 'R&D Alliance', desc: 'Computing Solutions' },
              { org: 'NITI Aayog', certification: 'Innovation Partner', desc: 'Policy Framework' },
              { org: 'Smart Cities Mission', certification: 'Solution Provider', desc: 'Urban Technology' },
            ].map((cred, index) => (
              <motion.div
                key={cred.org}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-accent-blue rounded-xl p-6 border border-primary/10 text-center"
              >
                <p className="font-heading font-bold text-lg text-primary mb-1">{cred.org}</p>
                <p className="text-sm font-semibold text-foreground mb-1">{cred.certification}</p>
                <p className="text-xs text-muted-foreground">{cred.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;