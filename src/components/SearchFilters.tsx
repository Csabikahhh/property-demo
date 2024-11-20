import { Search } from 'lucide-react';
import { PropertyFilters } from '../types';

interface SearchFiltersProps {
  filters: PropertyFilters;
  onFilterChange: (filters: PropertyFilters) => void;
}

export function PropertySearchFilters({ filters, onFilterChange }: SearchFiltersProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Min Price
          </label>
          <select
            className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
            value={filters.minPrice || ''}
            onChange={(e) => onFilterChange({ ...filters, minPrice: Number(e.target.value) })}
          >
            <option value="">Any</option>
            <option value="500000">$500,000</option>
            <option value="750000">$750,000</option>
            <option value="1000000">$1,000,000</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Max Price
          </label>
          <select
            className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
            value={filters.maxPrice || ''}
            onChange={(e) => onFilterChange({ ...filters, maxPrice: Number(e.target.value) })}
          >
            <option value="">Any</option>
            <option value="1000000">$1,000,000</option>
            <option value="1500000">$1,500,000</option>
            <option value="2000000">$2,000,000</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bedrooms
          </label>
          <select
            className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
            value={filters.beds || ''}
            onChange={(e) => onFilterChange({ ...filters, beds: Number(e.target.value) })}
          >
            <option value="">Any</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Property Type
          </label>
          <select
            className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-indigo-500"
            value={filters.propertyType || ''}
            onChange={(e) => onFilterChange({ ...filters, propertyType: e.target.value })}
          >
            <option value="">Any</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
        </div>
      </div>
    </div>
  );
}