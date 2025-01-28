import { ProductCardType } from "@/types/ProductCardType";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { faker } from "@faker-js/faker";
import CarouselProduct from "@/Components/Product/Carousel";
import { useState } from "react";
import ProductModal from "@/Components/Product/ProductModal";
import ButtonFooter from "@/Components/Product/ButtonFooter";
import { Button } from "@/Components/ui/button";
import ProductDescription from "@/Components/Product/ProductDescription";
import StockCard from "@/Components/Product/StockCard";
export default function ProductPage() {
    faker.seed(1);
    const Product: ProductCardType = {
        ID: faker.string.ulid(),
        Thubnail: Array.from({ length: 3 }).map(() =>
            faker.image.url({ height: 9, width: 16 })
        ),
        Title: faker.commerce.productName(),
        Description: faker.lorem.paragraphs(),
        price: faker.number.float({
            min: 10000,
            max: 100000,
            fractionDigits: 2,
        }),
        SellerDescription: faker.lorem.paragraph(),
        Stock: faker.number.int({ min: 0, max: 10 }),
    };
    const [Modal, SetModal] = useState(false);
    return (
        <div className="flex">
            <Authenticated
                header={{ Parent: "Product" }}
                className="flex xl:grid-cols-3 gap-x-10 gap-y-5"
            >
                <div className="md:w-2/3 flex flex-col xl:flex-row gap-5">
                    <CarouselProduct />
                    <ProductDescription Product={Product} />
                </div>
                <div className="md:w-1/3 hidden md:block">
                    <StockCard Product={Product} />
                </div>

                {Product.Stock ? (
                    <ButtonFooter
                        className="flex fixed bottom-0 pb-10 w-full pr-10 md:hidden bg-white gap-x-5 mt-5"
                        Action1={() => SetModal(true)}
                        Action2={() => SetModal(true)}
                    />
                ) : (
                    <div className="fixed bottom-0 pb-10 pr-10 w-full md:hidden">
                        <Button
                            disabled
                            className="w-full bg-white text-black border-2 border-black"
                        >
                            Stock Habis
                        </Button>
                    </div>
                )}
            </Authenticated>
            {Modal && <ProductModal Data={Product} onClick={SetModal} />}
        </div>
    );
}
