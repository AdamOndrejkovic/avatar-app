import React, {useContext, useState} from 'react';
import './AvatarsItem.css'
import { IoTrashBinOutline } from 'react-icons/io5';
import { AiFillEdit } from 'react-icons/ai';
import { ImCircleUp } from 'react-icons/im'
import ActiveAvatar from "../../store/active-avatar";
import ErrorModal from "../EditAvatar/EditAvatarModal";

const AvatarItem = (props) => {
    const [editing, setEditing] = useState(false)
    const act = useContext(ActiveAvatar);

    const deleteHandler = () => {
      props.onDelete(props.id);
    };

    const activateHandler = () => {
        const avatar = {
            id: props.id,
            name: props.name,
            filePath: props.path
        }
        act.onSetActive(avatar);
    }

    const editHandler = () => {
        setEditing(true);
    }

    const editedHandler = () => {
        setEditing(false);
    }


    return (
        <React.Fragment>
            <li className="avatar-item">
                <img src={props.path} alt="Avatar Image" className="avatar-img"/>
                <span className="avatar-name">{props.name}</span>
                {props.id === act.avatar.id && (<span className="avatar-active">Active</span>)}
                <span onClick={deleteHandler} className="delete-btn"><IoTrashBinOutline/></span>
                <span onClick={editHandler} className="edit-btn"><AiFillEdit/></span>
                {props.id !== act.avatar.id && (<span onClick={activateHandler} className="activate-btn"><ImCircleUp/></span>)}
            </li>
            {editing && <ErrorModal
                id={props.id}
                name={props.name}
                path={props.path}
                onEdit={props.onEdit}
                onConfirm={editedHandler}
            />}
        </React.Fragment>
    );
};

export default AvatarItem;
