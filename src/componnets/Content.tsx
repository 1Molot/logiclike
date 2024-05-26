import React from 'react';
import {CourseData} from "../types";

type ContentProps = {
    courses: CourseData[];
};

export const Content = ({ courses }:ContentProps) => {
    return (
        <div className='content'>
            {courses.map((course) => (
                <div key={course.id} className="content__item">
                    <div style={{ backgroundColor: course.bgColor }} className='content__image'>
                        <img src={course.image} alt="img" />
                    </div>
                    <h4 className='content__name'>{course.name}</h4>
                </div>
            ))}
        </div>
    );
};
