import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "../ui/card";
import { XSquareIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import TransferBank from "./TransferBank";
import E_Wallet from "./E-Wallet";
import { useState } from "react";
import { Button } from "../ui/button";

type MetodePenarikanType = "TransferBank" | "E-Wallet" | "";

export default function TarikSaldo({
    onClick,
}: {
    onClick: (params: boolean) => void;
}) {
    const [MetodePenarikan, SetMetodePenarikan] =
        useState<MetodePenarikanType>("");
    return (
        <div className="fixed top-0 z-50 bg-black bg-opacity-25 left-0 w-screen min-h-screen">
            <Card className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 m-auto md:w-1/3">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Tarik Tunai</CardTitle>
                    <XSquareIcon
                        size={35}
                        onClick={() => onClick(false)}
                        className="hover:cursor-pointer"
                    />
                </CardHeader>
                <CardContent>
                    <Label>Nominal</Label>
                    <Input type="number"/>
                </CardContent>
                <CardContent className="flex flex-col w-full gap-y-2">
                    <h1>Metode Penarikan</h1>
                    <div className="flex flex-row">
                        <div className="flex flex-row w-full  items-center gap-x-5">
                            <Input
                                type="radio"
                                name="Metode"
                                className="max-w-fit max-h-max"
                                onChange={() =>
                                    SetMetodePenarikan("TransferBank")
                                }
                            />
                            <h1 className="text-md">Transfer Bank</h1>
                        </div>
                        <div className="flex flex-row w-full  items-center gap-x-5">
                            <Input
                                type="radio"
                                name="Metode"
                                className="max-w-fit max-h-max"
                                onChange={() => SetMetodePenarikan("E-Wallet")}
                            />
                            <h1 className="text-md">E-Wallet</h1>
                        </div>
                    </div>
                </CardContent>
                {MetodePenarikan === "TransferBank" && <TransferBank />}
                {MetodePenarikan === "E-Wallet" && <E_Wallet />}
                {MetodePenarikan !== "" && <CardFooter><Button className="w-full">Submit</Button></CardFooter>}
            </Card>
        </div>
    );
}
