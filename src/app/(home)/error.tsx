"use client";

import { useEffect } from "react";

interface ErrorProps {
    error: Error,
    reset: () => void,
}

export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.log(error);
    }, []);

    return (
        <div style={{ padding: "10rem" }}>
            <h1>:&lt;</h1>
            <p>An error occurred.</p>
            <button onClick={reset}>Try again</button>
        </div>
    );
}

