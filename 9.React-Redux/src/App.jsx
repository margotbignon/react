import Chrono from "./pages/Chrono/Chrono"
import Counter from "./pages/Counter/Counter"
import Fruity from "./pages/Fruity/Fruity"
import Users from "./pages/Users/Users"

function App() {
  return (
    <div className="min-h-screen bg-slate-700 px-4">
      <div className="mx-auto max-w-3xl pt-10 pb-20">
      {/*<Counter />*/}
      {/*<Fruity />*/}
      {/*<Users />*/}
      <Chrono />
      </div>
    </div>
  )
}

export default App
