"use client"
import { Contact } from "@/models/contact.model";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const SeeMessage = () => {
  const { id } = useParams();

  const [contactMessages, setContactMessages] = useState<Contact[]>([
    {
      id: "1",
      name: "John Doe",
      email: "t2HsI@example.com",
      phone: "+1 (555) 123-4567",
      message: "Hello, I have a question about ROI.",
      timestamp: new Date("2023-01-01"),
      isRead: false,
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "vM2oP@example.com",
      phone: "+1 (555) 234-5678",
      message: "I am interested in renting a property!",
      timestamp: new Date("2023-02-15"),
      isRead: true,
    },
    {
      id: "3",
      name: "Michael Johnson",
      email: "Ux4oE@example.com",
      phone: "+1 (555) 345-6789",
      message: "I am interested in buying a property.",
      timestamp: new Date("2023-03-10"),
      isRead: false,
    },
  ]);

  const [messageContact, setMessageContact] = useState<Contact | null>(null);

  useEffect(() => {
    const contact = contactMessages.find((c) => c.id === id);
    setMessageContact(contact || null);
  }, [contactMessages, id]);

  const toggleReadStatus = () => {
    if (!messageContact) return;
    const updated = { ...messageContact, isRead: !messageContact.isRead };
    setContactMessages((prev) =>
      prev.map((c) => (c.id === messageContact.id ? updated : c))
    );
    setMessageContact(updated);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="space-y-4">
          <h1 className="font-bold text-5xl text-emerald-500">View contact message</h1>
          <p className="text-gray-700 text-2xl">
            Viewing message from:{" "}
            <span className="font-semibold">{messageContact?.email}</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          {messageContact ? (
            <>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={messageContact.name}
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={messageContact.email}
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={messageContact.phone}
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={messageContact.message}
                    readOnly
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={messageContact.timestamp.toISOString().split("T")[0]}
                    readOnly
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" checked={messageContact.isRead} readOnly />
                  <label className="text-gray-700">Is Read</label>
                </div>

                <div className="flex justify-end space-x-4">
                  {messageContact.isRead ? (
                    <button
                      onClick={toggleReadStatus}
                      className="px-4 py-2 bg-emerald-500 text-gray-700 rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out"
                    >
                      Mark as Unread
                    </button>
                  ) : (
                    <button
                      onClick={toggleReadStatus}
                      className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-300 ease-in-out"
                    >
                      Mark as Read
                    </button>
                  )}
                  <Link
                    href={"/admin/dashboard/messages"}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out"
                  >
                    Back
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-700">Contact message not found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeeMessage;
