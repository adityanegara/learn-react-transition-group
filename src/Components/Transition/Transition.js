import catImage from '../../Assets/cat.jpg';
import { useState } from 'react';
import { Transition } from 'react-transition-group';

const LearnTransition = () =>{
    const [isImageShown, setIsImageShown] = useState(false);
    const transitions = {
        entering: {
            display: 'block'
        },
        entered: {
            opacity: 1,
            display: 'block'
        },
        exiting: {
            opacity: 0,
            display: 'block'
        },
        exited: {
            opacity: 0,
            display: 'none'
        }
    }

    return(
        <div>
            <button onClick={()=>{setIsImageShown(!isImageShown)}}>Toggle Image</button>
            <Transition in={isImageShown} timeout={300}>
                {state =>(
                    <img src={catImage} alt={'cat'}
                        style={{
                            transition: 'all .1s',
                            opacity: 0,
                            display: 'none',
                            ...transitions[state]
                        }}
                    />
                )
                }
            </Transition>
        </div>
    )
}

export default LearnTransition;