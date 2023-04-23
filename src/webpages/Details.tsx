import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { DESTINATION_DETAILS } from '../constants/data'
import axios from 'axios'
import { LoginContext } from '../context/Context'
import Loading from '../components/Loader'

export default function Details() {
  const { destination } = useParams()
  const { user, decrypt, setMessage, setMessageType, setShow, setLoading } = React.useContext(LoginContext)

  const [data, setData] = React.useState<any>(null)

  const ApiCall = React.useRef(() => { })


  ApiCall.current = async function () {
    setLoading(true)
    let { data } = await axios.get(DESTINATION_DETAILS + destination, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + user.token
      }
    })
    data = decrypt(data.result)
    if (!data.isError) {
      console.log(data)
      setData(data.modal)
      setLoading(false)
    }
    else {
      setLoading(false)
      setMessage('Something Went Wrong. Please Try again Later')
      setMessageType('error')
      setShow(true)
    }
    return
  }

  React.useEffect(() => {
    ApiCall.current()
  }, [])
  return (
    <>
      <Header />
      <div className='w-full lg:h-[80vh] bg-[#f5f5f5]'>
        {
          !data ? <Loading /> :
            <>
              <div className='py-14 w-11/12 md:w-10/12 flex flex-col md:flex-row justify-start items-start mx-auto'>
                {
                  data.description_img_vid_path && data.description_img_vid_file_type && (
                    <video width="400" className='w-11/12 md:w-[400]' controls>
                      <source src={data.description_img_vid_path} type={`video/${data.description_img_vid_file_type}`} />
                      Your browser does not support HTML video.
                    </video>
                  )
                }
                {
                  data.banner_path && (
                    <img src={data.banner_path} alt={`${data.name} Banner`} className='w-11/12 md:w-[400]' />
                  )
                }
                <div className='md:ml-4'>
                  <p className='text-black text-[20px] md:text-[24px] font-[600] leading-6 '>About {data.name}</p>
                  <p className='text-black opacity-90 my-2 text-[18px] font-[400] leading-6 '>About {data.name}</p>
                </div>
              </div>
              <div className='w-11/12 md:w-10/12 mx-auto'>
                <p className='text-black text-[20px] md:text-[28px] font-[600] leading-6 '>Games Available</p>
                <div className='my-6 mx-auto' style={{
                  display: 'grid',
                  gap: '1rem',
                  gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,250px),1fr))',
                }}>
                  {
                    !data.destination_games ? 'No Games Available' :
                      data.destination_games.map((item: any) => {
                        return (
                          <div className="w-full h-auto ">
                            <p className='text-[18px] w-full py-3 text-black my-1 rounded-t-md text-center font-[400] '>You Won {item.total_points ? item.total_points : "0"} Points</p>
                            <p className='text-[18px] w-full py-3 text-white bg-[#312f92] rounded-t-md text-center font-[700] '>{item.game_name}</p>
                            <img src={item.game_image_path} alt="jigsaw" className='h-[150px] w-full ' />
                            {
                              data.game_completed_level ?
                                <a href={`/destination/${destination}/game/${item.game_slug}`} className='text-[18px] block w-full py-3 text-white bg-[#fc3532] rounded-b-md text-center font-[700] '>Play Now</a>
                                :
                                <p className='text-[18px] cursor-pointer block w-full py-3 text-white bg-[#fc3532] rounded-b-md text-center font-[700] '>Cannot Play</p>
                            }
                          </div>
                        )
                      })
                  }
                </div>
              </div>
            </>
        }
      </div>
      <Footer />
    </>
  )
}
