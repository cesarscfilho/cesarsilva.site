"use client"

import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Link from "next/link";

export function ContactButton() {
    return (
        <Link href="mailto:cesarfilhoslv@gmail.com" className="no-underline block">
            <Alert variant={"destructive"}>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle className="text-base">Atenção!</AlertTitle>
                <AlertDescription>
                Estou em busca de novas oportunidades, caso queria entrar em contato clique nesse card.
                </AlertDescription>
            </Alert>
        </Link>
    )
}