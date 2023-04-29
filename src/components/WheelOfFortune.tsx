// @ts-nocheck
import React from 'react'
import '../styles/spinner-wheel.css'
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
import { API_BASE_URL } from '../constants/data';
import WheelComponent from './Wheel';
import { useParams } from 'react-router-dom';
import { LoginContext } from '../context/Context';

export default function WheelOfFortune() {
    const { user, setLoading, decrypt, encrypt, loading, setMessageType, setMessage, setShow } = React.useContext<any>(LoginContext);

    const { destination } = useParams<any>();

    const [value, setValue] = React.useState('');
    const [prize, setPrize] = React.useState<any>([]);
    const [data, setData] = React.useState('null');
    let colors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F", "#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
    const [segments, setSegments] = React.useState<any>([]);
    const ApiCall = React.useRef(() => { })


    ApiCall.current = async () => {
        setLoading(true)
        let { data } = await axios.get(`${API_BASE_URL}game/${destination}/wheel`, {
            headers: {
                'Authorization': 'Bearer ' + user.token,
            },
        });
        data = decrypt(data.result)
        if (!data.isError) {
            setData(data.modal);
            setLoading(false)
            setSegments(data.modal.game_levels[0].slots.map((el: any) => el.title))
        }
        else {
            setMessageType('error')
            setMessage('Something went wrong. Please try again later.')
            setShow(true)
        }
    }

    async function lastApiCall(slot: number) {
        const collection: any = {
            destination_id: data.game_levels[0].destination_id,
            game_id: data.game_levels[0].game_id,
            slot: slot,
        }


        let response = await axios.post(`${API_BASE_URL}game/wheel/save`, encrypt(collection), {
            headers: {
                'Authorization': 'Bearer ' + user.token,
                'Content-Type': 'text/plain'
            },
        });
        response = decrypt(response.data.result)
        if (!response.isError) {
            setMessageType('info')
            setMessage('You have won ' + response.modal.point + ' points')
            setShow(true)
        }
    }


    React.useEffect(() => {
        ApiCall.current()
    }, [])


    function onFinished(title: string) {
        // @ts-ignore
        const winningItem = data.game_levels[0].slots.find((el: any) => el.title === title);
        lastApiCall(winningItem.slot)
        setValue(winningItem.title);
        setPrize((p: any) => {
            return [...p, winningItem]
        })
    }

    return (
        <>

            <Header />
            <div className='w-full   bg-[#f5f5f5]'>
                {
                    data ?
                        <div className='tscontainer' style={{
                            padding: '40px auto',
                            justifyContent: 'space-between'
                        }}>
                            <div className="main-ping" style={{ width: '35%', border: '1px solid rgba(0, 0, 0, 0.175)', borderRadius: 20, background: 'white', padding: '10px', margin: '0 auto' }}>
                                {/* <img src={data.modal.game_detail.image_path} alt="" style={{ width: '100%', height: '200px', objectFit: 'cover', margin: 'auto auto 20px auto' }} /> */}
                                <p style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center', fontSize: '16px',
                                    fontWeight: '700',
                                    color: 'black'
                                }}> Your Points:
                                    {/* @ts-ignore */}
                                    <span>{data.customer_total_point}</span> </p>
                                {/* <p style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center', fontSize: '16px',
                                    fontWeight: '700',
                                    color: 'black'
                                }}> Minimum Points required to play:
                                    <span>{data.game_levels[0].required_point}</span>
                                </p> */}
                                <p style={{ textAlign: 'center', fontSize: '16px', color: 'black' }}>  The Prizes you have won will be showed here </p>
                                <div style={{ height: '300px', width: '100%', overflow: 'auto', padding: '10px' }} >
                                    {
                                        value ?
                                            <>
                                                {
                                                    prize.map((item: any, index: number) => {
                                                        return <p key={index} style={{ textAlign: 'start', fontSize: '16px', fontWeight: '600', color: 'black' }}>
                                                            {item.title === 'SORRY NEXT TIME' ? '' : 'You Won '}
                                                            {item.title}</p>
                                                    })
                                                }
                                            </>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className='mx-auto'>
                                {
                                    !loading &&
                                    <WheelComponent
                                        segments={segments}
                                        segColors={colors}
                                        winningSegment={"8"}
                                        onFinished={(winner: any) => onFinished(winner)}
                                        primaryColor="black"
                                        contrastColor="white"
                                        buttonText="Spin"
                                        isOnlyOnce={true}
                                        classes="wheel-container"
                                    />
                                }
                            </div>
                        </div>
                        :
                        null
                }
            </div >

            <Footer />
        </>
    )
}
