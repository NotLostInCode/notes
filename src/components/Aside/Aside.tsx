import React from 'react';
import styles from './Aside.module.css'
import avatar from '../../assets/images/avatar.png'

export const Aside = () => {
    return (
        <aside className={styles.aside}>

            <div className={styles.profile}>
                <div className={styles.profileItem}>
                    <div className={styles.profileAvatar}>
                        <img className={styles.avatar} src={avatar} alt=""/>
                    </div>
                    <span className={styles.profileName}>Gregory</span>
                </div>
                <div className={styles.profileSetting}>
                    <button className={styles.searchDisplay}>
                        +
                    </button>
                    <button className={styles.setting}>
                        +
                    </button>
                </div>
            </div>

            <div className={styles.searchNote}>
                <input className={styles.search} placeholder={'Search note'} type="text"/>
            </div>

            <div className={styles.newNote}>
                <button className={styles.newNoteBtn}>New note</button>
            </div>

            {/*------------------------*/}

            <div className={styles.notesList}>
                <div className={styles.notes}>
                    <img className={styles.notesImage} src="" alt=""/>
                    <h3 className={styles.notesName}>Notes</h3>
                </div>
                <div className={styles.notes}>
                    <img className={styles.notesImage} src="" alt=""/>
                    <h3 className={styles.notesName}>Lists</h3>
                </div>
                <div className={styles.notes}>
                    <img className={styles.notesImage} src="" alt=""/>
                    <h3 className={styles.notesName}>Recording</h3>
                </div>
                <div className={styles.notes}>
                    <img className={styles.notesImage} src="" alt=""/>
                    <h3 className={styles.notesName}>Sketches</h3>
                </div>
                <div className={styles.notes}>
                    <img className={styles.notesImage} src="" alt=""/>
                    <h3 className={styles.notesName}>Trash</h3>
                </div>


            </div>


        </aside>
    );
};
