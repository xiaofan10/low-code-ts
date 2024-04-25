import { FC } from 'react'
import styles from './EditorCanvas.module.scss'
import Input from '../../components/editor/Input'
import Title from '../../components/editor/Title'

const EditorCanvas: FC = () => {
  return (
    <div>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <Title></Title>
        </div>
      </div>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <Input />
        </div>
      </div>
    </div>
  )
}

export default EditorCanvas
