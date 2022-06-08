import PROGRAMMING_LANGUAGES from "./languages";
import getRandomItems from "./getRandomItems";
import { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import 'animate.css';
import styles from './TransitionGroup.module.scss';

const LearnTransitionGroup = () =>{
    const [languages, setLanguages] = useState(getRandomItems(PROGRAMMING_LANGUAGES, 4));
    const [counter, setCounter] = useState(11);
    
    const removeLanguage = (id) =>{
        const newLanguages = languages.splice(0);
        const index  = newLanguages.findIndex((language) => language.id === id);
        if(index !== -1){
            newLanguages.splice(index, 1);
            setLanguages(newLanguages);
        }
    }

    const addLanguage = () => {
        const newLanguages = languages.splice(0);
        const newItem = Object.assign({}, getRandomItems(PROGRAMMING_LANGUAGES, 1)[0]);
        newItem.id = counter;
        newLanguages.push(newItem);
        setLanguages(newLanguages);
        setCounter(counter + 1);
    }

    const renderLanguages = (languages) =>{
        return languages.map((language)=>{
            return(
                <CSSTransition key={language.id} classNames={{
                    enterActive: 'animate__animated animate__lightSpeedInLeft',
                    exitActive: 'animate__animated animate__lightSpeedOutLeft'
                }} timeout={900}>
                    <div key={language.id} className={styles['language']}>
                        <p>{language.name}</p>
                        <button onClick={()=>{removeLanguage(language.id)}}>Delete</button>
                    </div>
                </CSSTransition>
              
            )
        })
    }

    return(
        <>
        <TransitionGroup className={styles['language-list']}>
            {renderLanguages(languages)}
            <button className={styles['add-button']} onClick={addLanguage}>Add Language</button>
        </TransitionGroup>
     

        </>
    )
}

export default LearnTransitionGroup;