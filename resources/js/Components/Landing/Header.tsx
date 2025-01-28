import React, { useState } from "react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { AlignJustify, Search } from "lucide-react";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";

const Header = () => {
    return (
        <header className="bg-white text-black py-4 fixed top-0 w-full z-10 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <div className="text-3xl font-extrabold font-serif ml-4">
                        hldy
                    </div>
                </div>

                {/* Navigasi */}
                <nav className="flex space-x-8">
                    <a href="#" className="hover:underline font-medium">
                        Home
                    </a>
                    <a href="#" className="hover:underline font-medium">
                        Shop
                    </a>
                    <a href="#" className="hover:underline font-medium">
                        Cart
                    </a>
                    <a href="#" className="hover:underline font-medium">
                        Contact
                    </a>
                </nav>

                {/* Pencarian dan Tombol */}
                <div className="flex items-center space-x-4">
                    {/* Pencarian */}
                    <div className="flex items-center border border-gray-300 rounded-md bg-gray-100">
                        <Input
                            type="text"
                            className="border-none p-2 bg-transparent w-64"
                            placeholder="Search"
                        />
                        <Button type="submit" variant="ghost">
                            <Search />
                        </Button>
                    </div>
                    {/* Login dan Register */}
                    <div className="flex space-x-4">
                        <ResponsiveNavLink
                            method="post"
                            href={route("login")}
                            as="button"
                            className="text-sm font-medium text-gray-700 hover:text-black"
                        >
                            Login
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            method="post"
                            href={route("register")}
                            as="button"
                            className="text-sm font-medium text-gray-700 hover:text-black"
                        >
                            Register
                        </ResponsiveNavLink>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
