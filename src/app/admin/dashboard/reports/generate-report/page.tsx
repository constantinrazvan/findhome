"use client"
import Link from "next/link";
import { useState } from "react";

const GenerateReport = () => { 
    
    const [formData, setFormData] = useState({
        raportType: '',
        title: '',
        dateStart: '',
        dateEnd: '', 
        dateGenerated: '',
        format: ''
    });

    const postRequest = (e : React.FormEvent) => { 
        e.preventDefault();
        console.log(formData); // aici poți face fetch la backend
    }
    
    return ( 
        <div className="bg-gray-50 min-h-screen px-5">
            <div className="container mx-auto px-4 py-8 space-y-8">
                <div className="space-y-4">
                    <h1 className="font-bold text-5xl text-emerald-500">Generate report</h1>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Type of report</label>
                            <select
                                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                value={formData.raportType}
                                onChange={(e) => setFormData({ ...formData, raportType: e.target.value })}
                            >
                                <option value="">Select report type</option>
                                <option value="properties-rent">Properties for rent</option>
                                <option value="properties-sale">Properties for sale</option>
                                <option value="properties-all">All properties</option>
                                <option value="owners-sale">Owners with properties for sale</option>
                                <option value="owners-rent">Owners with properties for rent</option>
                                <option value="owners-rent-sale">Owners with properties for rent and sale</option>
                                <option value="owners-all">All owners</option>
                                <option value="interest-messages-all">All interest messages</option>
                                <option value="interest-messages-rent">Interest messages for rent</option>
                                <option value="interest-messages-sale">Interest messages for sale</option>
                                <option value="contact-messages-all">All contact messages</option>
                                <option value="contact-messages-rent">Contact messages for rent</option>
                                <option value="contact-messages-sale">Contact messages for sale</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Format</label>
                                <select
                                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                    value={formData.format}
                                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                                >
                                    <option value="">Select format</option>
                                    <option value="excel">Excel</option>
                                    <option value="csv">CSV</option>
                                    <option value="pie-chart">Pie chart</option>
                                    <option value="plot-bar">Bar plot</option>
                                    <option value="plot-line">Line plot</option>
                                    <option value="plot-scatter">Scatter plot</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date start</label>
                                <input
                                    type="date"
                                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                    value={formData.dateStart}
                                    onChange={(e) => setFormData({ ...formData, dateStart: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date end</label>
                                <input
                                    type="date"
                                    className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                    value={formData.dateEnd}
                                    onChange={(e) => setFormData({ ...formData, dateEnd: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button 
                                onClick={postRequest}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-md transition-colors"
                            >
                                Generate report
                            </button>
                            <Link
                                href={"/admin/dashboard/reports"}
                                className="ml-4 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md transition-colors"
                            >
                                Cancel
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GenerateReport;