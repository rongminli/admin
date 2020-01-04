import Mock from 'mockjs';
import user from './user.js'
import testListData from './testListData.js'
// 配置拦截 ajax 的请求时的行为，支持的配置项目有 timeout。
 Mock.setup({
    timeout: '200 - 400'
})

const vCode = '123456';

function getVerificatCode (prarms) {
    const prarmsObj = JSON.parse(prarms.body);
    return Object.assign(prarmsObj, {vCode: vCode});
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/getVerificatCode', 'post', getVerificatCode); // 获取验证码
Mock.mock('/login', 'post', user.loginFun); //登录

Mock.mock('/teatListData/findByPage', 'post', testListData.findByPage()); 