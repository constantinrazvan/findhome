"use client"
import Link from "next/link"
import { useState } from "react"
import { Report } from "@/models/report.model"

const Reports = () => {
    const [reports, setReports] = useState<Report[]>([
        {
            id: 1,
            title: "Properties available for rent in 2023",
            type: "properties-rent",
            dateStart: "2023-01-01",
            dateEnd: "2023-12-31",
            dateGenerated: "2023-01-05", 
            format: "csv"
        },
        {
            id: 2,
            title: "Properties available for sale in 2023",
            type: "properties-sale",
            dateStart: "2023-01-01",
            dateEnd: "2023-12-31",
            dateGenerated: "2023-01-05",
            format: "pie-chart"
        },
        {
            id: 3,
            title: "All property listings (rent + sale)",
            type: "properties-all",
            dateStart: "2023-01-01",
            dateEnd: "2023-12-31",
            dateGenerated: "2023-01-10",
            format: "plot-bar"
        },
        {
            id: 4,
            title: "Owners listing properties for sale",
            type: "owners-sale",
            dateStart: "2023-02-01",
            dateEnd: "2023-06-30",
            dateGenerated: "2023-02-01",
            format: "plot-line"
        },
        {
            id: 5,
            title: "Owners listing properties for rent",
            type: "owners-rent",
            dateStart: "2023-03-01",
            dateEnd: "2023-09-30",
            dateGenerated: "2023-03-02",
            format: "plot-scatter"
        },
        {
            id: 6,
            title: "Owners listing for both rent & sale",
            type: "owners-rent-sale",
            dateStart: "2023-04-01",
            dateEnd: "2023-10-31",
            dateGenerated: "2023-04-01",
            format: "excel"
        },
        {
            id: 7,
            title: "All owners activity (rent + sale)",
            type: "owners-all",
            dateStart: "2023-01-01",
            dateEnd: "2023-12-31",
            dateGenerated: "2023-01-15",
            format: "csv"
        },
        {
            id: 8,
            title: "All interest messages (buyers & renters)",
            type: "interest-messages-all",
            dateStart: "2023-05-01",
            dateEnd: "2023-12-31",
            dateGenerated: "2023-05-01",
            format: "pie-chart"
        },
        {
            id: 9,
            title: "Interest messages for rentals",
            type: "interest-messages-rent",
            dateStart: "2023-06-01",
            dateEnd: "2023-11-30",
            dateGenerated: "2023-06-01",
            format: "plot-bar"
        },
        {
            id: 10,
            title: "Interest messages for sales",
            type: "interest-messages-sale",
            dateStart: "2023-07-01",
            dateEnd: "2023-12-31",
            dateGenerated: "2023-07-02",
            format: "plot-line"
        },
        {
            id: 11,
            title: "All contact messages (general inquiries)",
            type: "contact-messages-all",
            dateStart: "2023-08-01",
            dateEnd: "2023-12-31",
            dateGenerated: "2023-08-01",
            format: "plot-scatter"
        },
        {
            id: 12,
            title: "Contact messages related to rentals",
            type: "contact-messages-rent",
            dateStart: "2023-09-01",
            dateEnd: "2023-12-31",
            dateGenerated: "2023-09-02",
            format: "excel"
        },
        {
            id: 13,
            title: "Contact messages related to sales",
            type: "contact-messages-sale",
            dateStart: "2023-10-01",
            dateEnd: "2023-12-31",
            dateGenerated: "2023-10-01",
            format: "csv"
        }
    ]);

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 5

    const totalPages = Math.ceil(reports.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentReports = reports.slice(startIndex, endIndex)

    const goToPage = (page: number) => setCurrentPage(page)
    const goToNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages))
    const goToPreviousPage = () => setCurrentPage(prev => Math.max(prev - 1, 1))

    const handleDelete = (reportId: number) => {
        if (confirm(`Are you sure you want to delete report ${reportId}?`)) {
            setReports(prevReports => prevReports.filter(report => report.id !== reportId));
        }
    };

    const handleDownload = (report: Report) => {
        console.log('Downloading report:', report);
    };

    const generateReportCSV = (report: Report) => {
        console.log('Generating CSV for report:', report);
    };

    const formatDate = (dateString: string): string => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <>
            <div className="bg-gray-50 min-h-screen px-5">
                <div className="container mx-auto px-4 py-8 space-y-8">
                    <div className="space-y-4">
                        <h1 className="font-bold text-5xl text-emerald-500">Properties</h1>
                        <p className="text-gray-700 text-2xl">
                            List of all reports ({reports.length} total)
                        </p>
                        <div className="flex items-center justify-between text-gray-600">
                            <div className="text-gray-600">
                                Showing {startIndex + 1} to {Math.min(endIndex, reports.length)} of {reports.length} reports
                            </div>
                            <Link
                                href="/admin/dashboard/reports/generate-report"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                            >
                                Generate report
                            </Link>
                    </div>

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
                                            Type
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                            Date Start
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                            Date End
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                            Date Generated
                                        </th>
                                        <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">
                                            Format
                                        </th>
                                        <th className="px-6 py-4 text-center text-sm font-semibold uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {currentReports.map((report, index) => (
                                        <tr
                                            key={report.id}
                                            className={`hover:bg-gray-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'
                                                }`}
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {report.title}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                    {report.type}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-600">
                                                    {formatDate(report.dateStart)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-600">
                                                    {formatDate(report.dateEnd)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-600">
                                                    {formatDate(report.dateGenerated)}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                                    {report.format}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-center">
                                                <div className="flex justify-center space-x-2">
                                                    <button
                                                        onClick={() => handleDownload(report)}
                                                        className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-green-700 bg-green-100 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                                                    >
                                                        Download
                                                    </button>
                                                    <Link
                                                        href={`/admin/dashboard/reports/${report.id}`}
                                                        className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                                                    >
                                                        View
                                                    </Link>
                                                    <button
                                                        onClick={() => handleDelete(report.id)}
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
                                        <span className="font-medium">{Math.min(endIndex, reports.length)}</span>
                                        {' '}of{' '}
                                        <span className="font-medium">{reports.length}</span>
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
                                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${page === currentPage
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
        </>
    )
}

export default Reports