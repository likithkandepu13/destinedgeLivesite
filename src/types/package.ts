export interface Price {
  people: string;
  price: string;
}

export interface Prices {
  [key: string]: Price;
}

export interface Place {
  name: string;
  description: string;
  image: string;
}

export interface Package {
  id: string;
  title: string;
  days: string;
  thumbnail: string;
  itinerary: string[];
  stay: string;
  prices: Prices;
  includes: string[];
  places: Place[];
  contactNumber?: string;
  isBestSeller?: boolean;
}