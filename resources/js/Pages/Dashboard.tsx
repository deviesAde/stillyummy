import Authenticated from "@/Layouts/AuthenticatedLayout";
import ProductCard from "@/Components/Dashboard/ProductCard";
import { faker } from "@faker-js/faker/locale/id_ID";
import { ProductCardType } from "@/types/ProductCardType";
import TextInput from "@/Components/TextInput";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuItem,
    DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import { useState } from "react";

import CarouselDashboard from "@/Components/Dashboard/Carousel";

const DummyProducts: ProductCardType[] = Array.from({ length: 10 }).map(
    (id, index) => {
        faker.seed(index);
        const DummyProduct: ProductCardType = {
            ID: faker.string.ulid(),
            Thubnail: faker.image.urlPicsumPhotos({ height: 800, width: 1000 }),
            Title: faker.commerce.productName(),
            price: faker.number.float({
                min: 10000,
                max: 500000,
                fractionDigits:2
            }),
        };
        return DummyProduct;
    }
);

export default function Page() {
    const [Dummy, SetDummy] = useState(DummyProducts);
    const HandleSearch = (value: string): void => {
        let Userfind: ProductCardType[] = DummyProducts;
        if (value) {
            Userfind = DummyProducts.filter((data) =>
                data.Title.toLowerCase().includes(value.toLowerCase())
            );
        }
        console.log(Userfind);
        SetDummy(Userfind);
    };
    return (
        <Authenticated
            header={{ Parent: "Dashboard" }}
            className="flex flex-col space-y-5"
        >
            <CarouselDashboard />
            <div className="sticky top-14 pb-5 flex flex-col gap-y-5 bg-white z-50">
                <TextInput
                    placeholder="Search"
                    onKeyDown={(e) =>
                        e.keyCode === 13 && HandleSearch(e.target.value)
                    }
            />
                <div className="flex space-x-1 w-1/2 ml-auto">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="border-[1px] rounded-md flex-1">
                            Open
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="border-[1px] rounded-md flex-1 py-0.5">
                            Open
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Billing</DropdownMenuItem>
                            <DropdownMenuItem>Team</DropdownMenuItem>
                            <DropdownMenuItem>Subscription</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>

            <div className="grid grid-col-2 md:grid-cols-6 gap-7 md:gap-2">
                {Dummy.map((item) => (
                    <ProductCard Data={item} />
                ))}
            </div>
        </Authenticated>
    );
}
