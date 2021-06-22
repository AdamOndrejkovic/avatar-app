import React, {useState} from "react";

const ActiveAvatar = React.createContext({
    avatar: {
        id: '1',
        name: 'Penguin',
        filePath: 'avatars/pinguin.png',
    },
    onSetActive: () => {},

});

export const ActiveAvatarProvider = (props) => {
    const [isActive, setIsActive] = useState({
        id: '1',
        name: 'Penguin',
        filePath: 'avatars/pinguin.png',
    });

    const setActiveHandler = (avatar) => {
        setIsActive(avatar);
    }

    return <ActiveAvatar.Provider value={
        {
            avatar: isActive,
            onSetActive: setActiveHandler
        }
    }>{props.children}</ActiveAvatar.Provider>

}



export default ActiveAvatar;
