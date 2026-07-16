'use client';

import Link from 'next/link';
import { BLOGS } from '@/lib/dummy-data';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

export default function BlogsPage() {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-3xl font-black mb-2">Travel Blog</h1>
          <p className="text-gray-300">Stories, tips, and inspiration for your next adventure</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOGS.map((blog, i) => (
            <motion.div key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/blogs/${blog.id}`}>
                <div className="h-48 overflow-hidden relative">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <Badge className="absolute top-3 left-3 bg-blue-600 text-white text-xs">{blog.category}</Badge>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 line-clamp-2 mb-2">{blog.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-4">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                        {blog.authorAvatar}
                      </div>
                      {blog.author}
                    </div>
                    <span className="flex items-center gap-1"><Calendar size={10} /> {blog.date}</span>
                  </div>
                  <div className="flex items-center gap-1 text-blue-600 text-sm font-medium mt-3">
                    Read More <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
