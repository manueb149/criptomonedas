import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import imagen from './img/cryptomonedas.png'
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width:900px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;  
  }
`;
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 2rem;
`;
const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: white;
  text-align: center;
  font-weight: 700;
  font-size: 50px;
  margin-top: 2rem;
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

  // State para las monedas
  const [ moneda, guardarMoneda ] = useState('');
  const [ cripto, guardarCripto ] = useState('');
  const [ resultado, guardarResultado ] = useState({}); 
  
  // State para Spinner
  const [ spinner, setSpinner ] = useState(false);

  useEffect(() =>{

    const cotizar = async () => {

      if(moneda === '' || cripto === '') return;
    
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
      const resultado = await axios.get(url);
      guardarResultado(resultado.data.DISPLAY[cripto][moneda]);
    }
    cotizar();
  }, [moneda, cripto]);

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
        <Formulario
          guardarMoneda={guardarMoneda}
          guardarCripto={guardarCripto}
          setSpinner={setSpinner}
        />
        <Cotizacion
          resultado={resultado}
          spinner={spinner}
        />
      </div>
    </Contenedor>
  );
}

export default App;
