import { Card } from "@/Components/ui/card";
import { faker } from "@faker-js/faker/locale/id_ID";
export default function InformasiToko({Data} : {Data : any}) {
    console.log(Data);
    return (
        <div className="space-y-3">
            <h1>Informas Toko</h1>
            <Card className= "h-40 flex flex-row p-3 gap-x-5">
                <img
                    src={faker.image.avatar()}
                    alt=""
                    className="rounded-full"
                />
                <div className="flex-1">
                    <h1>{Data.MerchantName}</h1>
                    {/* <h1>{faker.}</h1> */}
                    <h1></h1>
                    <h1></h1>
                </div>
            </Card>
        </div>
    );
}
