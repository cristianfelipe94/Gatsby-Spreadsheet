import React from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"

const Studend = ({name, career, generation, portfolio, social, avatar}) => {
    return (
        <li>
            <h2>{name}</h2>
            <h3>{career}</h3>
            <p>{generation}</p>
            <Link to={portfolio}>{portfolio}</Link>
            <br/>
            <br/>
            <Link to={social}>{social}</Link>
        </li>
    );
};

export default Studend


// <Img src={avatar}/>