import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import flashtype from "@/types/flashType";
import { useState } from "react";
import { Button } from "@/Components/ui/button";

export default function CreateProductPage({ flash }: { flash: flashtype }) {
    const [Photo, setPhoto] = useState<Blob[] | MediaSource[]>();
    console.log(Photo);
    return (
        <Authenticated
            header={{ Parent: "Product", Submenu: "Tambah Product" }}
            className="flex flex-col gap-y-10"
        >
            <h1 className="font-medium text-3xl">Tambah Product</h1>
            <div className="flex flex-col gap-y-4">
                <div>
                    <Label>Nama Product</Label>
                    <Input placeholder="Nama Product" />
                    {flash?.error?.Name && (
                        <Label className="italic text-red-400 font-light">
                            Harap Mengisi Nama Product
                        </Label>
                    )}
                </div>
                <div>
                    <Label>Harga</Label>
                    <Input placeholder="Harga" />
                    {flash?.error?.Harga && (
                        <Label className="italic text-red-400 font-light">
                            Harap Mengisi Harga Product
                        </Label>
                    )}
                </div>
                <div>
                    <Label>Stock</Label>
                    <Input placeholder="Stock" />
                    {flash?.error?.Stock && (
                        <Label className="italic text-red-400 font-light">
                            Harap Mengisi Stock Product
                        </Label>
                    )}
                </div>
                <div>
                    <Label>Deskripsi</Label>
                    <Textarea placeholder="Deskripsi" className="h-60"/>
                    {flash?.error?.Deskripsi && (
                        <Label className="italic text-red-400 font-light">
                            Harap Mengisi Deskripsi Product
                        </Label>
                    )}
                </div>
                <div className={`flex flex-col ${Photo ? "gap-y-5" : "gap-y-0.5"}`}>
                    <Label>Foto</Label>
                    {/* <input type="file" multiple onChange={HandleFileUpload} /> */}
                    <div className="grid grid-cols-5 gap-5">
                        {Photo &&
                            Photo.map((photo, index) => {
                                return (
                                    <div className="items-center flex flex-col gap-y-5">
                                        <img
                                            key={index}
                                            className="aspect-square object-cover object-top"
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
                    </div>
                    <Input
                        placeholder="Deskripsi"
                        multiple
                        type="file"
                        onChange={(e) =>
                            e.target.files && setPhoto([...e.target.files])
                        }
                    />
                    {flash?.error?.foto && (
                        <Label className="italic text-red-400 font-light">
                            Harap Mengupload Foto Product
                        </Label>
                    )}
                </div>
            </div>
            <div className="rounded-lg fixed left-0 md:left-72 bottom-0 md:right-10 right-0 flex justify-between p-5 bg-white border-[0.5px] items-center">
                <div className="flex flex-row gap-x-4 w-full">
                    <Button className="flex-1 bg-white border-black border-2 text-black font-bold">
                        Draft
                    </Button>
                    <Button className="flex-1">Simpan</Button>
                </div>
            </div>
        </Authenticated>
    );
}
