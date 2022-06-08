import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import catImage from '../../Assets/cat.jpg';
import 'animate.css';

const LearnCSSTransition = () =>{
    const [isImageShown, setIsImageShown] = useState(false);
    const [imageClasses, setImageClasses] = useState("d-none");
    const showImage = (node) =>{
        setImageClasses("d-block");
        node.style.opacity = 0;
    }
    const removeOpacity = (node) =>{
        node.style.opacity = 1;
    }
    const hideImage = () =>{
        setImageClasses("d-none");
    }
    return(
        <>
        <CSSTransition in={isImageShown} timeout={500} classNames={{
            enterActive: 'animate__bounceIn',
            exitActive: 'animate__bounceOut'
        }}
            onEnter={showImage}
            onEntered={removeOpacity}
            onExited={hideImage}
            className={`${imageClasses}`}>
            <img src={catImage} alt={'cat'}/>
        </CSSTransition>
        <button onClick={()=>{setIsImageShown(!isImageShown)}}>Toggle Image</button>
        </>
    )
    
}

export default LearnCSSTransition;