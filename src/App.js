import './App.css';
import AddAvatar from "./components/AddAvatar/AddAvatar";
import {useContext, useState} from "react";
import AvatarsList from "./components/Avatars/AvatarsList";
import ActiveAvatar from "./store/active-avatar";

function App() {
  const act = useContext(ActiveAvatar);
  const [avatars, setAvatars] = useState([{
      id: '1',
      name: 'Penguin',
      filePath: 'avatars/pinguin.png',
  },
      {
          id: '2',
          name: 'Smiley',
          filePath: 'avatars/smiley.png',
      }]);

  const addAvatarHandler = avatar => {
      setAvatars((prevAvatars) => {
         return [avatar, ...prevAvatars]
      });
  }

  const deleteAvatarHandler = avatarId => {
      setAvatars(prevAvatars => {
          return prevAvatars.filter(avatar => avatar.id !== avatarId);
      });
  };

  const editAvatarHandler = avatarData => {

  };


  return (
    <div className="App">
        <AddAvatar onAddAvatar={addAvatarHandler}/>
        <AvatarsList items={avatars} onDelete={deleteAvatarHandler} onEdit={editAvatarHandler}/>
    </div>
  );
}

export default App;
