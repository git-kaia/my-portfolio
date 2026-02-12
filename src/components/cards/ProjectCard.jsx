// components/cards/ProjectCard.jsx

import GitHub from "../svg/GitHub";

export default function ProjectCard({ title, description, button, imageSrc }) {
    return (
        <div className="flex flex-col items-center justify center">
            <img src={imageSrc} alt={title} className="w-full h-auto rounded-lg" />
            <h2 className="text-lg font-semibold mt-4">{title}</h2>
            <p className="text-sm text-gray-600 mt-2">{description}</p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Project</button>
            <button className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">View Process</button>

            <div>
            <GitHub className="w-6 h-6 mt-4" />
            <p>
            View project repository on GitHub.
            </p>
            </div>
        </div>
    );
}
