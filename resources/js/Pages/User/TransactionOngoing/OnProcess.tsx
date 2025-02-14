import Layout from "@/Layouts/User/UserLayout";
import Navbar from "@/Components/Transaction/navbar";
import MenungguPembayaran from "@/Components/Transaction/MenungguPembayaran";
import MenungguKonfirmasi from "@/Components/Transaction/MenungguKonfirmasi";
import PesananDiproses from "@/Components/Transaction/Pesanan Diproses";
import SampaiTujuan from "@/Components/Transaction/SampaiTujuan";
import SedangDikirim from "@/Components/Transaction/SedangDikirim";
import { useState } from "react";

export default function OnProcessPage(){
    const [SubPage,SetSubpage] = useState("Menunggu Pembayaran")
    return(
        <Layout header={{ Parent:"Transaksi",Submenu:"Sedang Berlangsung" }} className="flex flex-col">
            <Navbar onClick={SetSubpage} subpage={SubPage}/>
            {SubPage === "Menunggu Pembayaran" && <MenungguPembayaran/>}
            {SubPage === "Menunggu Konfirmasi" && <MenungguKonfirmasi/>}
            {SubPage === "Pesanan Diproses" && <PesananDiproses/>}
            {SubPage === "Sampai Tujuan" && <SampaiTujuan/>}
            {SubPage === "Sedang Dikirim" && <SedangDikirim/>}
        </Layout>
    )
}