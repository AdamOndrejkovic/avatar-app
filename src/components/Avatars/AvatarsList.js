import React from 'react';
import AvatarItem from "./AvatarItem";
import './AvatarsList.css'

const AvatarsList = props => {
    return (
            <ul className='avatars-list'>
                {props.items.map(avatar => (
                <AvatarItem
                key={avatar.id}
                id={avatar.id}
                name={avatar.name}
                path={avatar.filePath}
                onDelete={props.onDelete}
                onEdit={props.onEdit}
                />))}
            </ul>
    );
};

export default AvatarsList;
