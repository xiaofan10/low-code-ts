import style from './list.module.scss'
import { useState } from 'react'
import { Typography } from 'antd'

import QuestionCard from '../../components/QuestionCard'

const { Title } = Typography
const mockList = [
  {
    _id: 'sdfsdf111',
    title: '问卷标题1',
    isStar: true,
    isPublished: true,
    answerCount: 10,
    createdAt: '2021-10-10',
  },
]
const List: React.FC = () => {
  const [list] = useState(mockList)
  return (
    <>
      <div className={style.header}>
        <div className={style.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={style.right}>搜索</div>
      </div>
      <div className={style.content}>
        {list.map(item => (
          <div className={style.item} key={item._id}>
            <QuestionCard {...item} />
          </div>
        ))}
      </div>
    </>
  )
}

export default List
