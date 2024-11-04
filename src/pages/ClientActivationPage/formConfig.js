import { getActualLocation } from '@/utils/getActualLocation.js'

export const formConfig = {
  submitFx: async (data) => {
    const response = await fetch(
      'http://localhost:8080/api/installations/client-activation',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    )
    const json = await response.json()

    console.log(json)
  },
  inputsConfig: [
    {
      label: 'Fecha',
      name: 'date',
      type: 'date',
      defaultValue: new Date().toLocaleDateString('en-CA'),
    },
    {
      label: 'Número de PON',
      name: 'ponNumber',
      params: {
        pattern: {
          value: /^[a-fA-F0-9]{24}$/,
          message: 'Dato inválido',
        },
      },
      inputFx: {
        ico: 'code',
        fx: () => {
          const myPromise = new Promise((resolve) => {
            setTimeout(() => {
              resolve('Esta función está en desarrollo')
            }, 5000)
          })
          return myPromise
        },
      },
    },
    {
      label: 'Cédula',
      name: 'idCard',
      type: 'number',
      params: {
        minLength: { value: 6, message: 'Nro. de cédula inválido' },
        maxLength: { value: 8, message: 'Nro. de cédula inválido' },
        pattern: {
          value: /^[0-9]+$/,
          message: 'Este campo solo admite números',
        },
        valueAsNumber: true,
      },
    },
    {
      label: 'Apellidos',
      name: 'lastName',
      params: {
        pattern: {
          value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ' ]+$/,
          message: 'Este campo solo admite letras',
        },
      },
    },
    {
      label: 'Nombres',
      name: 'firstName',
      params: {
        pattern: {
          value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ' ]+$/,
          message: 'Este campo solo admite letras',
        },
      },
    },
    {
      label: 'Correo',
      name: 'email',
      params: {
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: 'Correo inválido',
        },
      },
    },
    {
      label: 'Teléfono',
      name: 'phone',
      params: {
        pattern: {
          value: /^\d{11}$/,
          message: 'Número de teléfono inválido',
        },
      },
    },
    { label: 'MDT', name: 'mdt' },
    {
      label: 'Dirección',
      name: 'address',
      params: {
        minLength: { value: 15, message: 'Especifica mejor la dirección' },
      },
      // inputFx: {
      //   ico: 'location_dot',
      //   fx: () => true,
      // },
    },
    {
      label: 'Coordenadas de la Casa',
      name: 'houseCoordinates',
      inputFx: {
        ico: 'globe',
        fx: getActualLocation,
      },
    },
    {
      label: 'Coordenadas del NAP',
      name: 'napCoordinates',
      inputFx: {
        ico: 'globe',
        fx: getActualLocation,
      },
    },
    {
      label: 'Cuota inicial del drop',
      name: 'initialDropQuota',
      type: 'number',
      params: {
        pattern: {
          value: /^[0-9]+$/,
          message: 'Este campo solo admite números',
        },
        valueAsNumber: true,
      },
    },
    {
      label: 'Cuota final del drop',
      name: 'finalDropQuota',
      type: 'number',
      params: {
        pattern: {
          value: /^[0-9]+$/,
          message: 'Este campo solo admite números',
        },
        valueAsNumber: true,
      },
    },
  ],
}
