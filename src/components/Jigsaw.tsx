// @ts-nocheck
import React from 'react'
import { JigsawPuzzle } from "react-jigsaw-puzzle/lib";
import "react-jigsaw-puzzle/lib/jigsaw-puzzle.css";
import Header from './Header'
import Footer from './Footer'

import '../styles/jigsaw.css'
import Loading from './Loader';
import axios from 'axios';
import { API_BASE_URL } from '../constants/data';
import { useParams } from 'react-router-dom';
import Complete from './Complete';

//@ts-ignore
import timeicon from '../assets/timeicon.png';
import { LoginContext } from '../context/Context';



export default function Jigsaw() {

  const { user, setLoading, decrypt, encrypt, setMessageType, setMessage, setShow } = React.useContext<any>(LoginContext);

  const [data, setData] = React.useState(null);
  const [currentLevel, setCurrentLevel] = React.useState(0);
  const [completed, setCompleted] = React.useState(false);

  const { destination } = useParams<any>();

  const ApiCall = React.useRef(() => { })
  // stopwatch
  let sec: number = 0
  let min: number = 0
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const startWatch = React.useRef<any>(null)

  startWatch.current = () => {
    setInterval(() => {
      if (sec === 59) {
        min += 1
        sec = 0
      } else {
        sec += 1
      }
      setA(sec)
      setB(min)

    }, 1000);
  }


  ApiCall.current = async () => {
    setLoading(true)
    let { data } = await axios.get(`${API_BASE_URL}game/${destination}/jigshaw`, {
      headers: {
        'Authorization': 'Bearer ' + user.token,
      },
    });
    data = decrypt(data.result)
    if (!data.isError) {
      setData(data.modal);
      setCurrentLevel(data.modal.game_levels.filter((item: any) => item.level_completed_status === false)[0].level)
      startWatch.current();
      setLoading(false)
    }
    else {
      setMessageType('error')
      setMessage('Something went wrong. Please try again later.')
      setShow(true)
    }
  }
  React.useEffect(() => {
    ApiCall.current()
  }, [])

  async function lastApiCall() {
    const collection: any = {
      destination_id: data.game_levels[0].destination_id,
      game_id: data.game_levels[0].game_id,
      level: data.game_levels[0].level,
      level_complete_timing: b
    }


    let response = await axios.post(`${API_BASE_URL}game/level/save`, encrypt(collection), {
      headers: {
        'Authorization': 'Bearer ' + user.token,
        'Content-Type': 'text/plain'
      },
    });
    response = decrypt(response.data.result)
    if (!response.isError) {
      setCompleted(true)
    }
  }


  return (
    <>
      <Header />
      <div className='w-full  bg-[#f5f5f5]'>
        {
          data ?
            data.game_completed_status ?

              <div className="fixed z-[10000] w-full h-screen top-0 left-0 bg-[#2f2f8f] flex justify-center items-center">
                <p className="px-10 py-4 bg-red-500 text-white text-[18px]">You have already Completed this level. <a href={`/destination/${destination}`} className="underline hover:text-yellow-400">Go Back</a>  </p>
              </div>

              :
              <div className="tscontainer">
                <div className="main-ping" style={{ width: '20%', border: '1px solid rgba(0, 0, 0, 0.175)', borderRadius: 20, background: 'white', padding: '10px' }}>
                  <img src={data.game_levels[parseInt(currentLevel)].level_image} alt={data.game_detail.game_name} style={{ width: '100%', borderRadius: 20 }} />
                  <p className="text-black text-[18px] font-bold mx-auto w-fit my-2">Resolve the Puzzle </p>
                  <br />

                  {
                    completed ?
                      <Complete message="You have completed this level." link={`/destination/${destination}/game/jigsaw`} btText='Next Level' />
                      :

                      <div className="point-level">
                        <h2 className='left-subheading text-start flex justify-start text-black ' style={{ marginRight: '10px', alignItems: 'center' }}>
                          <img src={timeicon} alt='clock' style={{ width: "40px", marginLeft: "-10px" }} />
                          <p id="mins" style={{ paddingTop: 3, marginBottom: 0, fontWeight: "700" }}>
                            {b / 10 >= 1 ? b : "0" + b}
                          </p>
                          :
                          <p id="sec" style={{ paddingTop: 3, marginBottom: 0, fontWeight: "700" }}>
                            {a / 10 >= 1 ? a : "0" + a}
                          </p>
                        </h2>
                        <h2 className='left-subheading text-start flex text-black justify-start ' style={{ marginRight: '10px', alignItems: 'center' }}>
                          Level : <span className="font-bold">{currentLevel}</span>
                        </h2>

                        <h2 className='left-subheading text-start flex text-black justify-start ' style={{ marginRight: '10px', alignItems: 'center' }}>
                          Maximum Points : <span className="font-bold">{data.game_levels[0].max_point}</span>
                        </h2>

                        <h2 className='left-subheading text-start flex text-black justify-start ' style={{ marginRight: '10px', alignItems: 'center' }}>
                          Minimum Points : <span className="font-bold">{data.game_levels[0].min_point}</span>
                        </h2>
                      </div>
                  }
                </div>
                <JigsawPuzzle
                  imageSrc={data.game_levels[parseInt(currentLevel)].level_image}
                  rows={parseInt(currentLevel) + 2}
                  columns={parseInt(currentLevel) + 2}
                  onSolved={lastApiCall}
                  // @ts-ignore
                  className="jigsaw-puzzle relative"
                />
              </div>
            : <Loading />
        }
      </div >
      < Footer />
    </>
  )
}