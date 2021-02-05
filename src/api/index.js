function importAll(r) {
	const result = {}
  r.keys().forEach(key => {
		let name = ''
		if (typeof r(key).name === 'undefined') {
			// 没导出name值则以文件名作为api接口的key值
			name = key.match(/\/.*\.js$/ig)[0]
			name = name.substr(1, name.length - 4)
		} else {
			name = r(key).name
		}
		result[name] = r(key)
  })
  return result
}

const apis = importAll(require.context('./modules', true, /.js$/))

const install = (Vue) => {
	Vue.prototype.$api = apis
}

export default {
	install,
	...apis
}
