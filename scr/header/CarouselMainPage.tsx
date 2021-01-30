import React from "react";
import { Carousel } from "react-bootstrap";
import Styled from "styled-components";
import imagem1 from "./assets/001.png";
import imagem2 from "/assets/002.png";
import imagem3 from "scr/assets/003.png";

const CarouselStyled = Styled(Carousel)`
  margin-bottom: 100px;
  margin: flex;
`;

function CarouselMainPage() {

  return (

<Carousel>
  <Carousel.Item>
  <img
          height="360px"
          className="d-block w-100"
          src={imagem1}
          alt="First slide"
        />
    <Carousel.Caption>
      <h3>JARDINAGEM</h3>
      <p>CLIQUE E CONFIRA AS FERRAMENTAS DISPONIVEIS.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
          height="360px"
          className="d-block w-100"
          src={imagem2}
          alt="First slide"
        />

    <Carousel.Caption>
      <h3>LIMPEZA</h3>
      <p>CLIQUE E CONFIRA AS FERRAMENTAS DISPONIVEIS.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <img
          height="360px"
          className="d-block w-100"
          src={imagem3}
          alt="First slide"
        />

    <Carousel.Caption>
      <h3>CONSTRUÇÃO</h3>
      <p>CLIQUE E CONFIRA AS FERRAMENTAS DISPONIVEIS.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  )}