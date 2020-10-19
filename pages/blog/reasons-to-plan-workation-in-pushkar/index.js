import { useState, useEffect } from "react";
import Head from "next/head";

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
          Workcation in Pushkar - A Rejuvenating Option for Work and Vacay
        </title>
        <meta
          name="description"
          content="Planning for a work and vacation in Rajwada style? Then nothing can beat a Workation in Pushkar, a perfect serene getaway in home of Lord Brahma."
        />
        <meta
          name="keywords"
          content="Workcations At Pushkar, Workation At Pushkar, Pushkar workcation, Pushkar Workation, things to do in Pushkar, Pushkar Villas, Villas in Pushkar, Cafes in Pushkar, Camel Fair in Pushkar"
        />
        <meta
          property="og:image"
          content="/reasons-to-plan-workation-in-pushkar/reasons-to-plan-workation-in-pushkar.jpg"
        />
        <meta
          property="og:description"
          content="Planning for a work and vacation in Rajwada style? Then nothing can beat a Workation in Pushkar, a perfect serene getaway in home of Lord Brahma."
        />
        <meta
          property="og:title"
          content="Workcation in Pushkar - A Rejuvenating Option for Work and Vacay"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <BlogContent>
          <Tags>
            <span>Remote Work</span>
            <span>Workcations</span>
          </Tags>
          <BlogTitle>
            Workcation in Pushkar - A Rejuvenating Option for Work and Vacay
          </BlogTitle>
          <SocialShare slug={"reasons-to-plan-workation-in-pushkar"} />
          <ImageCon>
            <Image
              src="/reasons-to-plan-workation-in-pushkar/reasons-to-plan-workation-in-pushkar.jpg"
              alt="Workcation in Pushkar - A Rejuvenating Option for Work and Vacay"
            />
            <Caption></Caption>
          </ImageCon>
          <Text>
            The glory, history, and rich culture of Pushkar do not need any
            introduction. This ancient town located in Rajasthan has been
            popularly known for its spiritual significance, as a very rare Lord
            Brahma temple is located here. The local cafes serving lip-smacking
            dishes, annual cattle fair, the holy lake, and adventure activities
            make it a perfect place to stay for a Work and Vacation. <br />
            <br />
            What would be better than having a view of the Bhrama Lake from your
            Workstation, and getting the hippy vibes with a touch of royal
            culture of Rajasthan? <br />
            <br />
            Reasons, why you should take a break and plan a Workation in
            Pushkar.
          </Text>

          <SubHeading>Ghats of Pushkar</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workation-in-pushkar/ghats.jpg"
                alt="Pushkar Ghats"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Each of the 52 Ghats around Pushkar Lake has a different view of the
            town. While you take a stroll around the lake, find your favorite
            ghat and take a dip in its holy waters too.
          </Text>

          <SubHeading>Cafe Hopping</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workation-in-pushkar/cafe.jpg"
                alt="Cafe Hopping"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Pushkar is a melting pot for a lot of cultures, and it reflects in
            the food that's served here. You can opt for traditional dishes or
            try out some Israeli food at the unique cafes in Pushkar.
          </Text>

          <SubHeading>Evening Aarti</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workation-in-pushkar/aarti.jpg"
                alt="Evening Aarti"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The evening aarti is a must-attend event if you actually want to
            witness the positive energy of this place. The aroma of incense, the
            diya lighting, and the synchronized chants make Pushkar a divine
            experience.
          </Text>

          <SubHeading>Explore the Handicraft Market</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workation-in-pushkar/handicraft-market.jpg"
                alt="Handicraft Market"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The gypsy market of Pushkar can make even the not so avid shoppers
            crazy with the collection it offers. More than anything else, the
            colorful shops make for an instaworthy backdrop for your photos.
          </Text>

          <SubHeading>Hike to Savitri Temple</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-plan-workation-in-pushkar/savitri-temple.jpg"
                alt="Savitri Temple"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            If you're looking for a good bird's eye view of this town, some
            photo-worthy landscapes, and some blessings from the deity, then you
            must visit the Savitri Temple. You can choose to hike or book
            yourself a cable car.
          </Text>

          <SocialShare slug={"reasons-to-plan-workation-in-pushkar"} />
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
