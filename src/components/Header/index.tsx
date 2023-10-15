"use client"
import {Flex, NavLink, Stack} from "@mantine/core";
import Image from "next/image";
import classes from "@/components/Header/Demo.css";

const aulas = [{
    label: "Aula 01",
    link: "/aula-01"
}, {
    label: "Aula 02",
    link: "/aula-02"
}, {
    label: "Aula 03",
    link: "/aula-03"
}, {
    label: "Aula 04",
    link: "/aula-04"
}]
const Header = () => {

    return <Flex className={"absolute p-4 w-full"}>
        <Flex w={"70%"}>
            <Image src={"/logo.png"} alt={"logo"} width={100} height={100} className={"mt-[1rem] ml-[8rem]"}/>
        </Flex>
        <Flex w={"30%"}> {aulas.map((aula, index) => {
            return <NavLink className="classes.header" href={aula.link} key={index} label={aula.label}/>
        })}</Flex>
    </Flex>
}

export default Header;