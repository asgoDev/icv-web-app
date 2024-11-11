const PageContentLayout = ({ children, title }) => {
  return (
    <main className="page-layout__content">
      <h1 className="page-layout__title">{title}</h1>
      {children}
      {/* <Footer /> */}
    </main>
  )
}

export default PageContentLayout
