import * as React from "react"
import { Link } from "gatsby"
import Toggle from "./toggle"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Toggle />
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        <a className="profileSocial" href="https://github.com/hyebin-Hwang">
          Github
        </a>
        <a
          className="profileSocial"
          href="https://faint-vacuum-1d5.notion.site/801dea06859546f88c55fb963d7bc548"
        >
          Notion
        </a>
      </footer>
    </div>
  )
}

export default Layout
