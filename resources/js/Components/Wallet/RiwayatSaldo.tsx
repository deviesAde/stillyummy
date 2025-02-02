import { Card,CardHeader,CardContent,CardTitle } from "../ui/card";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function RiwayatSaldo() {
    const[subPage,SetSubPage] = useState<Boolean>(false)
    return (
        <Card className="flex-1 h-fit">
            <CardHeader className="text-2xl font-black">
                <CardTitle>Riwayat Saldo</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
                <div className="flex w-ful space-x-5 px-5 border-b-2">
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
        </Card>
    );
}
