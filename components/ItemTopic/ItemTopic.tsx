/* eslint-disable @next/next/no-img-element */

import { Tag } from '@/components'
import Styles from './ItemTopic.module.scss'

const ItemTopic = (): JSX.Element => {
  return (
    <div className={Styles.itemTopic}>
      <div className={Styles.Thumbnail}>
        <img src="https://images.pexels.com/photos/7718863/pexels-photo-7718863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="asa" />
      </div>
      <div className={Styles.itemContent}>
        <p className={Styles.Title}>Learning Tips and Tricks HTML, CSS</p>
        <p className={Styles.Description}>
          {`Tune in to find out how we're furthering our mission to organize the world's information and make it universally accessible and useful.`}
        </p>
        <div className={Styles.typeTopic}>
          {Array(3)
            .fill('')
            .map((index) => (
              <Tag tagName={'ReactJS'} key={index} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ItemTopic
