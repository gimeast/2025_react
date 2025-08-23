import { shoesData } from "../data.js";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Detail() {
    const [isVisible, setIsVisible] = useState(true);
    const [number, setNumber] = useState(null);

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const id = params.get("id");
    const { title, content, price } = shoesData[id];

    useEffect(() => {
        if (number !== null && Number.isNaN(number)) {
            alert("그러지마세요");
            setNumber("");
        }
    }, [number]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isVisible && (
                <div className="text-red-300 font-bold text-2xl">
                    2초이내 구매시 할인
                </div>
            )}

            <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" />
            <div className="col-md-6">
                <input
                    className="border"
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(Number(e.target.value))}
                />
                <h4 className="pt-5">{title}</h4>
                <p>{content}</p>
                <p>{price.toLocaleString()}원</p>
                <button className="btn btn-danger">주문하기</button>
            </div>
        </div>
    );
}

export default Detail;
