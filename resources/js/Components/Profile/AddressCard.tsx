import { Card,CardFooter,CardContent,CardDescription,CardHeader,CardTitle } from "../ui/card";
import { Edit,BadgeCheck } from "lucide-react";
import { DataType } from "@/types/AddressType";
export default function Address_card({ Data, onClick } : {Data:DataType, onClick:() => void}) {
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-x-2 gap-y-3 md:gap-y-0">
                    <CardTitle className="text-sm">{Data.Name}</CardTitle>
                    <CardTitle className="hidden md:block font-normal text-sm">|</CardTitle>
                    <CardTitle className="text-sm">{Data.Phone}</CardTitle>
                </div>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-5 items-center">
                    <BadgeCheck
                        color="black"
                        className="hover:cursor-pointer"
                        onClick={onClick}
                    />
                    <Edit color="black" className="hover:cursor-pointer" />
                </div>
            </CardHeader>
            <CardContent>
                <CardDescription className="text-xs">{Data.Address}</CardDescription>
            </CardContent>
            <CardFooter></CardFooter>
        </Card>
    );
}