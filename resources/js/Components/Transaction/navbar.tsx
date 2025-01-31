import { cn } from "@/lib/utils";

export default function navbar({onClick,subpage}:{onClick:(Pembayaran:string)=>void,subpage:string}) {
    return (
        <div className="flex gap-x-5 pb-5">
            <h1 className={cn("flex-1 hover:cursor-pointer",subpage === "Menunggu Pembayaran" ? "border-b-2 border-black" : null)} onClick={()=>onClick("Menunggu Pembayaran")}>Menunggu Pembayaran</h1>
            <h1 className={cn("flex-1 hover:cursor-pointer",subpage === "Menunggu Konfirmasi" ? "border-b-2 border-black" : null)} onClick={()=>onClick("Menunggu Konfirmasi")}>Menunggu Konfirmasi</h1>
            <h1 className={cn("flex-1 hover:cursor-pointer",subpage === "Pesanan Diproses" ? "border-b-2 border-black" : null)} onClick={()=>onClick("Pesanan Diproses")}>Pesanan Diproses</h1>
            <h1 className={cn("flex-1 hover:cursor-pointer",subpage === "Sedang Dikirim" ? "border-b-2 border-black" : null)} onClick={()=>onClick("Sedang Dikirim")}>Sedang Dikirim</h1>
            <h1 className={cn("flex-1 hover:cursor-pointer",subpage === "Sampai Tujuan" ? "border-b-2 border-black" : null)} onClick={()=>onClick("Sampai Tujuan")}>Sampai Tujuan</h1>
        </div>
    );
}
