import { CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export default function TransferBank() {
    return (
        <CardContent className="flex flex-col gap-y-5">
            <div className="w-full flex flex-col gap-y-1">
                <Label>Bank</Label>
                <select className="rounded-md border-gray-300">
                    <option disabled selected>
                        {" "}
                        -- select an option --{" "}
                    </option>
                    <option value="BRI">BRI</option>
                    <option value="BNI">BNI</option>
                    <option value="mercedes">Mandiri</option>
                    <option value="audi">BCA</option>
                </select>
            </div>
        <div className="w-full flex flex-col gap-y-1">
                <Label>Nomor Rekening</Label>
                <Input type="number" />
            </div>
            <div className="w-full flex flex-col gap-y-1">
                <Label>Nama Pemilik Rekening</Label>
                <Input />
            </div>
        </CardContent>
    );
}
