import React from 'react'
import Styles from './Tag.module.scss'
const Tag = ({ tagName }: { tagName?: string }) => {
  return (
    <>
      {tagName && (
        <div className={Styles.tagContent}>
          <p>{tagName}</p>
        </div>
      )}
    </>
  )
}

export default Tag
