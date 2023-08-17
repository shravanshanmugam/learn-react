import React from "react";
import '../index.css'
import locationIcon from '../images/location-icon.svg'

export default function Journal(props) {
    return <div class="container">
    <div className="content-container">
    <div class="location-image-container">
            <img src={props.imageUrl} alt="location-img" className="location-image"></img>
        </div>
        <div class="journal-content-container">
            <div className="journal-title">
                <div className="location-icon">
                    <img src={locationIcon} alt="location-icon" className="location-icon" />
                </div>
                <div className="country-name">
                    {props.country.toUpperCase()}
                </div>
                <div className="map-url">
                    <span href={props.mapUrl}>View on Google Maps</span>
                </div>
            </div>
            <div className="location-name">
                {props.location}
            </div>
            <div className="date">
                {props.startDate} - {props.endDate}
            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
    </div>
        
        <div className="ruler" />
    </div>
}