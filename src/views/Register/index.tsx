import styles from './index.module.scss'
import { Typography, Button, Form, Input, Space, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import { UserAddOutlined } from '@ant-design/icons'
import type { FormProps } from 'antd'
import { LOGIN_PATH } from '../../router'
import { Rule } from 'antd/lib/form'
import { registerService } from '../../api/user'
import { useRequest } from 'ahooks'

const { Title } = Typography
// const { Option } = Select

type FieldType = {
  username?: string
  password?: string
  nickname?: string
  confirmPassword?: string
  email?: string
  // phone?: string
  // prefix?: string
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
  console.log('Failed:', errorInfo)
}

const confirmPasswordValidator: Rule = ({ getFieldValue }) => ({
  validator(_, value) {
    if (!value || value === getFieldValue('password')) {
      return Promise.resolve()
    }
    return Promise.reject('两次输入密码不一致!')
  },
})

const Register: React.FC = () => {
  const nav = useNavigate()
  const { run } = useRequest(
    async values => {
      const { username, password, nickname, email } = values
      await registerService({ username, password, email, nickname })
    },
    {
      manual: true,
      onSuccess: () => {
        message.success('注册成功，请登录')
        nav(LOGIN_PATH)
      },
    }
  )

  const onFinish: FormProps<FieldType>['onFinish'] = values => {
    console.log('Success:', values)
    run(values)
  }

  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select style={{ width: 70 }}>
  //       <Option value="86">+86</Option>
  //       <Option value="87">+87</Option>
  //     </Select>
  //   </Form.Item>
  // )

  return (
    <div className={styles.container}>
      <div className={styles['register-wrapper']}>
        <Title level={2}>
          Welcome to Low Code TS
          <UserAddOutlined />
        </Title>
        <Title level={4}>注册新用户</Title>
        <Form
          name="register"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入用户名!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType> label="用户昵称" name="nickname">
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            label="确认密码"
            name="confirmPassword"
            dependencies={['password']}
            rules={[{ required: true, message: '请输入密码!' }, confirmPasswordValidator]}
          >
            <Input.Password />
          </Form.Item>

          {/* 
          <Form.Item<FieldType>
            label="邮箱"
            name="email"
            rules={[{ type: 'email', message: '请输入正确的邮箱地址!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="phone"
            label="电话号码"
            rules={[{ required: true, message: '请输入您的手机号码!' }]}
          >
            <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
          </Form.Item> */}

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Space>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
              <Link to={LOGIN_PATH}>已有账号，登录</Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Register
