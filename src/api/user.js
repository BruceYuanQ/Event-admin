import request from '@/utils/request'

export const userRegisterService = async ({ username, password, repassword }) =>
  request.post('/api/reg', { username, password, repassword })

export const userLoginService = async ({ username, password }) =>
  request.post('api/login', { username, password })

//获取用户基本信息
export const userGetInfoService = () => {
  return request.get('/my/userinfo')
}
