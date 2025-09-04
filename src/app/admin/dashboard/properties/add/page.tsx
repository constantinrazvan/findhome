"use client"
import { Property } from "@/models/property.model";
import Link from "next/link";
import { useState } from "react";
const AddProperty = () => {
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        price: 0,
        status: "",
        type: '',
        rooms: 0,
        squarefeets: 0,
        description: '',
        ownerId: '', 
        currency: '',
    })
    return (
        <>
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-8 space-y-8">
                <div className="space-y-4">
                    <h1 className="font-bold text-5xl text-emerald-500">Add new property</h1>
                    <p className="text-gray-700 text-2xl">
                        Fill in the form below to add a new property
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <form>
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 mb-2">
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="location" className="block text-gray-700 mb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                id="location"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="price" className="block text-gray-700 mb-2">
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="status" className="block text-gray-700 mb-2">
                                Status
                            </label>
                            <select
                                id="status"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            >
                                <option value="rent">Rent</option>
                                <option value="sale">Sale</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="type" className="block text-gray-700 mb-2">
                                Type
                            </label>
                            <input
                                type="text"
                                id="type"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="rooms" className="block text-gray-700 mb-2">
                                Rooms
                            </label>
                            <input
                                type="number"
                                id="rooms"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="squarefeets" className="block text-gray-700 mb-2">
                                Squarefeets
                            </label>
                            <input
                                type="number"
                                id="squarefeets"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="description" className="block text-gray-700 mb-2">
                                Description
                            </label>
                            <textarea
                                id="description"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            ></textarea>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="ownerId" className="block text-gray-700 mb-2">
                                Owner ID
                            </label>
                            <input
                                type="text"
                                id="ownerId"
                                className="w-full p-2 border border-gray-300 rounded-md"
                            />
                        </div>
                       <div className="flex justify-end space-x-4">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                                >
                                    Add property
                                </button>
                                <Link
                                    href="/admin/dashboard/properties"
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

export default AddProperty;