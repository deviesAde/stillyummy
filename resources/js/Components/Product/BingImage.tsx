import { Spinner } from "../ui/spinner";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import axios from "axios";

export default function BingImage({ keyword }: { keyword: string }) {
    if (!keyword) return null;
    const generateImage = () => {
        setLoading(true)
        axios.get(`https://api.unsplash.com/search/photos?query=${keyword}&client_id=${import.meta.env.VITE_UNSPLASH_KEY}&per_page=1&page=1`).then((respons)=>{console.log(respons.data.result[0].urls.raw);setImage(respons.data.result[0].urls.raw)}).catch((error) => {console.log(error)}).finally(()=>setLoading(false))
        // const idleTime = Math.random() * 10000;
        // setTimeout(() => {
        //     setImage(faker.image.urlLoremFlickr({ width: 1920, height: 1080 }));
        // }, idleTime);
    }

    useEffect(() => {
        generateImage()
    }, []);

    const [image, setImage] = useState<string>();
    const [isLoading,setLoading] = useState<boolean>(true)
    return (
        <div className="flex items-center group">
            {isLoading && (
                <Spinner size="medium">
                   <h3 className="text-center text-sm">Generate Image {keyword}</h3> 
                </Spinner>
            )}
            {!isLoading && (
                <div className="relative flex justify-center">
                    <img
                        className="aspect-video max-w-[10rem]"
                        src={image}
                        alt={keyword}
                    />
                    <Button onClick={generateImage} className="hidden top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute group-hover:block">Generate</Button>
                </div>
            )}
        </div>
    );
}
