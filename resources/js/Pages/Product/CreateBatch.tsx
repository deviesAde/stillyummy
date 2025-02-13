import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Input } from "@/Components/ui/input";
import { useState } from "react";
import { useRef } from "react";
import { Button } from "@/Components/ui/button";
import Papa from "papaparse";
import * as ExcelParser from "xlsx";
import TableDemo from "@/Components/Product/TableBatchUpload";
import { cn } from "@/lib/utils";

export type Header = {
    ProductName: string;
    ProductPrice: number;
    ProductStock: number;
    ProductDescription: string;
    ProductExpired: Date;
};

export default function CreateBatchPage() {
    const HeaderProductName = useRef<HTMLInputElement>(null);
    const HeaderProductPrice = useRef<HTMLInputElement>(null);
    const HeaderProductDescription = useRef<HTMLInputElement>(null);
    const HeaderProductStock = useRef<HTMLInputElement>(null);
    const HeaderProductExpired = useRef<HTMLInputElement>(null);
    const [File, SetFile] = useState<File>();
    const [ReadedFile, SetReadedFile] = useState<Header[]>();
    console.log(ReadedFile);
    const Reader = () => {
        if (!File) return;

        // Check if file type is either CSV or Excel
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
                // Use readAsArrayBuffer for binary files (Excel files)
                const ParseResult = ExcelParser.read(e.target?.result, {
                    type: "array",
                });
                console.log(ParseResult);

                // Optional: Convert to JSON or do further processing here
                const sheetName = ParseResult.SheetNames[0];
                const data = ExcelParser.utils.sheet_to_json(
                    ParseResult.Sheets[sheetName]
                );
                console.log(data);
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
                console.log(resultvalidation);
                SetReadedFile(resultvalidation);
            } else {
                // For CSV files, use PapaParse to parse text data
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
                        console.log(resultvalidation);
                        SetReadedFile(resultvalidation);
                    },
                });
            }
        };

        // For Excel files, use readAsArrayBuffer; for CSV files, use readAsText
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
        <Authenticated
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
                <Button onClick={Reader} className={cn("flex-1",ReadedFile && File && "bg-red-600 hover:bg-red-700")}>
                    {ReadedFile && File ? "Reload File" : "Load File"}
                </Button>
                {ReadedFile && File && <Button className="flex-1 bg-green-600 hover:bg-green-700">Submit</Button>}
            </div>
            {ReadedFile && File && <TableDemo Data={ReadedFile} />}
        </Authenticated>
    );
}
