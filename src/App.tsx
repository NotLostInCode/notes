import React from 'react';
import styles from './App.module.css';
import {Aside} from "./components/Aside/Aside";
import {Main} from "./components/Main/Main";

export const App = () => {
    return (
        <div className={styles.app}>
            <Aside/>
            <Main/>
        </div>
    );
}
