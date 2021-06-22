import React, {useState} from 'react';
import './AvatarForm.css'


const AvatarForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredPath, setEnteredPath] = useState('')

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const enteredPathHandler = (event) => {
        setEnteredPath(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const avatarData = {
            name: enteredName,
            filePath: enteredPath,
            isCurrent: false
        }

        props.onSavaAvatarData(avatarData);
        setEnteredName('');
        setEnteredPath('');
    }



    return (
        <form onSubmit={submitHandler}>
            <div className="new-avatar_controls">
                <div className="new-avatar_control">
                    <label>Enter avatar name</label>
                    <input type="text" value={enteredName} onChange={nameChangeHandler}/>
                </div>
                <div className="new-avatar_control">
                    <label>Enter the file path</label>
                    <input type="file"  id="group_image" value={enteredPath} onChange={enteredPathHandler}/>
                </div>
            </div>
            <div className="new-avatar_actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Avatar</button>
            </div>
        </form>
    );
};

export default AvatarForm;
