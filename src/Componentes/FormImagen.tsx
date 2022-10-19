import React, { ChangeEvent, FormEvent, useState } from 'react';

export default function FormImagen() {
    const input: HTMLInputElement | null = document.querySelector('#submitImg');
    const [imagen, setImagen] = useState<FileList | null>(null);

    const cambiarImagen = (e: ChangeEvent<HTMLInputElement>) => {
        setImagen(e.target.files);
        input?.classList.remove('hidden');
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const reader = new FileReader();
        reader.readAsDataURL(imagen?.item(0) as Blob);
        reader.onloadend = () => {
            sendToCloudynary(reader.result);
        };
    };

    const sendToCloudynary = async (result: string | ArrayBuffer | null) => {
        // const { data } = await axios.post()
        // console.log(result);
        input?.classList.add('hidden');
    };

    return (
        <>
            <h1 className='text-6xl text-center'>Hola Mundo!</h1>
            <form onSubmit={handleSubmit}>
                <input type='file' accept='image/png, image/jpeg , image/jpg' name='image' onChange={cambiarImagen} />
                <input type='submit' value='Cambiar imagen' id='submitImg' />
            </form>
        </>
    );
}
