import { Home, DollarSign, Users, CheckCircle } from 'lucide-react';

export function Sell() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Sell Your Property With Us
        </h1>
        <p className="text-xl text-gray-600">
          Get the best value for your property with our expert team
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Home className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Free Property Valuation</h3>
          <p className="text-gray-600">Get an accurate estimate of your property's worth in today's market</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <Users className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
          <p className="text-gray-600">Our experienced agents will guide you through the entire selling process</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-4">
            <DollarSign className="w-8 h-8 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Maximum Value</h3>
          <p className="text-gray-600">We'll help you get the best possible price for your property</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">List Your Property</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
              placeholder="John Doe"
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
              placeholder="(555) 123-4567"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Type
            </label>
            <select className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500">
              <option value="">Select type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
            </select>
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Address
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
              placeholder="123 Main St, City, State"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Details
            </label>
            <textarea
              className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
              rows={4}
              placeholder="Tell us more about your property..."
            />
          </div>

          <div className="md:col-span-2">
            <button type="submit" className="btn">
              Submit Property
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}