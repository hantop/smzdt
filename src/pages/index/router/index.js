import Vue from 'vue'
import Router from 'vue-router'
import IndexTpl from '@/templates/IndexTpl'
import detailTpl from '@/templates/detailTpl'
import PrizeTpl from '@/templates/PrizeTpl'
import RiskScoreTpl from '@/templates/RiskScoreTpl'
import Bad from '@/components/Bad'
import Xiaozhong from '@/components/Xiaozhong'
import Tuhao from '@/components/Tuhao'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: '/smzdt/',
  routes: [{
    path: '/',
    name: 'index',
    component: IndexTpl
  },
  {
    path: '/detail/:pid',
    name: 'detail',
    component: detailTpl
  },
  {
    path: '/xiaozhong',
    name: 'xiaozhong',
    component: Xiaozhong
  },
  {
    path: '/tuhao',
    name: 'tuhao',
    component: Tuhao
  },
  {
    path: '/prize/:uid',
    name: 'prize',
    component: PrizeTpl
  },
  {
    path: '/riskScore/:pid',
    name: 'riskScore',
    component: RiskScoreTpl
  },
  {
    path: '*',
    name: 'Bad',
    component: Bad
  }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})
