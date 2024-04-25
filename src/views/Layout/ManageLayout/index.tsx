import styles from './index.module.scss'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Button, Divider, Space } from 'antd'
import { PlusOutlined, BarsOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons'

const ManageLayout: React.FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        Manage layout Header
        <Space direction="vertical">
          <Button type="primary" icon={<PlusOutlined />} onClick={() => nav('/manage/create')}>
            创建问卷
          </Button>
          <Divider />
          <Button
            type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
            icon={<BarsOutlined />}
            onClick={() => nav('/manage/list')}
          >
            我的问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
            icon={<StarOutlined />}
            onClick={() => nav('/manage/star')}
          >
            星标问卷
          </Button>
          <Button
            type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
            icon={<DeleteOutlined />}
            onClick={() => nav('/manage/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.main}>
        <Outlet />
      </div>
    </div>
  )
}

export default ManageLayout
