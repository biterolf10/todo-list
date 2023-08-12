import React from 'react';

const Item = (props) => {
    return (
        <div className="itemHandler">
            <strong className="itemComment">{props.item.id}. {props.item.title}</strong>
            <div className="itemContent">{props.item.content}</div>
        </div>
    );
}

export default Item;