import React,{createContext,useContext,useState} from 'react'

const ReelContext = React.createContext(null);

export const useReel=()=>{
    return useContext(ReelContext);
}

function ReelProvider({children}){
    const [reels,setReels] = useState([]);


    const value = {
        reels,setReels
    }

    return (
        <ReelContext.Provider  value={value}>
            {children}
        </ReelContext.Provider>
    )
}
export default ReelProvider;