import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../../components/layout/layout";
import SocialShare from "../../../components/social-share/social-share";
import BlogSidebarContent from "../../../components/blog-sidebar-content/blog-sidebar-content";

import {
  BlogContainer,
  Cover,
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
        <title>
          Pristine Paradise: Here’s Why You Should Go For A Workcation To Bir
        </title>
        <meta
          name="description"
          content="Want to plan a calming and exciting Workation in Bir? Here are things that makes Bir a perfect destination for a workcation"
        />
        <meta
          name="keywords"
          content="Workcation in Bir, Workation in Bir, Bir Workation. Workation destinations in India, workcation in India, workcation ideas"
        />
        <meta
          property="og:image"
          content="/benefits-from-working-from-mountains/benefits-from-working-from-mountains.jpg"
        />
        <meta
          property="og:description"
          content="Want to plan a calming and exciting Workation in Bir? Here are things that makes Bir a perfect destination for a workcation"
        />
        <meta
          property="og:title"
          content="Pristine Paradise: Here’s Why You Should Go For A Workcation To Bir"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/reasons-to-choose-bir-for-workcation/reasons-to-choose-bir-for-workcation.jpg)`,
          }}
        >
          Pristine Paradise: Here’s Why You Should Go For A Workcation To Bir
        </Cover>
        <BlogContent>
          <SocialShare slug={"reasons-to-choose-bir-for-workcation"} />
          <Tags>
            <span>Bir Billing</span>
            <span>Workcations</span>
          </Tags>
          <Text>
            Beautiful mountains, lush green foliage, authentic cuisine, awesome
            weather, outdoorsy activities – don’t these factors make for a
            perfect vacation? Book your long stay or a workcation (a vacation
            and work) at a beautiful destination and maintain a great work-life
            balance. Why not choose the picturesque village of Bir in Himachal
            Pradesh. Take a breather from mundane routine and book a workcation
            there because, with travel resuming, a lot of other activities are
            resuming as well. Here’s why Bir is one of our favorite picks for
            workcations:
          </Text>

          <SubHeading>Paragliding Has Resumed</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-choose-bir-for-workcation/paragliding.jpg"
                alt="Paragliding"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Bir is a very popular destination for paragliding. COVID19 had put
            full-stop on all the outdoorsy activities in many places including
            Bir. The good news is that Bir has resumed the sport. What are you
            waiting for? Enjoy breeze across your face while your adrenaline
            pumps up.
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

          <SubHeading>Explore Quaint Local Cafes</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-choose-bir-for-workcation/cafes.jpg"
                alt="Quaint Local Cafes"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Pahadi villages tend to have a lot of quaint and quirky local cafes
            that are totally Insta-worthy! Explore beautiful cafes and enjoy the
            lip-smacking dishes such as Ara Café, Vairagi Café, Byron Bay,
            Musafir. The best thing is the rustic décor that gives out comfy
            vibes. Eat, read your favorite book or even work while sipping on
            beverages.
          </Text>

          <SubHeading>Serene Getaway To Buddhist Monasteries</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-choose-bir-for-workcation/monasteries.jpg"
                alt="Buddhist Monasteries"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Enjoy a spiritual sojourn and meditate at the beautiful Buddhist
            monasteries that are there aplenty in Bir. The atmosphere is calm,
            serene, and full of good vibes. Some of the popular names include
            Palpong monastery, Chokling, Dzongsar, Palyul etc.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/reasons-to-choose-manali-for-workation" passHref>
              <a target="_blank">Why Manali Is Our Fave Workcation Spot?</a>
            </Link>
          </SuggestedRead>

          <SubHeading>Go On Cycling Treks</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-choose-bir-for-workcation/cycling.jpg"
                alt="Cycling Treks"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Have too many presentations? While on a workcation, you can take a
            break and focus on your health by going on a cycling trek. Break a
            sweat while pedaling amongst a clump of trees, snow-clad mountains,
            and beautiful foliage.
          </Text>

          <SubHeading>Walking Tours Across Bir River</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-choose-bir-for-workcation/bir-river.jpg"
                alt="Bir River"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Enough with adventure activities, sometimes all you need is a long
            walk. There is nothing more exhilarating than walking across cold,
            crystal-clear and fresh water rivers.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/panoramic-treks-around-kasol" passHref>
              <a target="_blank">
                Workcation In Kasol? Unwind With Some Nearby Trek
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>Scenic Picnics To Take A Break From Work</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-choose-bir-for-workcation/scenic.jpg"
                alt="Scenic Picnics"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            When working, why not have a lunch picnic instead? Go to a scenic
            destination such as valley foothills, meadows, creek-side and enjoy
            yummy food while admiring the scenery.
          </Text>

          <SubHeading>Conclusion:</SubHeading>
          <Text>
            When on workcations, work is a lot more fun as there are great views
            and tons of other activities that will rejuvenate you. Why opt for
            the well-known common destinations, when you can opt for the
            picturesque ones like Bir.
          </Text>

          <SocialShare slug={"reasons-to-choose-bir-for-workcation"} />
        </BlogContent>
        {loadElements ? (
          <BlogSidebar>
            <BlogSidebarContent />
          </BlogSidebar>
        ) : (
          <BlogSidebar></BlogSidebar>
        )}
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
