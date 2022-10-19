//API nativa de javascript de transformacion de valores a dinero
export const formatearDinero = (valor: number) => {
    const formater = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    return formater.format(valor);
};
