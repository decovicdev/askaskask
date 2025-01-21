import { useForm, } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import d from 'zod'



/**
 * Custom hook that sets up a form with validation using a Zod schema.
 *
 * @param {import('zod').ZodSchema} schema - The Zod schema used for form validation.
 * @param {import('react-hook-form').UseFormProps} props - Additional properties to be passed to the `useForm` hook.
 *
 * @returns {import('react-hook-form').UseFormReturn} The form object configured with the provided schema and properties.
 */

export default function useHookForm(schema, props) {
  const form = useForm({
    resolver: zodResolver(schema),
    ...props,
  });

  return form;
}
