"use client"

import * as yup from 'yup'
import { useFormik } from 'formik'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { Button, Input, Spinner } from '@material-tailwind/react';
import { useState } from 'react';

export default function Confirmation() {

    const [loading, setLoading] = useState(false)

    const validationSchema = yup.object().shape({
        participantes: yup.string().required('Ingresar nombre y apellido de los asistentes.'),

    });

    const formik = useFormik({
        initialValues: {
            participantes: '',
        },
        validationSchema,
        onSubmit: (values, { setSubmitting, resetForm }) => {
            try {
                setLoading(true);
                emailjs
                    .send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLE_ID, values, process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
                    .then((result) => {
                        console.log(result.text);
                        Swal.fire({
                            title: 'Muchas gracias!',
                            text: 'Tu confirmación fue exitosa.',
                            icon: 'success',
                            position: 'center',
                            confirmButtonColor: '#A50104',
                        });
                        setLoading(false);
                        setSubmitting(false);
                        resetForm();
                    }, (error) => {
                        console.log(error.text);
                    })
            } catch (error) {
                console.log(error, "Error de registro");
                alert("Hubo un problema con el registro, por favor intente de nuevo más tarde");
            }
        }
    });

    return (
        <div className="flex flex-col items-center justify-center bg-[#ddc685] gap-6 py-12">
            <div>
                <h1 className="text-3xl text-[#726d5d] text-center md:text-4xl font-bold mb-4">Confirmar Asistencia</h1>
                <h1 className="text-xl text-white text-center md:text-3xl font-normal px-12 lg:px-64 mb-2">
                    Para confirmar tu asistencia al evento completá aquí abajo con nombre/s y apellido/s
                    de las personas que asistirán y hacé click en enviar.
                </h1>
            </div>
            <div className='mb-5'>
                <form onSubmit={formik.handleSubmit}>
                    <div className='flex flex-col md:flex-row gap-2 w-full'>
                        <Input
                            id='participantes'
                            name='participantes'
                            placeholder='Nombre/s y Apellido/s'
                            color='black'
                            className="!border !border-[#726d5d] text-black shadow-lg w-full shadow-gray-900/5 ring-4 ring-transparent placeholder:text-black placeholder:opacity-100 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                                className: "hidden",
                            }}
                            value={formik.values.participantes}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.participantes && Boolean(formik.errors.participantes)}
                            helpertext={formik.touched.participantes && formik.errors.participantes}
                        />
                        {
                            loading ?
                                (
                                    <div className='bg-[#5e2c04] p-2 rounded-lg'>
                                        <Spinner className='mx-auto md:mx-7' color='purple'/>
                                    </div>
                                ) : (
                                    <Button
                                        color='brown'
                                        type='submit'
                                    >
                                        Enviar
                                    </Button>
                                )
                        }
                    </div>
                </form>
            </div>
            <hr className='bg-[#726d5d] text-[#726d5d] w-[80%] h-0.5' />
            <div>
                <h1 className="text-3xl text-[#726d5d] text-center md:text-4xl font-bold mb-4">Salud, Dinero y Amor</h1>
                <h1 className="text-xl text-white text-center md:text-3xl font-normal px-12 lg:px-64 mb-2">
                    Amor nos sobra, salud no nos podemos quejar y dinero.. Si querés ayudarnos para nuestra luna de miel envialo al siguiente alias:
                </h1>
                <div className='flex justify-center w-[300px] md:w-[380px] mx-auto rounded-lg mt-7 border-2 border-[#726d5d] p-2'>
                    <h1 className="text-xl text-[#726d5d] text-center md:text-3xl font-normal px-3 lg:px-64">NICOYDANI.CASORIO.24</h1>
                </div>
            </div>
        </div>
    )
}