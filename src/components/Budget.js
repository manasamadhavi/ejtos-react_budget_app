import React, { useContext, useState } from 'react';
//import { AppContext } from '../context/AppContext';

let Budget = () => {
    //let { budget } = useContext(AppContext);
    const [budget, setBudget] = useState(2000);
    return (
        <div className='alert alert-secondary'>
           <input
                        required='required'
                        type='number'
                        id='budget'
                        value={budget}
                        max='20000'
                        step='10'
                        style={{ marginLeft: '2rem' , size: 10}}
                        onChange={(event) => setBudget(event.target.value)}>
            </input> 
        </div>
        
    );
};
export default Budget;
