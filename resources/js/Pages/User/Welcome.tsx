

import * as React from "react";

import { Button } from "@/Components/ui/button";
import ProductCard from "@/Components/Product/ProductCard";
import Header from "@/Components/Landing/Header";
// import Footer from "@/Components/Landing/Footer";



const Welcome = () => {
    const [category, setCategory] = React.useState("");
    const [sort, setSort] = React.useState("");

    return (
        <div>
            <Header />

            {/* Hero Section */}
            <section className="bg-gray-100 text-center py-16">
                <div className="slider">
                    {/* Replace with slider/carousel implementation */}
                    <div className="w-full mb-8">
                        <img
                            src="https://via.placeholder.com/1200x400"
                            alt="Placeholder Banner"
                            className="w-full max-h-[400px] object-cover"
                        />
                    </div>
                </div>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Welcome To hldy
                </h1>
                <p className="text-lg mt-2">Discover the best products here</p>
            </section>

            {/*new ariival product*/}
            <section className="container mx-auto py-3">
                <h1 className="text-3xl font-bold text-center">New Arrival</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                    <ProductCard
                        image="product-image.jpg"
                        name="Product Name"
                        price="$99.99"
                        onAddToCart={() => {}}
                    />
                    <ProductCard
                        image="product1.jpg"
                        name="Product 1"
                        price="$99.99"
                        onAddToCart={() => {}}
                    />
                    <ProductCard
                        image="product2.jpg"
                        name="Product 2"
                        price="$149.99"
                        onAddToCart={() => {}}
                    />
                    <ProductCard
                        image="product3.jpg"
                        name="Product 3"
                        price="$199.99"
                        onAddToCart={() => {}}
                    />
                </div>
            </section>
            

            {/* <Footer /> */}
        </div>
    );
};

export default Welcome;
