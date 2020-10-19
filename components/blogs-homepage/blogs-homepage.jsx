import React from "react";
import Link from "next/link";

import BlogsList from "../../redux/blog/blogList";

import {
  Container,
  Card,
  Image,
  Title,
  Description,
  ReadMore,
} from "./blogs-homepage.style";

const Blogs = () => (
  <Container className="remove-scrollbar">
    {BlogsList.map(({ slug, title, description }) => (
      <Link key={slug} href={`/blog/${slug}`} passHref>
        <Card key={slug} target="_blank">
          <Image
            style={{
              backgroundImage: `linear-gradient(to top,rgba(0,0,0,.7) 15%,rgba(0,0,0,0) 40%),url(/${slug}/${slug}.jpg)`,
            }}
          >
            <Title>{title}</Title>
          </Image>
        </Card>
      </Link>
    ))}
  </Container>
);

export default Blogs;
