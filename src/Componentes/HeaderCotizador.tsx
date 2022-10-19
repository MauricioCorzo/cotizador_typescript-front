import React from 'react';

interface childrenProps {
    children: JSX.Element | JSX.Element[]; // Le ponemos as porque sino solo aceptaria un solo elemento JSX
}

const HeaderCotizador = ({ children }: childrenProps) => {
    return (
        <div className='my-20 max-w-lg mx-auto bg-white shadow p-10'>
            <h1 className='text-4xl font-extrabold text-gray-500 text-center'>
                ¿Cuanto <span className='text-indigo-600'>dinero </span> necesitas?
            </h1>
            {children}
        </div>
    );
};

export default HeaderCotizador;
