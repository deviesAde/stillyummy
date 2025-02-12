import { Spinner } from "../ui/spinner";
import { faker } from "@faker-js/faker";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function BingImage({ keyword }: { keyword: string }) {
    if (!keyword) return null;
    const generateImage = () => {
        setLoading(true)
        const idleTime = Math.random() * 10000;
        setTimeout(() => {
            setImage(faker.image.urlLoremFlickr({ width: 1920, height: 1080 }));
            setLoading(false)
        }, idleTime);
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
