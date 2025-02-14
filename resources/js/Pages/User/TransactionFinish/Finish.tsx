import Layout from "@/Layouts/User/UserLayout";

export default function FinishedTransactionPage(){
    return(
        <Layout header={{ Parent:'Transaksi',Submenu:'Selesai' }}>
            <h1 className="text-3xl font-medium">Riwayat Transaksi</h1>
        </Layout>
    )
}