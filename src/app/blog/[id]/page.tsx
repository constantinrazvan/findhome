"use client"
import { useParams } from "next/navigation"

const SingleBlog = () => { 
    const { id } = useParams(); 

    return (
        <div>
            <h1>Blog {id}</h1>
        </div>
    )
}