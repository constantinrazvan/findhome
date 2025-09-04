"use client"
import { Owner } from "@/models/owner.model";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const EditOwner = () => {

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

        const { id } = useParams();
        
        const [owner, setOwner] = useState<Owner | null>(null);

        useEffect(() => {
            const foundOwner = owners.find(o => o.id === id);
            if (foundOwner) {
                setOwner(foundOwner);
            }
        }, [id, owners])

        const postRequest = async (e: React.FormEvent) => {
            e.preventDefault();
            const url = '/api/owners/update';
            const data = {
                id: owner?.id,
                name: owner?.name,
                lastname: owner?.lastname,
                email: owner?.email,
                phone: owner?.phone,
                joinedDate: owner?.joinedDate
            };
            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                if (response.ok) {
                    alert('Owner updated successfully!');
                } else {
                    alert('Failed to update owner.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred while updating the owner.');
            }
        }

    return (
         <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8 space-y-8">
                <div className="space-y-4">
                    <h1 className="font-bold text-5xl text-emerald-500">Edit Owner</h1>
                    <p className="text-gray-700 text-2xl">
                        Editing owner details for: <span className="font-semibold">{owner?.name} {owner?.lastname}</span>
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    {owner ? (
                        <form className="space-y-6" onSubmit={postRequest}>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">First Name</label>
                                <input
                                    type="text"
                                    defaultValue={owner.name}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                                <input
                                    type="text"
                                    defaultValue={owner.lastname}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    defaultValue={owner.email}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                <input
                                    type="text"
                                    defaultValue={owner.phone}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Joined Date</label>
                                <input
                                    type="date"
                                    disabled
                                    defaultValue={owner.joinedDate.toISOString().split('T')[0]}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"
                                />
                                <span className="text-sm text-gray-500"> You can't change the joined date. </span>
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                >
                                    Save Changes
                                </button>
                                <Link
                                    href="/admin/dashboard/owners"
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Cancel
                                </Link>
                            </div>
                        </form>
                    ) : (
                        <p className="text-red-500">Owner not found.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditOwner;