"use client";
import { Owner } from "@/models/owner.model";
import Link from "next/link";
import { useState } from "react";

const AddOwner = () => {

    const [formData, setFormData] = useState<Owner>({
        name: '',
        lastname: '',
        email: '',
        phone: '',
        joinedDate: new Date()
    });

    const postRequest = async (e: React.FormEvent) => {
        e.preventDefault();
        const url = '/api/owners/add';
        const data = {
            name: formData.name,
            lastname: formData.lastname,
            email: formData.email,
            phone: formData.phone,
            joinedDate: formData.joinedDate
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
                alert('Owner added successfully!');
                setFormData({
                    name: '',
                    lastname: '',
                    email: '',
                    phone: '',
                    joinedDate: new Date()
                });
            } else {
                alert('Failed to add owner.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while adding the owner.');
        }
    }

    return (
        <>
         <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8 space-y-8">
                <div className="space-y-4">
                    <h1 className="font-bold text-5xl text-emerald-500">Add new owner</h1>
                    <p className="text-gray-700 text-2xl">
                        Fill in the details below to add a new owner
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <form className="space-y-6" onSubmit={postRequest}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">First Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Last Name</label>
                            <input
                                type="text"
                                value={formData.lastname}
                                onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone</label>
                            <input
                                type="text"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Joined Date</label>
                            <input
                                type="date"
                                value={formData.joinedDate.toISOString().split('T')[0]}
                                onChange={(e) => setFormData({ ...formData, joinedDate: new Date(e.target.value) })}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-emerald-500 focus:border-emerald-500"
                                required
                            />
                            <span className="text-xs text-red-500 font-bold">Note: Date cannot be modified after creation!</span>
                        </div>
                         <div className="flex justify-end space-x-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                >
                                    Add owner
                                </button>
                                <Link
                                    href="/admin/dashboard/owners"
                                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                >
                                    Cancel
                                </Link>
                            </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

export default AddOwner;