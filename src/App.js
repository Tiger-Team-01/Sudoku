import './App.css'
import { Input } from '@material-ui/core';

import Sudokuboxes from './Sudokuboxes'

function App() {
  var sudokuarray =  [8, 2, 7, 1, 5, 4, 3, 9, 6,
                      9, 6, 5, 3, 2, 7, 1, 4, 8,
                      3, 4, 1, 6, 8, 9, 7, 5, 2,
                      5, 9, 3, 4, 6, 8, 2, 7, 1,
                      4, 7, 2, 5, 1, 3, 6, 8, 9,
                      6, 1, 8, 9, 7, 2, 4, 3, 5,
                      7, 8, 6, 2, 3, 5, 9, 1, 4,
                      1, 5, 4, 7, 9, 6, 8, 2, 3,
                      2, 3, 9, 8, 4, 1, 5, 6, 7]

  var gayabArray = [0, 0, 7, 0, 0, 4, 0, 9, 0,
                    9, 6, 0, 3, 2, 0, 1, 4, 8,
                    0, 0, 1, 6, 0, 9, 0, 0, 2,
                    5, 9, 3, 4, 0, 8, 0, 0, 1,
                    0, 0, 2, 5, 1, 3, 6, 0, 9,
                    6, 1, 0, 9, 0, 2, 0, 0, 5,
                    7, 0, 6, 2, 0, 5, 9, 0, 0,
                    0, 0, 4, 0, 9, 0, 8, 2, 3,
                    2, 3, 9, 0, 4, 1, 5, 0, 7]

    return (
      <>
      <h1>Sodoku</h1>
    <div className="App">
      
      {
        sudokuarray.map((val, index) =>

          (val === gayabArray[index]) ?
            <Sudokuboxes key={index} index={index} sudokuarray={sudokuarray}/> :
            <Input  type="number" key={index} className="inputsselect2" defaultValue={val} ></Input>
        )}

        <div className="box">
        </div>

    </div>
    </>
  )

}
export default App;