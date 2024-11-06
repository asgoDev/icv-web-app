import PageContentLayout from '@/layouts/PageContentLayout/PageContentLayout'

import { formConfig } from './formConfig.js'
import Form from '@/components/Form/Form'

const ClientActivationPage = () => {
  return (
    <PageContentLayout title={'Formato de Activación'}>
      <Form config={formConfig} />
    </PageContentLayout>
  )
}

export default ClientActivationPage
