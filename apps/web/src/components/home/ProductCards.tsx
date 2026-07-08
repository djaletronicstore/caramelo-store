import Image from "next/image";

interface Props{

title:string;

anime:string;

price:number;

image:string;

badge?:string;

}

export default function ProductCard({

title,

anime,

price,

image,

badge

}:Props){

return(

<div className="overflow-hidden rounded-3xl bg-zinc-900 transition hover:scale-105">

<div className="relative h-72">

<Image

src={image}

fill

alt={title}

className="object-cover"

/>

{badge && (

<span className="absolute left-4 top-4 rounded-full bg-fuchsia-600 px-3 py-1 text-xs">

{badge}

</span>

)}

</div>

<div className="space-y-2 p-5">

<h3 className="font-bold">

{title}

</h3>

<p className="text-zinc-400">

{anime}

</p>

<p className="text-2xl font-black text-fuchsia-500">

${price.toLocaleString("es-CL")}

</p>

<button className="mt-3 w-full rounded-xl bg-violet-600 py-3 font-bold">

Agregar al carrito

</button>

</div>

</div>

);

}