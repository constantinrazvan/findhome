"use client"
import { useState } from "react";
import { useParams } from "next/navigation";

const SingleCareer = () => {
    const { id } = useParams();
    
    return (
        <div>
            <h1>Single Career Page</h1>
        </div>
    );
};