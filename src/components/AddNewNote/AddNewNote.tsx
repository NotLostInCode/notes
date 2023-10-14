import React, {useState} from 'react';
import styles from './AddNewNote.module.css'
import {PopupAddNewNote} from "./PopupAddNewNote/PopupAddNewNote";


type PropsType = {
    container: string
    btnStyles: string
    name: string
}

export const AddNewNote:React.FC<PropsType> = ({container, btnStyles, name}) => {
    const [popup, setPopup] = useState(false)

    const onClickOpenHandler = () => {
        setPopup(true)
    }

    return (

          <>
              <div className={container}>
                  <button onClick={onClickOpenHandler} className={btnStyles}>{name}</button>
              </div>

              {popup && <PopupAddNewNote setPopup={setPopup}/>}
          </>

    );
};

