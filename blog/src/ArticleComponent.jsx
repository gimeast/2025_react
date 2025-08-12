import style from "./App.module.scss";
import React, { useState } from "react";
import { produce } from "immer";

const ArticleComponent = ({ articles, setArticles, article }) => {
    const [inputTitle, setInputTitle] = useState("");
    const [isHidden, setIsHidden] = useState(true);

    function handleLike(id) {
        setArticles(
            produce(articles, (draft) => {
                draft.find((article) => article.id === id).like += 1;
            })
        );
    }

    function handleInputTitle(e) {
        setInputTitle(e.target.value);
    }

    function handleTitleChange(id) {
        setArticles(
            produce(articles, (draft) => {
                draft.find((article) => article.id === id).title = inputTitle;
            })
        );

        setInputTitle("");
        setIsHidden(true);
    }
    return (
        <article key={article.id} className={style.article}>
            {!isHidden && (
                <div>
                    변경 할 제목:
                    <input
                        type="text"
                        value={inputTitle}
                        onChange={handleInputTitle}
                    />
                    <button onClick={() => handleTitleChange(article.id)}>
                        변경
                    </button>
                </div>
            )}

            <h3 onClick={() => setIsHidden(!isHidden)}>{article.title}</h3>
            <button
                className={style.likeBtn}
                onClick={() => handleLike(article.id)}
            >
                <span className={style.likeEmoji}>👍</span>
                {article.like}
            </button>
            <p>{article.date}</p>
        </article>
    );
};

export default ArticleComponent;
