// import Image from "next/image";
// const Bag = () => {
//     return (
//       <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-12 font-sans">
//         <div className="lg:w-2/3">
//           <div className="bg-gray-100 p-4  mb-6">
//             <p className="font-semibold">Free Delivery</p>
//             <p className="text-sm">
//               Applies to orders of ₹14,000.00 or more.{" "}
//               <a href="#" className=" underline">
//                 View details
//               </a>
//             </p>
//           </div>
//           <p className="text-2xl">Bag</p>
  
//           <div className="flex flex-col gap-6">
          
//             <div className="flex gap-4 border-b pb-4">
//               <img
//                 src="CartPic1.png"
//                 alt="Nike Dri-FIT ADV TechKnit Ultra"
//                 className="w-[150px] h-[150px] object-cover rounded"
//               />
//               <div className="flex-1">
//                 <h3 className="font-semibold text-lg">
//                   Nike Dri-FIT ADV TechKnit Ultra
//                 </h3>
//                 <p className="text-sm">Men's Short-Sleeve Running Top</p>
//                 <p className="text-sm text-gray-500">Ashen Slate/Cobalt Bliss</p>
//                 <div className="flex w-[200px] justify-between text-gray-500">
//                 <p className="text-sm">Size: L</p>
//                 <p className="text-sm">Quantity: 1</p>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <p className="font-semibold">₹3,895.00</p>
//               </div>
//             </div>
//             <div className="flex gap-4 border-b pb-4">
//               <img
//                 src="https://via.placeholder.com/100"
//                 alt="Nike Air Max 97 SE"
//                 className="w-24 h-24 object-cover rounded"
//               />
//               <div className="flex-1">
//                 <h3 className="font-semibold text-lg">Nike Air Max 97 SE</h3>
//                 <p className="text-sm">Men's Shoes</p>
//                 <p className="text-sm text-gray-500">
//                   Flat Pewter/Light Bone/Black/White
//                 </p>
//                 <div className="flex w-[200px] justify-between text-gray-500">
//                 <p className="text-sm">Size: 8</p>
//                 <p className="text-sm">Quantity: 1</p>
//                 </div>
//               </div>
//               <div className="text-right">
//                 <p className="font-semibold">₹16,995.00</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="lg:w-1/3  p-6 rounded-md">
//           <h3 className="font-semibold text-xl mb-4">Summary</h3>
//           <div className="space-y-4 mb-6">
//             <div className="flex justify-between">
//               <p>Subtotal</p>
//               <p>₹20,890.00</p>
//             </div>
  
//             <div className="flex justify-between">
//               <p>Estimated Delivery & Handling</p>
//               <p>Free</p>
//             </div>
  
//             <div className="flex justify-between border-t pt-4 font-semibold">
//               <p>Total</p>
//               <p>₹20,890.00</p>
//             </div>
//           </div>
  
//           <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800"> Member Checkout</button>
//         </div>
//       </div>
//     );
//   };
  
//   export default Bag;
  

"use client"

import Image from "next/image"
import { useCart } from "../contexts/cartContext"
import Link from "next/link"


const Bag = () => {
  const { cart, removeFromCart, updateQuantity } = useCart()

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-6 lg:p-12 font-sans">
      <div className="lg:w-2/3">
        <div className="bg-gray-100 p-4 mb-6">
          <p className="font-semibold">Free Delivery</p>
          <p className="text-sm">
            Applies to orders of ₹14,000.00 or more.{" "}
            <a href="#" className="underline">
              View details
            </a>
          </p>
        </div>
        <p className="text-2xl">Bag</p>

        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row gap-4 border-b pb-4">
              <Image
                src={item.imageUrl || "/placeholder.svg"}
                alt={item.productName}
                width={150}
                height={150}
                className="w-[100px] sm:w-[150px] h-[100px] sm:h-[150px] object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.productName}</h3>
                {item.size && <p className="text-sm">Size: {item.size}</p>}
                {item.color && <p className="text-sm text-gray-500">{item.color}</p>}
                <div className="flex justify-between w-[200px] text-gray-500">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, Number.parseInt(e.target.value))}
                    className="border rounded p-1"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">₹{item.price * item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Section */}
      <div className="lg:w-1/3 p-6 bg-gray-50 rounded-md shadow-sm">
        <h3 className="font-semibold text-xl mb-4">Summary</h3>
        <div className="space-y-4 mb-6">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p>₹{subtotal.toFixed(2)}</p>
          </div>

          <div className="flex justify-between">
            
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>

          <div className="flex justify-between border-t pt-4 font-semibold">
            <p>Total</p>
            <p>₹{subtotal.toFixed(2)}</p>
          </div>
        </div>
       
        <button className="w-full bg-black text-white py-2 rounded-full hover:bg-gray-800 transition">
        <Link href={"/Checkout"}>  Member Checkout </Link>
        </button>
        
      </div>
    </div>
  )
}

export default Bag

