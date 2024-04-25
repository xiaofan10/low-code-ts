import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import style from './index.module.scss'

const { Title } = Typography

const Logo: React.FC = () => {
  return (
    <div className={style.container}>
      <Link to="/">
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>Low Code</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
