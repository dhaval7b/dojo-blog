import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title:'My new website', body: 'lorem ipsum ...', author:"mario", id:1},
    { title:'welcome party', body: 'lorem ipsum ...', author:"yoshi", id:2},,
    { title:'web dev top lists', body: 'lorem ipsum ...', author:"mario", id:3}
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  const [name, setName] = useState('mario');

  useEffect(() => {
    console.log("Effect ran");
  }, [name]);

  // const handleClickAgain = (name) => {
  //   console.log(`hello ${name}`);
  // }
    return (
      <div className="home">
        <BlogList blogs={blogs} title="All blogs!" handleDelete={handleDelete} />
        <BlogList blogs={blogs.filter((blog)=> blog.author === 'mario')} handleDelete={handleDelete} title="mario's blogs"/>
        {name}
        <button onClick={()=>setName('luigi')}>change name</button>
      </div>
    );
  }
   
  export default Home;