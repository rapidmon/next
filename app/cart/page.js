//'use client' => client component를 위한 문법 로딩이 느림, js 로직 이용 가능.(hydration)
import {age, name} from "./data";

export default function Cart() {
    return (
        <div>
            <h4 className="title">{age}세 {name}고객님의 Cart</h4>
            <CartItem name={"코코넛"} price={"$15"} number={"3"} />
            <CartItem name={"코코넛"} price={"$10"} number={"2"} />
            <CartItem name={"파스타"} price={"$15"} number={"1"} />
            <Banner content="현대카드"/>
        </div>
    )
}

//server component => 로딩이 빠름, 단 js 로직을 쓸 수 없음.
function CartItem({name, price, number}){
    return(
        <div className="cart-item">
            <p>{name}</p>
            <p>{price}</p>
            <p>{number}개</p>
        </div>
    )
}

function Banner(props){
    return <h5>{props.content} 결제 행사중</h5>
}