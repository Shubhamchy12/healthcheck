import React from "react";

function TestCard({title,description}){
    return(
        <div className="test-card">
            <h4>{title}</h4>
             <p>{description}</p>
        </div>
    )
}

export default TestCard;