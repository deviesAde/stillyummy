import { Card } from "@/Components/ui/card";
import { ScrollArea } from "@/Components/ui/scroll-area";

function ProductItem({Data} : {Data :  number}){
    return (
        <Card className="my-5">
            <h1>{Data}</h1>
        </Card>
    )
}


export default function DaftarProduct() {
    return (
        <div className="space-y-2">
            <h1 className="text-xl font-semibold">Daftar Produk</h1>
            <Card className="h-[30rem] relative p-3">
                <ScrollArea className="h-full scroll-smooth">
                    {Array.from({length : 100}).map((item,index) => 
                        <ProductItem Data = {index}/>
                    )}
                </ScrollArea>
            </Card>
        </div>
    );
}
