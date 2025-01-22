
import { Card,CardHeader,CardTitle,CardContent,CardDescription,CardFooter } from "../ui/card";
import { Edit } from "lucide-react";

export default function Banner_card({ Data }) {
    console.log(Data);
    return (
        <Card>
            <CardHeader className="flex flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row mditems-center justify-between gap-x-[2px] md:gap-x-2">
                    <CardTitle className="text-sm md:text-2xl">{Data.Name}</CardTitle>
                    <CardTitle className="hidden md:block font-normal">|</CardTitle>
                    <CardTitle className="text-sm md:text-2xl">{Data.Phone}</CardTitle>
                </div>
                <Edit color="black" className="hover:cursor-pointer" />
            </CardHeader>
            <CardContent>
                <CardDescription className="text-xs text-justify">{Data.Address}</CardDescription>
            </CardContent>
            <CardFooter>
                <h1 className="p-2 px-5 border-[1px] bg-green-300 border-green-600 rounded-md font-semibold drop-shadow-sm text-green-600">
                    Default
                </h1>
            </CardFooter>
        </Card>
    );
}