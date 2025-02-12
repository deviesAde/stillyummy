// import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import Map from "@/Components/Kurir/Map";
import { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
    CardHeader,
} from "@/Components/ui/card";
import { faker } from "@faker-js/faker/locale/id_ID";

import { cn } from "@/lib/utils";
type DataType = {
    id: string;
};

export default function KurirContentPage({ Data }: { Data: DataType }) {
    const [coordinates, SetCoordinates] = useState<{
        lat: number;
        lng: number;
    }>();
    const [minimize, SetMinimize] = useState<boolean>(false);

    const [showDetail, SetShowDetail] = useState<Boolean>();
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            SetCoordinates({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        });
    }, []);
    const [OpsiDetail, SetOpsiDetail] = useState<boolean>(true);
    return (
        <div className="w-full bg-red-500 flex flex-col gap-y-5 relative">
            <div className="aspect-square md:aspect-video w-full min-h-screen">
                <Map />
            </div>
            <Card
                className={cn(
                    "absolute bottom-0 h-fit rounded-b-none overflow-y-hidden w-full",
                    minimize && "h-5"
                )}
            >
                <div
                    className="bg-gray-300 py-1 rounded-full w-1/5 mx-auto space-y-3 mt-1 shadow-sm"
                    onClick={() => SetMinimize(!minimize)}
                ></div>
                <CardHeader>
                    <CardTitle className="text-sm md:text-xl font-light">
                        Nomor Pesanan : {Data.id}
                    </CardTitle>
                    <CardTitle className={cn('',showDetail && 'text-xl')}>
                        {!showDetail && "Jumlah : "}
                        {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                        }).format(
                            faker.number.float({ min: 1000.0, max: 200000 })
                        )}
                    </CardTitle>
                </CardHeader>
                {showDetail && (
                    <CardContent className="flex flex-col gap-y-3">
                        <CardTitle className="text-center text-xl">Detail Pengiriman</CardTitle>
                        <div className="w-full bg-gray-100 rounded-full flex flex-row p-1 shadow-sm">
                            <div
                                className={cn(
                                    "flex-1 rounded-l-full rounded-tr-none py-2 bg-white text-center shadow-sm",
                                    !OpsiDetail && "bg-transparent"
                                )}
                                onClick={() => SetOpsiDetail(true)}
                            >
                                Tujuan Pengiriman
                            </div>
                            <div
                                className={cn(
                                    "flex-1 rounded-r-full rounded-l-none py-2 bg-white text-center shadow-sm",
                                    OpsiDetail && "bg-transparent"
                                )}
                                onClick={() => SetOpsiDetail(false)}
                            >
                                Drop Point
                            </div>
                        </div>
                        {OpsiDetail && (
                            <CardContent className="px-2 flex flex-col gap-y-2">
                                <h1 className="text-sm w-full">
                                    Penerima : {faker.person.fullName()}
                                </h1>
                                <h1 className="text-sm w-full">
                                    Nomor HP : {faker.phone.number()}
                                </h1>
                                <h1 className="text-sm w-full">
                                    Kode Pos : {faker.address.zipCode()}
                                </h1>
                                <h1 className="text-sm w-full">
                                    Alamat : {faker.address.streetAddress()}
                                </h1>
                            </CardContent>
                        )}
                        {!OpsiDetail && (
                            <CardContent className="px-2">
                                <h1>Pesanan</h1>
                            </CardContent>
                        )}
                    </CardContent>
                )}
                <CardFooter className="flex flex-col md:flex-row gap-2">
                    <Button className="w-full">Ambil Pengiriman</Button>
                    <Button
                        className="w-full"
                        onClick={() => SetShowDetail(!showDetail)}
                    >
                        {!showDetail ? "Lihat Detail Pesanan" : "Sembunyikan"}
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
