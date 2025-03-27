import React, { memo } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

function Search({ title, company, type, experience, location, skills, job_link, postedOn }) {
  const currentDate = dayjs();
  const diffInDays = currentDate.diff(postedOn, 'week');

  return (
    <div className="w-full px-4 gap-6">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 bg-zinc-200 border-black shadow-lg rounded-lg hover:border-blue-500  gap-4">
    <div className="flex flex-col items-start ">
      <h1 className="text-lg font-semibold">{title} - {company}</h1>
      <p className="text-sm text-gray-600">{type} • {experience} • {location}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <p key={skill} className="text-gray-500 py-1 px-3 rounded-md border border-black text-sm">{skill}</p>
        ))}
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center gap-4">
      <p className="text-sm text-gray-500">Posted {diffInDays} days ago</p>
      <a href={job_link}>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm">Apply</button>
      </a>
    </div>
  </div>
</div>

  );
}

Search.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  job_link: PropTypes.string.isRequired,
  postedOn: PropTypes.string.isRequired,
};

export default memo(Search);
