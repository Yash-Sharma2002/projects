import React from 'react';

// @ts-ignore
import ConfettiGenerator from 'confetti-js';

//@ts-ignore
import song from '../assets/celebration-sound.mp3'

export default function Complete({ message, link, btText = 'YAY!' }: { message: string, link: string, btText?: string }) {
    const [celebration] = React.useState(new Audio(song));
    celebration.play()
    return (
        <>
            <Confetti />
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 50,
            }}>
            </div>
            <div className="complete-message " style={{
                width: '40%',
                height: '400px',
                borderRadius: '20px',
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                background: `url(${require('../assets/back-screen.png')}) no-repeat center center / cover`,

            }}>

                <h3 style={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: '30px',
                    fontWeight: 'bold',
                    position: 'relative',
                }} >{message}</h3>
                <a href={link} style={{
                    textDecoration: 'none',
                    color: 'white',
                    borderRadius: '10px',
                    backgroundColor: 'red',
                    padding: '10px 20px',
                }} onClick={() => celebration.pause()}>
                    {btText}
                </a>
            </div>
        </>
    )
}



export function Confetti() {
    React.useEffect(() => {
        const confettiSettings = { target: 'my-canvas' };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        return () => confetti.clear();
    }, []); // add the var dependencies or not

    return <canvas style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: 'transparent',
        width: '100%',
    }} id="my-canvas"></canvas>;
}
