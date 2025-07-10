'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  category: string;
  setCategory: (category: string) => void;
};

const categories = [
  { label: 'Menu Description', value: 'menu' },
  { label: 'Social Media Post', value: 'social' },
  { label: 'Review Reply', value: 'review' },
  { label: 'Staff SOP', value: 'sop' },
];

export const CategorySelector = ({ category, setCategory }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categories.map((cat) => (
        <motion.button
          key={cat.value}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => setCategory(cat.value)}
          className={`px-4 py-2 rounded border transition 
            ${category === cat.value 
              ? 'bg-blue-600 text-white border-blue-600' 
              : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
        >
          {cat.label}
        </motion.button>
      ))}
    </div>
  );
};
