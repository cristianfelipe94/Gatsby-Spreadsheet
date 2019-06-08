import React from "react"
import PropTypes from "prop-types"
import {Link} from "gatsby"
import Img from "gatsby-image"

const Studend = ({name, career, generation, portfolio, social, avatar}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{career}</h3>
            <p>{generation}</p>
            <Link to={portfolio}>{portfolio}</Link>
            <Link to={social}>{social}</Link>
            <Img href={avatar}/>
        </div>
    );
};

export default Studend