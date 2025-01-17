import { Link } from 'react-router-dom';

export default function QuickGuide() {
  return (
    <div className='bg-dark-gray pt-24 pb-8'>
      <div className='flex justify-between max-w-6xl p-16  shadow-[0px_4px_120px_rgba(193,79,231,0.3)] mx-auto bg-black/25 rounded-2xl text-white'>
        <div>
          <h3 className='text-4xl font-semibold mb-5'>Quick start guide</h3>
          <p className='font-bold max-w-md mb-20 text-lg'>
            1 second use: Click on the token , create a token, and click [Chat]
            behind the token to import and use it with one click
          </p>

          <div className='flex gap-6'>
            <Link
              href='/pricing'
              className='bg-white px-7 py-3 rounded-2xl text-lg font-semibold text-black '
            >
              See Pricing
            </Link>

            <Link
              href='/register'
              className='bg-gray-700 px-7 py-3 rounded-2xl text-lg font-semibold text-white '
            >
              Create an Account
            </Link>
          </div>
        </div>
        <p className='max-w-md text-lg'>
          Our program has been redeveloped (can be deployed on behalf of others)
          and supports the use of all models on our website. After selecting a
          model, there will be an upload button. It supports uploading all types
          of files for analysis, official multimodal analysis, speech to text
          (whisper-1), text to speech (tts1), GPTS, 🎨 Midjourney drawing. If
          you cannot find the model you need, please enter the model name in the
          custom model and select it.
        </p>
      </div>
    </div>
  );
}
