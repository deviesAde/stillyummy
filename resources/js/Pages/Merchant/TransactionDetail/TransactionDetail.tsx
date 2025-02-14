import Layout from "@/Layouts/Merchant/MerchantLayout";

export default function TransactionDetail({ ID }: { ID: string }) {
    return (
        <Layout header={{ Parent: "Detail Transaski", Submenu: ID }}>
        </Layout>
    );
}
