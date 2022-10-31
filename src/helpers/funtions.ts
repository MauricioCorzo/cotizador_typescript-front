//API nativa de javascript de transformacion de valores a dinero
export const formatearDinero = (valor: number) => {
    const formater = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
    return formater.format(valor);
};

export const calcularTotalPagar = (cantidad: number, plazo: number) => {
    let total: number;

    //Mientras mayor cantidad solicitada, menor interes
    if (cantidad < 5000) {
        total = cantidad * 1.5;
    } else if (cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.4;
    } else if (cantidad >= 1000 && cantidad < 15000) {
        total = cantidad * 1.3;
    } else {
        total = cantidad * 1.2;
    }

    //Calcular el plazo, mas plazo mayor interes
    if (plazo === 6) {
        total *= 1.1;
    } else if (plazo === 12) {
        total *= 1.2;
    } else {
        total *= 1.3;
    }

    return total;
};
