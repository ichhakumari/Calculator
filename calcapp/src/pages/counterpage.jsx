import { Message } from '../components/message'
import { Button } from '../components/button'
import { useState } from 'react';
export const Counter =()=>{
    //Hook (State)
    const [count,setCount]= useState('');
    //let count=0;
    const updateCount=(val)=>{
        
        
        if(val==='=' && val !=='')
        {
            var result=eval(count);
            setCount(result+'')
        }
        else if(val==='Ac') setCount('');
        else
        {
            setCount(count+val)
        }

        console.log("Count is ",count);
    }
    return(<div className='container'>
        <Message classname="alert alert-success" msg="CALCULATOR" />
        <Message value={count} classname="alert alert-danger" msg = "Value is "  />
        <center>
        <div >
        <Button val="0" classname="col-1 btn btn-success me-2" fn={updateCount} />
        <Button val="1" classname="col-1 btn btn-success me-2" fn={updateCount} />
        <Button val="2" classname="col-1 btn btn-success me-2" fn={updateCount} />
        <Button val="3" classname="col-1 btn btn-success me-2" fn={updateCount} />
        </div>
        <hr></hr>
        <div>
        <Button val="4" classname="col-1 btn btn-success me-2" fn={updateCount} />
        <Button val="5" classname="col-1 btn btn-success me-2" fn={updateCount} />
        <Button val="6" classname="col-1 btn btn-success me-2" fn={updateCount} />
        <Button val="7" classname="col-1 btn btn-success me-2" fn={updateCount} />
        </div>
        <hr></hr>
        <div>
        <Button val="8" classname="col-1 btn btn-success me-2" fn={updateCount} />
        <Button val="9" classname="col-1 btn btn-success me-2" fn={updateCount} />
        <Button val="Ac" classname="col-1 btn btn-success me-2" fn={updateCount} />
        <Button val="+" classname="col-1 btn btn-success me-2" fn={updateCount} />
        </div>
        <hr></hr>
        <div>
        <Button val="-" classname="col-1 btn btn-success me-2" fn={updateCount} />
        <Button val="*" classname="col-1 btn btn-success me-2" fn={updateCount} />
        <Button val="%" classname="col-1 btn btn-success me-2" fn={updateCount} />
        <Button val="=" classname="col-1 btn btn-success me-2" fn={updateCount} />
        </div>
        </center>
        </div>)
}