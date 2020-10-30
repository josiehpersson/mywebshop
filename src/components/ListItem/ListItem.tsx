import React from 'react';
import './listitem.css';
import {Link} from 'react-router-dom';

interface IProps {
    key: number,
    name: string,
    imageUrl: string,
    alt: string,
    price: number,
    link: string,
}

export default function ListItem(props: IProps) {

    return(
        <div 
        className="list-item" 
        key={props.key}
        data-info={[props.price,props.name]}>
                <h3>{props.name}</h3>
            <img className="product-img-list" src={props.imageUrl} alt={props.alt}/>
                <strong>{props.price}:-</strong>
<Link to={props.link}>
    <button>DETAILS</button>
</Link>
        </div>
    )
}