const users = [
	{
		email: '1055310405@qq.com',
		password: '000000'
	}
]
function loginFun (prarms) {
    const prarmsObj = JSON.parse(prarms.body);
	const valid = users.some((user)=>{
		return user.email == prarmsObj.email && user.password == prarmsObj.password
	})
    if (valid) {
        return {code:2000, msg:'登录成功',token:'000000'}
    } else {
        return {code:2001, text:'用户名或密码错误'}  
    }
}

export default {
	loginFun
}