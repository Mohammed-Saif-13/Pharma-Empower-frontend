// src/pages/Register.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/lib/authSchemas';
import { Button } from '@/components/ui/button';
import { UserPlus, Mail, Eye, EyeOff, Lock, AlertCircle, User } from 'lucide-react';

/**
 * Register Page Component
 * User registration with React Hook Form and Zod validation
 * Uses Indigo theme (primary brand color from document)
 */
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(registerSchema),
        mode: 'onBlur',
    });

    const onSubmit = async (data) => {
        try {
            console.log('Register Data:', data);

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Replace with actual API call
            // const response = await registerAPI(data);
            // if (response.success) {
            //   alert('Registration successful! Please login.');
            //   navigate('/login');
            // }

            alert('Registration successful! Please login. (Demo)');
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <div className="py-12 md:py-20 bg-slate-50 min-h-screen">
            <div className="container mx-auto px-4">

                {/* Header */}
                <header className="text-center mb-8 max-w-2xl mx-auto">
                    <UserPlus className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">
                        Create Your Account
                    </h1>
                    <p className="text-lg text-slate-600">
                        Join the global community of pharma professionals
                    </p>
                </header>

                {/* Register Form */}
                <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-2xl border-t-4 border-indigo-600">

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                                Full Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="John Doe"
                                    autoComplete="name"
                                    {...register('name')}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ${errors.name ? 'border-red-500' : 'border-slate-300'
                                        }`}
                                />
                            </div>
                            {errors.name && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    {...register('email')}
                                    className={`w-full pl-10 pr-4 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ${errors.email ? 'border-red-500' : 'border-slate-300'
                                        }`}
                                />
                            </div>
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    {...register('password')}
                                    className={`w-full pl-10 pr-12 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ${errors.password ? 'border-red-500' : 'border-slate-300'
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.password.message}
                                </p>
                            )}
                            <p className="mt-1 text-xs text-slate-500">
                                Must be 8+ characters with uppercase, lowercase, and number
                            </p>
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700 mb-1">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    placeholder="••••••••"
                                    autoComplete="new-password"
                                    {...register('confirmPassword')}
                                    className={`w-full pl-10 pr-12 py-2 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition ${errors.confirmPassword ? 'border-red-500' : 'border-slate-300'
                                        }`}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600"
                                >
                                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-red-600 flex items-center">
                                    <AlertCircle className="w-4 h-4 mr-1" />
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creating Account...
                                </span>
                            ) : (
                                <>
                                    <UserPlus className="w-4 h-4 mr-2" />
                                    Create Account
                                </>
                            )}
                        </Button>

                        {/* Terms & Privacy */}
                        <p className="text-xs text-slate-500 text-center">
                            By signing up, you agree to our{' '}
                            <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                                Privacy Policy
                            </a>
                        </p>
                    </form>

                    {/* Link to Login */}
                    <div className="mt-6 text-center border-t pt-4">
                        <p className="text-sm text-slate-600">
                            Already have an account?
                            <Link
                                to="/login"
                                className="ml-2 text-indigo-600 hover:text-indigo-700 font-semibold"
                            >
                                Sign In
                            </Link>
                        </p>
                    </div>

                    {/* Social Login */}
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-slate-500">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-4 grid grid-cols-2 gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full hover:bg-slate-50"
                                onClick={() => alert('Google OAuth integration pending')}
                            >
                                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Google
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full hover:bg-slate-50"
                                onClick={() => alert('LinkedIn OAuth integration pending')}
                            >
                                <svg className="w-5 h-5 mr-2" fill="#0A66C2" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                LinkedIn
                            </Button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Register;