import React from 'react';
import styles from './Aside.module.css'
import avatar from '../../assets/images/avatar.png'

import settings from '../../assets/icons/setting.svg'
import arrow from '../../assets/icons/arrow.svg'
import notes from '../../assets/icons/notes.svg'
import lists from '../../assets/icons/lists.svg'
import recording from '../../assets/icons/recording.svg'
import sketches from '../../assets/icons/sketches.svg'
import trash from '../../assets/icons/trash.svg'
import {NavLink} from "react-router-dom";


export const Aside = () => {

    const activeNavigation = ({isActive}: {
        isActive: boolean
    }) => isActive ? `${styles.notesNavigation} ${styles.active}` : styles.notesNavigation

    return (
        <aside className={styles.aside}>

            <div className={styles.asideHead}>
                <div className={styles.profile}>
                    <div className={styles.profileItem}>
                        <div className={styles.profileAvatar}>
                            <img className={styles.avatar} src={avatar} alt=""/>
                        </div>
                        <span className={styles.profileName}>Gregory</span>
                    </div>
                    <div className={styles.profileSetting}>
                        <button className={styles.searchDisplay}>
                            <img src={arrow} alt=""/>
                        </button>
                        <button className={styles.setting}>
                            <img src={settings} alt=""/>
                        </button>
                    </div>
                </div>

                <div className={styles.searchNote}>
                    <input className={styles.search} placeholder={'Search note'} type="text"/>
                </div>

                <div className={styles.newNote}>
                    <button className={styles.newNoteBtn}>New note</button>
                </div>
            </div>

            {/*------------------------*/}

            <div className={styles.notesList}>
                <div className={styles.notes}>
                    <NavLink to={'/notes'} className={activeNavigation}>
                        <img className={styles.notesImage} src={notes} alt="notes"/>
                        <h3 className={styles.notesName}>Notes</h3>
                    </NavLink>
                </div>
                <div className={styles.notes}>
                    <NavLink to={'/lists'} className={activeNavigation}>
                        <img className={styles.notesImage} src={lists} alt="lists"/>
                        <h3 className={styles.notesName}>Lists</h3>
                    </NavLink>
                </div>
                <div className={styles.notes}>
                    <NavLink to={'/recording'} className={activeNavigation}>
                        <img className={styles.notesImage} src={recording} alt="recording"/>
                        <h3 className={styles.notesName}>Recording</h3>
                    </NavLink>
                </div>
                <div className={styles.notes}>
                    <NavLink to={'/sketches'} className={activeNavigation}>
                        <img className={styles.notesImage} src={sketches} alt="sketches"/>
                        <h3 className={styles.notesName}>Sketches</h3>
                    </NavLink>
                </div>
                <div className={styles.notes}>
                    <NavLink to={'/trash'} className={activeNavigation}>
                        <img className={styles.notesImage} src={trash} alt="trash"/>
                        <h3 className={styles.notesName}>Trash</h3>
                    </NavLink>
                </div>
            </div>


        </aside>
    );
};
