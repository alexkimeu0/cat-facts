import React from 'react'
import './Info.css'

const Info = () => {
    return (
        <div className="info">
            <div className="info__top">
                <h1 className="title">Hello Cat Lover!</h1>
                <p className="sub-title">Cat meows, I meow back...then check whether I was on mute -:)</p>
            </div>
            <div className="info__bottom">
                <p>
                    Find some interesting facts about your feline friend.
                     <br />
                    Click on the helpful paw each time you want to learn more.
                    <br />
                    Enjoy!
                </p>
            </div>                        
        </div>
    )
}

export default Info
