import { useContext } from 'react'
import './index.css'
import { ThemeContext } from '../../context/ThemeContext'

const VideoCard = props => {
    const [isLight] = useContext(ThemeContext)
    const {videoDetails, handleClick} = props
    const {channelName, channelProfile, id, publishedAt, thumbnailUrl, title, views} = videoDetails


    return (
        <>
            <div onClick={() => handleClick(id)} className={`videocard-container ${isLight ? "vcontainer-light" : "vcontainer-dark"}`}>
                <img className='thumbnail' src={thumbnailUrl} />
                <div className='flex-container1'>
                    <img src={channelProfile} className='channel-profile' />
                    <div className='text-container'>
                        <h4 className='video-title'>{title}</h4>
                        <p className={`channel-name ${isLight ? "light-channel" : "dark-channel"}`}>{channelName}</p>
                        <p className={`descp ${isLight ? "light-descp" : "dark-descp"}`}>{views} views • {publishedAt}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VideoCard