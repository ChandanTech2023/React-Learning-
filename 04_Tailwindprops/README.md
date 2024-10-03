## Q: What is props in React? 
#### props stands for properties. Props are arguments passed into React components. props are used in React to pass data from one component to another (from a parent component to a child component(s)). They are useful when you want the flow of data in your app to be dynamic.

```javascript
function App() {
  return (
    <div className="App">
      <Tool name="Chandan" tool="Figma"/> // name and tool are props
    </div>
  )
}

```




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
  
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
