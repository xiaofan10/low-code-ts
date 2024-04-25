import { FC } from 'react'
import { InputProps } from './interface'
import { Input as AInput, Typography } from 'antd'

const { Paragraph } = Typography

const Input: FC<InputProps> = props => {
  const { value = '输入框标题', placeholder = '请输入' } = props
  return (
    <div>
      <Paragraph>{value}</Paragraph>
      <AInput placeholder={placeholder} />
    </div>
  )
}

export default Input
