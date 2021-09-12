import React, {useState} from 'react'
import MockData from './MOCK_DATA.json'
const App = () => {
  const [state, setState] = useState('')
  return (
    <div>
      <h1>Search Bar</h1>
      <input type = "text" placeholder ="search" onChange = {(e) => setState(e.target.value)} />
      {MockData.filter((val) => {
        if( state === ''){
          return val
        }else if(val.first_name.toLowerCase().includes(state.toLowerCase())){
          return val;
        }
      })
      .map((val, key) => {
        return (
          <div key = {key}>
            {val.first_name}
          </div>
        )
      })}
    </div>
  )
}

export default App
