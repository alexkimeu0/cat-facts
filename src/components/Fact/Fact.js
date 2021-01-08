import React, { useState, useEffect } from 'react'
import axios from 'axios'

import paw from '../../images/paw.png'

import './Fact.css'

const Fact = () => {
    const [fact, setFact] = useState('')

    useEffect(() => {
        axios.get('https://catfact.ninja/fact').then(response => setFact(response.data.fact))
    }, [])

    const getFact = () => {
        axios.get('https://catfact.ninja/fact').then(response => setFact(response.data.fact))
    }

    return (
        <div className="fact">
            <div className="fact__content">
                <p>
                    {fact}
                </p>
            </div>            
            <div className="fact__paw">
                <img src={paw} alt="Cat Paw" onClick={getFact} />
            </div>
        </div>
    )
}

export default Fact
