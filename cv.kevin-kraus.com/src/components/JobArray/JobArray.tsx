import React from 'react';
import {TFunction} from "i18next";
import {useTranslation} from "react-i18next";
import {Job} from "../../models/Job";
import {JobComponent} from "../JobComponent/JobComponent";


export const JobArray = () => {
    let t : TFunction;
    t = useTranslation('translation').t;
    let translatedJobs: Array<Job> = t('Jobs');

    return (
        <div>
            {translatedJobs.map((job: Job) => (
                <JobComponent job={job}/>
            ))
            }
        </div>
    )
};
