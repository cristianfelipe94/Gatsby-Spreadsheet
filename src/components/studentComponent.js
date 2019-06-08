import React from "react"
import PropTypes from "prop-types"
import Studend from "./studend"

const StudentComponent = ({ data }) => {
    const dataStudents = data;
    return (
        <div>
          {dataStudents.map(({ node }) => (
              <Studend
              name={node.name}
              career={node.career}
              generation={node.generation}
              portfolio={node.portfolio}
              social={node.social}
              avatar={node.avatar}
              />
          ))}
        </div>
    );
};

export default StudentComponent