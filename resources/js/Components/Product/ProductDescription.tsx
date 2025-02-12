import { ProductCardType } from "@/types/ProductCardType";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ProductDescription({
    Product,
}: {
    Product: ProductCardType;
}) {
    const [Description, SetDescription] = useState(true);
    return (
        <div className="flex flex-col flex-1">
            <div className="space-y-5 mt-10 md:mt-0">
                <h1 className="font-bold text-xl">{Product.Title}</h1>
                <h1 className="font-extrabold text-2xl">
                    Rp{Product.price.toLocaleString("ID")}
                </h1>
            </div>
            <div className="flex items-center gap-x-5 mt-5 border-t-[1px] py-3 px-2">
                <h1 className="font-medium">Tanggal Expired</h1>
                <h1 className="font-bold text-md">{Product.ProductExpired.toDateString()}</h1>
            </div>
            <div className="flex flex-col gap-y-5">
                <div className="flex border-y-[0.1px] items-center">
                    <h1
                        className={cn(
                            "py-3 w-fit px-2.5 transition duration-0 hover:cursor-pointer",
                            Description &&
                                "border-b-2 border-black font-bold duration-200 ease-in-out"
                        )}
                        onClick={() => SetDescription(true)}
                    >
                        Deskripsi
                    </h1>
                    <h1
                        className={cn(
                            "py-3 w-fit px-2.5 transition duration-0 hover:cursor-pointer",
                            !Description &&
                                "border-b-2 border-black font-bold duration-200 ease-in-out"
                        )}
                        onClick={() => SetDescription(false)}
                    >
                        Informasi Toko
                    </h1>
                </div>
                <div>
                    {Description ? (
                        <h3 className="text-justify">{Product.Description}</h3>
                    ) : (
                        <h3 className="text-justify">
                            {Product.SellerDescription}
                        </h3>
                    )}
                </div>
                <div className="flex items-center gap-x-5 border-y-[1px] py-3">
                    <img
                        src={Product.SellerPorfile}
                        className="aspect-square rounded-full w-[10%]"
                        alt=""
                    />
                    <h1 className="font-bold text-md">{Product.Seller}</h1>
                </div>
            </div>
        </div>
    );
}
