import React, { useState } from 'react';

interface FormProps {
  buttonText: string;
  className?: string;
}

const GOOGLE_SHEETS_URL = import.meta.env.VITE_GOOGLE_SHEETS_URL;

const Form: React.FC<FormProps> = ({ buttonText, className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

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
    }));
  };

  const validateBeforeSubmit = () => {
    const newErrors = {
      name: formData.name ? '' : 'Name is required',
      email: !formData.email
        ? 'Email is required'
        : !validateEmail(formData.email)
        ? 'Please enter a valid email'
        : '',
    };
    setErrors(newErrors);
    return !newErrors.name && !newErrors.email;
  };

  return (
    <form
      action={GOOGLE_SHEETS_URL}
      method="POST"
      target="_blank"
      onSubmit={(e) => {
        if (!validateBeforeSubmit()) e.preventDefault();
      }}
      className={`space-y-4 ${className}`}
    >
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
          className={`w-full px-4 py-3 rounded-md border ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors`}
          placeholder="Jane Smith"
          required
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
          className={`w-full px-4 py-3 rounded-md border ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors`}
          placeholder="jane@company.com"
          required
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md font-medium transition-colors duration-300"
      >
        {buttonText}
      </button>

      <p className="text-xs text-gray-500 text-center mt-2">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </form>
  );
};

export default Form;
