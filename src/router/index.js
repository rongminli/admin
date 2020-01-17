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
export const constantRoutes = [
	{
		path: '/',
		component: Layout,
		hidden: true,
		meta: {
			title: '首页',
			roles: [],
			icon: 'el-icon-house'
		},
		children: [{
				path: '',
				component: Home,
				meta: {
					title: '首页',
					roles: [],
					icon: 'el-icon-house'
				},
			},
			{
				path: '/profiles',
				component: () => import('@/views/profiles'),
				hidden: true
			}
		]
	},
	{
		path: '/system',
		component: Layout,
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
				icon: 'el-icon-user',
				// keepAliveDisable: true
			}
		}]
	},
	{
		path: '/note',
		component: Layout,
		meta: {
			title: '笔记',
			roles: [],
			icon: 'el-icon-notebook-1'
		}
	},
	{
		path: '/comps',
		component: Layout,
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
		},
		]
	},
	{
		path: '/tang',
		component: Layout,
		meta: {
			title: '糖',
			roles: [],
			icon: 'el-icon-lollipop'
		},
		children: [{
			path: '/regular-hexahedron',
			component: () => import('@/components/cube'),
			meta: {
				title: '立方体',
				roles: [],
				icon: 'el-icon-cherry'
			}
		},
		{
			path: '/glass-bg',
			component: () => import('@/views/comps/glass-bg'),
			meta: {
				title: '毛玻璃效果',
				roles: [],
				icon: 'el-icon-apple'
			}
		}]
	},
	{
		path: '/updateLog',
		component: Layout,
		name: 'updateLog',
		meta: {
			title: '更新日志',
			roles: [],
			icon: 'el-icon-notebook-2'
		},
		children: [{
			path: '/client',
			component: () => import('@/views/update-log'),
			meta: {
				title: '前端',
				roles: [],
				icon: 'el-icon-document'
			},
		}]
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
