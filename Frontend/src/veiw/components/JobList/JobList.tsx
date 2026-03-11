import type { job } from '../../../interfaces';

export default function JobList(job:job) {
    return (
        <li>
            <h3>{job.company}</h3>
            <img src={job.logo} alt={`${job.company} logo`} />
            <h4>{job.position}</h4>
            <p>{job.role}</p>
            <p>{job.level}</p>
            <p>{job.postedAt}</p>
            <p>{job.contract}</p>
            <p>{job.location}</p>
            <ul>
                {job.languages.map((language, index) => (
                    <li key={index}>{language}</li>
                ))};
            </ul>
            {job.tools && (
                <ul>
                    {job.tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            )};
        </li>
    );
};