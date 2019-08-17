import { render } from 'react-dom';

import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.
const routes = [
  {
    path: '/jenniferredmond',
    exact: true,
    sidebar: () => <div>Jennifer E. Redmond, D.C.!</div>,
    main: () => <h2>Jennifer E. Redmond, D.C.</h2>
  },
  {
    path: '/samsarachiro',
    sidebar: () => <div>samsarachiropractic!</div>,
    main: () => <h2>Samsara Chiropractic Wellness Center</h2>
  },
  {
    path: '/events',
    sidebar: () => <div>Event!</div>,
    main: () => <h2>Events</h2>
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>newsletter!</div>,
    main: () => <h2>Newsletter</h2>
  },
  {
    path: '/shoelaces',
    sidebar: () => <div>shoelaces!</div>,
    main: () => <h2>Shoelaces</h2>
  }
]

const SidebarExample = () => (
  <Router>
    <div style={{ display: 'flex' }}>
      <div style={{
        padding: '10px',
        width: '100%',
        background: '#f0f0f0'
      }}>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li><Link to="/jenniferredmond">Jennifer E. Redmond, D.C.</Link></li>
          <li><a href="https://www.google.com/maps/dir//7+E+High+St,+Somerville,+NJ+08876/@40.5699591,-74.613052,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c39549552d991f:0xd3fa01cc1f69dcf8!2m2!1d-74.610858!2d40.569955">Samsara Chiropractic Wellness Center</a></li>
          <li><p>7 E High St, Somerville, NJ 08876</p></li>
          <li><a href="malito:doctorredmond@gmail.com"> doctorredmond@gmail.com</a></li>
          <p> 908-300-8800</p>
          <p> 908-642-7634</p>
          <li><Link to="/events">Newsletter</Link></li>
          <li><Link to="/bubble">Events</Link></li>
          <li><Link to="/shoelaces">Shoelaces</Link></li>
          <li><Link to="/blah">blah</Link></li>
        </ul>

        {routes.map((route, index) => (
          // You can render a <Route> in as many places
          // as you want in your app. It will render along
          // with any other <Route>s that also match the URL.
          // So, a sidebar or breadcrumbs or anything else
          // that requires you to render multiple things
          // in multiple places at the same URL is nothing
          // more than multiple <Route>s.
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.sidebar}
          />
        ))}
      </div>
    </div>
  </Router>
)

export default SidebarExample

render(<SidebarExample />, document.getElementById('root'));
