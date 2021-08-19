import React, { useState } from 'react';

export const BountyContext = React.createContext(); 

function CreateBounty(props){
    
    
    const [bountyInfo, setBountyInfo] = useState('');

    return (

        <BountyContext.Provider value={{bountyInfo, setBountyInfo}}> 
            {props.children}
        </BountyContext.Provider>    
    )
}
export default CreateBounty; 