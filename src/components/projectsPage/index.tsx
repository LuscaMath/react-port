import React, { Fragment } from "react";
import ProjectsComponents from "../projectsComponents";
import { FaSpotify, FaMoneyBill, FaGamepad, FaCalculator } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import { BsScissors } from "react-icons/bs";




const ProjectsPage = () => {
    return (
        <Fragment>
            <div>
                <h3 className="text-3xl py-1">Projetos</h3>
                <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300 text-justify">
                    Abaixo estão alguns dos projetos desenvolvidos por mim.
                </p>
            </div>
            <div className="flex flex-col gap-2 py-10 lg:flex-row lg:flex-wrap lg:justify-center">
                <ProjectsComponents
                    href={'google.com'}
                    icon={<FaSpotify />}
                    title={'Spotfy Clone'}
                    paragraph={'Clone responsivo do layout do Spotfy'}
                />
                <ProjectsComponents
                    href={'google.com'}
                    icon={<FaMoneyBill />}
                    title={'Finans layout'}
                    paragraph={'Layout responsivo de um site de finanças'}
                />
                <ProjectsComponents
                    href={'google.com'}
                    icon={<FaGamepad />}
                    title={'Jogo Mata Mosquito'}
                    paragraph={'Jogo feito com Vanilla JS'}
                />
                <ProjectsComponents
                    href={'google.com'}
                    icon={<AiFillBook />}
                    title={'Layout Escola'}
                    paragraph={'Layout responsivo sobre educação'}
                />
                <ProjectsComponents
                    href={'google.com'}
                    icon={<BsScissors />}
                    title={'Site para barbearia'}
                    paragraph={'Website com sistema de agendamento de horários'}
                />
                <ProjectsComponents
                    href={'google.com'} 
                    icon={<FaCalculator />}
                    title={'Calculadora'}
                    paragraph={'Calculadora desenvolvida com Vanilla JS'}
                />
            </div>
        </Fragment>
    )
}

export default ProjectsPage;        