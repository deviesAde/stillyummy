import { faker } from "@faker-js/faker/locale/id_ID";
import { Button } from "@/Components/ui/button";

export default function Footer() {
    return (
        <div className="rounded-lg fixed left-0 md:left-72 bottom-0 md:right-10 right-0 flex justify-between p-5 bg-white border-[0.5px] items-center">
            <h1 className="text-xl font-bold">
                {new Intl.NumberFormat("id-ID", {
                    style: "currency",
                    currency: "IDR",
                }).format(faker.number.float({ min: 100000, max: 1000000 }))}
            </h1>
            <Button>Buat Transaksi</Button>
        </div>
    );
}
