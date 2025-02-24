import MerchantLayout from "../../../Layouts/Merchant/MerchantLayout";
import { Input } from "@/Components/ui/input";
import { useCallback, useState } from "react";
import { useRef } from "react";
import { Button } from "@/Components/ui/button";
import Papa from "papaparse";
import * as ExcelParser from "xlsx";
import TableDemo from "@/Components/Product/TableBatchUpload";
import { cn } from "@/lib/utils";
import { router } from "@inertiajs/react";

export type Header = {
    ProductName: string;
    ProductPrice: number;
    ProductStock: number;
    ProductDescription: string;
    ProductExpired: Date;
    ProductImage?: string;
};

export default function CreateBatchPage() {
    // #Todo
    // Validasi isi data setelah reload/load data
    // Tambah State validasi untuk contion submit button
    const HeaderProductName = useRef<HTMLInputElement>(null);
    const HeaderProductPrice = useRef<HTMLInputElement>(null);
    const HeaderProductDescription = useRef<HTMLInputElement>(null);
    const HeaderProductStock = useRef<HTMLInputElement>(null);
    const HeaderProductExpired = useRef<HTMLInputElement>(null);
    const [File, SetFile] = useState<File>();
    const [ReadedFile, SetReadedFile] = useState<Header[]>();
    const [Image, setImage] = useState<{ url: string; index: number }[]>([]);
    const [validate, setValidate] = useState<boolean>();

    const handleChangeImage = useCallback((url: string, index: number) => {
        setImage((prevImages) => {
            const newImageArray = [...prevImages];
            newImageArray[index] = { url, index }; // Update hanya indeks tertentu
            return newImageArray;
        });
    }, []);

    const handleUpload = () => {
        const productsWithImages = ReadedFile?.map((product, index) => ({
            ...product,
            ProductImage: Image[index]?.url, // Menggabungkan URL gambar ke produk
        }));
        router.post(route("merchant.product.createbatchpost"), {
            ProductList: productsWithImages,
        });
    };

    const validateData = (data : Header[]) => {
        // Cek setiap data baris apakah valid
        for (const row of data) {
            // Validasi Nama Produk
            if (!row.ProductName) {
                alert("Nama produk tidak boleh kosong.");
                setValidate(false);
                return false;
            }

            // Validasi Harga Produk (harus angka)
            if (isNaN(row.ProductPrice) || row.ProductPrice <= 0) {
                alert(
                    "Harga produk tidak valid. Pastikan harga adalah angka positif."
                );
                setValidate(false);
                return false;
            }

            // Validasi Stok Produk (harus angka)
            if (isNaN(row.ProductStock) || row.ProductStock < 0) {
                alert(
                    "Stok produk tidak valid. Pastikan stok adalah angka yang tidak negatif."
                );
                setValidate(false);
                return false;
            }

            // Validasi Tanggal Expired (harus valid)
            if (isNaN(Date.parse(row.ProductExpired.toString()))) {
                alert("Tanggal kedaluwarsa produk tidak valid.");
                setValidate(false);
                return false;
            }

            // Validasi Deskripsi Produk (boleh kosong, tapi lebih baik ada)
            if (!row.ProductDescription) {
                alert("Deskripsi produk tidak boleh kosong.");
                setValidate(false);
                return false;
            }
        }
        setValidate(true);
        return true; // Semua data valid
    };

    const Reader = () => {
        if (!File) return;
        if (
            !HeaderProductDescription.current?.value ||
            !HeaderProductName.current?.value ||
            !HeaderProductPrice.current?.value ||
            !HeaderProductStock.current?.value ||
            !HeaderProductExpired.current?.value
        )
            return;
        if (
            ![
                "text/csv",
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            ].includes(File.type)
        )
            return;

        const reader = new FileReader();

        reader.onload = (e) => {
            if (
                File.type ===
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
            ) {
                const ParseResult = ExcelParser.read(e.target?.result, {
                    type: "array",
                });
                const sheetName = ParseResult.SheetNames[0];
                const data = ExcelParser.utils.sheet_to_json(
                    ParseResult.Sheets[sheetName]
                );
                const resultvalidation: Header[] = data.map((item: any) => ({
                    ProductName:
                        item[HeaderProductName.current?.value as string],
                    ProductPrice: parseFloat(
                        item[HeaderProductPrice.current?.value as string]
                    ),
                    ProductStock: parseInt(
                        item[HeaderProductStock.current?.value as string]
                    ),
                    ProductExpired: new Date(
                        item[HeaderProductExpired.current?.value as string]
                    ),
                    ProductDescription:
                        item[HeaderProductDescription.current?.value as string],
                }));
                if(validateData(resultvalidation))SetReadedFile(resultvalidation);
            } else {
                Papa.parse(e.target?.result as string, {
                    header: true,
                    complete: (result) => {
                        const resultvalidation: Header[] = result.data.map(
                            (item: any) => ({
                                ProductName:
                                    item[
                                        HeaderProductName.current
                                            ?.value as string
                                    ],
                                ProductPrice: parseFloat(
                                    item[
                                        HeaderProductPrice.current
                                            ?.value as string
                                    ]
                                ),
                                ProductStock: parseInt(
                                    item[
                                        HeaderProductStock.current
                                            ?.value as string
                                    ]
                                ),
                                ProductDescription:
                                    item[
                                        HeaderProductDescription.current
                                            ?.value as string
                                    ],
                                ProductExpired: new Date(
                                    item[
                                        HeaderProductExpired.current
                                            ?.value as string
                                    ]
                                ),
                            })
                        );
                        if(validateData(resultvalidation))SetReadedFile(resultvalidation);
                    },
                });
            }
        };

        if (
            File.type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        ) {
            reader.readAsArrayBuffer(File);
        } else {
            reader.readAsText(File);
        }
    };
    return (
        <MerchantLayout
            header={{ Parent: "Product", Submenu: "Tambah Produk Batch" }}
            className="flex flex-col gap-y-5"
        >
            <div className="w-full flex flex-row gap-x-1">
                <Input
                    placeholder="Kolom Nama Produk"
                    ref={HeaderProductName}
                />
                <Input
                    placeholder="Kolom Harga Produk"
                    ref={HeaderProductPrice}
                />
                <Input
                    placeholder="Kolom Stock Produk"
                    ref={HeaderProductStock}
                />
                <Input
                    placeholder="Kolom Expired Produk"
                    ref={HeaderProductExpired}
                />
                <Input
                    placeholder="Kolom Deskripsi Produk"
                    ref={HeaderProductDescription}
                />
            </div>
            <Input
                type="file"
                accept=".csv,.xlsx"
                onChange={(e) => SetFile(e.target.files?.[0])}
            />
            <div className="flex flex-row gap-x-1.5">
                <Button
                    onClick={Reader}
                    className={cn(
                        "flex-1",
                        ReadedFile && File && "bg-red-600 hover:bg-red-700"
                    )}
                >
                    {ReadedFile && File ? "Reload File" : "Load File"}
                </Button>
                {ReadedFile && File && (
                    <Button
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        onClick={handleUpload}
                        disabled={!validate}
                    >
                        Submit
                    </Button>
                )}
            </div>
            {ReadedFile && File && (
                <TableDemo
                    Data={ReadedFile}
                    handleChangeImage={handleChangeImage}
                />
            )}
        </MerchantLayout>
    );
}
