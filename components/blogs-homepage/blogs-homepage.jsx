import React, { useRef } from "react";
import Link from "next/link";

import BlogsList from "../../redux/blog/blogList";

import {
  CompContainer,
  Container,
  ArrowContainer,
  Card,
  Image,
  Title,
  Description,
  ReadMore,
} from "./blogs-homepage.style";

const Blogs = () => {
  const cardsContainer = useRef(null);

  const nextCards = () => {
    cardsContainer.current.scrollLeft += 300;
  };

  const previousCards = () => {
    cardsContainer.current.scrollLeft -= 300;
  };
  return (
    <CompContainer>
      <ArrowContainer onClick={previousCards}>
        <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M14.19 16.005l7.869 7.868-2.129 2.129-9.996-9.997L19.937 6.002l2.127 2.129z" />
        </svg>
      </ArrowContainer>
      <Container ref={cardsContainer} className="remove-scrollbar">
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
      <ArrowContainer onClick={nextCards}>
        <svg viewBox="0 0 32 32" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z" />
        </svg>
      </ArrowContainer>
    </CompContainer>
  );
};

export default Blogs;
