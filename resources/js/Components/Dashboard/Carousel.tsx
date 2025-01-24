import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { faker } from "@faker-js/faker";

export default function CarouselDashboard() {
    return (
        <Carousel className="h-fit">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                            <Card>
                                <CardContent className="h-fit p-5">
                                    <img
                                        src={faker.image.url({
                                            height: 200,
                                            width: 1400,
                                        })}
                                        alt=""
                                        className="rounded-md w-full"
                                    />
                                </CardContent>
                            </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="ml-20 z-30" />
            <CarouselNext className="mr-20 z-3-" />
        </Carousel>
    );
}
