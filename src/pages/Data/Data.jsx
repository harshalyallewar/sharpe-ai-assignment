// Import necessary modules
import axios from "axios";
import React, { useState, useEffect } from "react";

// Import component styling
import "./data.css";

// Define the Data component
function Data() {
  // State to store fetched data and loading status
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
