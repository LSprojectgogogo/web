import React, { useState, useRef, useEffect } from "react";
import * as S from "../style/write.style";
import config from "../config.json";
import axios from "axios";

const WriteModal = ({ modal, setModal }) => {
  const modalRef = useRef();
  const userIdx = 1;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setModal(false);
    }
  };

  const keyPress = (e) => {
    if (e.key === "Escape" && modal) {
      setModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [modal]);

  const handleSubmit = async () => {
    const postData = {
      userIdx,
      title,
      content,
    };

    try {
      const response = await axios.post(
        `${config.serverUrl}/post/register`,
        postData
      );
      console.log("response", response);
      if (response.status === 200) {
        console.log("Post successful:", response.data);
        setModal(false); // Close the modal on success
      } else {
        console.error("Failed to post:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <S.Background ref={modalRef} onClick={closeModal}>
      <S.Boxlayout>
        <S.Title
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <S.Contents
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <S.ButtonBox>
          <S.Button onClick={() => setModal(false)}>Close</S.Button>
          <S.Button onClick={() => handleSubmit()}>등록하기</S.Button>
        </S.ButtonBox>
      </S.Boxlayout>
    </S.Background>
  );
};

export default WriteModal;
