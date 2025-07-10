'use client';
import React from 'react';

type Props = {
  category: string;
  inputs: Record<string, string>;
  setInputs: (data: Record<string, string>) => void;
};

export const PromptForm = ({ category, inputs, setInputs }: Props) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  return (
    <form className="space-y-4">
      {category === 'menu' && (
        <>
          <div>
            <label className="block font-semibold">Dish Name</label>
            <input
              name="dishName"
              value={inputs.dishName || ''}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">Ingredients</label>
            <textarea
              name="ingredients"
              value={inputs.ingredients || ''}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
        </>
      )}

      {category === 'social' && (
        <>
          <div>
            <label className="block font-semibold">Promotion Type</label>
            <input
              name="promoType"
              value={inputs.promoType || ''}
              onChange={handleChange}
              placeholder="e.g. Happy Hour, Chef Special"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">Dish or Event Name</label>
            <input
              name="promoTarget"
              value={inputs.promoTarget || ''}
              onChange={handleChange}
              placeholder="e.g. Sangria Flight"
              className="w-full border p-2 rounded"
            />
          </div>
        </>
      )}

      {category === 'review' && (
        <>
          <div>
            <label className="block font-semibold">Review Text</label>
            <textarea
              name="reviewText"
              value={inputs.reviewText || ''}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">Tone</label>
            <input
              name="tone"
              value={inputs.tone || ''}
              onChange={handleChange}
              placeholder="e.g. polite, professional, casual"
              className="w-full border p-2 rounded"
            />
          </div>
        </>
      )}

      {category === 'sop' && (
        <>
          <div>
            <label className="block font-semibold">Role</label>
            <input
              name="role"
              value={inputs.role || ''}
              onChange={handleChange}
              placeholder="e.g. Line Cook, Dishwasher"
              className="w-full border p-2 rounded"
            />
          </div>
          <div>
            <label className="block font-semibold">Task Description</label>
            <textarea
              name="task"
              value={inputs.task || ''}
              onChange={handleChange}
              placeholder="e.g. End of day cleaning duties"
              className="w-full border p-2 rounded"
            />
          </div>
        </>
      )}
    </form>
  );
};
