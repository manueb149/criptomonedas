import React from 'react';
import styled from '@emotion/styled';
import imagen from './img/cryptomonedas.png'
import Formulario from './components/Formulario';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width:600px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;  
  }
`;
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: 50px;
  margin-top: 5rem;
  margin-bottom: 50px;
  &::after{
    content: '';
    width: 100%;
    height: 5px;
    background-color: #66A2FE;
    display: block;
  }
`;

function App() {

  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt='imagen cripto'
        />
      </div>
      <div>
        <Heading>
          Cotiza Criptomonedas al instante
        </Heading>
        <Formulario>

        </Formulario>
      </div>
    </Contenedor>
  );
}

export default App;
