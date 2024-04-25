import styles from './index.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button, Result } from 'antd'
import { MANAGE_PATH } from '../../router'

const NotFount: React.FC = () => {
  const nav = useNavigate()
  return (
    <div className={styles.container}>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary" onClick={() => nav(MANAGE_PATH)}>
            返回首页
          </Button>
        }
      />
    </div>
  )
}

export default NotFount
