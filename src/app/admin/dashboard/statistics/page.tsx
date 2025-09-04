"use client";
import { Contact } from "@/models/contact.model";
import { Message } from "@/models/message.model";
import { Owner } from "@/models/owner.model";
import { Property } from "@/models/property.model";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Statistics = () => {

    const [owners, setOwners] = useState<Owner[]>([]);
    const [properties, setProperties] = useState<Property[]>([]);
    const [interestMessages, setInterestMessages] = useState<Message[]>([]);
    const [contactMessages, setContactMessages] = useState<Contact[]>([]);

    const fetchOwners = async () => {
        try {
            const response = await fetch('/api/owners');
            const data = await response.json();
            setOwners(data);
        } catch (error) {
            console.error('Error fetching owners:', error);
        }
    }

    const fetchProperties = async () => {
        try {
            const response = await fetch('/api/properties');
            const data = await response.json();
            setProperties(data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    }

    const fetchInterestMessages = async () => {
        try {
            const response = await fetch('/api/interest-messages');
            const data = await response.json();
            setInterestMessages(data);
        } catch (error) {
            console.error('Error fetching interest messages:', error);
        }
    }

    const fetchContactMessages = async () => {
        try {
            const response = await fetch('/api/contact-messages');
            const data = await response.json();
            setContactMessages(data);
        } catch (error) {
            console.error('Error fetching contact messages:', error);
        }
    }

    useEffect(() => { 
        fetchOwners();
        fetchProperties();
        fetchInterestMessages();
        fetchContactMessages();
    })

    return (
        <>
            <div className="bg-gray-50 min-h-screen px-5">
                <div className="container mx-auto px-4 py-8 space-y-8">
                    <div className="space-y-4">
                        <h1 className="font-bold text-5xl text-emerald-500">Statistics</h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center
                            shadow-md">
                            <div className="mb-4 text-4xl transition-colors duration-500 ease-in-out group-hover:text-white">
                                {owners.length}
                            </div>
                            <span className="text-lg font-medium text-gray-800 transition-colors duration-500 ease-in-out group-hover:text-white">
                                Owners
                            </span>
                        </div>
                        <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center
                            shadow-md">
                            <div className="mb-4 text-4xl transition-colors duration-500 ease-in-out group-hover:text-white">
                                {properties.length}
                            </div>
                            <span className="text-lg font-medium text-gray-800 transition-colors duration-500 ease-in-out group-hover:text-white">
                                Properties
                            </span>
                        </div>
                        <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center
                            shadow-md">
                            <div className="mb-4 text-4xl transition-colors duration-500 ease-in-out group-hover:text-white">
                                {contactMessages.length}
                            </div>
                            <span className="text-lg font-medium text-gray-800 transition-colors duration-500 ease-in-out group-hover:text-white">
                                Contact Messages
                            </span>
                        </div>
                        <div className="bg-white rounded-2xl p-6 flex flex-col items-center justify-center
                            shadow-md">
                            <div className="mb-4 text-4xl transition-colors duration-500 ease-in-out group-hover:text-white">
                                {interestMessages.length}
                            </div>
                            <span className="text-lg font-medium text-gray-800 transition-colors duration-500 ease-in-out group-hover:text-white">
                                Interest Messages
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="px-6 py-4 bg-emerald-50 border-b border-emerald-100">
                                <h2 className="text-xl font-semibold text-emerald-700">Latest owners added</h2>
                            </div>
                            {owners.length === 0 ? (
                                <div className="p-8 text-center">
                                    <p className="text-gray-500 text-lg">No records for Owners</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined Date</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {owners.slice(0, 5).map((owner, index) => (
                                                <tr key={owner.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{owner.name}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{owner.email}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{owner.phone}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                        {owner.joinedDate instanceof Date ? owner.joinedDate.toLocaleDateString() : owner.joinedDate}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="px-6 py-4 bg-emerald-50 border-b border-emerald-100">
                                <h2 className="text-xl font-semibold text-emerald-700">Latest properties added</h2>
                            </div>
                            {properties.length === 0 ? (
                                <div className="p-8 text-center">
                                    <p className="text-gray-500 text-lg">No records for Properties</p>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {properties.slice(0, 5).map((property, index) => (
                                                <tr key={property.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{property.title}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{property.location}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{property.price}</td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                            property.status === "rent" 
                                                                ? 'bg-green-100 text-green-800'
                                                                : property.status === "sale"
                                                                ? 'bg-red-100 text-red-800'
                                                                : 'bg-yellow-100 text-yellow-800'
                                                        }`}>
                                                            {property.status}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Statistics;