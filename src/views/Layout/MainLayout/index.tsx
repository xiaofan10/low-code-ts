import { Outlet } from 'react-router-dom'
import styles from './index.module.scss'
import { Layout } from 'antd'
import Logo from '../../../components/Logo'
import UserInfo from '../../../components/UserInfo'

const { Header, Content, Footer } = Layout

const MainLayout: React.FC = () => {
  return (
    <Layout className={styles.container}>
      <Header className={styles.header}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.menu}>
          <UserInfo />
        </div>
      </Header>
      <Layout className={styles.content}>
        <Content className={styles.content}>
          <Outlet />
        </Content>
      </Layout>
      <Footer className={styles.footer}>Main Layout Footer</Footer>
    </Layout>
  )
}

export default MainLayout
