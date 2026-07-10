import {createContext,useContext,useState } from 'react';

const ActivityContext = createContext();

export const ActivityProvider =({children})=>{
    const[selectedActivity,setSelectedActivity]=useState(null);

    const openActivity=(activity)=>{
        setSelectedActivity(activity);
    }

    const closeActivity=()=>{
        setSelectedActivity(null);

    }
    return(
        <ActivityContext.Provider 
        value={{
            selectedActivity,
            openActivity,
            closeActivity,
        }}
        >{children}
        </ActivityContext.Provider>
    )
}

export const useActivity=()=>useContext(ActivityContext);