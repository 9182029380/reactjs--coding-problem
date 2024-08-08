import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = ({ currentRecord, setCurrentRecord, fetchRecords }) => {
  const [formData, setFormData] = useState({
    language: '',
    topicname: '',
    name: '',
    leetcodeLink: '',
    tutorialLink: '',
    difficultyLevel: '',
    stepsToApproach: ''
  });

  useEffect(() => {
    if (currentRecord) {
      setFormData(currentRecord);
    }
  }, [currentRecord]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      if (currentRecord) {
        await axios.put(`http://your-backend-api-url/update/${currentRecord.id}`, formData);
        alert('Record updated successfully');
        setCurrentRecord(null);
      } else {
        await axios.post('http://localhost:9090/api/create', formData);
        alert('Record created successfully');
      }
      setFormData({
        language: '',
        topicname: '',
        name: '',
        leetcodeLink: '',
        tutorialLink: '',
        difficultyLevel: '',
        stepsToApproach: ''
      });
      fetchRecords();
    } catch (error) {
      console.error('Error submitting record: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="language" value={formData.language} onChange={handleChange} placeholder="Language" required />
      <input type="text" name="topicname" value={formData.topicname} onChange={handleChange} placeholder="Topic Name" required />
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="leetcodeLink" value={formData.leetcodeLink} onChange={handleChange} placeholder="Leetcode Link" />
      <input type="text" name="tutorialLink" value={formData.tutorialLink} onChange={handleChange} placeholder="Tutorial Link" />
      <input type="text" name="difficultyLevel" value={formData.difficultyLevel} onChange={handleChange} placeholder="Difficulty Level" />
      <textarea name="stepsToApproach" value={formData.stepsToApproach} onChange={handleChange} placeholder="Steps to Approach"></textarea>
      <button type="submit">{currentRecord ? 'Update' : 'Submit'}</button>
    </form>
  );
};

export default Form;
