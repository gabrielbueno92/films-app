import MyRoutes from "./routers/MyRoutes"
import classes from "./styles/App.module.css"

function App() {
  return (
    <div>
      <header>
        <h1 className={classes.Title}>🎬The films App</h1>
      </header>
      <MyRoutes></MyRoutes>
    </div>
    
  )
}

export default App;
