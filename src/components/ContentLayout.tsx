type ContentLayoutProps = {
  children: React.ReactNode
}

function ContentLayout({ children }: ContentLayoutProps) {
  return (
    <div className="content-layout">
      {children}
    </div>
  )
}

export default ContentLayout
