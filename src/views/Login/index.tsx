import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useRequest } from 'ahooks'
import type { FormProps } from 'antd'
import { Typography, Button, Checkbox, Form, Input, Space, message } from 'antd'
import { UserAddOutlined } from '@ant-design/icons'
import { REGISTER_PATH, MANAGE_PATH } from '../../router'
import { loginService } from '../../api/user'
import { setToken } from '../../utils/utils'
import styles from './index.module.scss'

const { Title } = Typography

type FieldType = {
  username: string
  password: string
  remember?: string
}

const USERNAME_KEY = 'USERNAME'
const PASSWORD_KEY = 'PASSWORD'

const rememberMe = (username: string, password: string) => {
  localStorage.setItem(USERNAME_KEY, username)
  localStorage.setItem(PASSWORD_KEY, password)
}

const unRememberMe = () => {
  localStorage.removeItem(USERNAME_KEY)
  localStorage.removeItem(PASSWORD_KEY)
}

const getRememberMe = () => {
  const username = localStorage.getItem(USERNAME_KEY)
  const password = localStorage.getItem(PASSWORD_KEY)

  return { username, password }
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
  console.log('Failed:', errorInfo)
}

const Login: React.FC = () => {
  const nav = useNavigate()
  const [form] = Form.useForm()
  const { run } = useRequest(
    async values => {
      const { username, password } = values
      return await loginService({ username, password })
    },
    {
      manual: true,
      onSuccess: data => {
        console.log(data)
        const { token } = data
        setToken(token)
        message.success('登录成功')
        nav(MANAGE_PATH)
      },
    }
  )

  const onFinish: FormProps<FieldType>['onFinish'] = values => {
    const { username, password, remember } = values
    if (remember) {
      console.log('Remember me')
      rememberMe(username, password)
    } else {
      console.log('Not remember me')
      unRememberMe()
    }
    run({ username, password })
  }

  useEffect(() => {
    const { username, password } = getRememberMe()
    form.setFieldsValue({ username, password })
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles['Login-wrapper']}>
        <Space>
          <Title level={2}>
            <UserAddOutlined />
          </Title>
          <Title level={2}>用户登录</Title>
        </Space>
        <Form
          name="login"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          form={form}
        >
          <Form.Item<FieldType>
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password autoComplete="on" />
          </Form.Item>
          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <div>
              <Checkbox /> 记住我
            </div>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
              <Link to={REGISTER_PATH}>注册新用户</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
