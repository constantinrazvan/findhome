"use client";
import { Property } from "@/models/property.model";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Properties = () => {
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

    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const response = await fetch('/api/properties');
                const data = await response.json();
                setProperties(data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            }
        }

        fetchProperties();
    }, []);

    const handleDelete = (propertyId: string) => {
        if (confirm('Are you sure you want to delete this property?')) {
            setProperties(prevProperties => prevProperties.filter(property => property.id !== propertyId));
        }
    };

    const formatPrice = (price: number, status: string) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });
        
        if (status === 'rent') {
            return `${formatter.format(price)}/month`;
        } else {
            return formatter.format(price);
        }
    };

    const totalPages = Math.ceil(properties.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProperties = properties.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    const goToPreviousPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    if (properties.length === 0) {
        return (
            <div className="bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <div className="space-y-4">
                        <h1 className="font-bold text-5xl text-emerald-500">Properties</h1>
                        <p className="text-gray-700 text-2xl">No record of any property found</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen px-5">
            <div className="container mx-auto px-4 py-8 space-y-8">
                <div className="space-y-4">
                    <h1 className="font-bold text-5xl text-emerald-500">Properties</h1>
                    <p className="text-gray-700 text-2xl">
                        List of all properties ({properties.length} total)
                    </p>
                    <div className="flex items-center justify-between text-gray-600">
                        <div className="text-gray-600">
                            Showing {startIndex + 1} to {Math.min(endIndex, properties.length)} of {properties.length} properties
                        </div>
                        <Link
                            href="/admin/dashboard/properties/add"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                        >
                            Add new property
                        </Link>
                    </div>

                    {/* TODO: Add some filters (status, type, location, owner) */}

                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead className="bg-emerald-500 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Location
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Type
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Rooms
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Sq Ft
                                    </th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {currentProperties.map((property, index) => (
                                    <tr 
                                        key={property.id} 
                                        className={`hover:bg-gray-50 transition-colors ${
                                            index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                                        }`}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {property.title}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">
                                                {property.location}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">
                                                {formatPrice(property.price, property.status)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                property.status === 'rent' 
                                                    ? 'bg-blue-100 text-blue-800' 
                                                    : 'bg-green-100 text-green-800'
                                            }`}>
                                                {property.status === 'rent' ? 'For Rent' : 'For Sale'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600 capitalize">
                                                {property.type}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">
                                                {property.rooms}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">
                                                {property.squarefeets.toLocaleString()}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <div className="flex justify-center space-x-2">
                                                <Link
                                                    href={`/admin/dashboard/properties/${property.id}`}
                                                    className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(property.id!)}
                                                    className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {totalPages > 1 && (
                    <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 rounded-b-lg shadow-md">
                        <div className="flex-1 flex justify-between sm:hidden">
                            <button
                                onClick={goToPreviousPage}
                                disabled={currentPage === 1}
                                className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Previous
                            </button>
                            <button
                                onClick={goToNextPage}
                                disabled={currentPage === totalPages}
                                className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Next
                            </button>
                        </div>
                        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Showing{' '}
                                    <span className="font-medium">{startIndex + 1}</span>
                                    {' '}to{' '}
                                    <span className="font-medium">{Math.min(endIndex, properties.length)}</span>
                                    {' '}of{' '}
                                    <span className="font-medium">{properties.length}</span>
                                    {' '}results
                                </p>
                            </div>
                            <div>
                                <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                    <button
                                        onClick={goToPreviousPage}
                                        disabled={currentPage === 1}
                                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="sr-only">Previous</span>
                                        &#8249;
                                    </button>
                                    
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => goToPage(page)}
                                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                                page === currentPage
                                                    ? 'z-10 bg-emerald-50 border-emerald-500 text-emerald-600'
                                                    : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                            }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    
                                    <button
                                        onClick={goToNextPage}
                                        disabled={currentPage === totalPages}
                                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <span className="sr-only">Next</span>
                                        &#8250;
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Properties;