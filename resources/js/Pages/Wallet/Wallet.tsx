import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Card, CardHeader, CardTitle, CardContent } from "@/Components/ui/card";
import { Wallet } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { useState } from "react";
import RiwayatSaldo from "@/Components/Wallet/RiwayatSaldo";
import PencairanDana from "@/Components/Wallet/PencairanDana";
import TarikSaldo from "@/Components/Wallet/TarikSaldo";
import { faker } from "@faker-js/faker/locale/id_ID";

export default function WalletPage() {
    const [ModalTarikSaldo, SetModalTarikSaldo] = useState<boolean>(false);
    return (
        <Authenticated
            header={{ Parent: "Dompetku" }}
            className="flex flex-col gap-y-5"
        >
            <h1 className="text-3xl font-black">Detail Saldo</h1>
            <div className="flex flex-col md:flex-row gap-y-3 w-full gap-x-3">
                <div className="flex flex-col gap-y-3 md:w-1/3">
                    <Card className="items-center h-fit">
                        <CardHeader className="flex md:flex-row w-full justify-between">
                            <div className="flex items-center gap-x-2">
                                <Wallet size={40} />
                                <div>
                                    <h1 className="text-xs">Total Saldo</h1>
                                    <h1 className="text-xl font-extrabold">
                                        {new Intl.NumberFormat("id-ID", {
                                            style: "currency",
                                            currency: "IDR",
                                        }).format(faker.number.int({max:2000000}))}
                                    </h1>
                                </div>
                            </div>
                            <Button onClick={() => SetModalTarikSaldo(true)}>
                                Tarik Saldo
                            </Button>
                        </CardHeader>
                    </Card>
                    <PencairanDana />
                </div>
                <RiwayatSaldo />
            </div>
            {ModalTarikSaldo && <TarikSaldo onClick={SetModalTarikSaldo} />}
        </Authenticated>
    );
}
