import { useState } from "react";
import { shoesData } from "../data.js";
import { Link } from "react-router-dom";

function Home() {
    const [shoes, setShoes] = useState(shoesData);

    return (
        <>
            <div className="h-[300px] w-dvw bg-[gray] bg-center bg-cover bg-[url(https://codingapple1.github.io/shop/shoes1.jpg)]"></div>
            <div className="flex flex-wrap gap-10 w-full justify-center text-center mt-30">
                {shoes.map((data) => (
                    <Link
                        key={data.id}
                        className="bg-[lightgreen] w-1/3 min-w-[300px] max-w-[300px] h-[300px] flex flex-col items-center rounded-xl"
                        to={`/detail?id=${data.id}`}
                    >
                        <div className="bg-[gray] w-[250px] h-[140px] mt-4">
                            <img
                                src="https://codingapple1.github.io/shop/shoes1.jpg"
                                alt=""
                            />
                        </div>
                        <h2 className="text-2xl font-[500] mt-10">
                            {data.title}
                        </h2>
                        <p>{data.content}</p>
                        <span>{data.price.toLocaleString()}</span>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Home;
