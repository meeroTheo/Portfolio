import { useState } from "react";
const brandColors: { [key: string]: string } = {
    react: '#61DAFB',
    angular: '#DD0031',
    python: '#3776AB',
    fastapi: '#009688',
    nodejs: '#68A063',
    postgresql: '#336791',
    mongodb: '#4DB33D',
};

const TechMention = ({IconComponent,colorClass, link,name,iconSize = "size-5 sm:size-6"}: {
    IconComponent: React.ElementType;
    colorClass: string; 
    link: string;
    name: string;
    iconSize?: string;
}) => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);

    const iconColorKey = colorClass.startsWith('text-') ? colorClass.substring(5) : colorClass;
    const iconFillColor = brandColors[iconColorKey] || 'currentColor'; 

    return (
        <span
            className={`inline-flex items-baseline whitespace-nowrap relative`} 
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
        >
            <IconComponent
                className={`inline-block mr-1 mb-px ${iconSize}`}
                style={{ fill: iconFillColor }} 
            />
            
            <a href={link} target="_blank" rel="noopener noreferrer" className={`font-medium hover:underline ${colorClass}`} >
                {name}
            </a>
            {isTooltipVisible && (
                <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                                    bg-neutral-800 text-white text-xs sm:text-sm py-1 px-2 rounded
                                    whitespace-nowrap z-20 pointer-events-none transition-opacity duration-150 opacity-100`}>
                    {name}
                    <span className={`absolute w-2 h-2 bg-neutral-800 transform rotate-45 top-full -mt-1 left-1/2 -translate-x-1/2 pointer-events-none`} />
                </span>
            )}
        </span>
    );
};

export default TechMention