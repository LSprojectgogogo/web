import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
export const LogoBOx = styled.div`
  margin-top: 5vh;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 300px;
  height: 300px;
`;
export const p = styled.p`
  margin: 0;
  font-size: 128px;
`;
export const BoxBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 200px;
`;
export const ID = styled.input.attrs({
  placeholder: "ID",
})`
  width: 750px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #d6d6d6;
  text-indent: 10px;
  text-align: top;
`;
export const PW = styled.input.attrs({
  placeholder: "ID",
})`
  width: 750px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #d6d6d6;
  text-indent: 10px;
  text-align: top;
`;
export const ButtonBox = styled.div`
  width: 750px;
  display: flex;
  justify-content: space-evenly;
`;
export const Button = styled.button`
  width: 150px;
  height: 60px;
  border-radius: 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;
