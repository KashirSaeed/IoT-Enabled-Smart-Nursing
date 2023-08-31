import styled from 'styled-components';

export const Box = styled.div`
  padding: 80px 60px;
  background: #14457b;
  position: relative;
  width: 93%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20px;
  flex: ${(props) => props.width || '1'};
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 50px;
    margin-right: 10px;
  }

  span {
    font-size: 18px;
    font-weight: bold;
  }
`;
