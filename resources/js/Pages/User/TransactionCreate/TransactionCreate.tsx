import Layout from "@/Layouts/User/UserLayout";
import { faker } from "@faker-js/faker";
import { Button } from "@/Components/ui/button";
import DaftarProduct from "./Components/DaftarProduct";
import InformasiToko from "./Components/InformasiToko";
import TotalTransaksi from "./Components/TotalTransaksi";
import Footer from "./Components/Footer";

export default function TransactionCreate({
    TransactionData,
}: {
    TransactionData: any;
}) {
    return (
        <Layout
            header={{ Parent: "Transaksi", Submenu: "Transaksi Baru" }}
            className="flex flex-col gap-y-5"
        >
            <h1 className="text-4xl font-medium">Transaksi Baru</h1>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-y-5 h-full">
                    <DaftarProduct />
                    <InformasiToko Data = {TransactionData}/>
                </div>
                <TotalTransaksi />
            </div>
            <Footer />
        </Layout>
    );
}
