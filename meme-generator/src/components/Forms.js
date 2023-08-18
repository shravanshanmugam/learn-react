import React from 'react'
import '../style/forms.css'

export default function Forms() {
    const [formData, setFormData] = React.useState({comments: "", isFriendly: false, employment: "", favoriteColor: "" });
    console.log("formData", formData)
    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }

        });
    }
    return <main>
        <form className="form">
            <textarea placeholder="How are you feeling today?" className="form--input" onChange={handleChange} name="comments" value={formData.comments} />
            <label htmlFor="isFriendly" id="isFriendly-label">
                <input type="checkbox" id="isFriendly" className="form--input" onChange={handleChange} name="isFriendly" value={formData.isFriendly} />
                Are you friendly?
            </label>
            <fieldset className="form--input">
                <legend>Current employment status</legend>
                <label htmlFor="unemployed">
                    <input type="radio" id="unemployed" name="employment" value="unemployed" checked={formData.employment === "unemployed"} onChange={handleChange} />
                    Unemployed
                </label>
                <label htmlFor="part-time">
                    <input type="radio" id="part-time" name="employment" value="part-time" checked={formData.employment === "part-time"} onChange={handleChange} />
                    Part time
                </label>
                <label htmlFor="full-time">
                    <input type="radio" id="full-time" name="employment" value="full-time" checked={formData.employment === "full-time"} onChange={handleChange} />
                    Full time
                </label>
            </fieldset>
            <label htmlFor="favorite-color" id="favorite-color-label">What is your favorite color?
                <select id="favorite-color" className="form--input" name="favoriteColor" value={formData.favoriteColor} onChange={handleChange}>
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </label>
        </form>
        </main>
}