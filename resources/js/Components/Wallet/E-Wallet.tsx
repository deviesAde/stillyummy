import { CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function E_Wallet() {
    return (
        <CardContent className="flex flex-col gap-y-5">
            <div className="w-full flex flex-col gap-y-1">
                <Label>E-Wallet</Label>
                <select className="rounded-md border-gray-300">
                    <option disabled selected> -- select an option -- </option>
                    <option value="volvo">Ovo</option>
                    <option value="saab">Dana</option>
                    <option value="mercedes">Gopay</option>
                    <option value="audi">Spay</option>
                </select>
            </div>
            <div className="w-full flex flex-col gap-y-1">
                <Label>Nomor E-Wallet</Label>
                <Input type="number"/>
            </div>
            <div className="w-full flex flex-col gap-y-1">
                <Label>Nama Pemilik</Label>
                <Input/>
            </div>
        </CardContent>
    );
}
