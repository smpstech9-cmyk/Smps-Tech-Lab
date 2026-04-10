import React from 'react';
import { MapPin, Briefcase, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const CareerCard = ({ career, index }) => {
  return (
    <motion.div
      data-testid={`career-card-${career.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl border border-slate-200 p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,102,194,0.1)] transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-heading font-semibold text-xl text-foreground mb-1">
            {career.title}
          </h3>
          <p className="text-sm text-primary font-medium">{career.department}</p>
        </div>
        <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
          career.type === 'Full-time' 
            ? 'bg-green-100 text-green-700'
            : 'bg-blue-100 text-blue-700'
        }`}>
          {career.type}
        </span>
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {career.description}
      </p>

      <div className="flex flex-wrap gap-3 mb-4">
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <MapPin className="w-4 h-4" />
          <span>{career.location}</span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <Briefcase className="w-4 h-4" />
          <span>{career.experience}</span>
        </div>
        <div className="flex items-center space-x-1 text-sm text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>Posted {new Date(career.postedDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Required Skills</p>
        <div className="flex flex-wrap gap-2">
          {career.skills.map((skill, idx) => (
            <span key={idx} className="px-2 py-1 bg-accent text-xs text-foreground rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button
        data-testid={`career-apply-button-${career.id}`}
        className="w-full mt-4 px-4 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/30"
      >
        Apply Now
      </button>
    </motion.div>
  );
};

export default CareerCard;