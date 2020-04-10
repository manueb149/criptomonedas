import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCripto from '../hooks/useCripto';
import Error from './Error';
import axios from 'axios';

const Boton = styled.input`
    display: block;
    text-transform: uppercase;
    margin-top: 2rem;
    margin-bottom: 2rem;
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

const Formulario = ({guardarMoneda, guardarCripto, setSpinner, badSearch}) => {

    // State para cripto monedas
    const [ listaCripto, setListaCripto ] = useState([]);
    // State para error
    const [ error, setError ] = useState(false);
    // Monedas
    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dólar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GPB', nombre: 'Libra Estelina'},
        {codigo: 'DOP', nombre: 'Peso Dominicano'}
    ];

    // State para seleccionar moneda
    const [ moneda, SeleccionarMoneda ] = useMoneda('Seleccione una Moneda', '', MONEDAS);

    // State para seleccionar cripto monedas
    const [ cripto, SeleccionarCripto ] = useCripto('Seleccione una Criptomoneda', '', listaCripto);

    const handleSubmit = e => {
        e.preventDefault();
        if(moneda.trim() === '' || cripto.trim() === ''){
            setError(true);
            return;
        }
        setError(false);

        // Habilitar Spinner
        setSpinner(true);

        setTimeout(() => {
            // Deshabiliar Spinner
            setSpinner(false);

            // Guardar datos de cotización
            guardarMoneda(moneda);
            guardarCripto(cripto);

        }, 2000);

    }

    // Ejecutar llamado a la API para llenar Selecet Criptomonedas
    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;
            const resultado = await axios.get(url);

             // Guardar Cotizació
             setListaCripto(resultado.data.Data);
        }
        consultarAPI();
        // eslint-disable-next-line
    }, []);

    return (
        <form
            onSubmit={handleSubmit}
        >
            {error ? <Error error='Favor llenar ambos campos' /> : null}
            {badSearch ? <Error error="Hubo un error en la consulta" /> : null}
            <SeleccionarMoneda />
            <SeleccionarCripto />
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}
 
export default Formulario;