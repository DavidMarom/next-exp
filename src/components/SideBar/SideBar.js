"use client";
import Link from "next/link";
import styles from './sidebar.module.css'

function SideBar() {
    return (
        <div className={styles.container}>
            <Link href="/"><div className={styles.sidebarbtn}>Home</div></Link>
            <Link href="/david"><div className={styles.sidebarbtn}>David</div></Link>
            <Link href="/noams"><div className={styles.sidebarbtn}>Noam</div></Link>
            <Link href="/yarin"><div className={styles.sidebarbtn}>Yarin</div></Link>
        </div>
    )
}

export default SideBar