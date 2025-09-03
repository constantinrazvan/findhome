"use client"
import PostCard from "@/components/PostCard";
import SwitchButton from "@/components/SwitchButton";
import { useState, useEffect } from "react";
import { Property } from "@/models/property.model";

const ForSale = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState<"all" | "houses" | "apartments">("all");

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const response = await fetch('/properties.json');
        
        if (!response.ok) {
          throw new Error('Failed to fetch properties');
        }
        
        const data = await response.json();
        const saleProperties = data.properties?.filter((prop: Property) => prop.status === "sale") || [];
        setProperties(saleProperties);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred';
        setError(errorMessage);
        console.error('Error fetching properties:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const filteredProperties = properties.filter((p: Property) => {
    if (filter === "all") return true;
    if (filter === "houses") return p.type === "house";
    if (filter === "apartments") return p.type === "apartment";
    return true;
  });

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-emerald-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading properties...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Error</div>
          <p className="text-gray-600">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-emerald-500 text-white rounded hover:bg-emerald-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-4">
          <h1 className="font-bold text-5xl text-emerald-500">For sale</h1>
          <p className="text-gray-700 text-2xl">
            Different types of houses and apartments available for sale.
          </p>
        </div>

        <div className="flex justify-start mb-8">
          <SwitchButton active={filter} setActive={setFilter} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property: Property) => (
            <PostCard key={property.id} {...property} />
          ))}
        </div>

        {filteredProperties.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-xl">No properties found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForSale;