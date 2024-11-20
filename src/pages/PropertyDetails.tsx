import { useParams } from 'react-router-dom';
import { properties } from '../data/properties';
import { Home, Bath, Maximize, MapPin, Calendar, Phone, Mail } from 'lucide-react';

export function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p className="text-center text-xl text-gray-600">Property not found</p>
      </div>
    );
  }

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <img 
            src={property.imageUrl} 
            alt={property.title}
            className="w-full h-[500px] object-cover rounded-xl shadow-lg"
          />
        </div>

        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span className="text-lg">{property.location}</span>
            </div>
            <p className="text-3xl font-bold text-indigo-600">
              {formatter.format(property.price)}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center text-gray-600">
                <Home className="w-5 h-5 mr-2" />
                <span>{property.beds} beds</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center text-gray-600">
                <Bath className="w-5 h-5 mr-2" />
                <span>{property.baths} baths</span>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center text-gray-600">
                <Maximize className="w-5 h-5 mr-2" />
                <span>{property.sqft} sqft</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold mb-4">Schedule a Viewing</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    className="pl-10 w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Phone
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    className="pl-10 w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    className="pl-10 w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <button type="submit" className="w-full btn">
                Schedule Viewing
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}