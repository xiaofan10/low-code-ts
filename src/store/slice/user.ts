import { PayloadAction, createSlice } from '@reduxjs/toolkit'

type UserStateType = {
  username: string
  password: string
}

const initialState: UserStateType = {
  username: '',
  password: '',
}

// createSlice 创建reducer切片
// 需要一个配置项作为参数,切片对象会自动生成action
const stuSlice = createSlice({
  name: 'User', // 自动生成action type属性的
  initialState: initialState, // 当前切片state初始值
  reducers: {
    login(state: UserStateType, action: PayloadAction<UserStateType>) {
      return action.payload
    },
    loginOut() {
      return initialState
    },
  },
})

// 使用 stuSlice 切片，调用setName，会返回一个action
export const { login, loginOut } = stuSlice.actions

export const { reducer: userReducer } = stuSlice
