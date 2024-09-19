import PageLayout from '@/layouts/PageLayout/PageLayout'
import Form from '@/components/Form/Form'

const formConfig = [
  { label: 'Fecha', name: 'date' },
  { label: 'Número de PON', name: 'ponNumber' },
  { label: 'Cédula', name: 'idCard' },
  { label: 'Nombre', name: 'firstName' },
  { label: 'Apellido', name: 'lastName' },
  { label: 'Correo', name: 'email' },
  { label: 'Teléfono', name: 'phone' },
  { label: 'MDT', name: 'mdt' },
  { label: 'Dirección', name: 'address' },
  { label: 'Coordenadas de la Casa', name: 'houseCoordinates' },
  { label: 'Coordenadas del NAP', name: 'napCoordinates' },
  { label: 'Cuota inicial del drop', name: 'initialDropQuota' },
  { label: 'Cuota final del drop', name: 'finalDropQuota' },
]
const ClientActivationPage = () => {
  return (
    <PageLayout>
      <Form config={formConfig} />
    </PageLayout>
  )
}

export default ClientActivationPage
