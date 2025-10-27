import React from "react";

// Mock Icon Components (using inline SVG since external libraries are typically not available in single-file environments)

const ZapIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

// FIX APPLIED HERE: Corrected the xmlns attribute string.
const ShieldIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

const TrendingUpIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

// Main Application Component
const App = () => {
  return (
    // Use Inter font and a smooth background color
    <div className="min-h-screen bg-gray-50 font-sans antialiased">
      {/* Header: Sticky, blurred background for a modern feel. 
        Fully responsive layout using flexbox.
      */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          {/* Logo/Brand */}
          <div className="text-2xl font-extrabold text-indigo-600">
            Arpitha<span className="text-gray-900">App</span>
          </div>

          {/* Call to Action Button */}
          <button className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Get Started
          </button>
        </div>
      </header>

      <main>
        {/* Hero Section: Main landing message. 
          Centered, responsive padding, and an appealing gradient background. 
        */}
        <section className="py-20 sm:py-32 bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4">
              Build Your Future{" "}
              <span className="block sm:inline">Faster Than Ever</span>
            </h1>
            <p className="text-xl sm:text-2xl font-light opacity-90 mb-8 max-w-2xl mx-auto">
              A single-page solution designed with simplicity and performance in
              mind. Tailored for mobile and desktop perfection.
            </p>
            {/* Primary CTA */}
            <button className="px-8 py-3 text-lg font-semibold rounded-full shadow-lg text-indigo-700 bg-white hover:bg-gray-100 transform hover:scale-105 transition duration-300 ease-in-out">
              Start Your Project Today
            </button>
          </div>
        </section>

        {/* Features Section: Grid layout of key selling points. 
          Automatically stacks on mobile and spreads out on desktop.
        */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Core Features
            </h2>

            {/* 3-Column Grid, stacks on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Feature 1 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <ZapIcon className="w-10 h-10 text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Blazing Fast
                </h3>
                <p className="text-gray-600">
                  Built with modern React and optimized Tailwind CSS to ensure
                  immediate load times and silky smooth performance.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <ShieldIcon className="w-10 h-10 text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Secure & Reliable
                </h3>
                <p className="text-gray-600">
                  Focus on stability and data integrity, ensuring your
                  application runs reliably 24/7 without unexpected downtime.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                <TrendingUpIcon className="w-10 h-10 text-indigo-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Scalable Growth
                </h3>
                <p className="text-gray-600">
                  Easily extendable component structure allows you to scale your
                  application as your business demands grow.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Arpitha App. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm"
            >
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="#"
              className="text-gray-400 hover:text-indigo-400 transition duration-150 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
