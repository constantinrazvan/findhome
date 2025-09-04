"use client";
import { Owner } from "@/models/owner.model";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Owners = () => {
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

    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchOwners = async () => {
            try {
                const response = await fetch('/api/owners');
                const data = await response.json();
                setOwners(data);
            } catch (error) {
                console.error('Error fetching owners:', error);
            }
        }

        fetchOwners();
    }, []);

    const handleDelete = (ownerId: string) => {
        if (confirm(`Are you sure you want to delete owner ${ownerId}?`)) {
            setOwners(prevOwners => prevOwners.filter(owner => owner.id !== ownerId));
        }
    };

    const formatDate = (date: Date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const totalPages = Math.ceil(owners.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentOwners = owners.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        setCurrentPage(page);
    };

    const goToPreviousPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const goToNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    if (owners.length === 0) {
        return (
            <div className="bg-gray-50 min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <div className="space-y-4">
                        <h1 className="font-bold text-5xl text-emerald-500">Owners</h1>
                        <p className="text-gray-700 text-2xl">No record of any owner found</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8 space-y-8">
                <div className="space-y-4">
                    <Link 
                        href="/admin/dashboard" 
                        className="inline-flex items-center gap-2 text-emerald-500 py-2 rounded-md hover:text-emerald-600 transition duration-300"
                    >
                        <ChevronLeft size={16} />
                        Back to dashboard
                    </Link>
                    <h1 className="font-bold text-5xl text-emerald-500">Owners</h1>
                    <p className="text-gray-700 text-2xl">
                        List of all owners ({owners.length} total)
                    </p>
                    <div className="flex items-center justify-between text-gray-600">
                        <span>
                            Showing {startIndex + 1} to {Math.min(endIndex, owners.length)} of {owners.length} owners
                        </span>
                        <Link
                            href="/admin/dashboard/owners/add"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                        >
                            Add new owner
                        </Link>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto">
                            <thead className="bg-emerald-500 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Id
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Phone
                                    </th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                        Joined Date
                                    </th>
                                    <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {currentOwners.map((owner, index) => (
                                    <tr 
                                        key={owner.id} 
                                        className={`hover:bg-gray-50 transition-colors ${
                                            index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                                        }`}
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">
                                                {owner.id}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-gray-900">
                                                {owner.name} {owner.lastname}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">
                                                {owner.email}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">
                                                {owner.phone}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-gray-600">
                                                {formatDate(owner.joinedDate)}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            <div className="flex justify-center space-x-2">
                                                <Link
                                                    href={`/admin/dashboard/owners/${owner.id}`}
                                                    className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(owner.id!)}
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
                                    <span className="font-medium">{Math.min(endIndex, owners.length)}</span>
                                    {' '}of{' '}
                                    <span className="font-medium">{owners.length}</span>
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

export default Owners;