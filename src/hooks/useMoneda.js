import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
    margin-top: 1.5rem;
    display: block;
`;
const Select = styled.select`
    width: 100%;
    display: block;
    padding: 0.5rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
`;

const useMoneda = (label, stateInicial, opciones) => {

    // State de nuestro custom hook
    const [state, setState] = useState(stateInicial);

    const Seleccionar = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={ e => setState(e.target.value)}
                value={state}
            >
                {opciones.map(moneda => (
                    <option key={moneda.codigo} value={moneda.codigo}>{moneda.nombre}</option>
                ))}
            </Select>
        </Fragment>
    );

    return [state, Seleccionar, setState];
}
 
export default useMoneda;