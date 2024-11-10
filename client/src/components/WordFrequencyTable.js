// client/src/components/WordFrequencyTable.js
import React from 'react';

function WordFrequencyTable({ wordData }) {
  if (wordData.length === 0) return <p>No data to display.</p>;

  return (
    <table className="word-frequency-table">
      <thead>
        <tr>
          <th>Word</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody>
        {wordData.map(({ word, frequency }, index) => (
          <tr key={index}>
            <td>{word}</td>
            <td>{frequency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default WordFrequencyTable;
