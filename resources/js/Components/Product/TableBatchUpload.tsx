import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table";

import { Header } from "@/Pages/Merchant/ProductUploadBatch/CreateBatch";
import BingImage from "./BingImage";

export default function TableDemo({Data,handleChangeImage} : {Data:Header[],handleChangeImage : (url:string,index:number) =>void}) {
    return (
        <Table className="shadow-sm">
            <TableCaption>List Batch Product</TableCaption>
            <TableHeader className="bg-gray-200">
                <TableRow>
                    <TableHead className="w-[100px] text-center">No</TableHead>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Product Image</TableHead>
                    <TableHead>Product Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Expired Date</TableHead>
                    <TableHead className="text-center">Description</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {Data.slice(0,-1).map((invoice, index) => (
                    <TableRow key={index}>
                        <TableCell className="font-medium text-center">
                            {index + 1}
                        </TableCell>
                        <TableCell className="font-medium">
                            {invoice.ProductName}
                        </TableCell>
                        <TableCell className="w-fit">
                            <BingImage changeImage = {(url : string) => handleChangeImage(url,index)} keyword = {invoice.ProductName}/>
                        </TableCell>
                        <TableCell>{new Intl.NumberFormat('id-ID',{currency:'IDR', style: 'currency'}).format(invoice.ProductPrice)}</TableCell>
                        <TableCell className="text-center">{invoice.ProductStock}</TableCell>
                        <TableCell>{invoice.ProductExpired.toLocaleDateString()}</TableCell>
                        <TableCell className="text-justify">
                            {invoice.ProductDescription}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
