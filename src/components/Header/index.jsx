import Logo2 from "../../assets/img2.png";
import { ThemeDiv, ThemeHeader } from "./style";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import Modal from "react-modal";
import TextModal from "../TextModal";
const Header = () => {
  let subtitle;

  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#000";
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <ThemeHeader w="100%" h="100px" bc="#68DAD8" j="space-between" a="center">
      <img src={Logo2} alt="Logo" />
      {window.screen.width < 768 ? (
        <>
        <FiMenu onClick={() => openModal()} className="button1" />
          <Modal
            isOpen={modal}
            className="modal-content"
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={{
              overlay: {
                backgroundColor: "#00000099",
              },
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-100%",
              },
            }}
          >
            <TextModal closeModal={closeModal} />
          </Modal>
        </>
      ) : (
        <ThemeDiv className="nav" f="row" w="340px" a="center" g="10px">
          <button>Home</button>

          <button>Login</button>

          <button>Cadastrar escola</button>

          <button>Eventos</button>
        </ThemeDiv>
      )}
    </ThemeHeader>
  );
};

export default Header;