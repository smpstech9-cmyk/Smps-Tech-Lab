import React from 'react';
import { Calendar, Clock, User } from 'lucide-react';
import { motion } from 'framer-motion';

const BlogCard = ({ blog, index }) => {
  return (
    <motion.div
      data-testid={`blog-card-${blog.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(10,102,194,0.1)] transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
          {blog.category}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {blog.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <User className="w-4 h-4" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{blog.readTime}</span>
          </div>
        </div>

        <button
          data-testid={`blog-read-button-${blog.id}`}
          className="text-primary font-medium text-sm hover:underline"
        >
          Read More →
        </button>
      </div>
    </motion.div>
  );
};

export default BlogCard;