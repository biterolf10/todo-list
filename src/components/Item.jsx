import React from 'react';

const Item = (props) => {
    if (props.item.bigger === true) {
        if (props.item.numbered) {
            return (
            <div className="itemHandler">
                <strong className="itemComment">{props.item.id}. {props.item.content}</strong>
            </div>
            );
        } else {
            return (
            <ul iv className="itemHandler">
                <li className="itemComment">{props.item.content}</li>
            </ul>
            );
        }
        
    } else {
        if (props.item.numbered) {
            return (
            <div className="itemHandler">
                <div className="itemComment">{props.item.id}. {props.item.content}</div>
            </div>
            );
        } else {
            return (
            <ul iv className="itemHandler">
                <li className="itemComment">{props.item.content}</li>
            </ul>
            );
        }
        
    }
    
}

export default Item;