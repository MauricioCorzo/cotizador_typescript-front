import React, { ChangeEvent, useEffect, useState } from 'react';
import Button from './Componentes/Button';
// import FormImagen from './Componentes/FormImagen';
import HeaderCotizador from './Componentes/HeaderCotizador';
import { formatearDinero, calcularTotalPagar } from './helpers/funtions';

function App() {
    const [cantidad, setCantidad] = useState<number>(10000);
    const [meses, setMeses] = useState<number>(6);
    const [total, setTotal] = useState<number>(0);
    const [pagoMensual, setPagoMensual] = useState<number>(0);

    useEffect(() => {
        setTotal(calcularTotalPagar(cantidad, meses));
    }, [cantidad, meses]);

    useEffect(() => {
        setPagoMensual(total / meses);
    }, [total]);

    const MIN = 0;
    const MAX = 20000;
    const STEP = 100;

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setCantidad(+e.target.value); // Lo convierto a numero con el + al principio pq me viene como string
    }

    function handleClickDecrement(): void {
        const valor = cantidad - STEP;
        if (valor < MIN) return;
        setCantidad(valor);
    }
    function handleClickIncrement(): void {
        const valor = cantidad + STEP;
        if (valor > MAX) return;
        setCantidad(valor);
    }

    return (
        <>
            <div className='grid grid-cols-2 gap-1'>
                <div className='my-20 mx-10 max-w-2xl mx-full bg-white shadow p-10'>1</div>

                <HeaderCotizador>
                    <div className='flex justify-between my-6'>
                        <Button operador='-' fn={handleClickDecrement} />
                        <Button operador='+' fn={handleClickIncrement} />
                    </div>
                    <input
                        type='range'
                        min={MIN}
                        max={MAX}
                        step={STEP}
                        value={cantidad}
                        className='w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600'
                        onChange={handleChange}
                    />
                    <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{formatearDinero(cantidad)}</p>

                    <h2 className='text-xl font-extrabold text-center text-gray-500'>
                        Elige un <span className='text-indigo-600'>Plazo</span> a pagar
                    </h2>

                    <select
                        value={meses}
                        onChange={(e) => setMeses(+e.target.value)}
                        className='mt-5 w-full p-2 bg-white border border-gray-300 rounded roundend-lg text-center text-xl font-bold text-gray-500'
                    >
                        <option value='6'>6 Meses</option>
                        <option value='12'>12 Meses</option>
                        <option value='24'>24 Meses</option>
                    </select>

                    <div className='my-5 space-y-3 bg-gray-50 p-5'>
                        <h2 className='text-xl font-extrabold text-center text-gray-500'>
                            Resumen <span className='text-indigo-600'>de Pagos</span>
                        </h2>
                        <p className='text-xl text-gray-500 text-center fon-bold'>{meses} Meses</p>
                        <p className='text-xl text-gray-500 text-center fon-bold'>{formatearDinero(total)} Total a Pagar</p>
                        <p className='text-xl text-gray-500 text-center fon-bold'>{formatearDinero(pagoMensual)} Mensuales</p>
                    </div>
                </HeaderCotizador>
            </div>
        </>
    );
}

export default App;
