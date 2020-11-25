import React from 'react'
import {useTranslation} from 'react-i18next'
import {Job} from "../../models/Job";
import {TFunction} from "i18next";
import styles from './JobComponent.module.scss'

type JobComponentProps = {
    job: Job
}

export const JobComponent = ({job}: JobComponentProps) => {
    let t: TFunction;
    t = useTranslation("translation").t;
    return (
        <div className={styles.jobContainer}>
            <div className={styles.jobImage}><img src={job.JOB_IMAGE} alt={job.COMPANY_NAME}/></div>
            <div className={styles.jobTitle}>{job.JOB_TITLE}</div>
            <div className={styles.jobCompanyName}>{job.COMPANY_NAME}
                <span className={styles.jobCompanyAddress}> ({job.COMPANY_ZIP} {job.COMPANY_CITY})
            </span>
            </div>
            <div className={styles.jobTimeRange}>{job.FROM} - {job.CURRENT ? t("UNTIL_NOW") : job.UNTIL}</div>
            <div className={styles.jobDescription}>{job.DESCRIPTION}</div>
        </div>

    )
};
