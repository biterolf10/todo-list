import React from 'react';

const Folder = (props) => {
    return (
        <div className="folderHandler">
            <h1 className="folderTitle">{props.folder.id}. {props.folder.title}</h1>
        </div>
    );
}

export default Folder;