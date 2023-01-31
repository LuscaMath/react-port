import React, { Fragment } from "react";

interface ProjectsIcons {
    href: string;
    title: string;
    paragraph: string;
    icon: JSX.Element;
}

const ProjectsComponents = (props: ProjectsIcons) => {
    return (
        <Fragment>
            <a href={props.href}>
                <div className="bg-gray-300 border-solid border-4 border-gray-800 p-6 rounded-lg flex flex-col text-center justify-center items-center gap-5 w-80 h-80 dark:text-black">
                    <span className="text-6xl text-gray-800">{props.icon}</span>
                    <h1>{props.title}</h1>
                    <p>{props.paragraph}</p>
                </div>
            </a>
        </Fragment>
    )
}

export default ProjectsComponents;  