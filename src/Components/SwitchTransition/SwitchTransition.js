import { SwitchTransition } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import 'animate.css';
import styles from './SwitchTransition.module.scss';

const LearnSwitchTransition = () =>{
    const [isDanger, setIsDanger] = useState(true);
    const renderAlert = (isDanger) =>{
        if(isDanger){
            return(
                <p className={styles['danger']}>You're in danger</p>
            )
        }
        return(
            <p className={styles['success']}>Danger cleared</p>
        )
    }
    return(
        <>
       <button className={styles['button']} onClick={()=>{setIsDanger(!isDanger)}}>Toggle</button>
       <SwitchTransition mode="out-in">
           
           <CSSTransition key={isDanger} classNames={{
               enterActive: 'animate__animated animate__flipInX',
               exitActive: 'animate__animated animate__flipOutX'
           }}
           timeout={500}
           >
              {renderAlert(isDanger)}
           </CSSTransition>
           
       </SwitchTransition>
       </>
    )
}

export default LearnSwitchTransition;