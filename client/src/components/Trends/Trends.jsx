import React from 'react'
import './Trends.css';
import {TrendData} from '../Data/TrendData';
const Trends = () => {
  return (
    <div className="TrendCard">
        <h3>Trends for you</h3>
        {
            TrendData.map(trend => {
                return(
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>#{trend.shares}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Trends