"use client"

import * as yup from 'yup'
import { useFormik } from 'formik'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { Button, Input } from '@material-tailwind/react';

export default function Confirmation() {

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
                emailjs
                    .send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, process.env.NEXT_PUBLIC_EMAIL_TEMPLE_ID, values, process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY)
                    .then((result) => {
                        console.log(result.text);
                        Swal.fire({
                            title: 'Muchas gracias!',
                            text: 'Tu confirmación fue exitosa.',
                            icon: 'success',
                            position: 'top',
                            confirmButtonColor: '#A50104',
                        });
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
            <div>
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
                            helperText={formik.touched.participantes && formik.errors.participantes}
                        />
                        <Button
                            color='brown'
                            type='submit'
                        >
                            Enviar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}