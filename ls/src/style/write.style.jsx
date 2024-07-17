import styled, { css } from "styled-components";

const Width = css`
  width: 100%;
`;

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Boxlayout = styled.div`
  width: 800px;
  height: 700px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 4;
  padding: 30px;
  align-items: center;
  border-radius: 10px;
`;

export const Title = styled.input.attrs({
  placeholder: "제목을 입력하세요",
})`
  width: 750px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid #d6d6d6;
  margin-top: 8vh;
  margin-bottom: 2vh;
  text-indent: 10px;
`;

export const Contents = styled.input.attrs({
  placeholder: "내용을 입력하세요",
})`
  width: 750px;

  border-radius: 10px;
  border: 1px solid #d6d6d6;
  padding-bottom: 500px;
  text-indent: 10px;
  text-align: top;
`;
export const ButtonBox = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  width: 140px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #7c89ff;
  color: #fff;
  margin-top: 3vh;
  font-size: 24px;
  font-weight: 600;
`;
