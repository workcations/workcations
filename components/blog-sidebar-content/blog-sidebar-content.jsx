import React from "react";
import Link from "next/link";

import BlogsList from "../../redux/blog/blogList";

import {
  Container,
  Heading,
  Flex,
  FlexItem,
  BlogImage,
  BlogTitle,
} from "./blog-sidebar-content.style";

const BlogSidebarContent = () => (
  <Container>
    <Heading>Our Blog Posts</Heading>
    <Flex>
      {BlogsList.map(({ slug, title, description, tags, date }, i) => (
        <Link key={`Blog no ${i + 1}`} href={`/blog/${slug}`} passHref>
          <FlexItem>
            <BlogImage
              style={{ backgroundImage: `url(/${slug}/${slug}.jpg)` }}
            />
            <BlogTitle>{title}</BlogTitle>
          </FlexItem>
        </Link>
      ))}
    </Flex>
  </Container>
);

export default BlogSidebarContent;
