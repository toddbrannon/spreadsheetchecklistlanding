import React, { useState } from 'react';

interface FormProps {
  buttonText: string;
  className?: string;
}

const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

const Form: React.FC<FormProps> = ({ buttonText, className = '' }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({ name: '', email: '', submission: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '', submission: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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

    if (newErrors.name || newErrors.email) return;

    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const body = new URLSearchParams({
        name: formData.name,
        email: formData.email,
        source: window.location.href,
        timestamp: new Date().toISOString(),
      }).toString();

      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });

      if (!response.ok) throw new Error(`Status: ${response.status}`);
      setFormData({ name: '', email: '' });
      setIsSuccess(true);
    } catch (error: any) {
      console.error('Submit error:', error);
      setErrors((prev) => ({
        ...prev,
        submission: 'Something went wrong. Please try again.',
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {isSuccess && (
        <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg">
          ✅ Thank you! Your checklist is on its way to your inbox.
        </div>
      )}

      {errors.submission && (
        <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
          {errors.submission}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors`}
          placeholder="Jane Smith"
          required
        />
        {errors.name && <p className="text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-md border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors`}
          placeholder="jane@company.com"
          required
        />
        {errors.email && <p className="text-sm text-red-600">{errors.email}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium transition-colors disabled:bg-gray-400"
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
