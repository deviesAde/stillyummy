import { Card,CardHeader,CardContent,CardTitle } from "../ui/card"
import { Button } from "../ui/button"
export default function CardTakedown({onClick} : {onClick:(Parameters:boolean) => void}){
    return(
        <Card>
            <CardHeader>
                <CardTitle>Take Down Product</CardTitle>
            </CardHeader>
            <CardContent>
                <Button className="w-full" onClick={()=>onClick(true)}>Takedown</Button>
            </CardContent>
        </Card>
    )
}