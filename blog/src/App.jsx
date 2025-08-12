import style from "./App.module.scss";
import { useState } from "react";
import ArticleComponent from "./ArticleComponent.jsx";
import { produce } from "immer";

function App() {
    const [articles, setArticles] = useState([
        { id: 1, title: "남자코트 추천", date: "2월 17일", like: 0 },
        { id: 2, title: "강남 우동 맛집", date: "2월 17일", like: 0 },
        { id: 3, title: "파이썬 독학", date: "2월 17일", like: 0 },
    ]);
    const [sort, setSort] = useState(null);

    function titleSort() {
        const sorted = produce(articles, (draft) =>
            draft.sort((a, b) => {
                if (sort === "asc") {
                    setSort("desc");
                    if (a.title > b.title) {
                        return -1;
                    }
                    if (a.title < b.title) {
                        return 1;
                    }
                } else {
                    setSort("asc");
                    if (a.title < b.title) {
                        return -1;
                    }
                    if (a.title > b.title) {
                        return 1;
                    }
                }
                return 0;
            })
        );

        setArticles(sorted);
    }

    return (
        <div className={style.app}>
            <header className={style.blackNav}>
                <h1>블로그</h1>
            </header>
            <main className={style.wrapper}>
                <section>
                    <h2>글목록</h2>

                    <button onClick={titleSort}>정렬</button>

                    {articles.map((article) => (
                        <ArticleComponent
                            key={article.id}
                            articles={articles}
                            setArticles={setArticles}
                            article={article}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default App;
