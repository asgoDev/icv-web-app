import PageLayout from '@/layouts/PageLayout/PageLayout'
import Form from '@/components/Form/Form'

const formConfig = [
  {
    label: 'Fecha',
    name: 'date',
    type: 'date',
    defaultValue: new Date().toLocaleDateString('en-CA'),
  },
  { label: 'Número de PON', name: 'ponNumber' },
  {
    label: 'Cédula',
    name: 'idCard',
    type: 'number',
    params: {
      maxLength: { value: 6, message: 'Nro. de cédula inválido' },
    },
  },
  { label: 'Apellidos', name: 'lastName' },
  { label: 'Nombres', name: 'firstName' },
  { label: 'Correo', name: 'email' },
  { label: 'Teléfono', name: 'phone' },
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
  { label: 'Cuota inicial del drop', name: 'initialDropQuota', type: 'number' },
  { label: 'Cuota final del drop', name: 'finalDropQuota', type: 'number' },
]
const ClientActivationPage = () => {
  return (
    <PageLayout>
      <Form config={formConfig} />
    </PageLayout>
  )
}

export default ClientActivationPage
