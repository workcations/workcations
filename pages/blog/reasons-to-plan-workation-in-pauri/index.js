import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../../components/layout/layout";
import SocialShare from "../../../components/social-share/social-share";

import {
  BlogContainer,
  BlogContent,
  BlogSidebar,
  BlogTitle,
  Tags,
  Text,
  ImageCon,
  Image,
  Source,
  Caption,
  SubHeading,
  SuggestedRead,
} from "../../../components/blogs/blog-item.style";

const BlogItem = () => {
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
        <title>Five Reasons to Work and Vacay in Pauri</title>
        <meta
          name="description"
          content="Want to plan a peaceful workation in Pauri? Here are the five reasons which make pauri the best pick for Workcation. "
        />
        <meta
          name="keywords"
          content="Workation in Pauri, Reasons to Visit Pauri, things to do in Pauri, Workcations in Pauri, Pauri Workation, Places for Workation in india"
        />
        <meta
          property="og:image"
          content="/reasons-to-plan-workation-in-pauri/reasons-to-plan-workation-in-pauri.jpg"
        />
        <meta
          property="og:description"
          content="Want to plan a peaceful workation in Pauri? Here are the five reasons which make pauri the best pick for Workcation. "
        />
        <meta
          property="og:title"
          content="Five Reasons to Work and Vacay in Pauri"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <BlogContent>
          <Tags>
            <span>Pauri</span>
            <span>Workcations</span>
          </Tags>
          <BlogTitle>Five Reasons to Work and Vacay in Pauri</BlogTitle>
          <SocialShare slug={"reasons-to-plan-workation-in-pauri"} />
          <ImageCon>
            <Image
              src="/reasons-to-plan-workation-in-pauri/reasons-to-plan-workation-in-pauri.jpg"
              alt="Five Reasons to Work and Vacay in Pauri"
            />
            <Caption></Caption>
          </ImageCon>
          <Text>
            Not only Pauri's pristine beauty but the breathtaking view of dusks
            enchants tourists. Situated at the height of 1814 m in the Garhwal
            region, this beautiful hill station is surrounded by lush forests,
            waterfalls, spiritual places, and whatnot.
            <br />
            <br />
            Pauri is the perfect destination for taking a break from the humdrum
            affairs of the normal life and plan a workation to get a chance to
            work with a peaceful surrounding.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/reasons-to-choose-bir-for-workcation" passHref>
              <a target="_blank">
                Pristine Paradise: Here’s Why You Should Go For A Workcation To
                Bir
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>The Country Life</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workation-in-pauri/country-life.jpg"
                alt="Country Life"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Pauri offers good internet connectivity but is far too away from the
            hush of metro life! It's calm, serene and a place you'll find mostly
            in the novels! All in all, a great place to retrieve your lost peace
            of mind.
          </Text>

          <SubHeading>Himalayan Peaks!</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workation-in-pauri/himalayan-peaks.jpg"
                alt="Himalayan Peaks"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The mountains have long been a source of inspiration for the
            greatest minds to get working! <br />
            <br />
            While you spend your workcations in Pauri, you'll be surrounded by
            not one but Many Himalayan Peaks including Chaukhamba, Nanda Devi,
            Hathi Parvat, and Even Kedarnath to name a few!
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link
              href="/blog/make-the-most-of-your-workcation-in-kasol"
              passHref
            >
              <a target="_blank">Make The Most Of Your Workcation In Kasol</a>
            </Link>
          </SuggestedRead>

          <SubHeading>The Blessings of Almighty!</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workation-in-pauri/temple.jpg"
                alt="Temple"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            There's something miraculous about Uttarakhand! Maybe it's the
            belief of locals in their deities, such that there is always an air
            of positivity around! <br />
            <br />
            At Pauri, you can seek blessings at Tarkeshwar Mahadev Temple, which
            is a major attraction here!
          </Text>

          <SubHeading>Trek your heart out!</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workation-in-pauri/trek.jpg"
                alt="Trek"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Pauri offers a little something for everyone! There are options for
            both long and short treks from Pauri! Go through the lush forests of
            Binsor-Gairsain, or take on the Doodhatoli Trek! You can camp around
            various fishing areas to have a relaxing activity to look forward
            to!
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link
              href="/blog/work-from-mountain-destinations-with-good-wifi"
              passHref
            >
              <a target="_blank">
                Perfect Workcations Spots With The Most Reliable WiFi
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>Picnic in Khirsu</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workation-in-pauri/khirsu-new.jpg"
                alt="Khirsu"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Relive your childhood days when one would just go to a quaint spot
            with some packed food, games, and books in hand! 20 km from Pauri is
            Khirsu, which could be your ideal weekend spot and a reward for
            making through the week!
          </Text>

          <SocialShare slug={"reasons-to-plan-workation-in-pauri"} />
        </BlogContent>
        <BlogSidebar></BlogSidebar>
      </BlogContainer>
    </Layout>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export default BlogItem;
