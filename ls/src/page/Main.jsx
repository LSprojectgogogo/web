import React, { useState, useEffect } from "react";
import BookSummary from "./book";
import Write from "./Write";
import * as S from "../style/Main.style";
import img1 from "../asset/211.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config.json"; // Import the server URL from config.json

const Main = () => {
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate("/Main");
  };

  const [books, setBooks] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${config.serverUrl}/post`);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <S.BoxContainer>
        <S.LogoBox onClick={navigateToMain}>
          <S.img1 src={img1} alt="My SVG" />
          <S.text>LS</S.text>
        </S.LogoBox>
        <S.input
          type="text"
          id="search"
          placeholder="어떤 책을 읽어드릴까요?"
        />
        <S.write onClick={() => setModal(true)}>글쓰기</S.write>
      </S.BoxContainer>

      {books.map((book) => (
        <BookSummary key={book.id} book={book} />
      ))}

      {modal && <Write setModal={setModal} />}
    </div>
  );
};

export default Main;
