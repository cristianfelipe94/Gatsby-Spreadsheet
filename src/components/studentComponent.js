import React from "react"
import Studend from "./studend"

function StudentComponent ({data}) {
    const dataStudents = data
    const listData = dataStudents.map((element) => {
        console.log(element.name);
        return (
            <Studend
                name={element.name}
                career={element.career}
                generation={element.generation}
                portfolio={element.portfolio}
                social={element.social}
                avatar={element.avatar}
            />
        )
    })
    return (
        <ul>{listData}</ul>
    )
};


export default StudentComponent