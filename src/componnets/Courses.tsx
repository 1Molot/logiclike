import React, {useEffect, useMemo, useState} from 'react';
import {Content} from './Content';
import {fetchCoursesData} from "../api/fetchCoursesData";
import {SideBar} from "./SideBar";
import {CourseData} from "../types";

export const Courses = () => {
    const [courses, setCourses] = useState<CourseData[]>([]);
    const [tagFilter, setTagFilter] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const coursesData = await fetchCoursesData();
                setCourses(coursesData);
            } catch (error) {
                console.error('Error executing the request', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const handleTagChange = (tag: string) => {
        setTagFilter(tag);
    };

    const tags = useMemo(() => {
        return Array.from(new Set(courses.flatMap((course) => course.tags)));
    }, [courses]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (courses.length === 0) {
        return <div>No courses available.</div>;
    }

    return (
        <div className='wrapper'>
            <div className='side-bar-wrapper'>
                <SideBar tagFilter={tagFilter} handleTagChange={handleTagChange} tags={tags} />
            </div>
            <div className='content-wrapper'>
                <Content courses={courses.filter((course) => tagFilter === '' || course.tags.includes(tagFilter))} />
            </div>
        </div>
    );
};
