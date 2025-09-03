"use client"
import { Property } from "@/models/property.model";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { MapPin, Home, Maximize, DollarSign, Mail, Phone, User } from "lucide-react";

const SinglePageSale = () => {
  const { id } = useParams();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [contactForm, setContactForm] = useState({
    name: "",
    lastname: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/properties.json');
        const data = await response.json();
        const foundProperty = data.properties.find((p: Property) => p.id.toString() === id);
        setProperty(foundProperty || null);
      } catch (error) {
        console.error('Error fetching property:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', {
      ...contactForm,
      propertyId: property?.id,
      timestamp: new Date()
    });
    setContactForm({
      name: "",
      lastname: "",
      email: "",
      phone: "",
      message: ""
    });
    alert('Message sent successfully!');
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedImage(index);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading property...</p>
        </div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Property Not Found</h1>
          <p className="text-gray-600">The property you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="relative">
            <img
              src={property.images[selectedImage]}
              alt={`${property.title} - Image ${selectedImage + 1}`}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {property.images.length > 1 && (
            <div className="p-4">
              <div className="flex gap-3 overflow-x-auto">
                {property.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => handleThumbnailClick(index)}
                    className="flex-shrink-0 relative rounded-md overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`${property.title} - Thumbnail ${index + 1}`}
                      className="w-20 h-20 object-cover cursor-pointer transition-opacity"
                    />
                    {selectedImage === index && (
                      <div className="absolute inset-0 backdrop-blur-[2px]"></div>
                    )}
                  </button>


                ))}
              </div>
            </div>
          )}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2 md:mb-0">{property.title}</h1>
            <div className="text-2xl font-bold text-emerald-600">
              ${property.price.toLocaleString()}
              {property.status === 'sale' && <span className="text-lg"></span>}
            </div>
          </div>

          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="h-5 w-5 mr-2" />
            <span>{property.location}</span>
          </div>

          {/* Property Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="flex items-center">
              <Home className="h-5 w-5 text-emerald-600 mr-2" />
              <span className="text-gray-700">{property.rooms} rooms</span>
            </div>
            <div className="flex items-center">
              <Maximize className="h-5 w-5 text-emerald-600 mr-2" />
              <span className="text-gray-700">{property.squarefeets} sq ft</span>
            </div>
            <div className="flex items-center">
              <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                For {property.status}
              </span>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">{property.description}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Interested in this property?</h2>
          <p className="text-gray-600 mb-6">Send us a message and we'll get back to you soon!</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="John"
                  required
                />
              </div>

              <div>
                <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  value={contactForm.lastname}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={contactForm.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={contactForm.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                placeholder={`I'm interested in ${property.title}. Please contact me for more details.`}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SinglePageSale;