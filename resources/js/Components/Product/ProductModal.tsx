import {
    Card,
    CardHeader,
    CardTitle,
    CardFooter,
    CardContent,
    CardDescription,
} from "../ui/card";
import { ProductCardType } from "@/types/ProductCardType";
import ButtonFooter from "./ButtonFooter";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function ProductModal({
    onClick,
    Data,
}: {
    onClick: (state: boolean) => void;
    Data: ProductCardType;
}) {
    const [PurchaseAmount, SetPurchaseAmount] = useState<number>(1);
    const [SubTotal, SetSubTotal] = useState<number>(Data.price);
    useEffect(() => {
        SetSubTotal(PurchaseAmount * Data.price);
    }, [PurchaseAmount]);

    const HandleChangeAmount = (type: string): void => {
        type === "Increment"
            ? SetPurchaseAmount((prev) => prev + 1)
            : SetPurchaseAmount((prev) => prev - 1);
    };

    // console.log(SubTotal)

    return (
        <div className="fixed flex-flex-col min-h-screen bg-black bg-opacity-50 z-50 w-full">
            <div
                className="w-full min-h-screen"
                onClick={() => onClick(false)}
            ></div>
            <Card className="fixed w-full bottom-0 z-50 rounded-3xl drop gap-y-2">
                <CardHeader>
                    <CardTitle>Stock Product</CardTitle>
                    <CardDescription className="text-black font-bold text-xl">
                        Rp{Data.price.toLocaleString("ID")}
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-between gap-x-5 gap=">
                    <img
                        src={Data.Thubnail[1]}
                        alt=""
                        className="object-cover aspect-square w-1/3 rounded-md"
                    />
                    <div className="flex-1 flex flex-col justify-start gap-y-2">
                        <CardDescription className="text-black font-semibold">
                            Subtotal
                        </CardDescription>
                        <CardDescription className="text-black text-md font-bold">
                            Rp{SubTotal.toLocaleString("ID")}
                        </CardDescription>
                        <CardDescription className="text-black">
                            Stock : {Data.Stock}
                        </CardDescription>
                        <div className="flex justify-between gap-x-2 bg-white w-2/3 rounded-full border-[0.5px] border-gray-200">
                            <Button
                                className="h-fit py-2 rounded-l-full"
                                disabled={PurchaseAmount === 1}
                                onClick={() => HandleChangeAmount("Decrement")}
                            >
                                -
                            </Button>
                            <h1 className="my-auto">{PurchaseAmount}</h1>
                            <Button
                                className="h-fit rounded-r-full"
                                disabled={PurchaseAmount === Data.Stock}
                                onClick={() => HandleChangeAmount("Increment")}
                            >
                                +
                            </Button>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="space-x-5 border-t-2 pt-5">
                    <ButtonFooter />
                </CardFooter>
            </Card>
        </div>
    );
}
