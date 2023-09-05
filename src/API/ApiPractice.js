import React, { useEffect, useState } from 'react';

const ApiPractice = () => {
    const [data, setData] = useState([]); // Initial state as an empty array

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.log('error', error));
    }, []);

    return (
        <div>
            <h1>API Table Format</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>body</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ApiPractice;
