import axios from "axios";
import React, { useState, useEffect } from "react";
import './data.css'

function Data() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  return (
    <section className="posts">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
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

export default Data;
