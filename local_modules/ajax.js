const ajax = (options, success, error) => {
  return new Promise((resolve, reject) => {
    if (options.data.account === 'admin' && options.data.password === '123456') {
      resolve({status: 0, msg: '登录已成功'})
    } else {
      reject({status: 1, msg: '登录失败'})
    }
  })
}

export default ajax
