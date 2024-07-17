import styled from "styled-components";
export const BoxContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const BookSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  margin-top: 10vh;
  text-align: center;
  height: 80vh;
  width: 50vw;
  max-width: 400px;
`;

export const Title = styled.p`
  font-size: 36px;
  display: flex;
  margin-top: 0;
`;

export const ptag = styled.p`
  font-size: 20px;
`;

export const Button = styled.button`
  margin-top: 8px;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
