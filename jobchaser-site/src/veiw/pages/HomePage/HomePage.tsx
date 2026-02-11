import { useState, useEffect } from 'react';
import { jobs } from '../../../data';
import JobList from '../../components/JobList/JobList';
import type { job } from '../../../interfaces';

export default function Homepage () {
    const [search, setSearch] = useState<string>("")
    const [list, setList] = useState<Array<job>>(jobs);

    function searchResults(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
        e.preventDefault();
        jobs.map((job)=>{
            if(job.position.indexOf(search) > -1) {
                setList(prev => {
                    return [
                        ...prev,
                        job
                    ]
                })
            }
        })
        console.log(list)
    }

    const handleSearchText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    useEffect(()=>{
        console.log(jobs)
    }, []);

    return (
        <div>
            <input
            type='text'
            onChange={handleSearchText}
            />
            <button onClick={searchResults}>Search</button>

            {jobs.map((job) => 
                <JobList key={job.id} {...job} />
            )}


        </div>
    );
};