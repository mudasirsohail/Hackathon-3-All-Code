// "use client"
// import { ImageLoader } from "next/image";
// import { LinkProps } from "next/link";
// import { useState } from "react";
// type BlogProps = {
//   params: { slug: string };
// };
// const blogData: Record<string, { title: string; content: string; price:string; img:string }>  = {
//      "Nike-Air-Force-1-Mid-07": {
//         title:"Nike Air Force 1 Mid 07",
//         content:"Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including uniquelayering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//         price:"₹ 10,795.00",
//         img:"/All1.png"
//     },
//     "Nike-Court-Vision-Low-Next-Nature":{
//         title:"Nike Court Vision Low Next Nature",
//         content:"Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including uniquelayering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//         price:"₹ 4,995.00",
//         img:"/All2.png"
//     },
//         "Nike-Air-Force-1-PLT.AF.FORM": {
//           title: "Nike Air Force 1 PLT.AF.FORM",
//           content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//           price: "₹ 8,695.00",
//           img: "/All3.png",
//         },
//         "Nike-Air-Force-1-React": {
//           title: "Nike Air Force 1 React",
//           content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//           price: "₹ 13,295.00",
//           img: "/All4.png",
//         },
//         "Air-Jordan-1-Elevate-Low": {
//           title: "Air Jordan 1 Elevate Low",
//           content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//           price: "₹ 9,495.00",
//           img: "/All5.png",
//         },
//         "Nike-Standard-Issue": {
//           title: "Nike Standard Issue",
//           content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//           price: "₹ 3,695.00",
//           img: "/All6.png",
//         },
//         "Nike-Court-Vision-Low": {
//           title: "Nike Court Vision Low",
//           content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//           price: "₹ 9,495.00",
//           img: "/All5.png",
//         },
//         "Nike-Air-Max-90": {
//           title: "Nike Air Max 90",
//           content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//           price: "₹ 12,995.00",
//           img: "/All6.png",
//         },
//         "Nike-Revolution-6-Next-Nature": {
//           title: "Nike Revolution 6 Next Nature",
//           content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//           price: "₹ 6,795.00",
//           img: "/All7.png",
//         },
//         "Air-Jordan-1-Mid": {
//           title: "Air Jordan 1 Mid",
//           content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//           price: "₹ 11,295.00",
//           img: "/All8.png",
//         },
//         "Nike-Air-Zoom-Pegasus-40": {
//           title: "Nike Air Zoom Pegasus 40",
//           content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//           price: "₹ 10,495.00",
//           img: "/All9.png",
//         },
//         "Nike-React-Infinity-Run-Flyknit-3": {
//         title: "Nike React Infinity Run Flyknit 3",
//         content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//         price: "₹ 14,295.00",
//         img: "/All10.png",
//     },
//   "Nike-Blazer-Mid-77": {
//     title: "Nike Blazer Mid '77",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 7,995.00",
//     img: "/All11.png",
//   },
//   "Nike-Dunk-Low-Retro": {
//     title: "Nike Dunk Low Retro",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 8,995.00",
//     img: "/All12.png",
//   },
//   "Nike-Air-VaporMax-Plus": {
//     title: "Nike Air VaporMax Plus",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 19,995.00",
//     img: "/All13.png",
//   },
//   "Nike-Zoom-Fly-5": {
//     title: "Nike Zoom Fly 5",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 15,495.00",
//     img: "/All14.png",
//   },
//   "Nike-Metcon-8": {
//     title: "Nike Metcon 8",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 11,995.00",
//     img: "/All15.png",
//   },
//   "Nike-Free-Run-5.0": {
//     title: "Nike Free Run 5.0",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 9,495.00",
//     img: "/All16.png",
//   },
//   "Nike-Air-Max-97": {
//     title: "Nike Air Max 97",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 17,495.00",
//     img: "/All17.png",
//   },
//   "Nike-LeBron-21": {
//     title: "Nike LeBron 21",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 18,995.00",
//     img: "/All18.png",
//   },
//   "Nike-Phantom-GT2-Academy": {
//     title: "Nike Phantom GT2 Academy",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 6,795.00",
//     img: "/All19.png",
//   },
//   "Nike-Tiempo-Legend-9-Academy": {
//     title: "Nike Tiempo Legend 9 Academy",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 5,995.00",
//     img: "/All20.png",
//   },
//   "Nike-Air-Jordan-4-Retro": {
//     title: "Nike Air Jordan 4 Retro",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 19,995.00",
//     img: "/All15.png",
//   },
//   "Nike-Kyrie-Flytrap-6": {
//     title: "Nike Kyrie Flytrap 6",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 9,495.00",
//     img: "/All13.png",
//   },
//   "Nike-SB-Dunk-Low": {
//     title: "Nike SB Dunk Low",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 11,995.00",
//     img: "/All9.png",
//   },
//   "Nike-ZoomX-Invincible-Run-Flyknit-3": {
//     title: "Nike ZoomX Invincible Run Flyknit 3",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 14,995.00",
//     img: "/All7.png",
//   },
//   "Nike-Air-Huarache": {
//     title: "Nike Air Huarache",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 10,495.00",
//     img: "/All19.png",
//   },
//   "Nike-Air-Max-Plus": {
//     title: "Nike Air Max Plus",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 13,995.00",
//     img: "/All17.png",
//   },
//   "Nike-Air-Force-1-Shadow": {
//     title: "Nike Air Force 1 Shadow",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 11,495.00",
//     img: "/All1.png",
//   },
//   "Nike-SB-Blazer-Mid": {
//     title: "Nike SB Blazer Mid",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 8,495.00",
//     img: "/All5.png",
//   },
//   "Nike-Air-Max-Pre-Day": {
//     title: "Nike Air Max Pre-Day",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 9,995.00",
//     img: "/All12.png",
//   },
//   "Nike-Air-Zoom-Structure-24": {
//     title: "Nike Air Zoom Structure 24",
//     content: "Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials, and aged midsole aesthetic give this release an artisan finish",
//     price: "₹ 12,995.00",
//     img: "/All7.png",
//   },
// };

