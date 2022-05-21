import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import NewsCard from '../../components/NewsCard/NewsCard';
import { NewsContainer } from '../../components/NewsCard/NewsCard.styles';


export default function Home() {
const [posts, setPosts] = useState<any>([])

 async function fetchRedditPosts() {
    const url = 'https://www.reddit.com/r/Crypto_Currency_News/hot.json';

await axios.get(url)  .then(res => {
  const posts = res.data.data.children.map((obj: { data: any; }) => obj.data);
  setPosts(posts)
});

  }
  useEffect(() => {
    fetchRedditPosts()
  }, []);

  console.log(posts)
  return (
    <>
    <Navbar/>
    <NewsContainer>

    {posts.length > 0 && posts.map((post:any, idx: number) => {

      return (

      <NewsCard key={idx} title={post.title} thumnail={post.thumbnail} url={post.url}></NewsCard>
      )

    })}
          </NewsContainer>

    </>
  )
}
