import react from "react";

interface Card{
    src: string;
    title: string;
    paragraph: string;
}

const Card = (props:Card) => {
    return (
        <div className="flex flex-col items-center text-center shadow-lg p-10 rounded-xl my-10 basis-1/4 bg-gray-800 dark:bg-gray-300 text-gray-300 dark:text-gray-800">
            <img className="object-contain h-20 w-20" src={props.src} alt="" />
            <h3 className="text-lg font-medium pt-8 pb-2">{props.title}</h3>
            <p className="py-2">{props.paragraph}</p>
        </div>
    )
}

export default Card;