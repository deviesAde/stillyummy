import { Card, CardHeader, CardContent, CardTitle } from "../ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";

type status = "Pending" | "Berhasil" | "Dibatalkan";

export default function PencairanDana() {
    const [subPage, SetSubPage] = useState<status>("Pending");
    return (
        <Card className="flex-1">
            <CardHeader className="text-2xl font-black">
                <CardTitle>Pencairan Dana</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
                <div className="flex w-ful space-x-5 px-5 border-b-[1px]">
                    <h1
                        className={cn(
                            "py-1 border-b-2 border-transparent hover:cursor-pointer",
                            subPage === "Pending" ? "border-black" : ""
                        )}
                        onClick={() => SetSubPage("Pending")}
                    >
                        Pending
                    </h1>
                    <h1
                        className={cn(
                            "py-1 border-b-2 border-transparent hover:cursor-pointer",
                            subPage === "Berhasil" ? "border-black" : ""
                        )}
                        onClick={() => SetSubPage("Berhasil")}
                    >
                        Berhasil
                    </h1>
                    <h1
                        className={cn(
                            "py-1 border-b-2 border-transparent hover:cursor-pointer",
                            subPage === "Dibatalkan" ? "border-black" : ""
                        )}
                        onClick={() => SetSubPage("Dibatalkan")}
                    >
                        Dibatalkan
                    </h1>
                </div>
            </CardContent>
            <CardContent className="h-[395px] mb-5">
                <ScrollArea className="h-[400px]">
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
