import HttpRequest from '@/utils/axios'

export default (config) => {
  const { url, method, data, headers, baseURL } = config
  const options = {
    url,
    method,
    headers
  }
  if (baseURL) {
    options.baseURL = baseURL
  }
  if (method) {
    switch (method.toLowerCase()) {
      case 'get' || 'delete':
        options.params = data
        break
      case 'post' || 'put':
        options.data = data
        break
    }
  }
  return HttpRequest.request(options)
}
