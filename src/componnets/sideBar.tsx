import React, {ChangeEvent, useEffect, useState} from 'react';
import axios from "axios";
import './sideBar.scss';

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


    const handleTagChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setTagFilter(event.target.value);
    };

    return (
        <div className='container'>
            <div className='wrapper'>
                <div className='side-bar'>
                    <select onChange={handleTagChange} value={tagFilter} className='select'>
                        <option value="" className='option'>Все темы</option>
                        {Array.from(new Set(courses.flatMap((course) => course.tags))).map((tag) => (
                            <option key={tag} value={tag} className='option'>
                                {tag}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='content'>
                    {courses
                        .filter((course) => tagFilter === '' || course.tags.includes(tagFilter))
                        .map((course) => (
                            <div key={course.id} className="cards">
                                <div style={{ backgroundColor: course.bgColor }} className='image'>
                                    <img src={course.image} alt="img" style={{ width: '100%', height: '100%' }} />
                                </div>
                                <h4 className='name'>{course.name}</h4>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

