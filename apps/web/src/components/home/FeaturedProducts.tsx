import ProductCard from "./ProductCard";

import { featuredProducts } from "@/data/products";

export default function FeaturedProducts(){

return(

<section className="mx-auto max-w-7xl px-8 py-24">

<h2 className="mb-12 text-4xl font-black">

Productos destacados

</h2>

<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

{featuredProducts.map(product=>(

<ProductCard

key={product.id}

{...product}

/>

))}

</div>

</section>

);

}