import { FC } from 'react'
import { TitleProps } from './interface'
import { Typography } from 'antd'
const { Title: ATitle } = Typography

const Title: FC<TitleProps> = props => {
  const { text = '一行标题', level = 1, align = 'left' } = props
  const getFontSize = (level: number) => {
    switch (level) {
      case 1:
        return '24px'
      case 2:
        return '20px'
      case 3:
        return '16px'
      case 4:
        return '14px'
      case 5:
        return '12px'
      default:
        return '16px'
    }
  }
  return (
    <ATitle
      level={level}
      style={{ textAlign: align, marginBottom: 0, fontSize: getFontSize(level) }}
    >
      {text}
    </ATitle>
  )
}

export default Title
