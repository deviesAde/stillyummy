import { CartItemTypes } from "@/types/CartItemType";
import { Card, CardTitle, CardContent, CardHeader } from "../ui/card";
import { LucideShoppingBag } from "lucide-react";
import { MerchantProductCartType } from "@/types/CartItemType";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { Input } from "../ui/input";

function CardItems({ item }: { item: MerchantProductCartType }) {
    return (
        <div className="flex gap-x-10 items-center">
            <Input type="checkbox" className="w-fit" />
            <img
                src={item.ProductPhoto}
                alt=""
                className="aspect-video object-fill max-w-sm rounded-sm"
            />
            <div className="grid grid-cols-5 w-full justify-between">
                <h1>{item.ProductName}</h1>
                <h1>
                    {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                    }).format(item.ProductPrice)}
                </h1>
                <h1>{item.ProductName}</h1>
                <h1>{item.ProductName}</h1>
                <Button className="w-fit mx-auto">
                    <Trash2 />
                </Button>
            </div>
        </div>
    );
}

export default function CardCart({ Data }: { Data: CartItemTypes }) {
    return (
        <Card>
            <CardHeader className="p-0 border-b-[0.5px] py-2 flex flex-row items-center pl-5 gap-x-5">
            <Input type="checkbox" className="max-w-max max-h-max" />
                <div className="flex items-center gap-x-1 font-bold ml-5">
                    <LucideShoppingBag className="max-h-5" />
                    <h1>{Data.MerchantName}</h1>
                </div>
            </CardHeader>
            <CardContent className="my-5 flex flex-col gap-y-5">
                {Data.MerchantProduct.map((item) => (
                    <CardItems item={item} />
                ))}
            </CardContent>
        </Card>
    );
}
