import React from 'react'
import usePresentationCard from './usePresentationCard'
// images
import twitter from '@assets/images/twitter.png'
import instagram from '@assets/images/instagram.png'
import github from '@assets/images/github.png'

const PresentationCard = () => {

    const data = usePresentationCard();

    return (
    <div className="card">
        <div className="card_details">
            <PresentationPhoto picture={data?.picture?.large}/>
            <p className="card_title">Hi, My name is</p>
            <p className="card_value">{data?.name?.first} {data?.name?.last}</p>
        </div>
        <div className="card_userdata">
          <ul>
            <li>{data?.email}</li>
            <li>{data?.location?.country}</li>
          </ul>
        </div>
        <SocialMedia/>
    </div>
    )
}

const PresentationPhoto = ({picture, alt}) => {
    return (
        <div className="card_photo center circle">
            <img src={picture} alt={alt} />
            <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{enableBackground: "new -580 439 577.9 194"}} xmlSpace="preserve">
                <circle cx="50" cy="50" r="40" />
            </svg>
        </div>
    )
}

const SocialMedia = () => {
    return (
        <div className="card_social">
            <a href="https://twitter.com/gndx">
            <img src={twitter} />
            </a>
            <a href="https://github.com/gndx">
            <img src={github} />
            </a>
            <a href="https://instagram.com/gndx">
            <img src={instagram} />
            </a>
        </div>
    )
}

export default PresentationCard