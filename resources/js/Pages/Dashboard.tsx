import Authenticated from "@/Layouts/AuthenticatedLayout";
import CarouselComponent from "@/Components/Dashboard/Carousel";
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

const DummyProducts: ProductCardType[] = Array.from({ length: 100 }).map(
    (id, index) => {
        faker.seed(index);
        const DummyProduct: ProductCardType = {
            ID: faker.number.int(),
            Thubnail: faker.image.urlPicsumPhotos({ height: 800, width: 1000 }),
            Title: faker.commerce.productName(),
            price: faker.commerce.price({
                symbol: "Rp",
                min: 10000,
                max: 500000,
            }),
        };
        return DummyProduct;
    }
);

export default function Page() {
    // console.log(DummyProducts)
    return (
        <Authenticated header={{ Parrent: "Dashboard" }}>
            <div className="pt-5 flex flex-col space-y-5">
                <div className="sticky top-14 px-10 pt-10 pb-5 flex flex-col gap-y-5 bg-white z-50">
                    <TextInput placeholder="Search" />
                    <div className="flex space-x-1 w-1/2 ml-auto">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="border-[1px] rounded-md flex-1">
                                Open
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>
                                    Subscription
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <DropdownMenu>
                            <DropdownMenuTrigger className="border-[1px] rounded-md flex-1 py-0.5">
                                Open
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>
                                    My Account
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Billing</DropdownMenuItem>
                                <DropdownMenuItem>Team</DropdownMenuItem>
                                <DropdownMenuItem>
                                    Subscription
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                <div className="grid grid-col-2 md:grid-cols-6 gap-7 md:gap-2 px-10">
                    {DummyProducts.map((item) => (
                        <ProductCard Data={item} />
                    ))}
                </div>
                {/* <CarouselComponent /> */}
            </div>
        </Authenticated>
    );
}
