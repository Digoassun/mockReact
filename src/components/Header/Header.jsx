import React from "react";
import Button from "../Button/Button";
import Title from "../Title/Title";
import S from "./Header.module.css";

const Header = () => {
  return (
    <header className={S.header}>
      <Title titulo="uma seleção de produtos" subtitulo="especial para você" />
      <p className={S.p}>
        Todos os produtos desta lista foram selecionados a partir da sua
        navegação. Aproveite!
      </p>
      <div className={S.divButton}>
        <Button style={S.button} content="Conheça a Linx" />
        <Button style={S.button} content="Ajude o algorítimo" />
        <Button style={S.button} content="Seus produtos" />
        <Button style={S.button} content="Compartilhe" />
      </div>
    </header>
  );
};

export default Header;
