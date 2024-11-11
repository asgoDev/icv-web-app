import PageContentLayout from '@/layouts/PageContentLayout/PageContentLayout'
import CardContainer from '@/layouts/CardContainer/CardContainer'
import { installations } from '@/utils/installationsFakeData.js'

const InstallationRequestsPage = () => {
  return (
    <PageContentLayout title={'Solicitudes'}>
      <CardContainer objectList={installations} />
    </PageContentLayout>
  )
}

export default InstallationRequestsPage
