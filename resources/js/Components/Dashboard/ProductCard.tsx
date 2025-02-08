import { ProductCardType } from "@/types/ProductCardType";
import { Card, CardHeader, CardTitle,CardDescription } from "../ui/card";
import { router } from "@inertiajs/react";

export default function ProductCard({ Data }: { Data: ProductCardType }) {
    console.log(Data);
    return (
        <Card className="transition duration-0 scale-1 hover:duration-100 md:hover:scale-105 hover:cursor-pointer md:hover:drop-shadow-2xl" onClick= {()=>router.get(`/product/${Data.ID}`)}>
            <CardHeader className="p-0 pb-5">
                <img className="rounded-t-md object-fill" src={Data.Thubnail} alt={Data.Title} />
                <CardTitle className="text-md md:text-sm font-normal mx-2">{Data.Title}</CardTitle>
                <CardDescription className="font-extrabold text-black mx-2">Rp{Data.price.toLocaleString("ID")}</CardDescription>
            </CardHeader>
        </Card>
    );
}
