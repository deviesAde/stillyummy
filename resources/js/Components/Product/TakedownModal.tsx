import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from "../ui/card";
import InputLabel from "../InputLabel";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
export default function TakedownProduct({
    onClick,
}: {
    onClick: (parameter: boolean) => void;
}) {
    return (
        <div className="fixed flex-flex-col min-h-screen bg-black bg-opacity-50 z-50 w-full">
            <div
                className="w-screen min-h-screen"
                onClick={() => onClick(false)}
            ></div>
            <Card className="fixed bottom-0 w-full md:w-1/2 md:left-1/2 md:-translate-x-1/2 md:bottom-1/2 md:translate-y-1/2">
                <CardHeader>
                    <CardTitle className="text-center">
                        Take Down Product
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <InputLabel>Keterangan</InputLabel>
                    <Textarea/>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={() => onClick(false)}>Submit</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
