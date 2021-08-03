import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1020px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 20%;
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--bluelight);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    // transition deixa a o filter mais suave
    transition: filter 0.2s;
    &:hover {
      // filter transforma o botão e tem várias opções
      filter: brightness(1.1);
    }
  }
`;
