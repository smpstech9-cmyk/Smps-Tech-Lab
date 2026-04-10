import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Users } from 'lucide-react';
import StatsBar from '../components/StatsBar';

const Home = () => {
  return (
    <div data-testid="home-page">
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url('https://static.prod-images.emergentagent.com/jobs/f763e513-f46d-4ac1-a94e-57305606a144/images/6bbf92cc67e047a492fce99542281dbbb9f5b0c7b5c652a5eb245f73e4c997ef.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm font-semibold text-white uppercase tracking-[0.2em] mb-6"
            >
              National Innovation Ecosystem Platform
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              data-testid="hero-title"
              className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tighter leading-tight"
            >
              Powering India's<br />
              Technology Leadership
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl"
            >
              Building India's future with 17+ intellectual properties, strategic partnerships, and cutting-edge R&D across telecommunications, AI, quantum computing, and beyond.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                data-testid="cta-partner"
                className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30 flex items-center space-x-2"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/investor"
                data-testid="cta-explore-ip"
                className="px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-primary/5 transition-colors shadow-lg flex items-center space-x-2"
              >
                <span>Explore IP Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <StatsBar />

      <section className="py-20 sm:py-32 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-4 tracking-tight">
              Driving Innovation Across Sectors
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From 5G networks to quantum computing, we're building India's technology future
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Innovation Excellence',
                description: '17+ intellectual properties spanning telecommunications, AI, healthcare, and defense technologies.',
              },
              {
                icon: Users,
                title: 'Strategic Partnerships',
                description: '228+ collaborations with government, academia, and industry leaders driving national technology goals.',
              },
              {
                icon: Target,
                title: 'Impact at Scale',
                description: '4L+ students engaged, 12 startups incubated, and transforming industries with cutting-edge solutions.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                data-testid={`feature-${index}`}
                className="bg-white rounded-xl p-8 hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-[0_12px_32px_rgba(10,102,194,0.1)]"
              >
                <div className="w-16 h-16 bg-accent-blue rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4">
              Our Ecosystem
            </p>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-foreground mb-4 tracking-tight">
              Built on Trust & Credibility
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'VTU Certified', desc: 'Academic Excellence' },
              { label: 'DoT Approved', desc: 'Government Recognition' },
              { label: 'Bharat 6G Alliance', desc: 'Industry Leadership' },
              { label: 'IIT Collaboration', desc: 'Research Partnership' },
            ].map((badge, index) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-accent-blue rounded-xl p-6 text-center border border-primary/10"
              >
                <p className="font-heading font-semibold text-lg text-primary mb-1">
                  {badge.label}
                </p>
                <p className="text-sm text-muted-foreground">{badge.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 sm:py-32 overflow-hidden"
        style={{
          backgroundImage: `url('https://static.prod-images.emergentagent.com/jobs/f763e513-f46d-4ac1-a94e-57305606a144/images/1f331c9ba9f572c5cc2d1435c07e2f11596556dede400b1ac67a1c546c2568b0.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-primary/90" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 tracking-tight">
              Ready to Collaborate?
            </h2>
            <p className="text-lg text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join India's leading innovation ecosystem and be part of the technology revolution
            </p>
            <Link
              to="/contact"
              data-testid="cta-get-started"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary rounded-lg font-medium hover:shadow-2xl transition-all"
            >
              <span>Get Started Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;