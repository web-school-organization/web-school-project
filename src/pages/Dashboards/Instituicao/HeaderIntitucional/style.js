import styled from "styled-components";

export const ThemeHeader = styled.header`
  display: flex;
  flex-direction: ${(props) => props.f};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};

  overflow-x: ${(props) => props.ox};
  overflow-y: ${(props) => props.oy};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};
  border-radius: ${(props) => props.br};

  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};

  background-color: ${(props) => props.bc};

  img {
    width: 200px;
    height: 40px;
  }
  .button1 {
    display: flex;
    width: 50px;
    height: 50px;
  }
  .react-modal {
    background-color: black;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ReactModal__Overlay {
    background-color: var(--grey-1);
  }
  .nav {
    display: none;
  }
  @media (min-width: 768px) {
    .button1 {
      display: none;
      width: 40px;
      height: 40px;
    }
    .nav {
      display: flex;
    }
  }
`;

export const ThemeTitle = styled.div`
  display: flex;
  flex-direction: ${(props) => props.fd};
  align-items: ${(props) => props.a};
  justify-content: ${(props) => props.j};
  gap: ${(props) => props.g};
  text-align: ${(props) => props.t};

  overflow-x: ${(props) => props.ox};
  overflow-y: ${(props) => props.oy};

  width: ${(props) => props.w};
  height: ${(props) => props.h};

  padding: ${(props) => props.p};
  border: ${(props) => props.b};
  border-radius: ${(props) => props.br};

  margin-bottom: ${(props) => props.mb};
  margin: ${(props) => props.m};

  background-color: ${(props) => props.bc};

  button {
    background: var(--pink-0);
    border-radius: 10px;
    border: none;
    font-size: 22px;
    padding: 10px 20px;
  }



  @media (min-width: 768px) {
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
  }
`;
// export const Container = styled.div`
//   display: ${(props) => props.d};

//   flex-direction: ${(props) => props.f};
//   align-items: ${(props) => props.a};
//   justify-content: ${(props) => props.j};
//   gap: ${(props) => props.g};
//   text-align: ${(props) => props.t};

//   height: ${(props) => props.h};

//   padding: ${(props) => props.p};
//   border: ${(props) => props.b};

//   margin: ${(props) => props.m};

//   background-color: ${(props) => props.bc};

//   min-width: 100%;
//   position: absolute;
//   z-index: 9;
//   top: 0;
//   left: 0;

//   .icon {
//     color: var(--pink-1);
//     width: 30px;
//     height: 30px;
//   }
// `;

// export const ThemeDiv = styled.div`
//   display: flex;
//   flex-direction: ${(props) => props.fd};
//   align-items: ${(props) => props.a};
//   justify-content: ${(props) => props.j};
//   gap: ${(props) => props.g};
//   text-align: ${(props) => props.t};

//   overflow-x: ${(props) => props.ox};
//   overflow-y: ${(props) => props.oy};

//   width: ${(props) => props.w};
//   height: ${(props) => props.h};

//   padding: ${(props) => props.p};
//   border: ${(props) => props.b};
//   border-radius: ${(props) => props.br};

//   margin-bottom: ${(props) => props.mb};
//   margin: ${(props) => props.m};

//   background-color: ${(props) => props.bc};
//   color: var(--pink-1);

//   &:hover {
//     background-color: ${(props) => props.bch};
//   }

// `;