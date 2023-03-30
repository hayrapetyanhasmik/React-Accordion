import {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Accordion extends Component {
    constructor(){
        super()
        this.state = {items: [], selected: false, showMore: false}
    }

componentDidMount(){
    fetch('https://countriesnow.space/api/v0.1/countries/capital')
    .then(res => res.json())
    .then(res => this.setState({items: res.data})) 
}

    render() {
        const {items, selected, showMore} = this.state
        return (
            <div className='container'>
            <Link to="/functional">Link To Functional Component</Link>
                {items?.slice(0, showMore ? items.length : 10).map((item,i)=>{
                    return( 
                        <>
                        <div className="header">
                            <p >{item.name}</p>                 
                            <span key={i} onClick={()=>this.setState({selected: selected === i ? false : i})}>{selected=== i ? "☒" : "≣"}</span>                
                        </div>
                        {selected === i && <div className="capital"><p>{item.capital}</p></div>}               
                        </>
                    )
                })}
                <p className='info' onClick={()=>this.setState({showMore: !showMore})}>{showMore ? '↑ Less info......' : '↓ More info......'}</p>
            </div>
        );
    }
}