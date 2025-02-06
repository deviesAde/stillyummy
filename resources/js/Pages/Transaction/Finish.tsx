import Authenticated from "@/Layouts/AuthenticatedLayout";

export default function FinishedTransactionPage(){
    return(
        <Authenticated header={{ Parent:'Transaksi',Submenu:'Selesai' }}>
            <h1 className="text-3xl font-medium">Riwayat Transaksi</h1>
        </Authenticated>
    )
}