import { useEffect, useState } from "react";
import {
    GoogleMap,
    LoadScript,
    Marker,
    DirectionsService,
    DirectionsRenderer,
} from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "100%",
};

interface coordinate {
    lat: number;
    lng: number;
}
const Map = () => {
    const GPS = () => {
        console.log(origin)
        navigator.geolocation.watchPosition(
            (potitions) => {
                if (origin) {
                    const intervalLatitude =
                        potitions.coords.latitude - origin?.lat!;
                    const intervalLongtitude =
                        potitions.coords.longitude - origin?.lng!;
                    console.log(intervalLatitude, intervalLongtitude);
                    if (
                        Math.abs(intervalLatitude) > 0.5 ||
                        Math.abs(intervalLongtitude) > 0.5
                    )
                        return;
                }
                setOrigin({
                    lat: potitions.coords.latitude,
                    lng: potitions.coords.longitude,
                });
            },
            (e) => {
                console.error(e.message);
            },
            {
                maximumAge: 100,
                enableHighAccuracy: true,
            }
        );
    };
    useEffect(() => {
        GPS();
    }, []);
    const [origin, setOrigin] = useState<coordinate | null>(null);
    const [destination, setDestination] = useState<coordinate>({
        lat: -6.25,
        lng: 106.8,
    }); // Misal tujuan adalah tempat lain

    return (
        <LoadScript
            googleMapsApiKey={
                import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY
            }
        >
            {origin && (
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={origin}
                    zoom={12}
                >
                    {origin && <Marker position={origin} />}
                    <Marker position={destination} />
                </GoogleMap>
            )}
        </LoadScript>
    );
};

export default Map;
