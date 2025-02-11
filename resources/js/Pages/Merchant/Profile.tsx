import Authenticated from "@/Layouts/AuthenticatedLayout";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
} from "@/Components/ui/card";
import { APIProvider, Map, Marker, } from "@vis.gl/react-google-maps";
import { faker } from "@faker-js/faker/locale/id_ID";
import { useEffect, useState } from "react";

export default function Merchant() {
    const [coordinate, setCoordinate] = useState<{
        lat: number;
        lng: number;
    }>();
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((Potitions) => {
            setCoordinate({
                lat: Potitions.coords.latitude,
                lng: Potitions.coords.longitude,
            });
        });
        // RandomLocation();
    }, []);
    console.log(coordinate)

    return (
        <Authenticated header={{ Parent: "Merchant", Submenu: "Profile" }} className="m-0">
            <Card className="p-0 flex flex-col-reverse md:flex-row">
                <div className="md:w-2/3 rounded-r-none">
                    <CardHeader>
                        <CardTitle>{faker.commerce.department()}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-5">
                        <CardDescription>
                            {faker.address.streetAddress()}
                        </CardDescription>
                        <CardDescription>
                            {faker.lorem.paragraphs()}
                        </CardDescription>
                    </CardContent>
                </div>
                <Card className="md:w-1/3 rounded-l-none h-52 w-full">
                    <APIProvider
                        apiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}
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
                </Card>
            </Card>
        </Authenticated>
    );
}
