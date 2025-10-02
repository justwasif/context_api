import React from "react";
import Usercontext from "./Usercontext";
import { useState } from "react";

const Usercontextpro=({children})=>{
    const [user,setuser]=React.useState(null)

    return(
        <Usercontext.Provider value={{user,setuser}}>
            {children}
        </Usercontext.Provider>
    )
}

export default Usercontextpro