import React from 'react'
import { FaRegBookmark  } from 'react-icons/fa';

export const card = (props) => {
  return (
    <>
        <div className="card">
            <div className="top">
                <img src={props.logo} alt="" className="logo" />
                <button className="btn">
                    <p>save</p>
                    <div className='icon_bm'>
                        <FaRegBookmark  />
                    </div>
                </button>
            </div>
            <div className="center">
                <div className="company">
                    <h3>{props.company}</h3>
                    <p className='time'>{props.duration}</p>
                </div>
                <h3>{props.post}</h3>
                <div className="btn-req">
                    <button>{props.tag1}</button>
                    <button>{props.tag2}</button>
                </div>
            </div>
            <div className="bottom">
                <div className="price">
                    <h1>
                        {props.salary}
                    </h1>
                    <p>{props.location}</p>
                </div>
                <button type="submit">Apply now</button>
            </div>
        </div>
    </>
  )
}

export default card;