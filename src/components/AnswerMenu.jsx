import React, { useEffect, useState } from "react";
import Typography from "antd/es/typography/Typography";
import { Button } from "antd";

export default function AnswerMenu({ options, figures, onAnswerSelect }) {
    return (
        <div className="answerMenu">
            {
                options.map((option, index) => {
                    return (
                        <Button
                            type='primary'
                            className="answerOption"
                            key={index}
                            onClick={() => onAnswerSelect(index)}
                        >
                            <Typography className="answerOptionText">
                                {option}
                            </Typography>
                            <span>
                                <img src={figures[index]} className="answerMenuImg" />
                            </span>

                        </Button>

                    );
                })
            }
        </div>
    );
}