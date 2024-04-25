import Request, { ResDataType } from './request'

const { instance: request } = new Request()

async function getQuestionService(id: string): Promise<ResDataType> {
  const res: ResDataType = await request({
    url: `api/questions/${id}`,
    method: 'GET',
  })
  return res
}

export { getQuestionService }
