import React, { useState } from "react";
import "../styles/ping-container.css";
import Header from './Header';
import Footer from './Footer';
import { API_BASE_URL, SECRET_KEY } from '../constants/data';
import axios from "axios";
//@ts-ignore
import CryptoJS from "crypto-js";
//@ts-ignore
import timeicon from '../assets/timeicon.png';
import Confetti from "../components/Design";
//@ts-ignore
import song from '../assets/celebration-sound.mp3'


export default function TreasureHunt() {

    const [data, setData] = React.useState('null');
    const [completed, setCompleted] = React.useState(false);
    const [destMoved, setDestMoved] = React.useState(0);

    const [celebration] = React.useState(new Audio(song));


    var sec = 0,
        min = 0;
    //   const startWatch = React.useRef();
    //   startWatch.current = () => {
    //     const startTimer = setInterval(() => {
    //       sec++;
    //       if (sec === 60) {
    //         min++;
    //         sec = 0;
    //       }
    //       setValue();
    //     }, 1000);
    //     return startTimer;
    //   }

    //   function setValue() {
    //     document.getElementById('mins').textContent =
    //       min < 10 ? ' 0' + min : ' ' + min;
    //     document.getElementById('sec').textContent =
    //       sec < 10 ? ' 0' + sec : ' ' + sec;
    //   }

    async function apiCall() {
        const destination = localStorage.getItem('destinationSlug');
        const bearer = localStorage.getItem('tokenkey');

        const response = await axios.get(`${API_BASE_URL}game/${destination}/treasure-hunt`, {
            headers: {
                'Authorization': 'Bearer ' + bearer
            },
        });
        if (response) {
            var bytes = CryptoJS.AES.decrypt(response.data.result, SECRET_KEY);
            var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
            setData(decryptedData);
            //   startWatch.current();
            localStorage.setItem('game_id', decryptedData.modal.game_levels[0].game_id);
            localStorage.setItem('level', decryptedData.modal.game_levels[0].level);
        }
    }
    // React.useEffect(() => {
    //     apiCall()
    // }, [])

    // timer functions end


    async function lastApiCall() {
        console.log('lastApiCall');
        const data = {
            destination_id: localStorage.getItem('destinationId'),
            game_id: localStorage.getItem('game_id'),
            level: localStorage.getItem('level'),
            level_complete_timing: min
        }
        console.log(data);
        var ciphertext = CryptoJS.AES.encrypt(
            JSON.stringify(data),
            SECRET_KEY
        ).toString();

        const response = await axios.post(`${API_BASE_URL}game/level/save`, ciphertext, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('tokenkey'),
                'Content-Type': 'text/plain'
            },
        });
        if (response) {
            setCompleted(true)
            celebration.play();
        }
    }

    const handleDragStart = (event: any, id: number) => {
        event.dataTransfer.setData("id", id);
    };

    const handleDragOver = (event: any) => {
        event.preventDefault();
    };
    function getOffset(el: any) {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left,
            top: rect.top
        };
    }

    const [element, SetElement] = React.useState('')

    function atTouch(event: any) {
        SetElement(event.target.classList[0])
    }

    function atEndTouch(event: any) {
        // const positionId = event.target.id
        // if (element === positionId) {
        //   const ping = data.modal.game_levels[0].positions.find((ping) => ping.name.replace(/ /g, "-") === element);
        //   const position = data.modal.game_levels[0].positions.find((position) => position.name.replace(/ /g, "-") === positionId);
        //   let displaceElement = getOffset(document.getElementById(positionId))
        //   let displaceParent = getOffset(document.getElementsByClassName(`pingContainer-${positionId}`)[0])
        //   if (ping && position) {
        //     setDestMoved(destMoved + 1)
        //     ping.x = displaceElement.left - displaceParent.left + 0.5;
        //     ping.y = displaceElement.top - displaceParent.top + 0.5;
        //   }
        // }
        // if (destMoved === data.modal.game_levels[0].positions.length - 1) {
        //   lastApiCall();
        //   clearInterval(startWatch.current);
        // }
    };


    const handleDrop = (event: any, positionId: number) => {
        // const id = event.dataTransfer.getData("id");
        // if (id === positionId) {
        //   const ping = data.modal.game_levels[0].positions.find((ping) => ping.name.replace(/ /g, "-") === id);
        //   const position = data.modal.game_levels[0].positions.find((position) => position.name.replace(/ /g, "-") === positionId);
        //   let displaceElement = getOffset(document.getElementById(positionId))
        //   let displaceParent = getOffset(document.getElementsByClassName(`pingContainer-${positionId}`)[0])
        //   if (ping && position) {
        //     setDestMoved(destMoved + 1)
        //     ping.x = displaceElement.left - displaceParent.left + 0.5;
        //     ping.y = displaceElement.top - displaceParent.top + 0.5;
        //   }
        // }
        // if (destMoved === data.modal.game_levels[0].positions.length - 1) {
        //   lastApiCall();
        //   clearInterval(startWatch.current);
        // }
    };

    return (
        <>
            <Header />
            <div className='w-full lg:h-[80vh] bg-[#f5f5f5]'>
                {
                    data ?
                        <div className="tscontainer"  >
                            <div className="main-ping" style={{ width: '30%', border: '1px solid rgba(0, 0, 0, 0.175)', borderRadius: 20, background: 'white', padding: '10px' }}>
                                <p className="text-black">Drag and drop the destinations to correct places </p>
                                <div className="placeContainer" >
                                    <img src={require('../assets/location.jpg')} alt="abcd" draggable
                                    // onDragStart={(event) => handleDragStart(event, ping.name.replace(/ /g, "-"))}
                                    // style={{ left: ping.x, top: ping.y, zIndex: completed ? 0 : 100 }}
                                    // onTouchStart={e => atTouch(e)}
                                    // className={`${ping.name.replace(/ /g, "-")} ping`} 
                                    />
                                    {/* {data.modal.game_levels[0].positions.map((ping) => (
                    <div key={ping.name.replace(/ /g, "-")} className={`pingContainer-${ping.name.replace(/ /g, "-")} pingContainer`} style={{ position: 'relative', margin: '10px' }}>
                      <img src={ping.icon} alt={ping.name} draggable
                        onDragStart={(event) => handleDragStart(event, ping.name.replace(/ /g, "-"))}
                        style={{ left: ping.x, top: ping.y, zIndex: completed ? 0 : 100 }}
                        onTouchStart={e => atTouch(e)}
                        className={`${ping.name.replace(/ /g, "-")} ping`} />
                    </div>
                  ))} */}
                                </div>
                                <br />

                                {
                                    completed ?
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
                                                }} >Congratulations! You have successfully completed the game</h3>
                                                <a href="/Details" style={{
                                                    textDecoration: 'none',
                                                    color: 'black',
                                                    border: '1px solid black',
                                                    borderRadius: '10px',
                                                    backgroundColor: 'white',
                                                    padding: '10px',
                                                }} onClick={() => celebration.pause()}>
                                                    YAY!
                                                </a>
                                            </div>
                                        </>
                                        :

                                        <div className="point-level">
                                            <h2 className='left-subheading text-start flex justify-start text-black ' style={{ marginRight: '10px', alignItems: 'center' }}>
                                                <img src={timeicon} alt='clock' style={{ width: "40px", marginLeft: "-10px" }} /> 
                                                <p id="mins" style={{ paddingTop: 3, marginBottom: 0 }}> 00</p>
                                                :
                                                <p id="sec" style={{ paddingTop: 3, marginBottom: 0 }}>00</p>
                                            </h2>
                                            <h2 className='left-subheading text-start flex text-black justify-start ' style={{ marginRight: '10px', alignItems: 'center' }}>
                                                Level :null
                                                {/* {data.modal.game_levels[0].level} */}
                                            </h2>

                                            <h2 className='left-subheading text-start flex text-black justify-start ' style={{ marginRight: '10px', alignItems: 'center' }}>
                                                Points : 0
                                            </h2>
                                        </div>
                                }

                            </div>

                            {/* <div className="imgcontainer">
                <img src={data.modal.game_levels[0].position_image} alt="map" style={{
                  width: "100%",
                  border: '1px solid #000',
                  zIndex: -1,
                }} />
                {data.modal.game_levels[0].positions.map((position) => (
                  <div
                    key={position.name.replace(/ /g, '-')}
                    id={position.name.replace(/ /g, '-')}
                    onDragOver={handleDragOver}
                    onTouchStart={e => atEndTouch(e)}
                    onDrop={(event) => handleDrop(event, position.name.replace(/ /g, '-'))}
                    style={{ left: `${position.left}%`, top: `${position.top}%` }}
                    className="dropPosition"
                  />
                ))}
              </div> */}

                        </div>

                        : null
                }
            </div>
            <Footer />
        </>

    );
};




