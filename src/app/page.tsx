'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PromptForm } from '@/components/PromptForm';
import { PromptPreview } from '@/components/PromptPreview';
import { CategorySelector } from '@/components/CategorySelector';

export default function Home() {
  const [inputs, setInputs] = useState<Record<string, string>>({});
  const [category, setCategory] = useState<string>('menu');

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold tracking-tight">
            🍽️ AI Prompt Generator for Restaurants
          </h1>
          <span className="text-sm text-gray-500">v0.1</span>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-white p-6 rounded-2xl shadow-xl space-y-6"
        >
          <CategorySelector category={category} setCategory={setCategory} />
          <PromptForm category={category} inputs={inputs} setInputs={setInputs} />
          <PromptPreview category={category} inputs={inputs} />
        </motion.div>
      </main>

      <footer className="text-center text-xs text-gray-500 py-6">
        Built by Bryan • Powered by ChatGPT
      </footer>
    </div>
  );
}
