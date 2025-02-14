import Layout from "@/Layouts/User/UserLayout";

export default function TransactionEdit({ ID }: { ID: string }) {
    return (
        <Layout
            header={{ Parent: "Edit Transaski", Submenu: ID }}
        ></Layout>
    );
}
