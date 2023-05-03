import React from 'react';

const InterviewList = ({ interviews }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Applicant Name</th>
          <th>Position</th>
          <th>Interview Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {interviews.map((interview) => (
          <tr key={interview.id}>
            <td>{interview.applicantName}</td>
            <td>{interview.position}</td>
            <td>{new Date(interview.interviewDate).toLocaleDateString()}</td>
            <td>{interview.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InterviewList;
