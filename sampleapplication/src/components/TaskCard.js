// TaskCard.js
import React from 'react';

const TaskCard = ({ title, description, time, completed, assignees }) => {
  return (
    <div className={`task-card ${completed ? 'completed' : ''}`}>
      <div className="task-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="task-time">{time}</p>
      </div>
      <div className="task-status">
        {completed ? <span className="tick">✔</span> : <span className="circle"></span>}
        <div className="assignees">
          {assignees.map((assignee, index) => (
            <img key={index} src={assignee} alt="assignee" className="assignee-avatar"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
