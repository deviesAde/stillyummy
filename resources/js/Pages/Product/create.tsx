import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
import { useForm } from "@inertiajs/react";
import { useRef } from "react";
import { Plus } from "lucide-react";
import MakeTransactionPage from "@/services/MakeTransactionPage";

export default function CreateProductPage() {
    const { data, setData, post, errors, processing } = useForm({
        ProductName: "",
        ProductPrice: null as number | null,
        ProductStock: null as number | null,
        ProductDescription: "",
        ProductPhoto: [] as File[],
    });
    const FileUpload = useRef(null);
    console.log(errors);
    return (
        <Authenticated
            header={{ Parent: "Product", Submenu: "Tambah Product" }}
            className="flex flex-col gap-y-10"
        >
            <h1 className="font-medium text-3xl">Tambah Product</h1>
            <div className="flex flex-col gap-y-4 mb-10">
                <div>
                    <Label>Nama Product</Label>
                    <Input
                        placeholder="Nama Product"
                        value={data.ProductName}
                        onChange={(e) => setData("ProductName", e.target.value)}
                    />
                    {errors.ProductName && (
                        <Label className="italic text-red-400 font-light">
                            {errors.ProductName}
                        </Label>
                    )}
                </div>
                <div>
                    <Label>Harga</Label>
                    <Input
                        className="remove-arrow"
                        placeholder="Harga"
                        type="number"
                        value={data.ProductPrice ?? ""}
                        onChange={(e) =>
                            e.target.value
                                ? setData(
                                      "ProductPrice",
                                      parseFloat(e.target.value)
                                  )
                                : setData("ProductPrice", null)
                        }
                    />
                    {errors.ProductPrice && (
                        <Label className="italic text-r ed-400 font-light text-red-400">
                            {errors.ProductPrice}
                        </Label>
                    )}
                </div>
                <div>
                    <Label>Stock</Label>
                    <Input
                        className="remove-arrow"
                        placeholder="Stock"
                        type="number"
                        value={data.ProductStock ?? ""}
                        onChange={(e) =>
                            e.target.value
                                ? setData(
                                      "ProductStock",
                                      parseFloat(e.target.value)
                                  )
                                : setData("ProductStock", null)
                        }
                    />
                    {errors.ProductStock && (
                        <Label className="italic text-red-400 font-light">
                            {errors.ProductStock}
                        </Label>
                    )}
                </div>
                <div>
                    <Label>Deskripsi</Label>
                    <Textarea
                        placeholder="Deskripsi"
                        className="min-h-64"
                        onChange={(e) =>
                            setData("ProductDescription", e.target.value)
                        }
                    />
                    {errors.ProductDescription && (
                        <Label className="italic text-red-400 font-light">
                            {errors.ProductDescription}
                        </Label>
                    )}
                </div>
                <div
                    className={`flex flex-col ${
                        data.ProductPhoto ? "gap-y-5" : "gap-y-0.5"
                    }`}
                >
                    <Label>Foto</Label>
                    <div className="grid md:grid-cols-5 gap-5">
                        {data.ProductPhoto &&
                            data.ProductPhoto.map((photo, index) => {
                                return (
                                    <div className="relative items-center flex flex-col gap-y-5 group">
                                        <div className="z-10 gap-y-5 absolute hidden -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 group-hover:flex flex-col">
                                            <Button
                                                onClick={() =>
                                                    setData(
                                                        "ProductPhoto",
                                                        data.ProductPhoto.filter(
                                                            (item, id) =>
                                                                id !== index
                                                        )
                                                    )
                                                }
                                            >
                                                Set Thubnail
                                            </Button>
                                            <Button
                                                onClick={() =>
                                                    setData(
                                                        "ProductPhoto",
                                                        data.ProductPhoto.filter(
                                                            (item, id) =>
                                                                id !== index
                                                        )
                                                    )
                                                }
                                            >
                                                Remove
                                            </Button>
                                        </div>
                                        <img
                                            key={index}
                                            className="aspect-square object-cover object-top z-0 group-hover:blur"
                                            src={URL.createObjectURL(photo)}
                                            alt="photo"
                                        />
                                        {!index && (
                                            <Label className="bg-black text-white rounded-sm p-2">
                                                Thubnail
                                            </Label>
                                        )}
                                    </div>
                                );
                            })}
                        {data.ProductPhoto.length < 5 && (
                            <div
                                className="hover:cursor-pointer min-h-96 relative items-center flex flex-col gap-y-5 border-[0.5px] border-gray-300 rounded-xl"
                                onClick={() => FileUpload.current?.click()}
                            >
                                <Plus
                                    size={"full"}
                                    className="w-1/3 absolute block -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                                />
                            </div>
                        )}
                    </div>
                    <Input
                        placeholder="Deskripsi"
                        type="file"
                        className="hidden"
                        onChange={(e) =>
                            e.target.files &&
                            setData("ProductPhoto", [
                                ...data.ProductPhoto,
                                ...e.target.files,
                            ])
                        }
                        ref={FileUpload}
                    />
                    {errors.ProductPhoto && (
                        <Label className="italic text-red-400 font-light">
                            {errors.ProductPhoto}
                        </Label>
                    )}
                </div>
            </div>
            <div className="z-50 rounded-lg fixed left-0 md:left-72 bottom-0 md:right-10 right-0 flex justify-between p-5 bg-white border-[0.5px] items-center">
                <div className="flex flex-row gap-x-4 w-full">
                    <Button className="flex-1 bg-white border-black border-2 text-black font-bold">
                        Draft
                    </Button>
                    <Button
                        className="flex-1"
                        disabled={processing}
                        onClick={(e) => {
                            post(route("product.store"));
                        }}
                    >
                        Simpan
                    </Button>
                </div>
            </div>
        </Authenticated>
    );
}
