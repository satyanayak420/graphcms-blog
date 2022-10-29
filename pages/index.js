// import type { NextPage } from 'next'
import Head from "next/head";
import Image from "next/image";
import { PostCard, PostWidget, Categories, Header } from "../components";
import { getPosts } from "../services";
import { FeaturedPost } from "../sections";

const Home = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPost />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <PostCard post={post.node} key={post.createdAt} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-18">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

      {/* <Image height={} width src={} alt objectFit="" layout="fill"/> */}
    </div>
  );
};
// export const getServerSideProps = async () => {
//   const posts = await getPosts() || []
//   return {
//     props: {
//       posts
//     }
//   }
// }
export const getStaticProps = async () => {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
};

export default Home;
