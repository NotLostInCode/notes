import React from 'react';
import styles from './SimpleNote.module.css'

export const SimpleNote = () => {


    return (
        <div className={styles.simpleNote}>

            <div className={`${styles.noteItem} ${styles.simpleNoteItem}`}>
                <div className={styles.simpleNoteContent}>
                    <h3 className={styles.simpleNoteTitle}>My school that need to be sorted</h3>
                </div>
            </div>
            <div className={`${styles.noteItem} ${styles.simpleNoteItem}`}>
                <div className={styles.simpleNoteContent}>
                    <h3 className={styles.simpleNoteTitle}>My school that need to be sorted</h3>
                </div>
            </div>
            <div className={`${styles.noteItem} ${styles.simpleNoteItem}`}>
                <div className={styles.simpleNoteContent}>
                    <h3 className={styles.simpleNoteTitle}>My school that need to be sorted</h3>
                </div>
            </div>
            <div className={`${styles.noteItem} ${styles.simpleNoteItem}`}>
                <div className={styles.simpleNoteContent}>
                    <h3 className={styles.simpleNoteTitle}>My school that need to be sorted</h3>
                </div>
            </div>
            <div className={`${styles.noteItem} ${styles.simpleNoteItem}`}>
                <div className={styles.simpleNoteContent}>
                    <h3 className={styles.simpleNoteTitle}>My school that need to be sorted</h3>
                </div>
            </div>
            <div className={`${styles.noteItem} ${styles.simpleNoteItem}`}>
                <div className={styles.simpleNoteContent}>
                    <h3 className={styles.simpleNoteTitle}>My school that need to be sorted</h3>
                </div>
            </div>
            <div className={`${styles.noteItem} ${styles.simpleNoteItem}`}>
                <div className={styles.simpleNoteContent}>
                    <h3 className={styles.simpleNoteTitle}>My school that need to be sorted</h3>
                </div>
            </div>

            {/*-----------*/}
            <div className={`${styles.noteItem} ${styles.addNewNote}`}>
                <button className={styles.add}>+</button>
            </div>

        </div>
    );
};
