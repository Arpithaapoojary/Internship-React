import { useEffect, useState } from "react";
import axios from "axios";

function Fetching() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        setContent(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    handleFetch();
  }, []);
  return (
    <div className="flex flex-row flex-wrap gap-9">
      {content.map((item) => (
        <h1 key={item} className="text-xl font-bold bg-slate-600">
          {item.name}
        </h1>
      ))}
    </div>
  );
}

export default Fetching;
