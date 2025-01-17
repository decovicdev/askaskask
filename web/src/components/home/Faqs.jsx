import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';

export default function Faqs() {
  const faqs = [
    {
      question: 'What is the transit API? Why should I use the transit API?',
      answer:
        "First of all, if you ask GPT-4: Are you GPT4? It will most likely answer: I am OpenAI's GPT-3 model. The reason for this is that the training data of GPT-4 that OpenAI opened to API calls was before September 2021. After the model is trained, if it is not retrained, the knowledge inside will not be automatically updated. This is like if I ask you in 2021 what you ate for your first meal in 2023, the answer must be wrong.",
    },
    {
      question: 'Why can ChatGPT Plus’s GPT-4 answer that it is GPT-4?',
      answer:
        "First of all, if you ask GPT-4: Are you GPT4? It will most likely answer: I am OpenAI's GPT-3 model. The reason for this is that the training data of GPT-4 that OpenAI opened to API calls was before September 2021. After the model is trained, if it is not retrained, the knowledge inside will not be automatically updated. This is like if I ask you in 2021 what you ate for your first meal in 2023, the answer must be wrong.",
    },
    {
      question: 'How do I determine whether it is a GPT-4 model?',
      answer:
        "First of all, if you ask GPT-4: Are you GPT4? It will most likely answer: I am OpenAI's GPT-3 model. The reason for this is that the training data of GPT-4 that OpenAI opened to API calls was before September 2021. After the model is trained, if it is not retrained, the knowledge inside will not be automatically updated. This is like if I ask you in 2021 what you ate for your first meal in 2023, the answer must be wrong.",
    },
    {
      question:
        'Why does the token created in the backend not show the used amount?',
      answer:
        "First of all, if you ask GPT-4: Are you GPT4? It will most likely answer: I am OpenAI's GPT-3 model. The reason for this is that the training data of GPT-4 that OpenAI opened to API calls was before September 2021. After the model is trained, if it is not retrained, the knowledge inside will not be automatically updated. This is like if I ask you in 2021 what you ate for your first meal in 2023, the answer must be wrong.",
    },
    {
      question: 'Unable to Login',
      answer:
        "First of all, if you ask GPT-4: Are you GPT4? It will most likely answer: I am OpenAI's GPT-3 model. The reason for this is that the training data of GPT-4 that OpenAI opened to API calls was before September 2021. After the model is trained, if it is not retrained, the knowledge inside will not be automatically updated. This is like if I ask you in 2021 what you ate for your first meal in 2023, the answer must be wrong.",
    },
    {
      question: 'Invalid Token',
      answer:
        "First of all, if you ask GPT-4: Are you GPT4? It will most likely answer: I am OpenAI's GPT-3 model. The reason for this is that the training data of GPT-4 that OpenAI opened to API calls was before September 2021. After the model is trained, if it is not retrained, the knowledge inside will not be automatically updated. This is like if I ask you in 2021 what you ate for your first meal in 2023, the answer must be wrong.",
    },
  ];

  return (
    <div className='bg-gray-500/5 max-w-6xl mx-auto p-20 mt-5 rounded-3xl'>
      <h2 className='font-semibold text-4xl mb-3'>
        Frequently Asked Questions
      </h2>
      <p className='mb-8'>Here are some handpicked FAQ for your use</p>

      <Accordion type='single' collapsible className='w-full'>
        {faqs.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={item.question}
            className='mb-4'
          >
            <AccordionTrigger className='bg-white rounded-xl mb-4 px-8 py-5 font-bold text-lg'>
              {item.question}
            </AccordionTrigger>
            <AccordionContent className='bg-white rounded-xl px-8 py-5 text-lg text-gray-500'>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Link
        href='/register'
        className='border-2 w-52 text-center bg-white mt-14 inline-block border-black  px-7 py-3 rounded-2xl text-lg font-semibold text-black '
      >
        See more
      </Link>
    </div>
  );
}
