import { ProductCardType } from "@/types/ProductCardType";
import Layout from "@/Layouts/Admin/AdminLayout";
import { faker } from "@faker-js/faker";
import CarouselProduct from "@/Components/Product/Carousel";
import { useState } from "react";
import { Button } from "@/Components/ui/button";
import ProductDescription from "@/Components/Product/ProductDescription";
import TakedownProduct from "@/Components/Product/TakedownModal";
import CardTakedown from "@/Components/Product/CardTakeDown";

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
        ProductExpired: faker.date.future(),
        Seller: faker.commerce.department(),
        SellerPorfile: faker.image.avatar(),
        SellerDescription: faker.lorem.paragraph(),
        Stock: faker.number.int({ min: 0, max: 10 }),
    };
    const [ModalAdmin, SetModalAdmin] = useState(false);
    return (
        <div className="flex">
            <Layout
                header={{ Parent: "Product" }}
                className="flex xl:grid-cols-3 gap-x-10 gap-y-5"
            >
                <div className="md:w-2/3 flex flex-col xl:flex-row gap-5">
                    <CarouselProduct />
                    <ProductDescription Product={Product} />
                </div>

                <div className="md:w-1/3 hidden md:block">
                    <CardTakedown onClick={SetModalAdmin} />
                </div>
                <div className="fixed bottom-0 pb-10 pr-10 w-full md:hidden">
                    <Button
                        className="w-full"
                        onClick={() => SetModalAdmin(true)}
                        disabled={ModalAdmin}
                    >
                        Takedown Product
                    </Button>
                </div>
            </Layout>
            {ModalAdmin && <TakedownProduct onClick={SetModalAdmin} />}
        </div>
    );
}
