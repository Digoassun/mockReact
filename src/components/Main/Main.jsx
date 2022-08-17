import React, { StrictMode } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Form from "../Form/Form";
import FormBottom from "../FormBottom/FormBottom";
import PresText from "../PresText/PresText";
import S from "./Main.module.css";

const Main = () => {
  return (
    <main className={S.main}>
      <section className={S.firstSec}>
        <PresText />
        <Form />
      </section>
      <section className={S.secondSec}>
        <div className={S.h3Line}>
          <div>
            <hr />
          </div>
          <h3 className={S.h3}>Sua seleção especial!</h3>
          <div>
            <hr />
          </div>
        </div>
        <div className={S.cards}>
          <Card
            nome="nome do produto"
            desc="descrição completa do produto aqui "
            de="10,99"
            por="5,99"
            ou="6,99"
          />
          <Card
            nome="nome do produto"
            desc="descrição completa do produto aqui "
            de="10,99"
            por="5,99"
            ou="6,99"
          />
          <Card
            nome="nome do produto"
            desc="descrição completa do produto aqui "
            de="10,99"
            por="5,99"
            ou="6,99"
          />
          <Card
            nome="nome do produto"
            desc="descrição completa do produto aqui "
            de="10,99"
            por="5,99"
            ou="6,99"
          />
          <Card
            nome="nome do produto"
            desc="descrição completa do produto aqui "
            de="10,99"
            por="5,99"
            ou="6,99"
          />
          <Card
            nome="nome do produto"
            desc="descrição completa do produto aqui "
            de="10,99"
            por="5,99"
            ou="6,99"
          />
          <Card
            nome="nome do produto"
            desc="descrição completa do produto aqui "
            de="10,99"
            por="5,99"
            ou="6,99"
          />
          <Card
            nome="nome do produto"
            desc="descrição completa do produto aqui "
            de="10,99"
            por="5,99"
            ou="6,99"
          />
        </div>
        <Button style={S.button} content="Adquira mais produtos aqui" />
      </section>
      <section className={S.thirdSec}>
        <div className={S.h3Line}>
          <div>
            <hr />
          </div>
          <h3 className={S.h3}>Compartilhe a novidade</h3>
          <div>
            <hr />
          </div>
        </div>
        <p className={S.p}>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
        <FormBottom/>
      </section>
    </main>
  );
};

export default Main;
