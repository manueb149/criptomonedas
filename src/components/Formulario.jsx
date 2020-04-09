import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: white;
    &:hover{
        background-color: #325AC0;
        cursor: pointer;
    }
`;

const Formulario = () => {

    // Monedas
    const MONEDAS = [
        {codigo: '', nombre: '-- SELECCIONE --'},
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GPB', nombre: 'Libra Estelina'}
    ];

    // State para seleccionar moneda
    const [ moneda, SeleccionarMoneda ] = useMoneda('Seleccione una Moneda', '', MONEDAS);

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <SeleccionarMoneda />
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
 
export default Formulario;