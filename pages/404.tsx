import Link from 'next/link'
import Image from 'next/image'
import Styles from './404.module.scss'
import type { NextPage } from '@/types/next'
import { Metadata } from '@/components'
import { NotFound } from '@/public/SVG'
import { FiArrowLeft } from 'react-icons/fi'

const NotFound404: NextPage = () => {
  return (
    <div className={Styles.background}>
      <Metadata title="404 - Learning Code" description="Không có gì ở đây cả 😡" />
      <div className={Styles.NotFoundSVG}>
        <div className={Styles.btnJoin}>
          <FiArrowLeft />
          <Link href="/"> Go To Home</Link>
        </div>
        <Image src={NotFound} alt="notfound" />
      </div>
    </div>
  )
}

export default NotFound404
