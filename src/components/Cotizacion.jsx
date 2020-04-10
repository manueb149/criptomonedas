import React from 'react';
import Spinner from './Spinner';
import styled from '@emotion/styled';

const Resultado = styled.div`
    color: darkblue;
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
    padding-top: 0.1rem;
    padding-bottom: 0.1rem;
    border-radius: 10px;
    text-align: center;
`;
const Info = styled.p`
    font-size: 15px;
    span{
        font-weight: bold;
    }
`;
const Precio = styled.p`
    font-size: 25px;
`;

const Cotizacion = ({resultado, spinner}) => {

    if(Object.keys(resultado).length === 0) return null;

    if(spinner){
        return(
            <Spinner />
        );
    }else{
        
        return (
            <Resultado>
                <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
                <Info>Pracio más alto del día: <span>{resultado.HIGHDAY}</span></Info>
                <Info>Precio más bajo del día: <span>{resultado.LOWDAY}</span></Info>
                <Info>Variación últimas 24 horas: <span>{resultado.CHANGEPCT24HOUR}</span></Info>
                <Info>Última Actualizacion: <span>{resultado.LASTUPDATE}</span></Info>
            </Resultado>
        );
        }
}
 
export default Cotizacion;