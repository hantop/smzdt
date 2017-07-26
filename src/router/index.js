import Vue from 'vue'
import Router from 'vue-router'
import IndexTpl from '../components/IndexTpl'
import detailTpl from '../components/detailTpl'
import PrizeTpl from '../components/PrizeTpl'
import RiskScoreTpl from '../components/RiskScoreTpl'
import Bad from '../components/Bad'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: '/smzdt/',
  routes: [
    {
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
  ]
})
