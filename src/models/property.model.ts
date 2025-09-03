export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  image: string;
  status: "rent" | "sale";
  type: "house" | "apartment";
  rooms: number;
  squarefeets: number;
  description?: string;
}