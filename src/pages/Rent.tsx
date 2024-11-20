import { useState } from 'react';
import { PropertySearchFilters } from '../components/SearchFilters';
import { PropertyCard } from '../components/PropertyCard';
import { properties } from '../data/properties';
import type { PropertyFilters } from '../types';
import { Link } from 'react-router-dom';

export function Rent() {
  const [filters, setFilters] = useState<PropertyFilters>({});

  // Filter for rental properties (in a real app, we'd have a separate rental dataset)
  const rentalProperties = properties.map(p => ({
    ...p,
    price: Math.round(p.price * 0.004), // Simulate monthly rent
  }));

  const filteredProperties = rentalProperties.filter(property => {
    if (filters.minPrice && property.price < filters.minPrice) return false;
    if (filters.maxPrice && property.price > filters.maxPrice) return false;
    if (filters.beds && property.beds < filters.beds) return false;
    if (filters.propertyType && property.type !== filters.propertyType) return false;
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Perfect Rental
        </h1>
        <p className="text-xl text-gray-600">
          Discover amazing properties available for rent
        </p>
      </div>

      <PropertySearchFilters filters={filters} onFilterChange={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map(property => (
          <Link key={property.id} to={`/property/${property.id}?type=rent`}>
            <PropertyCard property={property} />
          </Link>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No rental properties found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}