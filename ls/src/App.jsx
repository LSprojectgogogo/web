import React from "react";
import BookSummary from "./page/book";
import * as S from "./app.style";
import img1 from "./asset/211.svg";

const App = () => {
  const books = [
    {
      id: 1,
      title: "책 1",
      summary: "이것은 첫 번째 책의 줄거리입니다.",
    },
    {
      id: 2,
      title: "책 2",
      summary: "이것은 두 번째 책의 줄거리입니다.",
    },
    {
      id: 3,
      title: "책 3",
      summary: "이것은 세 번째 책의 줄거리입니다.",
    },
  ];

  return (
    <div>
      <S.BoxContainer>
        <S.LogoBox>
          <S.img1 src={img1} alt="My SVG" />
          <S.text>LS</S.text>
        </S.LogoBox>
        <S.input
          type="text"
          id="search"
          placeholder="어떤 책을 읽어드릴까요?"
        />
        <S.write>글쓰기</S.write>
      </S.BoxContainer>

      {books.map((book) => (
        <BookSummary key={book.id} book={book} />
      ))}
    </div>
  );
};

export default App;
