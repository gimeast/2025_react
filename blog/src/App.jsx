import style from "./App.module.scss";
import { useEffect, useState } from "react";
import ArticleComponent from "./ArticleComponent.jsx";
import { current, produce } from "immer";
import Modal from "./Modal.jsx";

function App() {
    const [articles, setArticles] = useState([
        {
            id: 1,
            title: "남자코트 추천",
            contents: "남자코트 추천남자코트 추천남자코트 추천",
            date: "2월 17일",
            like: 0,
        },
        {
            id: 2,
            title: "강남 우동 맛집",
            contents:
                "강남 우동 맛집강남 우동 맛집강남 우동 맛집강남 우동 맛집강남 우동 맛집강남 우동 맛집강남 우동 맛집강남 우동 맛집",
            date: "2월 17일",
            like: 0,
        },
        {
            id: 3,
            title: "파이썬 독학",
            contents: "파이썬 독학",
            date: "2월 17일",
            like: 0,
        },
    ]);
    const [sort, setSort] = useState("desc");
    const [currentArticle, setCurrentArticle] = useState(null);
    const [inputTitle, setInputTitle] = useState("");
    const [isHidden, setIsHidden] = useState(true);
    const [newInputTitle, setNewInputTitle] = useState("");
    const [id, setId] = useState(4);

    function handleInputTitle(e) {
        setInputTitle(e.target.value);
    }

    function handleTitleChange(id) {
        setArticles(
            produce(articles, (draft) => {
                draft.find((article) => article.id === id).title = inputTitle;
            })
        );
        setCurrentArticle({ ...currentArticle, title: inputTitle });

        setInputTitle("");
        setIsHidden(true);
    }

    function titleSort() {
        const newSort = sort === "asc" ? "desc" : "asc";
        const sorted = [...articles].sort((a, b) => {
            if (newSort === "asc") {
                return a.title.localeCompare(b.title);
            } else {
                return b.title.localeCompare(a.title);
            }
        });

        setSort(newSort);
        setArticles(sorted);
    }

    function handleInputNewArticle(e) {
        setNewInputTitle(e.target.value);
    }
    function writeArticle() {
        setArticles((prevState) => [
            ...prevState
                .concat({
                    id: id,
                    title: newInputTitle,
                    contents: "추가됨",
                    date: "2월 17일",
                    like: 0,
                })
                .sort((a, b) => b.id - a.id),
        ]);

        setId((prevState) => prevState + 1);
    }

    return (
        <div className={style.app}>
            <header className={style.blackNav}>
                <h1>블로그</h1>
            </header>
            <main className={style.wrapper}>
                {currentArticle && (
                    <Modal
                        setArticles={setArticles}
                        currentArticle={currentArticle}
                        setCurrentArticle={setCurrentArticle}
                        handleTitleChange={handleTitleChange}
                        handleInputTitle={handleInputTitle}
                        inputTitle={inputTitle}
                        isHidden={isHidden}
                        setIsHidden={setIsHidden}
                    />
                )}

                <section>
                    <h2>글목록</h2>

                    <button onClick={titleSort}>정렬</button>

                    {articles.map((article) => (
                        <ArticleComponent
                            key={article.id}
                            articles={articles}
                            setArticles={setArticles}
                            article={article}
                            setCurrentArticle={setCurrentArticle}
                        />
                    ))}
                </section>
                <section>
                    <h2>글작성</h2>
                    <input
                        type="text"
                        value={newInputTitle}
                        onChange={handleInputNewArticle}
                    />
                    <button onClick={writeArticle}>글작성</button>
                </section>
            </main>
        </div>
    );
}

export default App;