// export default function Product({params}: BlogProps) {
//     const { slug } = params;
//   const blogsection = blogData[slug];
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="container mx-auto px-4 md:flex md:items-center">
//           <div className="w-full md:w-1/2 flex justify-center">
//             <img
//               src={blogsection.img} 
//               alt="Picture"
//               width={'500'}
//               height={'500'}
//               className="rounded-lg"
//             />
//           </div>
//           <div className=" md:w-1/2 mt-6 h-[413px] w-[374px] md:mt-0 md:pl-10">
//             <h1 className="text-3xl  font-bold mb-4">{blogsection.title}</h1>
//             <p className="text-gray-700 mb-6"> { blogsection.content}</p>
//             <p className="text-2xl font-bold mb-6">{blogsection.price}</p>
//             <button className="bg-black text-white px-6 py-3 text-sm font-medium rounded-lg hover:bg-gray-800">
//               Add To Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
  



import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { allProducts, productById } from "@/sanity/sanity";
import Link from "next/link";
import AddToCartButton from "../../component/AddToCartButton";

type Product = {
  productName: string;
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  status: string;
  colors: string;
  category: string;
  inventory: string;
  slug: string;
};

type PageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: PageProps) {
  const { id } = params;

  //Fetched product by id
  const product: Product | null = await sanityFetch({
    query: productById,
    params: { id }, // I Pass the as as a variable
  });

  if (!product) {
    notFound(); //It Shows a 404 page if the product is not found
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
             <div className="container mx-auto px-4 md:flex md:items-center">
               <div className="w-full md:w-1/2 flex justify-center">
                 <Image
                  src={product.imageUrl} 
                  alt="Picture"
                  width={'500'}
                  height={'500'}
                  className="rounded-lg"
                />
              </div>
              <div className=" md:w-1/2 mt-6 h-[413px] w-[374px] md:mt-0 md:pl-10">
                <h1 className="text-3xl  font-bold mb-4">{product.productName}</h1>
                <p className="text-gray-700 w-[300px] mb-6"> { product.description}</p>
                <div className="flex gap-4 text-sm">
                <p className="text-red-700 font-bold mb-6"> Color: { product.colors}</p>
                <p className="text-gray-700 font-bold mb-6"> Stocks Available: { product.inventory}</p>
                <p className="text-gray-700 font-bold mb-6"> Status: { product.status}</p>
                </div>
                <p className="text-2xl font-bold mb-6">${product.price}</p>
                <Link href={"/Cart"}>
                <div >
            <AddToCartButton product={product} />
          </div>
                </Link>
              </div>
            </div>
          </div>
  );
}


// Generate dynamic routes
export async function generateStaticParams() {
  const slugs: { slug: string }[] = await sanityFetch({ query: `*[_type == "product"]{ "slug": slug.current }` });

  return slugs.map((item) => ({
    slug: item.slug,
  }));
}
