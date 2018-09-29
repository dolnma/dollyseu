import React, { Component } from 'react'
import Link from 'gatsby-link'

class MainMenu extends Component {
render() {
// const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node.items

return (
<div>
  <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu"></input>
  <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
    <div className="spinner diagonal part-1"></div>
    <div className="spinner horizontal"></div>
    <div className="spinner diagonal part-2"></div>
  </label>
  <div className="navbar">
    <ul>
      <li>
        <Link to="posts">Blog</Link>
      </li>
      <li>
        <Link to="projects">Projects</Link>
      </li>
      <li>
        <a href="https://drive.google.com/open?id=1Nxpf1eybbpP251mugnUZFyYgHQG7FzPR">Resume</a>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
      {/* {data.map(item => (
      <li key={item.object_slug}>
        <Link to={item.object_slug}>{item.title}</Link>
      </li>
      ))} */}
    </ul>
  </div>
  <div id="sidebarMenu">
    <ul className="sidebarMenuInner">
    <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="posts">Blog</Link>
      </li>
      <li>
        <Link to="projects">Projects</Link>
      </li>
      <li>
      <a href="https://drive.google.com/open?id=1Nxpf1eybbpP251mugnUZFyYgHQG7FzPR">Resume</a>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
      {/* {data.map(item => (
      <li key={item.object_slug}>
        <Link to={item.object_slug}>{item.title}</Link>
      </li>
      ))} */}
    </ul>
  </div>
</div>
)
}
}

export default MainMenu