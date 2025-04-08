import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Results = () => {
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // 模拟获取导入的结果
    const fetchResults = async () => {
      // 这里可以替换成实际的API请求
      const mockResults = [
        { rank: 1, name: 'House A', area: '120 sqm', price: '$200,000', score: 90 },
        { rank: 2, name: 'House B', area: '150 sqm', price: '$250,000', score: 85 },
      ];
      setResults(mockResults);
    };

    fetchResults();
  }, []);

  return (
    <div className="results-container">
      <h2>Results</h2>
      {results.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>House Name</th>
              <th>Area</th>
              <th>Price</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {results.map(result => (
              <tr key={result.rank}>
                <td>{result.rank}</td>
                <td>{result.name}</td>
                <td>{result.area}</td>
                <td>{result.price}</td>
                <td>{result.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No results available. Please import the project list first.</p>
      )}
    </div>
  );
};

export default Results;