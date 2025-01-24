import { ProductCardType } from "@/types/ProductCardType";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { faker, tr } from "@faker-js/faker";
import CarouselProduct from "@/Components/Product/Carousel";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function ProductPage() {
    faker.seed(1)
    const Product: ProductCardType = {
        ID: faker.string.ulid(),
        Thubnail: Array.from({ length: 3 }).map(() =>
            faker.image.url({ height: 9, width: 16 })
        ),
        Title: faker.commerce.productName(),
        Description: faker.lorem.paragraphs(),
        price: faker.commerce.price({ min: 10000, max: 100000, symbol: "Rp" }),
        SellerDescription: faker.lorem.paragraph(),
    };
    console.log(Product)
    const [Description, SetDescription] = useState(true);

    return (
        <Authenticated header={{ Parrent: "Product" }} className="grid md:grid-cols-3 gap-x-10 gap-y-5">
            {/* <div className="grid md:grid-cols-3 gap-x-10 gap-y-5"> */}
                <CarouselProduct />
                <div className="flex flex-col space-y-5">
                    <div className="space-y-5 mt-5 md:mt-0">
                        <h1 className="font-bold text-xl">{Product.Title}</h1>
                        <h1 className="font-extrabold text-2xl">
                            {Product.price}
                        </h1>
                    </div>
                    <div className="flex flex-col gap-y-5">
                        <div className="flex border-y-[0.1px] items-center">
                            <h1
                                className={cn(
                                    "py-3 w-fit px-2.5 transition duration-0 hover:cursor-pointer",
                                    Description &&
                                        "border-b-2 border-black font-bold duration-200 ease-in-out"
                                )}
                                onClick={() => SetDescription(true)}
                            >
                                Deskripsi
                            </h1>
                            <h1
                                className={cn(
                                    "py-3 w-fit px-2.5 transition duration-0 hover:cursor-pointer",
                                    !Description &&
                                        "border-b-2 border-black font-bold duration-200 ease-in-out"
                                )}
                                onClick={() => SetDescription(false)}
                            >
                                Informasi Toko
                            </h1>
                        </div>
                        <div>
                            {Description ? (
                                <h3 className="text-justify">
                                    {Product.Description}
                                </h3>
                            ) : (
                                <h3 className="text-justify">
                                    {Product.SellerDescription}
                                </h3>
                            )}
                        </div>
                    </div>
                </div>
            {/* </div> */}
            <div className="flex fixed bottom-0 pb-10 w-full pr-10 md:hidden bg-white gap-x-5 mt-5">
                <Button className="flex-1 bg-transparent border-[1px] border-black text-black hover:bg-gray-100">
                    <Plus color="black" />
                    <h1 className="mt-0.5">Keranjang</h1>
                </Button>
                <Button className="flex-1"><h1 className="mt-0.5">Beli Sekarang</h1></Button>
            </div>
        </Authenticated>
    );
}
