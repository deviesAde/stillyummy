import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/Components/ui/button";
import { router } from "@inertiajs/react";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardFooter } from "@/Components/ui/card";

export default function Products() {
    const [ModalUploadProduct, SetModalUploadProduct] = useState<boolean>(true);
    return (
        <Authenticated
            header={{ Parent: "Merchant", Submenu: "Product List" }}
            className="gap-y-5 flex flex-col"
        >
            {ModalUploadProduct && (
                <Card className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-full pt-2 px-5">
                        <h1
                            className="w-fit ml-auto font-extralight text-gray-400 hover:cursor-pointer"
                            onClick={() => SetModalUploadProduct(false)}
                        >
                            X
                        </h1>
                    </div>
                    <CardHeader className="pt-0">
                        <CardTitle>Metode Penambahan Product</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex gap-x-2">
                        <Button
                            className="flex-1"
                            onClick={() => router.get(route("product.create"))}
                        >
                            Satuan
                        </Button>
                        <Button
                            className="flex-1"
                            onClick={() => router.get(route("product.createbatch"))}
                        >
                            Batch
                        </Button>
                    </CardFooter>
                </Card>
            )}
            <Button
                className="w-fit ml-auto"
                onClick={() => SetModalUploadProduct(true)}
            >
                Tambah Product
            </Button>
            <div className="py-1 bg-black"></div>
        </Authenticated>
    );
}
