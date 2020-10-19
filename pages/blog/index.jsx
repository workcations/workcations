import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/layout/layout";

import Heading from "../../components/heading/heading";

import {
  BlogContainer,
  Grid,
  GridItem,
  Title,
  ImageCon,
  Image,
  Date,
  Tags,
  Description,
  ReadMore,
} from "../../components/blogs/blog.style";

import BlogsList from "../../redux/blog/blogList";

const BlogCollection = () => {
  const isServer = typeof window === "undefined";

  const [loadElements, setLoadElements] = useState(false);

  const handleScroll = () => {
    if (isServer || loadElements) return;
    setLoadElements(true);
  };

  useEffect(() => {
    if (!isServer) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (!isServer) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);
  return (
    <Layout>
      <Head>
        <title>Workcations Blogs</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Heading>Your Workcations Guide</Heading>
        <Grid>
          {BlogsList.map(({ slug, title, description, tags, date }) => (
            <Link key={slug} href={`/blog/${slug}`} passHref>
              <GridItem key={slug}>
                <Title>{title}</Title>
                <ImageCon>
                  <Image src={`/${slug}/${slug}.jpg`} alt={title} />
                </ImageCon>
                <Description>{description}</Description>
                <ReadMore>Read More</ReadMore>
                <Date>{date}</Date>
                <Tags>
                  {tags.map((tag) => (
                    <span key={slug + "-" + tag}>{tag}</span>
                  ))}
                </Tags>
              </GridItem>
            </Link>
          ))}
        </Grid>
      </BlogContainer>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default BlogCollection;
