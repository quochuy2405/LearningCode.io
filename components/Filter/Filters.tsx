import type { FilterItem } from '@/types/inferface'
import Styles from './Filters.module.scss'

const Filters = ({ title, listFilter }: { title: string; listFilter: Array<FilterItem> }): JSX.Element => {
  return (
    <div className={Styles.Filters}>
      <p className={Styles.filterTitle}>{title}</p>

      <div className={Styles.listFilter}>
        {listFilter?.map((item) => (
          <div className={Styles.filterItem} key={item.title}>
            <label className={Styles.checkBoxMark}>
              <input type="checkbox" checked={item?.check} />
              <span className={Styles.checkMark}></span>
            </label>

            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filters
