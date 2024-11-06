import PageLayout from '@/layouts/PageLayout/PageLayout'
import { formConfig } from './formConfig.js'
import Form from '@/components/Form/Form'

const ClientActivationPage = () => {
  return (
    <PageLayout title={'Formato de Activación'}>
      <Form config={formConfig} />
    </PageLayout>
  )
}

export default ClientActivationPage
