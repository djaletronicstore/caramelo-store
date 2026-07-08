export interface Product {

    id:number;

    title:string;

    anime:string;

    price:number;

    image:string;

    badge?:string;

}

export const featuredProducts:Product[]=[

{
id:1,
title:"Figura Gojo Satoru",
anime:"Jujutsu Kaisen",
price:34990,
image:"/products/gojo.png",
badge:"Nuevo"
},

{
id:2,
title:"Figura Naruto",
anime:"Naruto",
price:28990,
image:"/products/naruto.png",
badge:"Oferta"
},

{
id:3,
title:"Figura Luffy Gear 5",
anime:"One Piece",
price:44990,
image:"/products/luffy.png",
badge:"Popular"
},

{
id:4,
title:"Figura Tanjiro",
anime:"Kimetsu no Yaiba",
price:32990,
image:"/products/tanjiro.png"
}

];