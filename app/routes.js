import React from 'react' // 引入react
import { Route, IndexRoute, Redirect } from 'react-router'
import { App,Home, Find, Order, Mine, LostPage } from './containers'
export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="find" component={Find}/>
      <Route path="order" component={Order}/>
      <Route path="mine" component={Mine}/>
    </Route>
    <Route path="lost" component={LostPage}/>
    <Redirect from="/*" to="/lost" />
  </Route>
)
