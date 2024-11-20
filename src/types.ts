export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'house' | 'apartment' | 'condo';
  imageUrl: string;
  featured: boolean;
}

export interface PropertyFilters {
  minPrice?: number;
  maxPrice?: number;
  beds?: number;
  propertyType?: string;
}