import style from "./App.module.scss";
import React from "react";
import { produce } from "immer";

const ArticleComponent = ({
    articles,
    setArticles,
    article,
    setCurrentArticle,
}) => {
    function handleLike(id) {
        console.log("handleLike!");
        setArticles(
            produce(articles, (draft) => {
                draft.find((article) => article.id === id).like += 1;
            })
        );
    }
    return (
        <article
            key={article.id}
            className={style.article}
            onClick={() => {
                setCurrentArticle(article);
            }}
        >
            <h3>{article.title}</h3>
            <button
                className={style.likeBtn}
                onClick={(e) => {
                    e.stopPropagation();
                    handleLike(article.id);
                }}
            >
                <span className={style.likeEmoji}>👍</span>
                {article.like}
            </button>
            <p>{article.date}</p>
        </article>
    );
};

export default ArticleComponent;
