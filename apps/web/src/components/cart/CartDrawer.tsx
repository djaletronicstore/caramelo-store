"use client";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle
} from "@/components/ui/sheet";

export default function CartDrawer(){

return(

<Sheet>

<SheetContent>

<SheetHeader>

<SheetTitle>

Mi carrito

</SheetTitle>

</SheetHeader>

<p className="mt-6 text-zinc-500">

Tu carrito está vacío.

</p>

</SheetContent>

</Sheet>

);

}