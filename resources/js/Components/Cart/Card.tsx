import { CartItemTypes } from "@/types/CartItemType";
import { Card, CardTitle, CardContent, CardHeader } from "../ui/card";
import { LucideShoppingBag } from "lucide-react";
import { MerchantProductCartType } from "@/types/CartItemType";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { Input } from "../ui/input";
import CreateTransactionType from "@/types/CreateTransactionType";
import { useEffect, useRef, useState } from "react";

function CardItems({
    item,
    SetStock,
}: {
    item: MerchantProductCartType;
    SetStock: (
        params: (prev: MerchantProductCartType[]) => MerchantProductCartType[] | MerchantProductCartType[]
    ) => void;
}) {
    const [stock, setStock] = useState(item.quantity);
    const [price, setPrice] = useState(item.quantity * item.price);
    const HandleChangeAmount = (type: string): void => {
        type === "Increment"
            ? setStock((prev) => prev + 1)
            : setStock((prev) => prev - 1);
    };

    useEffect(() => {
        setPrice(stock * item.price);
        SetStock((prev) => {
            const previewdata = [...prev].map(
                (isi: MerchantProductCartType) => {
                    if (isi.id === item.id) {
                        isi.ProductSubtotal = stock * item.price;
                        isi.quantity = stock;
                    }
                    return isi;
                }
            );
            return previewdata;
        });
    }, [stock]);
    return (
        <div className="md:flex gap-x-10 items-center">
            <img
                src={item.ProductPhoto}
                alt=""
                className="aspect-video object-fill max-w-sm rounded-sm"
            />
            <div className="md:grid grid-cols-5 w-full justify-between gap-x-10 items-center">
                <h1>{item.name}</h1>
                <h1>
                    {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                    }).format(item.price)}
                </h1>
                <div className="flex items-center gap-x-5 rounded-full w-fit border-[1px]">
                    <Button
                        className="rounded-l-full"
                        disabled={stock <= 1}
                        onClick={() => HandleChangeAmount("Descrement")}
                    >
                        -
                    </Button>
                    <h1>{stock}</h1>
                    <Button
                        className="rounded-r-full"
                        disabled={stock === item.ProductStock}
                        onClick={() => HandleChangeAmount("Increment")}
                    >
                        +
                    </Button>
                </div>
                <h1>
                    {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                    }).format(price)}
                </h1>
                <Button className="w-fit mx-auto">
                    <Trash2 />
                </Button>
            </div>
        </div>
    );
}

export default function CardCart({
    Data,
    SetItem,
}: {
    Data: CartItemTypes;
    SetItem: (params: CreateTransactionType) => void;
}) {
    const [MerchantProduct, SetMerchantProduct] = useState<
        MerchantProductCartType[]
    >(Data.MerchantProduct);
    const checkbox = useRef(null);

    function Calculate() {
        let result = 0;
        MerchantProduct.forEach((items) => {
            result += items.ProductSubtotal ?? 0;
        });
        SetItem({ Total: result, items: MerchantProduct });
    }

    useEffect(() => {
        if (checkbox.current?.checked) {
            Calculate();
        }
    }, [MerchantProduct]);

    return (
        <Card>
            <CardHeader className="p-0 border-b-[0.5px] py-2 flex flex-row items-center pl-5">
                <Input
                    type="radio"
                    className="max-w-max max-h-max"
                    name="merchant"
                    onClick={Calculate}
                    ref={checkbox}
                />
                <div className="flex items-center gap-x-1 font-bold ml-5">
                    <LucideShoppingBag className="max-h-5" />
                    <h1>{Data.MerchantName}</h1>
                </div>
            </CardHeader>
            <CardContent className="my-5 flex flex-col gap-y-5">
                {Data.MerchantProduct.map((item) => (
                    <CardItems item={item} SetStock={SetMerchantProduct} />
                ))}
            </CardContent>
        </Card>
    );
}
