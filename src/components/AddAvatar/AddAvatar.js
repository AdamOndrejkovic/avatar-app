import React, {useState} from 'react';
import AvatarForm from "./AvatarForm";
import classes from './AddAvatar.module.css'

const AddAvatar = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveAvatarHandler = (enteredAvatarData) => {
        const avatarData = {
            ...enteredAvatarData,
            id: Math.random().toString()
        };
        props.onAddAvatar(avatarData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };

    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className={classes.newAvatar}>
            {!isEditing && <button onClick={startEditingHandler}>Add new avatar</button>}
            {isEditing &&
                <AvatarForm
                    onSavaAvatarData={saveAvatarHandler}
                    onCancel={stopEditingHandler}
                />
            }
        </div>
    );
};

export default AddAvatar;
