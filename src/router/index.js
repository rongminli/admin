import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '../layout/index.vue'
import Home from '../views/home/index.vue'
/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [{
		path: '/',
		component: Layout,
		hidden: true,
		children: [{
				path: '/home',
				component: Home,
				meta: {
					title: '首页',
					roles: [],
					icon: 'el-icon-house'
				},
			},
			{
				path: '/system',
				name: 'system',
				component: () => import('@/views/system'),
				meta: {
					title: '系统',
					roles: ['admin'],
					icon: 'el-icon-monitor'
				},
				children: [{
					path: '/user',
					component: () => import('@/views/system/user'),
					meta: {
						title: '用户管理',
						roles: [],
						icon: 'el-icon-user'
					}
				}]
			},
			{
				path: '/note',
				component: Home,
				meta: {
					title: '笔记',
					roles: [],
					icon: 'el-icon-notebook-1'
				}
			},
			{
				path: '/comps',
				component: () => import('@/views/comps'),
				meta: {
					title: '组件',
					roles: [],
					icon: 'el-icon-cpu'
				},
				children: [{
					path: '/table-example',
					component: () => import('@/views/comps/table-example.vue'),
					meta: {
						title: '表格',
						roles: [],
						icon: 'el-icon-date'
					}
				}]
			},
			{
				path: '/tang',
				component: () => import('@/views/tang'),
				meta: {
					title: '糖',
					roles: [],
					icon: 'el-icon-lollipop'
				},
				children: [{
					path: '/regular-hexahedron',
					component: () => import('@/components/regular-hexahedron'),
					meta: {
						title: '立方体',
						roles: [],
						icon: 'el-icon-cherry'
					}
				}]
			},
			{
				path: '/comps',
				component: () => import('@/views/comps'),
				name: 'updateLog',
				meta: {
					title: '更新日志',
					roles: [],
					icon: 'el-icon-notebook-2'
				}
			},
			{
				path: '/profiles',
				component: () => import('@/views/profiles'),
				hidden: true
			},
		]
	},
	{
		path: '/login',
		component: () => import('@/views/account'),
		hidden: true
	},

	{
		path: '/404',
		component: Layout,
		hidden: true
	}
]

export const asyncRoutes = []

const createRouter = () => new Router({
	// mode: 'history', // require service support
	scrollBehavior: () => ({
		y: 0
	}),
	routes: constantRoutes
})

const router = createRouter()

export default router
