'use client';
import React from 'react';
import { motion } from 'framer-motion';

type Props = {
  category: string;
  inputs: Record<string, string>;
};

export const PromptPreview = ({ category, inputs }: Props) => {
  let prompt = 'Fill out the form to generate your prompt.';

  if (category === 'menu' && inputs.dishName && inputs.ingredients) {
    prompt = `Write a creative menu description for a dish called "${inputs.dishName}" using the ingredients: ${inputs.ingredients}. Make it sound appealing and modern.`;
  }

  if (category === 'social' && inputs.promoType && inputs.promoTarget) {
    prompt = `Write an Instagram post to promote a ${inputs.promoType} featuring "${inputs.promoTarget}". Make it engaging and include 3 relevant hashtags.`;
  }

  if (category === 'review' && inputs.reviewText && inputs.tone) {
    prompt = `Write a ${inputs.tone} response to the following customer review:\n"${inputs.reviewText}"\nKeep it professional and brand-friendly.`;
  }

  if (category === 'sop' && inputs.role && inputs.task) {
    prompt = `Create a step-by-step SOP for a ${inputs.role} performing the following task: ${inputs.task}. Make it clear, professional, and easy to follow.`;
  }

  return (
    <motion.div
      key={prompt}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gray-100 p-4 mt-6 rounded shadow"
    >
      <h2 className="font-bold text-lg mb-2">Generated Prompt</h2>
      <pre className="whitespace-pre-wrap text-gray-800">{prompt}</pre>
      <button
        className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => navigator.clipboard.writeText(prompt)}
      >
        Copy to Clipboard
      </button>
    </motion.div>
  );
};
