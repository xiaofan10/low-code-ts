import styles from './index.module.scss'
import { Button, Typography } from 'antd'

const { Title, Paragraph } = Typography

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <Title level={2}>调查问卷</Title>
        <Paragraph>请您填写以下问卷，以便我们更好的为您服务。</Paragraph>
        <div>
          <Button type="primary">开始填写</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
