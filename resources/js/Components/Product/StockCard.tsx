import { ProductCardType } from "@/types/ProductCardType";
import {
    Card,
    CardDescription,
    CardContent,
    CardHeader,
    CardFooter,
    CardTitle,
} from "../ui/card";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import MakeTransactionPage from "@/services/MakeTransactionPage";

export default function StockCard({ Product }: { Product: ProductCardType }) {
    const [PurchaseAmount, SetPurchaseAmount] = useState<number>(
        Product.Stock ? 1 : 0
    );
    const [SubTotal, SetSubTotal] = useState<number>(
        Product.Stock ? Product.price : 0
    );
    useEffect(() => {
        SetSubTotal(PurchaseAmount * Product.price);
    }, [PurchaseAmount]);

    const HandleChangeAmount = (type: string): void => {
        type === "Increment"
            ? SetPurchaseAmount((prev) => prev + 1)
            : SetPurchaseAmount((prev) => prev - 1);
    };
    return (
        <Card className="hidded h-fit md:flex flex-col gap-y-5 md:w-full 2xl:w-2/3">
            <CardHeader className="h-fit pb-0 gap-y-2">
                <CardTitle>
                    {Product.Stock ? "Stock Product" : "Stock Habis"}
                </CardTitle>
                <CardContent className="flex p-0 justify-between flex-col xl:flex-row">
                    <h1>Subtotal</h1>
                    <h1>Rp{SubTotal.toLocaleString("ID")}</h1>
                </CardContent>
            </CardHeader>
            <CardContent className="w-full flex flex-col gap-y-3">
                <div className="w-full flex gap-x-2 items-center flex-col xl:flex-row xl-flex-row">
                    <div className="flex items-center gap-x-5 rounded-full border-[1px]">
                        <Button
                            className="rounded-l-full"
                            disabled={PurchaseAmount <= 1}
                            onClick={() => HandleChangeAmount("Descrement")}
                        >
                            -
                        </Button>
                        <h1>{PurchaseAmount}</h1>
                        <Button
                            className="rounded-r-full"
                            disabled={PurchaseAmount === Product.Stock}
                            onClick={() => HandleChangeAmount("Increment")}
                        >
                            +
                        </Button>
                    </div>
                    <h1>Stock : {Product.Stock}</h1>
                </div>
                <Button disabled={Product.Stock! < 1}>
                    Tambahkan Ke keranjang
                </Button>
                <Button
                    className="text-black bg-white border-[2.5px] border-black"
                    disabled={Product.Stock! < 1}
                    onClick={() =>
                        MakeTransactionPage({
                            Total: SubTotal,
                            items: [
                                {
                                    id: Product.ID,
                                    name: Product.Title,
                                    price: Product.price,
                                    ProductStock: Product.Stock as number,
                                    price: Product.price,
                                    ProductSubtotal : SubTotal,
                                    quantity : PurchaseAmount,
                                    ProductPhoto : Product.Thubnail as string
                                },
                            ],
                        })
                    }
                >
                    Beli Sekarang
                </Button>
            </CardContent>
        </Card>
    );
}
