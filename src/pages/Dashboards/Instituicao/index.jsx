import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Footer from "../../../components/Footer";
import { ModalContext } from "../../../contexts/modal/ContextModal";
import Card from "./Card/index";
import HeaderInstitucional from "./HeaderIntitucional";
import ModalAluno from "./Modal/Aluno";
import ModalProfessor from "./Modal/Professor";
import { Container, ThemeDiv, ThemeNav, ThemeMain, ThemeUl } from "./style";

const Instituicao = () => {
  const [aluno, setAluno] = useState(false);
  const [professor, setProfessor] = useState(false);

  const [vitrine, setVitrine] = useState([]);

  console.log(vitrine)

  useEffect(() => {
    axios
      .get(`https://api-web-school.herokuapp.com/users`,{Authorization:{ }})
      .then((res) => {
        console.log(res);
        setVitrine(res)
        console.log("deu bom");
      })
      .catch((e) => {
        console.log(e);
        console.log("deu ruim");
      });
  }, []);

  function openAluno() {
    setAluno(!aluno);
  }

  function openProfessor() {
    setProfessor(!professor);
  }

  return (
    <>
      <HeaderInstitucional />
      <ThemeMain f="column" g="20px" m="80px 10px 200px 10px">
        <ThemeDiv fd="column" j="center" g="5px">
          <button
            onClick={() => {
              openProfessor();
            }}
          >
            Adicionar professor
          </button>
          <button
            onClick={() => {
              openAluno();
            }}
          >
            Adicionar aluno
          </button>
        </ThemeDiv>
        <ThemeNav g="10px" j="center">
          <button>Professores</button>
          <button>Alunos</button>
        </ThemeNav>
        <Container f="column" a="center">
          <ThemeUl
            oy="auto"
            p="20px 0px 0px 20px"
            f="column"
            g="10px"
            bc="var(--pink-1)"
            w="100%"
            h="600px"
            br="15px"
          >
            <Card />
          </ThemeUl>
        </Container>
      </ThemeMain>
      <ModalAluno dp={aluno ? "flex" : "none"} setAluno={openAluno} />
      <ModalProfessor
        dp={professor ? "flex" : "none"}
        setProfessor={openProfessor}
      />
      <Footer />
    </>
  );
};

export default Instituicao;