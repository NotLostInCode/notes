import React, {FC} from 'react';
import styles from './PopupAddNewNote.module.css'
import close from "../../../assets/icons/close.svg";

type PropsType = {
    setPopup: (close: boolean) => void
}

export const PopupAddNewNote:React.FC<PropsType> = ({setPopup}) => {
    const onClickHandler = () => {
        setPopup(false)
    }

    return (

            <div className={styles.popupAddingNewNotes}>
                <div className={styles.addingNewNotes}>

                    <div className={styles.addingNewNotesHead}>
                        <h3 className={styles.title}>Add new</h3>
                        <div className={styles.close}>
                            <button onClick={onClickHandler} className={styles.btnClose}>
                                <img className={styles.closeImage} src={close} alt=""/>
                            </button>
                        </div>
                    </div>

                    <div className={styles.addingNewNotesContent}>
                        <div  className={styles.addingNewNotesItem}>
                            <div className={styles.newNotes}>Simple note</div>
                        </div>
                        <div  className={styles.addingNewNotesItem}>
                            <div className={styles.newNotes}>List</div>
                        </div>
                        <div  className={styles.addingNewNotesItem}>
                            <div className={styles.newNotes}>Record note</div>
                        </div>
                        <div  className={styles.addingNewNotesItem}>
                            <div className={styles.newNotes}>Sketch</div>
                        </div>
                    </div>


                </div>
            </div>

    );
};
