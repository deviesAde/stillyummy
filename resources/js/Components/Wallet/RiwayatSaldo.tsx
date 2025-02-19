import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "../ui/scroll-area";

export default function RiwayatSaldo() {
    const [subPage, SetSubPage] = useState<Boolean>(false);
    
    return (
        <Card className="flex-1 ">
            <CardHeader className="text-2xl font-black">
                <CardTitle>Riwayat Saldo</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
                <div className="flex w-ful space-x-5 px-5 border-b-[1px]">
                    <h1
                        className={cn(
                            "py-1 border-b-2 border-transparent hover:cursor-pointer",
                            !subPage ? "border-black" : ""
                        )}
                        onClick={() => SetSubPage(false)}
                    >
                        Pemasukan
                    </h1>
                    <h1
                        className={cn(
                            "py-1 border-b-2 border-transparent hover:cursor-pointer",
                            subPage ? "border-black" : ""
                        )}
                        onClick={() => SetSubPage(true)}
                    >
                        Pengeluaran
                    </h1>
                </div>
            </CardContent>
            <CardContent>
                <ScrollArea className="h-[510px]">
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>
                    <h1>a</h1>

                </ScrollArea>
            </CardContent>
        </Card>
    );
}
