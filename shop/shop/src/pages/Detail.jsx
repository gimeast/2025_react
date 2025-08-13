import { shoesData } from "../data.js";
import { useLocation } from "react-router-dom";

function Detail() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const { title, content, price } = shoesData[id];
    return (
        <div>
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" />
            <div className="col-md-6">
                <h4 className="pt-5">{title}</h4>
                <p>{content}</p>
                <p>{price.toLocaleString()}원</p>
                <button className="btn btn-danger">주문하기</button>
            </div>
        </div>
    );
}

export default Detail;
