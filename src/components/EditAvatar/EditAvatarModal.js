import React, {useState} from 'react';
import ReactDom from 'react-dom'
import classes from './EditAvatarModal.module.css';
import Card from "../UI/Card";
import '../AddAvatar/AvatarForm.css';

const Backdrop =  (props) => {
    return <div className={classes.backdrop} onClick={props.onConfirm}/>
};

const ModalOverlay = (props) => {
    const [updatedName, setUpdatedName] = useState('');
    const [updatedPath, setUpdatedPath] = useState('')

    const nameChangeHandler = (event) => {
        setUpdatedPath(event.target.value);
    }

    const enteredPathHandler = (event) => {
        setUpdatedPath(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const avatarData = {
            id: props.id,
            name: updatedName,
            filePath: updatedPath,
        }

        props.onEdit(avatarData);
        props.onConfirm();
        setUpdatedName('');
        setUpdatedName('');
    }




    return  <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>Edit your avatar {props.name}</h2>
        </header>
        <div className={classes.content}>
            <form onSubmit={submitHandler}>
                <div className="new-avatar_controls">
                    <div className="new-avatar_control">
                        <label>Enter avatar name</label>
                        <input type="text"  onChange={nameChangeHandler}/>
                    </div>
                    <div className="new-avatar_control">
                        <label>Enter the file path</label>
                        <input type="file"  id="group_image" onChange={enteredPathHandler}/>
                    </div>
                </div>
                <div className="new-avatar_actions">
                    <button className={classes.button} type="button" onClick={props.onConfirm}>Cancel</button>
                    <button className={classes.button} type="submit">Update</button>
                </div>
            </form>
        </div>
    </Card>
}

const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onConfirm={props.onConfirm}/>, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<ModalOverlay
                id={props.id}
                name={props.name}
                path={props.path}
                onEdit={props.onEdit}
                onConfirm={props.onConfirm}/>, document.getElementById('overlay-root'))}
        </React.Fragment>

    );
};

export default ErrorModal;
