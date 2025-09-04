"use client";
import { Owner } from "@/models/owner.model";
import { Property } from "@/models/property.model";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditProperty = () => {

    const [formData, setFormData] = useState({
        title: '',
        location: '',
        price: 0,
        status: '',
        type: '',
        rooms: 0,
        squarefeets: 0,
        description: '',
        ownerId: '',
        currency: ''
    });

    const [properties, setProperties] = useState<Property[]>([
            {
                id: '1',
                title: 'Modern Downtown Apartment',
                location: 'Downtown, New York',
                price: 2500,
                images: ['/property1.jpg'],
                status: 'rent',
                type: 'apartment',
                rooms: 2,
                squarefeets: 1200,
                description: 'Beautiful modern apartment in the heart of downtown',
                ownerId: '1',
                currency: 'USD'
            },
            {
                id: '2',
                title: 'Suburban Family House',
                location: 'Suburbs, Los Angeles',
                price: 450000,
                images: ['/property2.jpg'],
                status: 'sale',
                type: 'house',
                rooms: 4,
                squarefeets: 2500,
                description: 'Spacious family house with garden',
                ownerId: '2',
                currency: 'USD'
            },
            {
                id: '3',
                title: 'Luxury Penthouse',
                location: 'Manhattan, New York',
                price: 5500,
                images: ['/property3.jpg'],
                status: 'rent',
                type: 'apartment',
                rooms: 3,
                squarefeets: 1800,
                description: 'Luxury penthouse with city views',
                ownerId: '3',
                currency: 'USD'
            },
            {
                id: '4',
                title: 'Cozy Studio',
                location: 'Brooklyn, New York',
                price: 180000,
                images: ['/property4.jpg'],
                status: 'sale',
                type: 'apartment',
                rooms: 1,
                squarefeets: 600,
                description: 'Perfect starter home in Brooklyn',
                ownerId: '4',
                currency: 'USD'
            },
            {
                id: '5',
                title: 'Victorian House',
                location: 'San Francisco, California',
                price: 3200,
                images: ['/property5.jpg'],
                status: 'rent',
                type: 'house',
                rooms: 3,
                squarefeets: 2000,
                description: 'Charming Victorian house with modern amenities',
                ownerId: '5',
                currency: 'USD'
            },
            {
                id: '6',
                title: 'Beach House',
                location: 'Miami, Florida',
                price: 750000,
                images: ['/property6.jpg'],
                status: 'sale',
                type: 'house',
                rooms: 5,
                squarefeets: 3200,
                description: 'Beautiful beach house with ocean views',
                ownerId: '6',
                currency: 'USD'
            },
            {
                id: '7',
                title: 'City Loft',
                location: 'Chicago, Illinois',
                price: 2800,
                images: ['/property7.jpg'],
                status: 'rent',
                type: 'apartment',
                rooms: 2,
                squarefeets: 1400,
                description: 'Industrial loft in trendy neighborhood',
                ownerId: '7',
                currency: 'USD'
            },
            {
                id: '8',
                title: 'Mountain Cabin',
                location: 'Denver, Colorado',
                price: 320000,
                images: ['/property8.jpg'],
                status: 'sale',
                type: 'house',
                rooms: 3,
                squarefeets: 1600,
                description: 'Rustic cabin with mountain views',
                ownerId: '8',
                currency: 'USD'
            }
    ]);

    const [owners, setOwners] = useState<Owner[]>([
                {
                    id: '1',
                    name: 'John',
                    lastname: 'Doe',
                    email: 'john.doe@email.com',
                    phone: '+1 (555) 123-4567',
                    joinedDate: new Date('2023-01-15')
                },
                {
                    id: '2',
                    name: 'Jane',
                    lastname: 'Smith',
                    email: 'jane.smith@email.com',
                    phone: '+1 (555) 234-5678',
                    joinedDate: new Date('2023-03-22')
                },
                {
                    id: '3',
                    name: 'Michael',
                    lastname: 'Johnson',
                    email: 'michael.johnson@email.com',
                    phone: '+1 (555) 345-6789',
                    joinedDate: new Date('2023-05-10')
                },
                {
                    id: '4',
                    name: 'Emily',
                    lastname: 'Davis',
                    email: 'emily.davis@email.com',
                    phone: '+1 (555) 456-7890',
                    joinedDate: new Date('2023-07-08')
                },
                {
                    id: '5',
                    name: 'Robert',
                    lastname: 'Wilson',
                    email: 'robert.wilson@email.com',
                    phone: '+1 (555) 567-8901',
                    joinedDate: new Date('2023-09-18')
                },
                {
                    id: '6',
                    name: 'Sarah',
                    lastname: 'Brown',
                    email: 'sarah.brown@email.com',
                    phone: '+1 (555) 678-9012',
                    joinedDate: new Date('2023-11-25')
                },
                {
                    id: '7',
                    name: 'David',
                    lastname: 'Taylor',
                    email: 'david.taylor@email.com',
                    phone: '+1 (555) 789-0123',
                    joinedDate: new Date('2024-01-12')
                },
                {
                    id: '8',
                    name: 'Lisa',
                    lastname: 'Anderson',
                    email: 'lisa.anderson@email.com',
                    phone: '+1 (555) 890-1234',
                    joinedDate: new Date('2024-03-05')
                }
    ]);

    const [propertyOwner, setPropertyOwner] = useState<Owner | undefined>();

    const { id } = useParams();
    const [property, setProperty] = useState<Property | undefined>();

    useEffect(() => { 
        const foundProperty = properties.find(p => p.id === id);
        if (foundProperty) {
            setProperty(foundProperty);
        }
    }, [id, properties]);

    useEffect(() => { 
        const foundOwner = owners.find(o => o.id === property?.ownerId);
        if (foundOwner) {
            setPropertyOwner(foundOwner);
        }
    }, [property, owners]);

    return (
        <>
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8 space-y-8">
                <div className="space-y-4">
                    <h1 className="font-bold text-5xl text-emerald-500">Edit Property</h1>
                    <p className="text-gray-700 text-2xl">
                        Editing property details for: <span className="font-semibold">{property?.title}</span>
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    {property ? (
                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Title</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={property.title}
                                    onChange={(e) => setProperty({ ...property, title: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Location</label>
                                <input
                                    type="text"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={property.location}
                                    onChange={(e) => setProperty({ ...property, location: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Price</label>
                                <input
                                    type="number"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={property.price}
                                    onChange={(e) => setProperty({ ...property, price: Number(e.target.value) })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Status</label>
                                <select
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={property.status}
                                    onChange={(e) => setProperty({ ...property, status: e.target.value as "rent" | "sale" })}
                                >
                                    <option value="rent">Rent</option>
                                    <option value="sale">Sale</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Type</label>
                                <select
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={property.type}
                                    onChange={(e) => setProperty({ ...property, type: e.target.value as "apartment" | "house" })}
                                >
                                    <option value="apartment">Apartment</option>
                                    <option value="house">House</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Rooms</label>
                                <input
                                    type="number"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={property.rooms}
                                    onChange={(e) => setProperty({ ...property, rooms: Number(e.target.value) })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Square Feets</label>
                                <input
                                    type="number"
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={property.squarefeets}
                                    onChange={(e) => setProperty({ ...property, squarefeets: Number(e.target.value) })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={property.description}
                                    onChange={(e) => setProperty({ ...property, description: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Owner</label>
                                <select
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                    value={property.ownerId} 
                                    onChange={(e) => setProperty({ ...property, ownerId: e.target.value })}
                                >
                                    {owners.map((owner) => (
                                    <option key={owner.id} value={owner.id}>
                                        {owner.name} {owner.lastname}
                                    </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                >
                                    Save Changes
                                </button>
                                <Link
                                    href={"/admin/dashboard/properties"}
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    ) : (
                        <p className="text-red-500">Property not found.</p>
                    )}
                </div>
            </div>
        </div>
        </>
    );
};

export default EditProperty;