// import { useState } from "react";
// const UseInputFiels = (defaultValue)=>{
//     const [fieldValue , setFieldValue] = useState(defaultValue);
//     const handlFieldOnChange = (e)=>{
//         setFieldValue(e.target.value);
//     }
//     return [fieldValue,handlFieldOnChange];
// }
// export default UseInputFiels;

import { useState } from "react"


// const UseInputFiels = (defaultValue)=>{
//     const [fieldValue , setFieldValue] = useState(defaultValue);

//     const handleFieldOnChange = (e)=>{
//         setFieldValue(e.target.value);
//     }
//     return [fieldValue , handleFieldOnChange];
// }
// export default UseInputFiels;


// Revisio Custom hook buil me...

const UseInputFiels = (defaultValue)=>{
    const [filed , setFiled] = useState(defaultValue)
    

    const handleOnChange = (e)=>{
        setFiled(e.target.value);
    }

    return [filed , handleOnChange];
}

export default UseInputFiels;