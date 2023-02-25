import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.min.css';

var Currency = () => {
    const { dispatch } = useContext(AppContext);
    const setCurrency = (val)=>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
}

return(
    <div className='alert alert-primary'>Currency{
<select className="custom-select" id="inputGroupSelect01" style={{ marginLeft: '2rem' , size: 20}} onChange={(event) => setCurrency(event.target.value)}>
                        <option value="$ Dollar" name="Dollar">$ Dollar</option>
                        <option value="£ Pound" name="Pound">£ Pound</option>
                        <option value="€ Euro" name="Euro">€ Euro</option>
                        <option value="₹ Ruppee" name="Ruppee">₹ Ruppee</option>
   </select>
    }
    </div>
)};
export default Currency;