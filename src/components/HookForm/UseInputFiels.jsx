// import { useState } from "react";

import { useState } from "react";

// const UseInputFiels = (defaultValue)=>{
//     const [fieldValue , setFieldValue] = useState(defaultValue);
//     const handlFieldOnChange = (e)=>{
//         setFieldValue(e.target.value);
//     }
//     return [fieldValue,handlFieldOnChange];
// }
// export default UseInputFiels;


const UseInputFiels = (defaultValue)=>{
    const [fieldValue , setFieldValue] = useState(defaultValue);

    const handleFieldOnChange = (e)=>{
        setFieldValue(e.target.value);
    }
    return [fieldValue , handleFieldOnChange];
}
export default UseInputFiels;