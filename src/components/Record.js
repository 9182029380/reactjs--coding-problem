import React from 'react';
import axios from 'axios';

const Record = ({ record, setCurrentRecord, fetchRecords }) => {
  const handleEdit = () => {
    setCurrentRecord(record);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://your-backend-api-url/delete/${record.id}`);
      alert('Record deleted successfully');
      fetchRecords();
    } catch (error) {
      console.error('Error deleting record: ', error);
    }
  };

  return (
    <div className="record">
      <h3>{record.name}</h3>
      <p>Language: {record.language}</p>
      <p>Topic Name: {record.topicname}</p>
      <p>Leetcode Link: {record.leetcodeLink}</p>
      <p>Tutorial Link: {record.tutorialLink}</p>
      <p>Difficulty Level: {record.difficultyLevel}</p>
      <p>Steps to Approach: {record.stepsToApproach}</p>
      <button className="edit" onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Record;
