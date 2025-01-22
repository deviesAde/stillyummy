import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { faker } from "@faker-js/faker";

export default function CarouselComponent() {
    return (
        <div>
            <Carousel className="w-full max-h-56 z-0">
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex items-center justify-center p-6">
                                        <img
                                            src={faker.image.dataUri()}
                                            alt=""
                                            className="rounded-md"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-28" />
                <CarouselNext className="mr-28" />
            </Carousel>
        </div>
    );
}
