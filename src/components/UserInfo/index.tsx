import style from './index.module.scss'
import { Link } from 'react-router-dom'
import { LOGIN_PATH } from '../../router'
const UserInfo: React.FC = () => {
  return (
    <div className={style.container}>
      <Link to={LOGIN_PATH}>登录</Link>
    </div>
  )
}

export default UserInfo
