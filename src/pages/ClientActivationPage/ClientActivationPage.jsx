import PageLayout from '@/layouts/PageLayout/PageLayout'
import Form from '@/components/Form/Form'
import { formConfig } from './formConfig.js'

const ClientActivationPage = () => {
  return (
    <PageLayout>
      <Form config={formConfig} />
    </PageLayout>
  )
}

export default ClientActivationPage
