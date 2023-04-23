import React from 'react'
import '../styles/spinner-wheel.css'
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';
// @ts-ignore
import CryptoJS from "crypto-js";
import { API_BASE_URL, SECRET_KEY } from '../constants/data';
import WheelComponent from './Wheel';

export default function WheelOfFortune() {

    const [value, setValue] = React.useState('');
    const [prize, setPrize] = React.useState<any>([]);
    const [data, setData] = React.useState('null');


    // async function apiCall() {
    //     const destination = localStorage.getItem('destinationSlug');
    //     const bearer = localStorage.getItem('tokenkey');

    //     const response = await axios.get(`${API_BASE_URL}game/${destination}/wheel`, {
    //         headers: {
    //             'Authorization': 'Bearer ' + bearer
    //         },
    //     });
    //     if (response) {
    //         var bytes = CryptoJS.AES.decrypt(response.data.result, SECRET_KEY);
    //         var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    //         setData(decryptedData);
    //         console.log(decryptedData);
    //         localStorage.setItem('game_id', decryptedData.modal.game_detail.id);
    //         localStorage.setItem('level', decryptedData.modal.game_levels[0].level);
    //     }
    // }



    const segments = [
        "Try Again",
        "1000 Points",
        "2000 Points",
        "3000 Points",
        "4000 Points",
        "5000 Points",
        "Try Again",
        "1st Prize",
        "2nd Prize",
        "3rd Prize",
    ];

    const weelColors = () => {
        let arr: any = [];
        let colors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
        segments.forEach((el) => {
            let color: any = colors.shift();
            arr.push(color);
            colors.push(color);
        });

        return arr;
    };
    const segColors = weelColors();

    function onFinished(name: any) {
        setValue(name)
        setPrize((p: any) => {
            return [...p, name]
        })
    }

    // React.useEffect(() => {
    //     apiCall()
    // }, [])
    return (
        <>

            <Header />
            {
                data ?
                    <div className='w-full lg:h-[80vh] bg-[#f5f5f5]'>
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
                                    <span>{localStorage.getItem('point')}</span> </p>
                                <p style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center', fontSize: '16px',
                                    fontWeight: '700',
                                    color: 'black'
                                }}> Minimum Poinst required to play:
                                    {/* <span>{data.modal.game_levels[0].required_point}</span> */}
                                </p>
                                <p style={{ textAlign: 'center', fontSize: '16px', color: 'black' }}>  The Prizes you have won will be showed here </p>
                                <div style={{ height: '300px', width: '100%', overflow: 'auto', padding: '10px' }} >
                                    {
                                        value ?
                                            <>
                                                {
                                                    prize.map((item: any, index: number) => {
                                                        return <p key={index} style={{ textAlign: 'start', fontSize: '16px', fontWeight: '600', color: 'black' }}>
                                                            {item === 'Try Again' ? '' : 'You Won '}
                                                            {item}</p>
                                                    })
                                                }
                                            </>
                                            :
                                            null
                                    }
                                </div>
                            </div>
                            <div className='mx-auto'>
                                <WheelComponent
                                    segments={segments}
                                    segColors={segColors}
                                    winningSegment={"8"}
                                    onFinished={(winner: any) => onFinished(winner)}
                                    primaryColor="black"
                                    contrastColor="white"
                                    buttonText="Spin"
                                    isOnlyOnce={true}
                                    classes="wheel-container"
                                />
                            </div>
                        </div>
                    </div >
                    :
                    null
            }

            <Footer />
        </>
    )
}
