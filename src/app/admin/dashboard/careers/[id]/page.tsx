"use client"
import { useParams } from "next/navigation";

const EditCareer = () => {
    const { id } = useParams();
    
    return (
        <div>
            <h1>Edit Career Page</h1>
        </div>
    );
}

export default EditCareer