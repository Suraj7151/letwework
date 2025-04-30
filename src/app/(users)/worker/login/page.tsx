/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useState } from 'react';

const Page = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [message, setMessage] = useState('');
  const [processing, setProcessing] = useState(false); // State to track form submission
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate passwords match
    if (signupData.password !== signupData.confirmPassword) {
      setMessage('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: signupData.name,
          email: signupData.email,
          password: signupData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Signup successful!');
        setSignupData({ name: '', email: '', password: '', confirmPassword: '' });
      } else {
        setMessage(data.error || 'Something went wrong!');
      }
    } catch (error) {
      setMessage('Error connecting to the server.');
    }
  };

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setProcessing(true); // Set processing state to true

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('Login successful!');
        window.location.href = '/worker/dashboard'; // Redirect to dashboard
      } else {
        setMessage(data.error || 'Invalid email or password');
      }
    } catch (error) {
      setMessage('Error connecting to the server.');
    } finally {
      setProcessing(false); // Reset processing state
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96 overflow-hidden">
        {/* Title Section */}
        <div className="flex w-[200%] transition-all duration-500" style={{ marginLeft: isSignup ? '-100%' : '0%' }}>
          <div className="w-1/2 text-2xl font-semibold text-center">Login Form</div>
          <div className="w-1/2 text-2xl font-semibold text-center">Signup Form</div>
        </div>

        {/* Toggle Tabs */}
        <div className="mt-6">
          <div className="relative flex border border-gray-300 rounded-xl overflow-hidden h-12 mb-6">
            <label
              className={`w-1/2 text-center leading-[3rem] font-medium cursor-pointer z-10 ${!isSignup ? 'text-white' : ''}`}
              onClick={() => setIsSignup(false)}
            >
              Login
            </label>
            <label
              className={`w-1/2 text-center leading-[3rem] font-medium cursor-pointer z-10 ${isSignup ? 'text-white' : ''}`}
              onClick={() => setIsSignup(true)}
            >
              Signup
            </label>
            <div
              className="absolute top-0 w-1/2 h-full bg-gradient-to-l from-blue-900 via-blue-800 to-blue-700 rounded-xl transition-all duration-500"
              style={{ left: isSignup ? '50%' : '0%' }}
            ></div>
          </div>

          {/* Conditional Form Rendering */}
          <div className="w-full">
            {/* Login Form */}
            {!isSignup && (
              <form className="w-full" onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Email Address"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    required
                    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    required
                    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="relative h-12 w-full rounded-xl overflow-hidden">
                  <div className="absolute left-[-100%] w-[300%] h-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 transition-all duration-300 hover:left-0 rounded-xl"></div>
                  <button
                    type="submit"
                    disabled={processing} // Disable button while processing
                    className={`relative z-10 w-full h-full bg-transparent text-white font-medium cursor-pointer ${
                      processing ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-700 hover:bg-blue-800'
                    }`}
                  >
                    {processing ? 'Processing...' : 'Login'}
                  </button>
                </div>
                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
                <div className="text-center text-sm text-gray-600">
                  Not a member?{' '}
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsSignup(true);
                    }}
                    className="text-blue-600 hover:underline"
                  >
                    Signup now
                  </a>
                </div>
              </form>
            )}

            {/* Signup Form */}
            {isSignup && (
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Name"
                    value={signupData.name}
                    onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    required
                    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Email Address"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    required
                    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Password"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    required
                    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    required
                    className="w-full h-12 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="relative h-12 w-full rounded-xl overflow-hidden">
                  <div className="absolute left-[-100%] w-[300%] h-full bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 transition-all duration-300 hover:left-0 rounded-xl"></div>
                  <input
                    type="submit"
                    value="Signup"
                    className="relative z-10 w-full h-full bg-transparent text-white font-medium cursor-pointer"
                  />
                </div>
                {message && <p className="mt-4 text-center text-red-500">{message}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
