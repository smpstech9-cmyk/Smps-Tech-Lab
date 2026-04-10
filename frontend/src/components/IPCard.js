import React from 'react';
import * as LucideIcons from 'lucide-react';
import { motion } from 'framer-motion';

const IPCard = ({ ip, index }) => {
  const IconComponent = LucideIcons[ip.icon] || LucideIcons.Box;

  return (
    <motion.div
      data-testid={`ip-card-${ip.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl border border-slate-200 p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,102,194,0.1)] transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-14 h-14 bg-accent-blue rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
          <IconComponent className="w-7 h-7 text-primary group-hover:text-white" />
        </div>
        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
          {ip.stage}
        </span>
      </div>

      <h3 className="font-heading font-semibold text-xl text-foreground mb-2 line-clamp-2">
        {ip.title}
      </h3>
      <p className="text-sm text-primary font-medium mb-3">{ip.category}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
        {ip.description}
      </p>

      <div className="space-y-3 mb-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">IP Value:</span>
          <span className="font-semibold text-foreground">{ip.value}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Market Size:</span>
          <span className="font-semibold text-foreground">{ip.marketSize}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Revenue Potential:</span>
          <span className="font-semibold text-primary">{ip.revenuePotential}</span>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Key Clients</p>
        <div className="flex flex-wrap gap-2">
          {ip.clients.slice(0, 3).map((client, idx) => (
            <span key={idx} className="px-2 py-1 bg-accent text-xs text-foreground rounded">
              {client}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="text-xs text-muted-foreground mb-2 font-semibold uppercase tracking-wide">Credibility</p>
        <div className="flex flex-wrap gap-2">
          {ip.credibility.map((cred, idx) => (
            <span key={idx} className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded border border-green-200">
              {cred}
            </span>
          ))}
        </div>
      </div>

      <button
        data-testid={`ip-details-button-${ip.id}`}
        className="w-full mt-4 px-4 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20 hover:shadow-primary/30"
      >
        View Details
      </button>
    </motion.div>
  );
};

export default IPCard;