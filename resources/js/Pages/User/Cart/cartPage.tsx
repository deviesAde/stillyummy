import Layout from "@/Layouts/User/UserLayout";
import { Button } from "@/Components/ui/button";
import { useState} from "react";
import { faker } from "@faker-js/faker/locale/id_ID";
import { CartItemTypes } from "@/types/CartItemType";
import CardCart from "@/Components/Cart/Card";
import { Card } from "@/Components/ui/card";
import CreateTransactionType from "@/types/CreateTransactionType";
import MakeTransactionPage from "@/services/MakeTransactionPage";

const CartItems = Array.from({ length: 5 }).map((item, index) => {
    const merchant: CartItemTypes = {
        MerchantName: "",
        MerchantProduct: [],
    };
    merchant.MerchantName = faker.lorem.word();
    merchant.MerchantProduct = [];
    Array.from({ length: index + 1 }).forEach((i, index) => {
        merchant.MerchantProduct.push({
            id: faker.string.ulid(),
            name: faker.commerce.productName(),
            price: faker.number.int({ min: 10000, max: 100000 }),
            ProductStock: faker.number.int({ min: 1, max: 10 }),
            ProductPhoto: faker.image.dataUri({ width: 1920, height: 1080 }),
            quantity: faker.number.int({ min: 1, max: 10 }),
        });
        merchant.MerchantProduct[index].ProductSubtotal =
            merchant.MerchantProduct[index].price *
            merchant.MerchantProduct[index].quantity;
    });
    return merchant;
});

export default function Cart() {
    const [cartItems, SetCartItems] = useState<CreateTransactionType>();
    console.log();
    return (
        <Layout
            header={{ Parent: "Keranjang" }}
            className="flex flex-col gap-y-4"
        >
            <Card className="hidden sticky top-20 md:flex justify-end py-2 font-semibold">
                <div className="flex w-3/4 text-center">
                    <h1 className="flex-1">Product</h1>
                    <h1 className="flex-1">Harga Satuan</h1>
                    <h1 className="flex-1">kuantitas</h1>
                    <h1 className="flex-1">Total Harga</h1>
                    <h1 className="flex-1">Aksi</h1>
                </div>
            </Card>
            {CartItems.map((item) => (
                <CardCart Data={item} SetItem={SetCartItems} />
            ))}
            <div className="rounded-lg fixed left-0 md:left-72 bottom-0 md:right-10 right-0 flex justify-between p-5 bg-white border-[0.5px] items-center">
                <h1 className="text-xl font-bold">
                    {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                    }).format(cartItems?.Total ?? 0)}
                </h1>
                <Button disabled={!cartItems} onClick={()=>cartItems && MakeTransactionPage(cartItems)}>Bayar Sekarang</Button>
            </div>
        </Layout>
    );
}
