import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

export default function FuncAccordion() {
    const [data, setData] = useState([]);
    const [selected, setSelected] = useState(false);
    const [showMore, setShowMore] = useState(false);
  
    useEffect(()=>{
        fetch('https://countriesnow.space/api/v0.1/countries/capital')
        .then(res => res.json())
        .then(res => setData(res.data))
    },[]);

    return(
        <div className="container">
        <Link to="/">Link To Class Component</Link>
            {data.slice(0, showMore ? data.length : 10).map((val,i)=>{
                return( 
                <>
                <div className="header">
                    <p>{val.name}</p>
                    <span key={i} onClick={()=>setSelected(selected === i ? false : i)}>{selected === i ? "☒" : "≣"}</span>
                </div>
                {selected === i && <div className="capital"><p>{val.capital}</p></div>}
                </>
                )
            })}
            <p className='info' onClick={()=>setShowMore(!showMore)}>{showMore ? '↑ Less info' : '↓ More info...'}</p>
        </div>
    )
}