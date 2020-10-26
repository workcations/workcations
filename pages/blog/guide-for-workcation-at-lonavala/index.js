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
        <title>Pack Your Bags & Have A Workcation At Lonavala</title>
        <meta
          name="description"
          content="Planning for a much awaited workcation at Lonavala? Here is list of activities which you should explore at your staycation at lonavala."
        />
        <meta
          name="keywords"
          content="Workcations At Lonavala, Workation At Lonavala, Lonavala workcation, Lonavala Workation, things to do in Lonavala, Lonavala Villas, Villas in Lonavala"
        />
        <meta
          property="og:image"
          content="/guide-for-workcation-at-lonavala/guide-for-workcation-at-lonavala.jpg"
        />
        <meta
          property="og:description"
          content="Planning for a much awaited workcation at Lonavala? Here is list of activities which you should explore at your staycation at lonavala."
        />
        <meta
          property="og:title"
          content="Pack Your Bags & Have A Workcation At Lonavala"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <BlogContent>
          <Tags>
            <span>Lonavala</span>
            <span>Workcations</span>
          </Tags>
          <BlogTitle>Pack Your Bags & Have A Workcation At Lonavala</BlogTitle>
          <SocialShare slug={"guide-for-workcation-at-lonavala"} />
          <ImageCon>
            <Image
              src="/guide-for-workcation-at-lonavala/guide-for-workcation-at-lonavala.jpg"
              alt="Pack Your Bags & Have A Workcation At Lonavala"
            />
            <Caption></Caption>
          </ImageCon>
          <Text>
            Lonavala to Punekars and Mumbaikars is what Hamptons to New Yorkers!
            Who doesn’t like the lush green mountains, hillocks, cascades, dams,
            museums and multiple other attractions of Lonavala? The popular
            destination has a lot to offer to everyone. If boredom has
            stealthily creeped into your life and you are looking for a place
            other than your home, Lonavala is the way to go! Set up your
            workstation and enjoy a fabulous workcation, a long work vacation in
            awesome resorts and homestays of Lonavala. You can also opt for a
            long stay with your loved ones and not miss even a single spot.
          </Text>

          <SubHeading>Workcation In Lonavala</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/guide-for-workcation-at-lonavala/workcation.jpg"
                alt="Workcation in Lonavala"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Workcation is a latest fad that means you work out of a vacation
            destination. Better performance, fresh perspective and unwinding are
            also some of the reasons for why you should set up your workstation
            in Lonavala. Wake up to a gorgeous hilly view, enjoy the perennially
            pleasant chilly weather and unwind with interesting activities. The
            resorts have cozy vibes here and a lot of other in-house facilities.
          </Text>

          <SubHeading>Enjoy Sunrise/Sunsets Everyday</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/guide-for-workcation-at-lonavala/sunrise.jpg"
                alt="Sunrise"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            When enjoying a long stay in Lonavala, make sure you enjoy
            sunrise/sunset everyday at Lion’s point, tiger’s point and many
            other spots.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/reasons-to-setup-remote-office" passHref>
              <a target="_blank">
                How Setting Up A Workplace At Remote Location With Employees Is
                A Good Idea?
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>Picnics By The Salter Lake</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/guide-for-workcation-at-lonavala/camp.jpg"
                alt="Camping"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Salter Lake is one of the most beautiful water bodies in Lonavala.
            You can pack your picnic basket and definitely have a gala time
            beside the lake.
          </Text>

          <SubHeading>Visit Various Dams</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/guide-for-workcation-at-lonavala/dams.jpg"
                alt="Dams"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Lonavala is dammed (pun intended!) when it comes to dams. Extremely
            popular among people are Bushi Dam, Valvan Dam, and the one on
            Tungarli lake.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/workcations-the-new-normal-of-work-life" passHref>
              <a target="_blank">
                Workcations: The New Trend That Brings Travel And Work Together
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>Cascade Magic</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/guide-for-workcation-at-lonavala/waterfalls.jpg"
                alt="Waterfall"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            You will lose the count while thinking about waterfalls in Lonavala.
            Visit the magnificent Kune falls, Lonavala waterfalls, Bhivpuri
            fall, Reverse falls, Kataldhar falls and many more.
          </Text>

          <SubHeading>Lonavala Is Every Trekker’s Paradise</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/guide-for-workcation-at-lonavala/trekking.jpg"
                alt="Trekking"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            There are number of treks around Lonavala. Explore untapped gems, go
            on morning walking tours, camping and lot of interesting activities.
            You will find many forts and temples in the vicinity that are
            excellent for night treks. Lohgad, Rajmachi, Korigad are some of the
            popular treks. For steep treks, go on a trek the Tal Baila trek.
          </Text>

          <SubHeading>Foodies, Go on A Culinary Tour</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/guide-for-workcation-at-lonavala/culinary.jpg"
                alt="Food"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Hot chai and spicy missal pav, Lonavala has amazing eateries that
            you must visit. Lonavala is also known for its delicious street
            food. Buvachi Usal is known to serve spiciest of missal. If you are
            a chai enthusiast, try 20 types of amazing hot piping teas from Jai
            Shiv Shankar Chaiwala. They even have a German Bakery in Lonavala!
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/reasons-to-plan-workcation-in-gokarna" passHref>
              <a target="_blank">
                Bangalore Techies, Reasons Why You Should Have A Workcation In
                Gokarna
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>Buy Chikkis & Fudge</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/guide-for-workcation-at-lonavala/chikki.jpg"
                alt="Chikki"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            When in Lonavala, stock up on different types of chikkis from
            sweetmeat stores. Same goes with fudge that is available in so many
            yummy flavours. Try the chocolate fudge, walnut-brownie fudge, kaju
            fudge and satiate your sweet tooth. The Maganlal chikki is one of
            the popular chikki brand that you can enjoy.
          </Text>

          <SubHeading>Hot Air Balloon Safari Tours</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/guide-for-workcation-at-lonavala/hot-air-balloon.jpg"
                alt="Hot Air Balloon"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Lonavala is one of the few destinations in India that offer amazing
            hot air balloon tours. Look up for agencies that offer these tours
            and do make sure you admire the beautiful town whilst up. The tours
            are easy on the pocket and truly memorable.
          </Text>

          <SocialShare slug={"guide-for-workcation-at-lonavala"} />
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
