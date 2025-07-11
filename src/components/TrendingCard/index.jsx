import { useContext } from 'react'
import './index.css'
import { ThemeContext } from '../../context/ThemeContext'

const TrendingCard = props => {
    const {trendDetails, clickTrendVideo} = props
    const {id, channelName, channelProfile, publishedAt, title, views, thumbnail} = trendDetails
    const [isLight] = useContext(ThemeContext)
    return (
        <div onClick={() => clickTrendVideo(id)} className={`trending-card ${isLight ? "card-light" : "card-dark"}`}>
            <img src={thumbnail} className='thumbnail-trend' />
            <div className={`sodhi`}>
                <img src={channelProfile} className={`channel-profile-trending`} />
                <div className={`txt-div-trend ${isLight ? "tcdiv-light" : "tcdiv-dark"}`}>
                    <h2 className={`tc-title ${isLight ? "tc-title-light" : "tc-title-dark"}`}>{title}</h2>
                    <p className={`tchannelName ${isLight ? "tchannel-light" : "tchannel-dark"}`}>{channelName}</p>
                    <p className={`tdescp ${isLight ? "tdescp-light" : "tdescp-dark"}`}>{views} Views • {publishedAt}</p>
                </div>
            </div>
        </div>
    )
}

export default TrendingCard