import React, {useEffect,useState} from "react";
import Typography from "antd/es/typography/Typography";

export default function AnswerMenu({options, figures}) {
    return(
        <div className="answerMenu">
            {
                options.map((option, index) => {
                    return(
                        <div className="answerOption" key={index}>
                            <Typography className="answerOptionText">
                            {option}
                            </Typography>
                            <img src={figures[index]} />
                            {/* todo fix image sizing*/}
                        </div>
                    );
                })
            }
        </div>
    );
}