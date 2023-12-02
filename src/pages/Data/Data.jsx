// Import necessary modules
import axios from "axios";
import React, { useState, useEffect } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

// Import component styling
import "./data.css";

// Define the Data component
function Data() {
  // State to store fetched data and loading status
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const totalPosts = data.length;
  const user1Posts = data.filter((d) => d.userId === 1).length;
  const user1Percentage = (user1Posts / totalPosts) * 100;

  const pieChartData = [
    { name: "User ID 1", value: user1Percentage },
    { name: "Other Users", value: 100 - user1Percentage },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  // useEffect to fetch data from the API on component mount
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      // Update state with fetched data and set loading to false
      setData(response.data);
      setLoading(false);
    });
  }, []);

  // JSX rendering based on loading status
  return (
    <section className="posts">
      <div className="pie-chart-container">
        <h2>Pie Chart</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieChartData}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              label
            >
              {pieChartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {loading ? (
        // Loading state display
        <div>Loading...</div>
      ) : (
        // Render data in a table format
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {/* Map through data to create table rows */}
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

// Export the Data component
export default Data;
