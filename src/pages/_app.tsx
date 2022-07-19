//  ----
//  Libraries
import { h } from 'tsx-dom'
//  Components
//  import ...
//  style:
import '../style.scss'
//  ----



//  ----
//  component:
export const App = () => {
    return <main>
        <h1>Hello World.</h1>
    </main>
}

let __app = document.getElementById('__app')
__app?.appendChild(App())




//  let data = await fetch('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json')
//      .then(res => res.json())
//      .then(json => console.log(json))
//  
//  async function Test() {
//      console.log(data)
//      return null
//  }
//  
//  Test()