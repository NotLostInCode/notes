import React, {useState} from 'react';
import styles from './AddNewNote.module.css'
import {PopupAddNewNote} from "./PopupAddNewNote/PopupAddNewNote";

export const AddNewNote = () => {
    const [popup, setPopup] = useState(false)


    const onClickOpenHandler = () => {
        setPopup(true)
    }

    return (

          <>
              <div className={`${styles.noteItem} ${styles.addNewNote}`}>
                  <button onClick={onClickOpenHandler} className={styles.add}>+</button>
              </div>

              {popup && <PopupAddNewNote setPopup={setPopup}/>}
          </>

    );
};

