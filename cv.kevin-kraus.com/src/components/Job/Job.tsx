import React from 'react'
import {useTranslation} from 'react-i18next'
import {Job} from "../../models/Job";

export const JobComponent = () => {
    let translatedJobs: Array<Job> = useTranslation('translation').t('Jobs');


    return (
        <div>
            {translatedJobs.map((job: Job) => (
                <div>
                    <h1>{job.COMPANY_NAME}</h1>
                    <h2>{job.COMPANY_ZIP} {job.COMPANY_CITY}</h2>
                    <h3>{job.JOB_TITLE}</h3>
                    <h4>{job.FROM} - {job.CURRENT ? "now" : job.UNTIL}</h4>
                    <h5>{job.DESCRIPTION}</h5>
                </div>
            ))}
        </div>
    )
};
