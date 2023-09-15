import Imageupload from "./image";

export default function Write(){
    return(
        <div>
            <h4>글작성</h4>
            <form action="/api/post/new" method="POST">
                <h5>제목</h5>
                <input name="name" className="title" type="text"></input>
                <h5>사진</h5>
                <Imageupload />
                <h5>내용</h5>
                <textarea name="price" className="text"></textarea>
                <button type="submit">등록</button>
            </form>
            <form action="/api/time" method="GET">
                <button type="submit">시간</button>
            </form>
        </div>
    )
}