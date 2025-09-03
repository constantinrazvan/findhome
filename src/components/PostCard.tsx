"use client";
import Link from "next/link";
import { Property } from "@/models/property.model";

// type PostCardProps = {
//   id: number;
//   title: string;
//   rooms: number;
//   squarefeets: number;
//   location: string;
//   image: string;
//   status: "rent" | "sale";
//   type: "apartment" | "house";
//   price: number;
// };

const PostCard = ({ id, title, rooms, squarefeets, location, images, status, type, price }: Property) => {
  return (
    <div className="relative flex flex-col bg-white shadow-md rounded-2xl w-96 hover:shadow-lg transition">
      <div className="relative h-56 m-3 overflow-hidden rounded-xl">
        <img
          src={images[0]}
          alt={title}
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
          {type}
        </span>
        <span className="absolute top-3 right-3 bg-slate-800 text-white text-xs font-semibold px-3 py-1 rounded-full capitalize">
          {status}
        </span>
      </div>

      <div className="px-5 pb-5 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold text-slate-800 mb-2">{title}</h2>
        <p className="text-slate-600 text-sm">📍 {location}</p>
        <p className="text-slate-500 text-sm mt-1">🛏 {rooms} rooms • 📐 {squarefeets} m²</p>
        <p className="text-emerald-600 font-bold text-lg mt-2">
          {status === "rent" ? `${price} €/month` : `${price.toLocaleString()} €`}
        </p>
      </div>

      <div className="px-5 pb-5">
        <Link
          href={`/for-${status}/${id}`}
          className="block w-full text-center rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 py-2 px-4 text-sm font-semibold text-white shadow-md hover:opacity-90 transition"
        >
          See details
        </Link>
      </div>
    </div>
  );
};

export default PostCard;