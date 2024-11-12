import { useParams } from 'react-router-dom'
import PageContentLayout from '@/layouts/PageContentLayout/PageContentLayout'

const InstallationDetail = () => {
  const { id } = useParams()
  return (
    <PageContentLayout title={id}>
      <main>InstallationDetail {id}</main>
    </PageContentLayout>
  )
}

export default InstallationDetail
