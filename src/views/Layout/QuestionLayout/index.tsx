import styles from './index.module.scss'
import { Outlet } from 'react-router-dom'

const QuestionLayout: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        Question layout Header
        <div>
          <a>创建问卷</a>
          <a>我的问卷</a>
          <a>回收站</a>
        </div>
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  )
}

export default QuestionLayout
