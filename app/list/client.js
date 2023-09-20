'use client'

import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/navigation'

export default function ListClient({product, product_id}) {
    let [num, setNum] = useState(0);
    const router = useRouter();

    return (
        <div>
            <Image onClick={() => router.push('/list/detail')} className="food-img" width={500} height={500} src={product.image} alt={`${product.name} image`}/>
            <h4>{product.name} {product.price}</h4>
            <span>{num}</span>
            <button onClick={(e) => {
                fetch('/api/delete/delete', {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'  // 이 부분을 추가하여 JSON 형식임을 알립니다.
                    },
                    body: JSON.stringify({
                        id: product_id,
                        url: product.deleteImage
                    })
                })
                .then((res) => {
                    if (!res.ok) {
                        throw new Error("failed to delete");
                    } else {
                        alert("삭제 완료")
                        e.target.parentElement.parentElement.style.display = 'none';
                    }
                })
                .catch(error => {
                    console.error(error);
                    alert("삭제 중 오류가 발생했습니다.");
                });
            }} type="button" className="delete-btn">삭제</button>
        </div>
    )
}