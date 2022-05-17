import * as React from 'react'
import { useRouter } from 'next/router'
import classnames from 'clsx'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import Styles from './Header.module.scss'

const links = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Product',
    link: '/products'
  },
  {
    name: 'Tips and Trick',
    link: '/tipsandtrick'
  },
  {
    name: 'Contact',
    link: '/contact'
  }
]

const Header = (): JSX.Element => {
  const { pathname } = useRouter()
  const [onTop, setOnTop] = React.useState<boolean>(false)

  React.useEffect(() => {
    window.addEventListener('scroll', () => setOnTop(window.scrollY !== 0))
  }, [])

  return (
    <div className={classnames(Styles.header, onTop && Styles.onTop)}>
      <div className={Styles.groupNavLink}>
        <p className={Styles.brandName}>LearningCode.io</p>
        <div className={Styles.navLinks}>
          {links.map(({ link, name }) => (
            <div key={link} className={classnames(Styles.navLink, pathname === link && Styles.active)}>
              <Link href={link}>{name}</Link>
            </div>
          ))}
        </div>
      </div>
      <div className={Styles.groupButton}>
        <p className={Styles.btnLogin}>Login</p>
        <p className={Styles.btnJoin}>
          Join Us <FiArrowRight />
        </p>
      </div>
    </div>
  )
}

export default Header
