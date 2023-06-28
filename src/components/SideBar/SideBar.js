"use client";
import PropTypes from "prop-types"
import { SBContainer } from "./SideBar.style"
import Link from 'next/link';

function SideBar({
    width = "200px",
    height = "100vh",
    justifyContent = "start",
    background
}) {

    return (
        <SBContainer
            justifyContent={justifyContent}
            height={height}
            background={background}
            width={width}
        >
            <Link href="/">Home</Link>
            <Link href="/david">Mongo test</Link>
        </SBContainer>
    )
}

SideBar.propTypes = {
    width: PropTypes.string,
    children: PropTypes.node,
    height: PropTypes.string,
    background: PropTypes.string,
    justifyContent: PropTypes.string
}

export default SideBar