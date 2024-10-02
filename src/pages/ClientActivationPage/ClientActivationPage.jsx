import PageLayout from '@/layouts/PageLayout/PageLayout'
import Form from '@/components/Form/Form'

const formConfig = [
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
  },
  {
    label: 'Cédula',
    name: 'idCard',
    type: 'number',
    params: {
      minLength: { value: 6, message: 'Nro. de cédula inválido' },
      maxLength: { value: 7, message: 'Nro. de cédula inválido' },
      pattern: {
        value: /^[0-9]+$/,
        message: 'Este campo solo admite números',
      },
    },
  },
  {
    label: 'Apellidos',
    name: 'lastName',
    params: {
      pattern: {
        value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ' ]+$ /,
        message: 'Este campo solo admite letras',
      },
    },
  },
  {
    label: 'Nombres',
    name: 'firstName',
    params: {
      pattern: {
        value: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ' ]+$ /,
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
  },
  { label: 'Coordenadas de la Casa', name: 'houseCoordinates' },
  { label: 'Coordenadas del NAP', name: 'napCoordinates' },
  {
    label: 'Cuota inicial del drop',
    name: 'initialDropQuota',
    type: 'number',
    params: {
      pattern: {
        value: /^[0-9]+$/,
        message: 'Este campo solo admite números',
      },
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
    },
  },
]
const ClientActivationPage = () => {
  return (
    <PageLayout>
      <Form config={formConfig} />
    </PageLayout>
  )
}

export default ClientActivationPage
