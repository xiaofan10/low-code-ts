import { FC } from 'react'
import style from './index.module.scss'
import { Button, Space, Divider, Tag } from 'antd'
import {
  EditOutlined,
  LineChartOutlined,
  StarOutlined,
  CopyOutlined,
  DeleteOutlined,
} from '@ant-design/icons'

import { useNavigate, Link } from 'react-router-dom'

interface IQuestionCardProps {
  _id: string
  title: string
  isStar: boolean
  isPublished: boolean
  answerCount: number
  createdAt: string
}

const QuestionCard: FC<IQuestionCardProps> = props => {
  const { _id, title, isStar, isPublished, answerCount, createdAt } = props
  const nav = useNavigate()

  return (
    <div className={style.container}>
      <div className={style.title}>
        <div className={style.left}>
          <Link to={'/question/' + _id}>
            <Space>
              {isStar ? <StarOutlined /> : ''}
              {title}
            </Space>
          </Link>
        </div>
        <div className={style.right}>
          <Space>
            {isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>}
            <span>答卷：{answerCount}</span>
            <span>{createdAt}</span>
          </Space>
        </div>
      </div>
      <div className={style['action-btn']}>
        <div className={style.left}>
          <Space>
            <Button
              type="text"
              size="small"
              icon={<EditOutlined />}
              onClick={() => nav('/edit/' + _id)}
            >
              编辑问卷
            </Button>
            <Button
              type="text"
              size="small"
              icon={<LineChartOutlined />}
              onClick={() => nav('/chart/' + _id)}
              disabled={!isPublished}
            >
              统计问卷
            </Button>
          </Space>
        </div>
        <Divider />
        <div className={style.right}>
          <Space>
            <Button type="primary" size="small" icon={<StarOutlined />}>
              {isStar ? '取消标星' : '标星'}
            </Button>
            <Button type="primary" size="small" icon={<CopyOutlined />}>
              复制
            </Button>
            <Button type="primary" size="small" icon={<DeleteOutlined />}>
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
