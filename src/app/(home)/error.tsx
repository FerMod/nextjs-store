"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: ErrorPageProps) {
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
