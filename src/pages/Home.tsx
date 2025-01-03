import { useState } from 'react';
import { PropertySearchFilters } from '../components/SearchFilters';
import { PropertyCard } from '../components/PropertyCard';
import { properties } from '../data/properties';
import type { PropertyFilters } from '../types';
import { Link } from 'react-router-dom';

export function Home() {
  const [filters, setFilters] = useState<PropertyFilters>({});

    const filteredProperties = properties.filter(property => {
        return (
            (!filters.minPrice || property.price >= filters.minPrice) &&
            (!filters.maxPrice || property.price <= filters.maxPrice) &&
            (!filters.beds || property.beds >= filters.beds) &&
            (!filters.propertyType || property.type === filters.propertyType)
        );
    });


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Dream Home
        </h1>
        <p className="text-xl text-gray-600">
          Discover the perfect property that matches your lifestyle
        </p>
      </div>

      <PropertySearchFilters filters={filters} onFilterChange={setFilters} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProperties.map(property => (
          <Link key={property.id} to={`/property/${property.id}`}>
            <PropertyCard property={property} />
          </Link>
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No properties found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
}