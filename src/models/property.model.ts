export interface Property {
  id: string;  // Change this to string too for consistency
  title: string;
  location: string;
  price: number;
  images: string[];
  status: "rent" | "sale";
  type: "house" | "apartment";
  rooms: number;
  squarefeets: number;
  description?: string;
  ownerId: string;  // Just reference the owner's ObjectId
}