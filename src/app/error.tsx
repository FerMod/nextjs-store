"use client";

import Image from "next/image";
import styles from "app/sass/global-error.module.sass";

export default function GlobalError({ error, reset }: ErrorPageProps) {
    return (
        <main className={styles.Error}>
            <h1 className={styles.Error__title}>An error occurred</h1>
            <Image
                src="/images/error.png"
                alt="Error"
                width={500}
                height={500}
                priority={true}
            />
            <p className={styles.Error_message}>Apparently an error has occurred.</p>
            <button onClick={reset} className={styles.Error__button}>Try again</button>
        </main>
    );
}

