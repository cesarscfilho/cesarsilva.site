import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Button, buttonVariants } from "./ui/button"
import { AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function AlertBar() {
    return (
        <Card className="border-destructive bg-destructive/20 p-2">
            <CardHeader className="pt-1">
            <CardTitle className="flex gap-2 items-center">
            <AlertCircle className="h-5 w-5" />
                Atenção!
            </CardTitle>
            <CardDescription className="text-md">
            Estou em busca de novas oportunidades de emprego.
            </CardDescription>
            </CardHeader>
            <CardContent>
               <Link href="mailto:cesarfilhoslv@gmail.com" className={cn(buttonVariants({variant: "destructive"}), "no-underline")}>Contato</Link>
            </CardContent>
        </Card>
    )
}