const PageContentLayout = ({ children, title }) => {
  return (
    <div className="page-layout__content">
      <h1 className="page-layout__title">{title}</h1>
      {children}
      {/* <Footer /> */}
    </div>
  )
}

export default PageContentLayout
