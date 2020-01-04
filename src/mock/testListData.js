const list = []

function findByPage(prarms) {
	for (let i = 0; i < 100; i++) {
		list.push({
			username: i,
			age: i,
			createTime: new Date()
		})
	}
	return {
		pageEntities: list,
		code: 2000,
		pageInfo: {
			total: list.length,
			pageSize: 5
		}
	}
}

export default {
	findByPage
}
