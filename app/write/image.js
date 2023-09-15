'use client'
import { useState } from 'react';

export default function Imageupload(){
    const [imageUrl, setImageUrl] = useState("");
    const IMG_BB_API_KEY = '79c47e82f796264cddac12b308e26d45';

    const uploadToImgBB = async (e) => {
        const image = e.target.files[0];
        
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onloadend = async () => {
            const formData = new FormData();
            const base64data = reader.result.split(',')[1]; 
            formData.append('image', base64data);

            const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMG_BB_API_KEY}`, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();
            setImageUrl(data.data.image.url); // 이미지 URL을 상태에 저장
        };
    };

    return (
        <div>
            <input className="image" type="file" onChange={uploadToImgBB}></input>
            <input type="hidden" name="image" value={imageUrl} /> {/* 이미지 URL을 숨겨진 입력 필드에 저장 */}
        </div>
    );
}