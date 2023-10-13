import React from 'react';
import {Route, Routes} from 'react-router-dom';
import styles from './Main.module.css'
import {Notes} from "./Notes/Notes";
import {Lists} from "./Lists/Lists";
import {Recording} from "./Recording/Recording";
import {Sketches} from "./Sketches/Sketches";
import {Trash} from "./Trash/Trash";

export const Main = () => {
    return (
        <main className={styles.main}>
            <Routes>
                <Route path={'/notes'} element={<Notes/>}/>
                <Route path={'/lists'} element={<Lists/>}/>
                <Route path={'/recording'} element={<Recording/>}/>
                <Route path={'/sketches'} element={<Sketches/>}/>
                <Route path={'/trash'} element={<Trash/>}/>
            </Routes>
        </main>
    );
};
