import Request, { ResDataType } from './request'

const { instance: request } = new Request()

async function getUserInfoService(): Promise<ResDataType> {
  const res: ResDataType = await request({
    url: 'api/user/info',
    method: 'GET',
  })
  return res
}

type RegisterParams = {
  username: string
  password: string
  nickname?: string
  email?: string
}

async function registerService({
  username,
  password,
  nickname,
  email,
}: RegisterParams): Promise<ResDataType> {
  const data = {
    username,
    password,
    nickname: nickname || username,
    email: email || '',
  }
  const res: ResDataType = await request({
    url: 'api/user/register',
    method: 'POST',
    data,
  })
  return res
}

type LoginParams = {
  username: string
  password: string
}

async function loginService({ username, password }: LoginParams): Promise<ResDataType> {
  const data = {
    username,
    password,
  }
  const res: ResDataType = await request({
    url: 'api/user/login',
    method: 'POST',
    data,
  })
  return res
}

export { getUserInfoService, registerService, loginService }
