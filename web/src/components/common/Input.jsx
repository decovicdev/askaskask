import React from 'react';

export default function Input(props) {
  const { label, ...rest } = props;

  return (
    <div className='grid gap-2 max-w-96 w-full'>
      <label className='text-xs text-gray-500'>{label}</label>
      <input {...rest} className='border rounded-xl px-4 py-2.5  text-base' />
    </div>
  );
}
