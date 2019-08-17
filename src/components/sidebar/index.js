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
    path: '/newsletter',
    sidebar: () => <div>newsletter!</div>,
    main: () => <h2>Newsletter</h2>
  },
  {
    path: '/events',
    sidebar: () => <div>Event!</div>,
    main: () => <h2>Events</h2>
  },
  {
    path: '/newpatients',
    sidebar: () => <div>newpatients!</div>,
    main: () => <h2>New Patients</h2>
  },
  {
    path: '/neuro',
    sidebar: () => <div>Neuro Emotional Technique!</div>,
    main: () => <h2>Neuro Emotional Technique</h2>
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
        <ul className="demopara">
          <li><Link to="/jenniferredmond">Jennifer E. Redmond, D.C.</Link></li>
          <li><Link to="/newsletter">Newsletter</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><a href="http://welcometowellness.blogspot.com/" target="_blank">Dr. Redmond's Blog</a></li>
          <li><Link to="/newpatient">New Patients</Link></li>
          <li><Link to="/neuro">The Neuro Emotional Technique</Link></li>
          <li><a href="malito:doctorredmond@gmail.com"> doctorredmond@gmail.com</a></li>
          <li ><a href="tel:908-300-8800"> 908-300-8800</a> | <a href="tel: 908-642-7634"> 908-642-7634</a></li>
          <li><a href="https://www.google.com/maps/dir//7+E+High+St,+Somerville,+NJ+08876/@40.5699591,-74.613052,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c39549552d991f:0xd3fa01cc1f69dcf8!2m2!1d-74.610858!2d40.569955" target="_blank">Samsara Chiropractic Wellness Center</a></li>
          <p>7 E High St, Somerville, NJ 08876</p>
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
