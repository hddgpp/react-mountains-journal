import { Header } from "../component/header.jsx";
import { Entry } from "../component/entry.jsx";
import { Footer } from "../component/footer.jsx";
import { data } from "../data/data.js"

export function App() {
  const dataElements = data.map((x) => {
    return <Entry
      key={x.id}
      x={x}
     />
  })
  return(
    <>
      <Header/>

     <main>
      {dataElements}
     </main>
     
      <Footer/>
      </>
    )
  }