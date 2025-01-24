import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { faker } from "@faker-js/faker";

export default function CarouselProduct() {
    return (
        <Carousel className="h-fit">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                            <Card>
                                <CardContent className="h-fit p-5">
                                    <img
                                        src={faker.image.url({
                                            height: 1080,
                                            width: 1920,
                                        })}
                                        alt=""
                                        className="rounded-md"
                                    />
                                </CardContent>
                            </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex ml-20 z-50" />
            <CarouselNext className="hidden md:flex mr-20 z-50" />
        </Carousel>
    );
}
