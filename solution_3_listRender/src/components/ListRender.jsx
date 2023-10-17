import { useState, useEffect } from 'react';
import axios from 'axios';

const ListRender = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        );
        setPosts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul>
        {posts.map((item) => (
          <li className="card" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListRender;
