import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

let Budget = () => {
    const { budget,dispatch } = useContext(AppContext);
    const setBudget = (val)=>{
        dispatch({
            type: 'SET_BUDGET',
            payload: val,
        })
}


    
    return (
        
        <div className='alert alert-secondary'> Budget{
            <input 
                    name="Budget" 
                    type='number'
                    id="Budget"
                    value={budget}
                    //max='20000'
                    step='10' 
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={event=>setBudget(event.target.value)}>

            </input>
        }
        
           
        </div>
        
    );
};
export default Budget;
