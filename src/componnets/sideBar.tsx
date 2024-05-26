import React, {useEffect, useState} from 'react';
import axios from "axios";

type Course = {
    name: string;
    id: string;
    image: string;
    bgColor: string;
    tags: string[];
};

export const SideBar = () => {

    const [courses, setCourses] = useState<Course[]>([]);
    const [tagFilter, setTagFilter] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://logiclike.com/docs/courses.json');
                const coursesData: Course[] = response.data;
                setCourses(coursesData);
            } catch (error) {
                console.error('Ошибка при выполнении запроса:', error);
            }
        };

        fetchData();
    }, []);


    const handleTagChange = (tag: string) => {
        setTagFilter(tag);
    };

    return (
        <div className='wrapper'>
            <div className='side-bar-wrapper'>
                <div className="side-bar">
                    <div onClick={() => setTagFilter('')}
                         className={`side-bar__item ${tagFilter === '' ? 'active' : ''}`}>Все Темы
                    </div>
                    {Array.from(new Set(courses.flatMap((course) => course.tags))).map((tag) => (
                        <div key={tag} onClick={() => handleTagChange(tag)}
                             className={`side-bar__item ${tagFilter === tag ? 'active' : ''}`}>
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <div className='content-wrapper'>
                <div className='content'>
                    {courses
                        .filter((course) => tagFilter === '' || course.tags.includes(tagFilter))
                        .map((course) => (
                            <div key={course.id} className="content__item">
                                <div style={{backgroundColor: course.bgColor}} className='content__image'>
                                    <img src={course.image} alt="img"/>
                                </div>
                                <h4 className='content__name'>{course.name}</h4>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

