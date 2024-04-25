import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'

const Editor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>header</div>
      <div className={styles['container-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>left</div>
          <div className={styles.main}>
            <div className={styles['canvas-wrapper']}>
              <Outlet />
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  )
}

export default Editor
