import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import metadata from "./framework/metadata";
import ProjectEntryModel from "./models/ProjectEntryModel";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";



const ProjectEntry = ({ model }: { model: ProjectEntryModel }) => (
    <div className='p-4'>
        <a href={model.url} target="_blank">
            <h2 className='text-3xl text-blue-700 dark:text-blue-300 hover:underline'>
                {model.title}
                {' '}
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="2xs" />
            </h2>
        </a>
        <span className="text-sm">
            {model.startDate.toDateString()}
            {' - '}
            {model.endDate ? <>
                {model.endDate.toDateString()}
            </> : 'current'}
        </span>
        <p className="mt-4">
            {model.description}
        </p>
    </div>

)

const Projects = () => (
    <div>
        {metadata.map(md => <ProjectEntry key={md.title} model={md} />)}
    </div>
)

export default Projects;
