import React from 'react';

const SkillBar = ({ skill }) => {
    const { image, name } = skill;
    return (
        <div>
            <img className='w-24 h-24 mx-4 rounded-full' src={image} alt={name} />
        </div>
    );
};

export default SkillBar;