export interface Bike {
    id: string;
    model: string;
    image: string;
    pricePerDay: number;
    maxKmPerDay: number;
    features: string[];
    availability: boolean;
    engineCC: number;
    mileage: string;
  }