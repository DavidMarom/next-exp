"use client";
import PropTypes from "prop-types";
import { SBContainer } from "./SideBar.style";
import Link from "next/link";
import Image from "next/image";
import {Row} from "../index";

function SideBar({
    width = "200px",
    height = "100vh",
    justifyContent = "start",
    background = "#B7B7B7",
}) {
    return (
        <SBContainer
            justifyContent={justifyContent}
            height={height}
            background={background}
            width={width}
        >
            <Row justifycontent="space-around" marginbottom="40px">
                <Image src="/logo.png" alt="Logo" width={50} height={50} />
            </Row>

            <Link href="/">Home</Link>
            <Link href="/david">Mongo test</Link>
            <Link href="/noams">Noams page</Link>
            <Link href="/yarin">Yarin Levi</Link>
        </SBContainer>
    );
}

SideBar.propTypes = {
    width: PropTypes.string,
    children: PropTypes.node,
    height: PropTypes.string,
    background: PropTypes.string,
    justifyContent: PropTypes.string,
};

export default SideBar;
