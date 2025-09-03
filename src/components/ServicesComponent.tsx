import { HandCoins, House, UserStar } from "lucide-react";
import { JSX } from "react";

interface IService { 
    id: number, 
    title: string,
    icon: JSX.Element,
    description: string
}

const ServicesComponent = () => { 

    const services: IService[] = [
        {
            id: 1,
            icon: <House />,
            title: "Home Search",
            description: "Find your dream home with our advanced search tools."
        },
        {
            id: 2,
            icon: <HandCoins />,
            title: "Mortgage Assistance",
            description: "Get expert help with your mortgage application."
        },
        {
            id: 3,
            icon: <UserStar />,
            title: "Neighborhood Insights",
            description: "Learn about the best neighborhoods for your family."
        }
    ];

    return ( 
        <div className="relative overflow-hidden bg-gray-50">
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {services.map(service => (
                        <div 
                            key={service.id} 
                            className="bg-white p-8 rounded-2xl shadow-md 
                                       hover:shadow-xl hover:scale-105 
                                       hover:bg-emerald-500 transition-all 
                                       duration-500 ease-in-out 
                                       flex flex-col items-center text-center space-y-4 group"
                        >
                            <div className="text-5xl text-emerald-500 group-hover:text-white transition-colors duration-500 ease-in-out">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-500 ease-in-out">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 group-hover:text-white transition-colors duration-500 ease-in-out">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServicesComponent;
