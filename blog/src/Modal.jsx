import React from "react";
import style from "./App.module.scss";

const Modal = ({
    setArticles,
    currentArticle,
    setCurrentArticle,
    handleTitleChange,
    isHidden,
    setIsHidden,
    inputTitle,
    handleInputTitle,
}) => {
    function closeModal() {
        setCurrentArticle(null);
    }

    function deleteArticle(id) {
        setArticles((prevState) => {
            setCurrentArticle(null);
            return prevState.filter((article) => article.id !== id);
        });
    }

    return (
        <>
            {
                <div className={style.modalWrapper} onClick={closeModal}>
                    <div
                        className={style.modalInner}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button onClick={closeModal}>X</button>
                        <h2>{currentArticle.title}</h2>
                        <p>{currentArticle.contents}</p>
                        <p>{currentArticle.date}</p>

                        <button onClick={() => setIsHidden(!isHidden)}>
                            글수정
                        </button>
                        <button
                            onClick={() => deleteArticle(currentArticle.id)}
                        >
                            글삭제
                        </button>

                        {!isHidden && (
                            <div>
                                변경 할 제목:
                                <input
                                    type="text"
                                    value={inputTitle}
                                    onChange={handleInputTitle}
                                />
                                <button
                                    onClick={() => {
                                        handleTitleChange(currentArticle.id);
                                    }}
                                >
                                    변경
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            }
        </>
    );
};

export default Modal;
