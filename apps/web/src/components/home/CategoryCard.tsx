interface Props{

title:string;

emoji:string;

}

export default function CategoryCard({

title,

emoji

}:Props){

return(

<div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center transition hover:border-fuchsia-500 hover:scale-105">

<div className="mb-4 text-5xl">

{emoji}

</div>

<h3 className="font-bold">

{title}

</h3>

</div>

);

}