/**
 * Created by Administrator on 2017/12/13.
 */
import axios from 'axios';
// 服务地址
export const SERVICE = 'http://localhost:3000';
export const API_PATH = '/blog'
export const API_FULL = SERVICE;

/**
 * get公共调用方法
 * @param {any} url
 * @param {any} param
 * @param {any} sucess
 * @param {any} fail
 */
function apiGet(url, params, sucess, fail) {
  if(params) params._ = Date.parse(new Date());  //设置请求不缓存
  axios
    .get(url, {
      params: params
    })
    .then(res => {
      validResponed(res);
      let data = res.data;
      sucess(data);
    })
    .catch(error => {
      fail(error);
    });
}
/**
 * post公共调用方法
 * @param {any} url
 * @param {any} param
 * @param {any} sucess
 * @param {any} fail
 */
function apiPost(url, param = {}, success, fail) {
  // 判断参数类型
  console.log('xxx');
  axios
    .post(url, param)
    .then(res => {
    console.log(res);
      let data = res.data;
      success(data);
    })
  //   .catch(function (error) {
  //     let res = error.response;
  //     if (typeof res !== 'undefined') {
  //       // if (res.status === 400) {     Message.error({         message: '用户尚未注册'
  //       // }); } return Promise.reject(res.statusText);
  //       // if (res.status !== 200) {
  //       //     Message.error({message: res.data.msg});
  //       // }
  //     }
  //     console.log("出错了")
  // });
}

export default{
   //登录接口
   LoginBlog(param,sucess, fail){
     console.log(param)
     console.log("zhi:"+API_FULL+'/login')
     apiPost(API_FULL+'/login', param, sucess, fail)
  },
}
