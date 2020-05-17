import React from "react";

function WorkExperience(props) {
    const cards = (
        <div>{props.experiences.map((experience) =>
            <div className="card flex-md-row flex-column" style={{margin: "2rem", borderRadius: "8px"}}>
                <img src={experience.image}
                     alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{experience.employer}</h5>
                    <p className="card-text">{experience.description}</p>
                    <ul className="list-group list-group-flush">
                        {experience.tasks.map((task) =>
                            <li className="list-group-item">{task}</li>
                        )}
                    </ul>
                    <div className="card-footer text-muted">
                        {experience.duration}
                    </div>
                </div>
            </div>
        )}
        </div>
    );
    return (
        <div>{cards}</div>
    )
}
export default WorkExperience;