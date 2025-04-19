import React, { useState } from 'react';

interface FormProps {
  buttonText: string;
  className?: string;
  onSubmit?: (formData: { name: string; email: string }) => void;
}

const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

const Form: React.FC<FormProps> = ({ buttonText, className = '', onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    submission: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
      submission: '',
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors((prev) => ({ ...prev, submission: '' }));
    setIsSuccess(false);

    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      email: !formData.email
        ? 'Email is required'
        : !validateEmail(formData.email)
        ? 'Please enter a valid email'
        : '',
      submission: '',
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email) {
      setIsSubmitting(true);

      try {
        const body = new URLSearchParams({
          name: formData.name,
          email: formData.email,
          timestamp: new Date().toISOString(),
          source: window.location.href
        }).toString();

        const response = await fetch(GOOGLE_SHEETS_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body,
        });

        if (!response.ok) {
          const errorText = await response.text().catch(() => 'No error message available');
          throw new Error(`Failed to submit form: ${response.status} ${response.statusText}. ${errorText}`);
        }

        setFormData({ name: '', email: '' });
        setIsSuccess(true);

        if (onSubmit) {
          onSubmit(formData);
        }
      } catch (error: any) {
        console.error('Form submission error:', error);
        setErrors((prev) => ({
          ...prev,
          submission: 'Sorry, there was an error submitting the form. Please try again.'
        }));
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {isSuccess && (
        <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg" role="alert">
          ✅ Thank you! Your checklist is on its way to your inbox.
        </div>
      )}

      {errors.submission && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
          {errors.submission}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={isSubmitting}
          className={`w-full px-4 py-3 rounded-md border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed`}
          placeholder="Jane Smith"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={isSubmitting}
          className={`w-full px-4 py-3 rounded-md border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed`}
          placeholder="jane@company.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : buttonText}
      </button>

      <p className="text-xs text-gray-500 text-center mt-2">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
};

export default Form;
