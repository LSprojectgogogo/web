import React from "react";
import img1 from "../asset/211.svg";
import * as S from "../style/SignIn";

const SignIn = () => {
  return (
    <S.Box>
      <S.LogoBOx>
        <S.Img src={img1} alt="My SVG" />
        <S.p>LS</S.p>
      </S.LogoBOx>
      <S.BoxBox>
        <S.ID type="text" placeholder="ID" />
        <S.PW type="password" placeholder="PASSWORD" />
      </S.BoxBox>
      <S.ButtonBox>
        <S.Button>로그인</S.Button>
        <S.Button>회원가입</S.Button>
      </S.ButtonBox>
    </S.Box>
  );
};

export default SignIn;
