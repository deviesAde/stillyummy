import { Button } from "@/Components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/Components/ui/card";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { router } from "@inertiajs/react";
import { useRef } from "react";

export default function Auth({errors,querry} : {errors : string[],querry : string}) {
    const InputPassword = useRef<HTMLInputElement>(null);

    const HandleSubmit = () => {
        console.log(InputPassword.current?.value);
        router.post(`${route("Kurir.index")}?q=${querry}`, {
            pass: InputPassword.current?.value,
        });
    };
    return (
        <Card className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 md:w-1/3">
            <CardHeader>
                <CardTitle>Password</CardTitle>
            </CardHeader>
            <CardContent>
                <Label>Password</Label>
                <Input ref={InputPassword} />
                {errors && <Label>{errors[0]}</Label>}
            </CardContent>
            <CardFooter>
                <Button className="w-full" onClick={HandleSubmit}>
                    Submit
                </Button>
            </CardFooter>
        </Card>
    );
}
