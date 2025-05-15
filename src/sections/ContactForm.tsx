'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


const formSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Invalid email address' }),
  company: z.string().min(1, { message: 'Company is required' }),
  licenseType: z.string().min(1, { message: 'Please select a license type' }),
  message: z.string().min(1, { message: 'Message is required' }),
});


type FormValues = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      licenseType: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

   
    try {
      
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form submitted with:', data);
      setSubmitSuccess(true);
      reset();

      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-[#E8EAFF] via-[#D8DCFF] to-[#3B5EE8] dark:bg-gradient-to-b dark:from-[#1a1a2e] dark:via-[#1a1a4e] dark:to-[#183EC2]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Form - Left Side */}
          <motion.div
            className="flex-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Get in touch to learn more about how we can help with your
                software licensing needs
              </p>

              {submitSuccess && (
                <motion.div
                  className="bg-green-100 dark:bg-green-900/30 p-4 rounded-lg mb-6"
                  initial="hidden"
                  animate="visible"
                  variants={successVariants}
                >
                  <p className="text-green-700 dark:text-green-300 font-medium">
                    Thanks for reaching out! We'll get back to you soon.
                  </p>
                </motion.div>
              )}

              <motion.form
                onSubmit={handleSubmit(onSubmit)}
                variants={formVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name Field */}
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                        errors.name
                          ? 'border-red-500 dark:border-red-500'
                          : 'border-gray-300'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-400"
                      >
                        {errors.name.message}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Email Field */}
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                        errors.email
                          ? 'border-red-500 dark:border-red-500'
                          : 'border-gray-300'
                      }`}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-400"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Company Field */}
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      {...register('company')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                        errors.company
                          ? 'border-red-500 dark:border-red-500'
                          : 'border-gray-300'
                      }`}
                      placeholder="Your company"
                    />
                    {errors.company && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-400"
                      >
                        {errors.company.message}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* License Type Field */}
                  <motion.div variants={itemVariants}>
                    <label
                      htmlFor="licenseType"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      License Type *
                    </label>
                    <select
                      id="licenseType"
                      {...register('licenseType')}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                        errors.licenseType
                          ? 'border-red-500 dark:border-red-500'
                          : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select license type</option>
                      <option value="enterprise">Enterprise Software</option>
                      <option value="saas">SaaS Subscription</option>
                      <option value="perpetual">Perpetual License</option>
                      <option value="volumeLicense">Volume License</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.licenseType && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-1 text-sm text-red-600 dark:text-red-400"
                      >
                        {errors.licenseType.message}
                      </motion.p>
                    )}
                  </motion.div>
                </div>

                {/* Message Field */}
                <motion.div className="mb-6" variants={itemVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={4}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                      errors.message
                        ? 'border-red-500 dark:border-red-500'
                        : 'border-gray-300'
                    }`}
                    placeholder="Tell us about your software license needs"
                  ></textarea>
                  {errors.message && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-1 text-sm text-red-600 dark:text-red-400"
                    >
                      {errors.message.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Submit'
                  )}
                </motion.button>
              </motion.form>
            </div>
          </motion.div>

          {/* Personal Text - Right Side */}
          <motion.div 
            className="flex-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose Our Licensing Solutions
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Tailored For Your Business
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our licensing solutions are customized to meet the specific needs of your organization, 
                    whether you're a startup or an enterprise.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Cost-Effective Management
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reduce overhead and optimize your software spending with our intelligent 
                    license management platform.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Our team of experts is always available to help you navigate complex licensing 
                    challenges and find the best solutions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
