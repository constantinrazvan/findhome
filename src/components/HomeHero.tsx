import React from 'react';
import { ArrowRight, Play, Star, Users, Home, MapPin } from 'lucide-react';

const HomeHero = () => { 
    return ( 
        <div className="relative min-h-screen overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-black  text-sm font-medium">
                            <Star className="w-4 h-4 mr-2 text-black" />
                            #1 Trusted Home Finding Platform
                        </div>
                        
                        <div className="space-y-4">
                            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                                Find Your
                                <span className="block bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent">
                                    Dream Home
                                </span>
                            </h1>
                            <p className="text-xl lg:text-2xl max-w-2xl">
                                Discover the perfect place to call home with our AI-powered search, 
                                expert guidance, and seamless buying experience.
                            </p>
                        </div>
                        
                        <div className="flex flex-wrap justify-center lg:justify-start gap-8 py-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-500">50K+</div>
                                <div className="text-sm">Happy Families</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-500">10M+</div>
                                <div className="text-sm">Properties Listed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-emerald-500">500+</div>
                                <div className="text-sm">Cities Covered</div>
                            </div>
                        </div>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="group px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                                <Home className="w-5 h-5 mr-2" />
                                Start Your Search
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="relative group">
                            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                                <img 
                                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                    alt="Beautiful modern home" 
                                    className="w-full h-[600px] object-cover"
                                />
                            </div>
                            
                            <div className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20 animate-bounce">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Prime Location</div>
                                        <div className="text-sm text-gray-600">Downtown District</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl border border-white/20">
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Expert Support</div>
                                        <div className="text-sm text-gray-600">24/7 Available</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeHero;