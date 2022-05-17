/* eslint-disable @next/next/no-img-element */
import { Header, Metadata, Filters } from '@/components'
import type { FilterItem } from '@/types/inferface'
import React from 'react'
import Styles from './Products.module.scss'

const listFilter: Array<FilterItem> = [
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  },
  {
    title: 'react'
  }
]

const Products = () => {
  return (
    <div>
      <Metadata title="Liên hệ - Learning Code" description="Liên hệ - Learning Code" />
      <Header />
      <div className={Styles.productsContent}>
        <div className={Styles.programContent}>
          <div className={Styles.Content}>
            <p className={Styles.contentTitle}>Program</p>
            <p className={Styles.contentDescription}>
              This year the program looks a little different. Catch all keynotes, product announcements, and learning lab content on day one, then
              come back day two when all technical sessions will be available on-demand.
            </p>
          </div>
          <div className={Styles.imageLaptop}>
            <img src={'https://io.google/2022/app/images/program-laptop.svg'} alt="laptop" />
          </div>
        </div>

        <div className={Styles.bodyPrograms}>
          <div className={Styles.Filter}>
            <div className={Styles.topicFilter}>
              <Filters title={'Topics'} listFilter={listFilter} />
            </div>
            <div className={Styles.levelFilter}>
              <Filters title={'Levels'} listFilter={listFilter} />
            </div>
            <div className={Styles.typeFilter}>
              <Filters title={'Types'} listFilter={listFilter} />
            </div>
          </div>
          <div className={Styles.Programs}></div>
        </div>
      </div>
    </div>
  )
}

export default Products
