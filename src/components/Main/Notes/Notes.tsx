import React from 'react';
import styles from './Notes.module.css'
import {SimpleNote} from "./SimpleNote/SimpleNote";

export const Notes = () => {
    return (
        <div className={styles.containerNotes}>
           <SimpleNote />
        </div>
    );
};
