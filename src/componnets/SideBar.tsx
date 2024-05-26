import React from 'react';

type SideBarProps = {
    tagFilter: string;
    handleTagChange: (tag: string) => void;
    tags: string[];
};

export const SideBar = ({ tagFilter, handleTagChange, tags }:SideBarProps) => {
    return (
        <div className='side-bar'>
            <div onClick={() => handleTagChange('')} className={`side-bar__item ${tagFilter === '' ? 'active' : ''}`}>
                Все Темы
            </div>
            {tags.map((tag) => (
                <div
                    key={tag}
                    onClick={() => handleTagChange(tag)}
                    className={`side-bar__item ${tagFilter === tag ? 'active' : ''}`}
                >
                    {tag}
                </div>
            ))}
        </div>
    );
};
