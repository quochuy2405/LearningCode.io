import * as React from 'react'
import { Header, Metadata } from '@/components'
import IconComputer from '@/public/userCom.svg'
import Image from 'next/image'
import PlanStack from '@/public/PlanStack.svg'
import type { NextPage } from '@/types/next'
import Styles from '@/pages/index.module.scss'

const overViewItems = [
  {
    imagePlan: PlanStack,
    titlePlan: 'Packages that are aprodable',
    descriptionPlan: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat alias nesciunt pariatur a dignissimos vero.'
  },
  {
    imagePlan: PlanStack,
    titlePlan: 'Packages that are aprodable',
    descriptionPlan: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat alias nesciunt pariatur a dignissimos vero.'
  },
  {
    imagePlan: PlanStack,
    titlePlan: 'Packages that are aprodable',
    descriptionPlan: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quaerat alias nesciunt pariatur a dignissimos vero.'
  }
]

const Home: NextPage = () => {
  return (
    <div>
      <Metadata title="Trang chủ - Learning Code" description="Trang chủ của LearningCode.io" />

      <Header />

      <div className={Styles.intro}>
        <div className={Styles.getStated}>
          <div className={Styles.introText}>
            <div className={Styles.introMS}>
              <p>Get it</p>
            </div>
            <div className={Styles.introContent}>
              <p>Welcome to LearningCode.io</p>
            </div>
            <div className={Styles.btnGetStarted}>
              <p>Get started</p>
            </div>
          </div>
          <div className={Styles.iconUseComputer} data-aos="zoom-out-left">
            <Image src={IconComputer} alt="IconComputer" />
          </div>
        </div>
      </div>
      <div className={Styles.overView}>
        <div className={Styles.PlanContent}>
          <p className={Styles.textSmall}>Practive Advice</p>
          <p className={Styles.textTitle}>Packages that are aprodable</p>
          <p className={Styles.textDescription}>
            Problem trying to resolve the confilct Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque dolorem velit praesentium cum
          </p>
        </div>

        <div className={Styles.listPlan}>
          {overViewItems.map(({ titlePlan, descriptionPlan, imagePlan }) => (
            <div key={titlePlan} className={Styles.Plan}>
              <div className={Styles.imgPlan}>
                <Image src={imagePlan} alt="PlanStack" />
              </div>
              <div className={Styles.titlePlan}>{titlePlan}</div>
              <div className={Styles.descriptionPlan}>{descriptionPlan}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
