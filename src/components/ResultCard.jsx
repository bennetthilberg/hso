import React, { useState, useEffect } from "react";
import Typography from "antd/es/typography/Typography";
import { Button, Avatar } from "antd";

export default function ResultCard({ title, desc, mentorName, avatarSrc }) {
    return (
        <div className="resultCard">
            <div className="cardAvatarHolder">
                <Avatar icon="user" src={avatarSrc} size={90}/>
            </div>
            <div className="cardHeader">
                <Typography>
                    <h2 className="cardHeaderText">
                        <span className="headerStrong">{title}</span><br />
                        with <span className="headerStrong">{mentorName}</span>
                    </h2>
                </Typography>
            </div>
            <div className="cardDesc">
                <Typography>
                    {desc}
                </Typography>
            </div>
            <div className="cardButtonHolder">
                <Button className='cardButton'type="primary">Contact</Button>
            </div>
        </div>
    );
}