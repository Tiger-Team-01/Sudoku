import { Input } from '@material-ui/core';
import { useState } from 'react';
export default function Sudokuboxes({ index, sudokuarray }) {

    const maxLengthCheck = (object) => {

        if (object.nativeEvent.data) {
            if ((parseInt(object.nativeEvent.data) === 0)) {
                object.target.value = ""
            };
            if (object.target.value.length > object.nativeEvent.data.length) {
                object.target.value = object.target.value.slice(0, object.nativeEvent.data.length)
            }
        }
    }
    const [state, setstate] = useState("inputsselect1");
    return (

        <Input type="number" className={state} onInput={maxLengthCheck} onChange={(e) => {
            if (parseInt(e.target.value) === sudokuarray[index]) {

                setstate("inputsselect1 bc");
                
            }
            else if(e.target.value===""){
                setstate("inputsselect1")
            }
            else {
                setstate("inputsselect1 cc");
               
            }

        }}></Input>

    )
}

