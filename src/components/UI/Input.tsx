import React, { FC } from 'react';

interface InputProps {
  title: string;
  value: string;
  onChange: (event: any) => void;
}

const Input: FC<InputProps> = ({ title, value, onChange }) => {
  return (
    <div className="sm:col-span-4">
      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
        {title}
      </label>
      <div className="mt-2">
        <input
          value={value}
          onChange={event => onChange(event.target.value)}
          type="text"
          name="first-name"
          id="first-name"
          autoComplete="given-name"
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Input;
