import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/Components/ui/button";
import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker/locale/id_ID";
import { CartItemTypes } from "@/types/CartItemType";
import CardCart from "@/Components/Cart/Card";
import { Card } from "@/components/ui/card";

const CartItems = Array.from({ length: 5 }).map((item, index) => {
    const merchant:CartItemTypes = {};
    merchant.MerchantName = faker.lorem.word();
    merchant.MerchantProduct = [];
    Array.from({ length: index + 1 }).forEach(() => {
        merchant.MerchantProduct.push({ 
            ProductName: faker.commerce.productName(),
            ProductPrice : faker.number.int({min:10000,max:100000}),
            ProductStock : faker.number.int({min:1,max:10}),
            ProductPhoto : faker.image.dataUri({width:1920,height:1080}),
            ProductAmount : faker.number.int({min:1,max:10}),
        });
    });
    return merchant;
});
export default function Cart() {
    const [Amount, SetAmount] = useState(0);
    return (
        <Authenticated
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
            {CartItems.map((item)=> <CardCart Data={item}/>)}
            <div className="rounded-lg fixed left-0 md:left-72 bottom-0 md:right-10 right-0 flex justify-between p-5 bg-white border-[0.5px] items-center">
                <h1 className="text-xl font-bold">
                    {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                    }).format(Amount)}
                </h1>
                <Button>Bayar Sekarang</Button>
            </div>
        </Authenticated>
    );
}
