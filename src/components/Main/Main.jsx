import React, { StrictMode } from "react";
import Form from "../Form/Form";
import PresText from "../PresText/PresText";
import S from "./Main.module.css";

const Main = () => {
  return (
    <main className={S.main}>
      <section className={S.firstSec}>
        <PresText />
        <Form />
      </section>
      <section>
        
      </section>
    </main>
  );
};

export default Main;
