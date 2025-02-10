import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "../ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { APIProvider, Marker, Map } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { LocateIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { useForm } from "@inertiajs/react";

export default function AddressModal({ onClick }: { onClick: () => void }) {
    const [coordinate, setCoordinate] = useState<{
        lat: number;
        lng: number;
    }>();

    const {data,setData,post,processing,errors} = useForm<{
        NamaPenerima: string;
        NomorHpPenerima: string;
        Kota: string;
        Alamat: string;
        Location: {
            lat: number;
            lng: number;
        };
    }>();
    const HandleCurrentLocation = () => {
        navigator.geolocation.getCurrentPosition((potition) => {
            setCoordinate(() => {
                return {
                    lat: potition.coords.latitude,
                    lng: potition.coords.longitude,
                };
            });
        });
    };
    console.log(coordinate);
    return (
        <Card className="z-50 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 md:-translate-y-1/2 w-full md:w-1/2">
            <CardHeader>
                <CardTitle className="text-center">Tambah Alamat</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-y-5">
                <div>
                    <Label>Nama Penerima</Label>
                    <Input value={data.NamaPenerima}/>
                </div>
                <div>
                    <Label>Nomor Hp Penerima</Label>
                    <Input value={data.NomorHpPenerima}/>
                </div>
                <div className="flex flex-col">
                    <Label>Provinsi</Label>
                    <select className="rounded-md border-gray-300">
                        <option disabled selected>
                            {" "}
                            -- select an option --{" "}
                        </option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <Label>Kota/Kabupaten</Label>
                    <select className="rounded-md border-gray-300" value={data.Kota}>
                        <option disabled selected>
                            {" "}
                            -- select an option --{" "}
                        </option>
                    </select>
                </div>
                <div>
                    <Label>Alamat</Label>
                    <Textarea className= "h-32" value={data.Alamat}/>
                </div>
                <div className="h-56 relative">
                    <APIProvider
                        apiKey={
                            import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY
                        }
                    >
                        <Map
                            // defaultZoom={19}
                            // gestureHandling={"greedy"}
                            draggable
                            disableDefaultUI
                            center={coordinate}
                            zoom={19}
                        >
                            <Marker position={coordinate} />
                        </Map>
                    </APIProvider>
                    <Button
                        className="absolute right-5 bottom-5 aspect-square"
                        onClick={HandleCurrentLocation}
                    >
                        <LocateIcon />
                    </Button>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row gap-5">
                <Button className="flex-1 w-full" onClick={onClick}>
                    Batal
                </Button>
                <Button className="flex-1 w-full">Simpan</Button>
            </CardFooter>
        </Card>
    );
}
