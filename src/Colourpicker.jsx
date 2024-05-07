import React, {useState} from "react"


function Colourpicker(){
    const [colour, setColour] = useState("#FFFFFF")
    
    function handleColourChange(event){
        setColour(event.target.value)
    }

    return(<div className="colour-picker-container">
            <h1>Colour Picker</h1>
            <div className="colour-display" style={{backgroundColor:colour}}>
                    <p>Selected: Colour:{colour}</p>
            </div>
                <label>Select a Colour</label>
                <input type="color"  value={colour} onChange={handleColourChange}/>
            </div>
   )
}

export default Colourpicker