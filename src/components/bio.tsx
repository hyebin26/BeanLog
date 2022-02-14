import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/hyebin.jpg"
        width={110}
        height={90}
        quality={95}
        alt="Profile picture"
      />
      <div className="profileWrapper">
        {author?.name && (
          <p className="profileTitle">
            Written by <strong>{author.name}</strong>
          </p>
        )}
        <p>프론트엔드에 대해서 진심으로 다가가고 있는 개발자 황혜빈입니다.</p>
        <div>
          <a className="profileSocial" href="https://github.com/hyebin-Hwang">
            Github
          </a>
          <a
            className="profileSocial"
            href="https://faint-vacuum-1d5.notion.site/801dea06859546f88c55fb963d7bc548"
          >
            Notion
          </a>
        </div>
      </div>
    </div>
  )
}

export default Bio
