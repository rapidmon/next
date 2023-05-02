export default function List() {
    let product = ['tomato', 'vasil', 'olive'];
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {product.map((v, index) => (
                <div key={index} className="food">
                    <h4>{v} $40</h4>
                </div>
            ))}
        </div>
    )
}