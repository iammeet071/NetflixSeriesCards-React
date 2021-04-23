import HoverVideoPlayer from 'react-hover-video-player'

function Cards(props) {
    console.log(props)
    return (
        <>
            <div className="cards">
                <div className="card">

                    <HoverVideoPlayer
                        videoSrc={props.vlinks}
                        style={{
                            width: '17em',
                            height: '11em',
                        }}
                        pausedOverlay={
                            <img src={props.imgsrc} alt="" />
                        }
                        loadingOverlay={
                            <div className="loading-spinner-overlay" />
                        }
                    />

                    <div className="card__info">
                        <span className="card__category">{props.sname}</span>
                        <h3 className="card__title">{props.ctitle}</h3>
                        <a href={props.clink}>
                            <button className='btn'>Watch now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cards;