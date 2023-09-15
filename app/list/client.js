'use client'

import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function ListClient({product}) {
    let [num, setNum] = useState(0);
    const router = typeof window !== 'undefined' ? useRouter() : null;

    return (
        <li className="food">
            {/* 이미지 최적화는 제일 나중에. Image태그로 바꾸는 건 나중에 하는 게 좋음. */}
            <div onClick={() => router?.push('/list/detail')}>
                <Image className="food-img" width={500} height={500} src={product.image} alt={`${product.name} image`}/>
                <h4>{product.name} {product.price}</h4>
                <span>{num}</span>
            </div> 
            {/* <button onClick={()=>{setNum(num = num.map((v, i) => {if(i === index){return v+1}else{return v}}))}}>+</button>
            <button onClick={()=>{setNum(num = num.map((v, i) => {if(i === index){if(v === 0){return v}else{return v-1}}else{return v}}))}}>-</button> */}
        </li>
    )
}