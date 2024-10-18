import Link from "next/link";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/" scroll={false}>Home</Link>
          </li>
          <li>
            <Link href="/store" scroll={false}>Store</Link>
          </li>
          <li>
            <Link href="/test" scroll={false}>Test</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
