import { Shield, Award, Heart } from 'lucide-react';

export function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About LuxuryEstates
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're more than just a real estate company. We're your partner in finding the perfect place to call home.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Shield className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Trust & Reliability</h3>
          <p className="text-gray-600">
            With over 20 years of experience, we've built our reputation on trust and exceptional service.
          </p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Award className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Industry Leaders</h3>
          <p className="text-gray-600">
            Recognized as one of the top real estate agencies in the country.
          </p>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Heart className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Client Focused</h3>
          <p className="text-gray-600">
            Your satisfaction is our top priority. We're here to help you every step of the way.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80&w=1600"
            alt="Our Team"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2000, LuxuryEstates has grown from a small local agency to one of the most trusted names in luxury real estate. Our journey has been driven by a simple mission: to help people find their perfect home.
          </p>
          <p className="text-gray-600 mb-4">
            We believe that finding a home is about more than just property - it's about finding a place where memories will be made and lives will flourish. This belief guides everything we do.
          </p>
          <p className="text-gray-600">
            Today, we're proud to have helped thousands of clients achieve their real estate dreams, whether buying, selling, or renting.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
              rows={4}
              placeholder="How can we help you?"
            />
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="btn">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}