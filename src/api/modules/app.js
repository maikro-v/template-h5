import request from '@/utils/axios.request'

// 测试示例
export function test(data) {
  return request({
    url: '/test',
    method: 'get',
    data
  })
}
