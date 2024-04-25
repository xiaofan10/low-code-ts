import React from 'react'
import styles from './index.module.scss'
import Title from '../../components/editor/Title'
import EditorCanvas from './EditorCanvas'

const Editor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>header</div>
      <div className={styles['container-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>left</div>
          <div className={styles.main}>
            <div className={styles['canvas-wrapper']}>
              画布
              <EditorCanvas></EditorCanvas>
              <div style={{ height: '10000px' }}>sss</div>
            </div>
          </div>
          <div className={styles.right}>
            right
            <Title />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Editor
