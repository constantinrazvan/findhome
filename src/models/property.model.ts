export interface Property {
  id: string;  
  title: string;
  location: string;
  price: number;
  images: string[];
  status: "rent" | "sale";
  type: "house" | "apartment";
  rooms: number;
  squarefeets: number;
  description?: string;
  ownerId: string;
  currency: string;
}