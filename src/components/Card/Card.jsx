import React from "react";
import Button from "../Button/Button";
import S from "./Card.module.css";

const Card = ({ img,nome, desc, de, por, vezes, ou }) => {
  return (
    <article className={S.card} >
      <picture className={S.img}>
        <img src={img}  alt="produto" />
      </picture>
      <h3 className={S.h3}>{nome}</h3>
      <small className={S.desc}>{desc}</small>
      <h4 className={S.h4}>De:{de},00</h4>
      <h5 className={S.h5}>Por:{por},00</h5>
      <p className={S.vezes}>ou {vezes}x de:{ou}</p>
      <Button style={S.button} content="Comprar" />
    </article>
  );
};

export default Card;
