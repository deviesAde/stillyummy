import { Card } from "@/Components/ui/card";
import { faker } from "@faker-js/faker/locale/id_ID";

const RincianTransaksi = {
    Subtotal:faker.number.float({min:10000,max:1000000}),
    BiayaPengiriman : faker.number.float({min : 8000, max : 20000}),
    BiayaLayanan : faker.number.float({min :2000,max : 10000})
}

export default function TotalTransaksi() {
    return (
        <div className="flex flex-col gap-y-3">
            <h1>Rincian Transaksi</h1>
            <Card className="flex flex-col gap-y-2 p-3">
                <div className="flex flex-row justify-between">
                    <h1>Subtotal Produk</h1>
                    <h1>{new Intl.NumberFormat('id-ID',{style : 'currency',currency : 'IDR'}).format(RincianTransaksi.Subtotal)}</h1>
                    
                </div >
                <div className="flex flex-row justify-between">
                    <h1>Biaya Pengiriman</h1>
                    <h1>{new Intl.NumberFormat('id-ID',{style : 'currency',currency : 'IDR'}).format(RincianTransaksi.BiayaPengiriman)}</h1>
                    
                </div>
                <div className="flex flex-row justify-between">
                    <h1>Biaya Layanan</h1>
                    <h1>{new Intl.NumberFormat('id-ID',{style : 'currency',currency : 'IDR'}).format(RincianTransaksi.BiayaLayanan)}</h1>
                </div>
                <div className="flex flex-row justify-between">
                    <h1 className="text-2xl font-extrabold">Total</h1>
                    <h1>{new Intl.NumberFormat('id-ID',{style : 'currency',currency : 'IDR'}).format( Object.values(RincianTransaksi).reduce((a,b) => a+b,0))}</h1>
                </div>
            </Card>
        </div>
    );
}
