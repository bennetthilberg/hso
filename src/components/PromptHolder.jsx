import React, {useEffect, useState} from "react";
import Typography from "antd/es/typography/Typography";
import Title from "antd/es/skeleton/Title";

export default function PromptHolder({prompt,promptFigure}) {
    useEffect( () => {
        console.log(`prompt prop: ${prompt}`);
    }, [])
    return(
        <div className="promptHolder">
            <Typography className="promptText">
                {prompt}
            </Typography>
            <img src={promptFigure} className="promptFigure"/>
        </div>
    );
}