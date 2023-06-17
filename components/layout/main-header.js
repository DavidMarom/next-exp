import Link from "next/link";
import { Row } from "../ui/index"

import classes from "./main-header.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">TheBoldDevelopers</Link>
      </div>
      <nav className={classes.navigation}>
        <Row>
          <Link href="/events">Browse All Events</Link>
          <Link href="/david">David</Link>
        </Row>
      </nav>
    </header>
  );
}

export default MainHeader;
