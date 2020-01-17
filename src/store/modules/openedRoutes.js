import _ from 'lodash'
import router from '@/router/index.js'
const state = {
	routes: []
}

const mutations = {
	ADD_ROUTE: (state, route) => {
		if (_.indexOf(state.routes, route) == -1)
			state.routes.push(route)
	},
	REMOVE_ROUTE: (state, {
		path
	} = {}) => {
		//页面转到上一个标签
		const index = _.findIndex(state.routes, (o) => {
			return o.path == path
		})
		const currentPath = router.history.current.path
		if (path == currentPath) {
			if (index == 0) router.push('/');
			else router.push(state.routes[index - 1].path);
		}
		//删除当前标签
		_.remove(state.routes, (n) => {
			return n.path == path
		})
		state.routes.push()
	}
}

export default {
	namespaced: true,
	state,
	mutations,
}
