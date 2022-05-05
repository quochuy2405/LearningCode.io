import React from 'react'
import { Metadata } from '@/components'
import Notfound from '@/public/NotFound.svg'
import Link from 'next/link'
import Image from 'next/image'
import { FiArrowLeft } from 'react-icons/fi'
import type { NextPage } from '@/types/next'
import Styles from './404.module.scss'

const NotFound: NextPage = () => {
  return (
    <div className={Styles.background}>
      <Metadata title="404 - Learning Code" description="Không có gì ở đây cả 😡" />
      <div className={Styles.NotFoundSVG}>
        <div className={Styles.btnJoin}>
          <FiArrowLeft />
          <Link href="/"> Go To Home</Link>
        </div>
        <Image src={Notfound} alt="notfound" />
      </div>
    </div>
  )
}

export default NotFound
