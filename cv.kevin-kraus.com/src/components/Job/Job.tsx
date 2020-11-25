import React from 'react'
import {useTranslation} from 'react-i18next'
import {Job} from "../../models/Job";
import {TFunction} from "i18next";

export const JobComponent = () => {
    let t : TFunction;
    t = useTranslation('translation').t;
    let translatedJobs: Array<Job> = t('Jobs');


    return (
        <div>
            {translatedJobs.map((job: Job) => (
                <div>
                    <h1>{job.COMPANY_NAME}</h1>
                    <h2>{job.COMPANY_ZIP} {job.COMPANY_CITY}</h2>
                    <h3>{job.JOB_TITLE}</h3>
                    <h4>{job.FROM} - {job.CURRENT ? t("UNTIL_NOW") : job.UNTIL}</h4>
                    <h5>{job.DESCRIPTION}</h5>
                </div>
            ))}
        </div>
    )
};
