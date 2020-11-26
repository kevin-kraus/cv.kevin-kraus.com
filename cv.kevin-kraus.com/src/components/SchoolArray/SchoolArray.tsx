import React from 'react';
import {TFunction} from "i18next";
import {useTranslation} from "react-i18next";
import {School} from "../../models/School";
import {SchoolEntry} from "../SchoolEntry/SchoolEntry";


export const SchoolArray = () => {
    let t : TFunction;
    t = useTranslation('translation').t;
    let translatedEducation: Array<School> = t('Education');

    return (
        <div>
            {translatedEducation.map((education: School) => (
                <SchoolEntry school={education}/>
            ))
            }
        </div>
    )
};
