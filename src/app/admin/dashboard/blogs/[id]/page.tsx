import { useParams } from "next/navigation";
import { useState } from "react"

const EditBlog = () => { 
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    return (
        <>
        
        </>
    )
}

export default EditBlog