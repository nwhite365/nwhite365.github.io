import * as React from 'react';

export const FadeDiv = ({fadeTop=true, fadeBottom=true, children}) => {
    let fade = "";
    if (fadeTop && fadeBottom) {
        fade = `linear-gradient(to bottom, 
            rgba(0, 0, 0, 1) 5%,
            rgba(255, 255, 255, 0) 50%, 
            rgba(0, 0, 0, 1) 95%)`;
    } else if (fadeTop) {
        fade = `linear-gradient(to bottom, 
            rgba(0, 0, 0, 1) 5%,
            rgba(255, 255, 255, 0) 50%)`;
    } else if (fadeBottom) {
        fade = `linear-gradient(to bottom,
            rgba(255, 255, 255, 0) 50%, 
            rgba(0, 0, 0, 1) 95%)`;
    }
    return (    
        <div style={{
            width: "100%",
            backgroundImage: fade
        }}>
            {children}
        </div>
    );
}
