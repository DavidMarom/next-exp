"use client";
import PropTypes from "prop-types"
import { SBContainer } from "./SideBar.style"
import Image from 'next/image'
import Link from 'next/link';
import { Row } from '../index.js'

function SideBar({
    width = "200px",
    height = "100vh",
    justifycontent = "start",
    background = "#B7B7B7"
}) {

    return (
        <SBContainer
            justifycontent={justifycontent}
            height={height}
            background={background}
            width={width}
        >
            <Row justifycontent="space-around" marginbottom="40px">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </Row>
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
    justifycontent: PropTypes.string
}

export default SideBar
