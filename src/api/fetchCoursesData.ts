import axios from 'axios';
import {CourseData} from "../types";
import {BASE_URL, COURSES_URL} from "./constans";

export const fetchCoursesData = async (): Promise<CourseData[]> => {
    try {
        const response = await axios.get<CourseData[]>(`${BASE_URL}${COURSES_URL}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
