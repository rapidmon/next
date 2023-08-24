'use client'
import Image from "next/image";
import food0 from "../../public/food0.png";
import food1 from "../../public/food1.png";
import food2 from "../../public/food2.png";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function List() {
    let product = ['tomato', 'pasta', 'coconut'];
    let price = ['$3', '$15', '$5'];
    let food_img = [food0, food1, food2];
    let [num, setNum] = useState([0,0,0]);
    const router = typeof window !== 'undefined' ? useRouter() : null;

    return (
        <div>
            <h4 className="title">상품목록</h4>
            <ul className="food-list">
                {product.map((v, index) => (
                    <li key={index} className="food">
                        {/* 이미지 최적화는 제일 나중에. Image태그로 바꾸는 건 나중에 하는 게 좋음. */}
                        <div onClick={() => router?.push('/list/detail')}>
                            <Image className="food-img" src={food_img[index]} alt={`${product[index]} image`}/>
                            <h4>{v} {price[index]}</h4>
                            <span>{num[index]}</span>
                        </div> 
                        <button onClick={()=>{setNum(num = num.map((v, i) => {if(i === index){return v+1}else{return v}}))}}>+</button>
                        <button onClick={()=>{setNum(num = num.map((v, i) => {if(i === index){if(v === 0){return v}else{return v-1}}else{return v}}))}}>-</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}