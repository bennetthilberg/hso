import React, {useEffect,useState} from "react";

export default function AnswerMenu({options}) {
    return(
        <div className="answerMenu">
            {
                options.map((option, index) => {
                    return(
                        <div className="answerOption" key={index}>
                            {option}
                        </div>
                    );
                })
            }
        </div>
    );
}