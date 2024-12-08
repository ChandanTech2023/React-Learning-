# Why React Router ?
- In SPA(single page application) Reactjs provides the react-Router-dom library, so that you can navigate from one view to another new page without hitting server.
```javascript
1.npm install react-router-dom //Installation of react-router
2.import {BrowserRouter, Routes, Route, Link, NavLink} //Import require component
```
## BrowserRouter:
It is a primary component containing the entire routing configuration.It is popular because it use HTML5 history API to keep track route History.All the route should be wrapped within a container element such as 'DIV'.