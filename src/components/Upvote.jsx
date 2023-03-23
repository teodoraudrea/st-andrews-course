import { Button, Typography } from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState, useEffect } from "react";
import React from "react";

export default function Upvote(props){
    let [votes, setVotes] = useState(0);
    const [details, setDetails] = useState([]);
    useEffect(() => {
        (async () => {
            let fetchResult = await fetch("https://api.consumet.org/meta/tmdb/{Everything Everywhere}")
            let result = await fetchResult.json;
            console.log(result);
        })
    }, []);

    return(
        <div>
            <Typography>
                This video has {votes} upvotes
            </Typography>
            <Button onClick={() => setVotes(votes + 1)}>
                <ArrowUpwardIcon/>
            </Button>
        </div>
    );
}