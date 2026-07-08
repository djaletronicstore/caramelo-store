import CategoryCard from "./CategoryCard";

const categories=[

["Figuras","🎌"],

["Mangas","📚"],

["Llaveros","🔑"],

["Mouse Pad","🖱️"],

["Peluches","🧸"],

["Poleras","👕"]

];

export default function Categories(){

return(

<section className="mx-auto max-w-7xl px-8 py-20">

<h2 className="mb-10 text-4xl font-black">

Categorías

</h2>

<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

{categories.map(([title,emoji])=>(

<CategoryCard

key={title}

title={title}

emoji={emoji}

/>

))}

</div>

</section>

);

}