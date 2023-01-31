import React, { Fragment } from "react";
import Card from "../cards";

const AboutMePage = () => {
    return (
        <Fragment>
            <div>
                <h3 className="text-3xl py-1">Sobre Mim</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300 text-justify">
                    Eu sou um desenvolvedor front-end e web designer freelancer a quase um ano,
                    possuo experiência no desenvolvimento de landing pages e websites one page utilizando
                    as tecnologias HTML5, CSS3, Javascript, React e TailWind CSS.
                </p>
            </div>
            <div className="md:flex gap-12 justify-center">
                <Card 
                src={'../../../public/webDesign.svg'}
                title={'Web Design'}
                paragraph={'Designs modernos e bonitos'}
                />
                <Card 
                src={'../../../public/codee.svg'}
                title={'Desenvolvimento Front-end'}
                paragraph={'Códigos modernos e de alta qualidade'}
                />
                <Card 
                src={'../../../public/consultingg.svg'}
                title={'Consultoria'}
                paragraph={'Agende uma consultoria'}
                />
            </div>
        </Fragment>
    )
}

export default AboutMePage;        