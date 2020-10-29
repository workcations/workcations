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
        <title>Million Dollar Benefits of Working from Mountains</title>
        <meta
          name="description"
          content="Living in the mountains is like a dream for everyone! Here are seven benefits of living in the mountains which worth a million dollars."
        />
        <meta name="keywords" content="Remote Work, Workcations" />
        <meta
          property="og:image"
          content="/benefits-from-working-from-mountains/benefits-from-working-from-mountains.jpg"
        />
        <meta
          property="og:description"
          content="Living in the mountains is like a dream for everyone! Here are seven benefits of living in the mountains which worth a million dollars."
        />
        <meta
          property="og:title"
          content="Million Dollar Benefits of Working from Mountains"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/benefits-from-working-from-mountains/benefits-from-working-from-mountains.jpg)`,
          }}
        >
          Million Dollar Benefits of Working from Mountains
        </Cover>
        <BlogContent>
          <SocialShare slug={"workation-to-workcation"} />
          <Tags>
            <span>Remote Work</span>
            <span>Workcations</span>
          </Tags>
          <Text>
            Mountains always give a homely feeling or warmth to every human. The
            cool breeze touching your face while standing on the edge of a cliff
            is beyond everything. It's such things that make us fall for
            mountains every time.
            <br />
            <br />
            Pandemic killed our vacation plans, snatched the possibilities to
            visit our beloved mountain destinations, but with the unlock 3 and
            relaxation in travel guidelines, it is possible to visit some of
            your favourite travel destinations. <br />
            <br />
            Considering all the safety instructions, we have got a better plan
            for you. What if instead of planning a short vacation, you can make
            mountains your home? Isn't it the perfect dream come true scenario?{" "}
            <br />
            <br />
            It is time to join the new phase of travel and work. Introducing
            Workcations, an excellent venture to club remote work while being on
            a vacation. Before you make your mind to plan a workcation, here are
            few valuable benefits of working from mountains.
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
          <SubHeading>
            A chance to live surrounded by a natural paradise
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/benefits-from-working-from-mountains/natural-paradise.jpg"
                alt="Natural Paradise"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            From high mountains peaks to beautiful forest trails, if you're
            living in the mountains, you have the privilege to experience the
            mesmerizing aura of the surrounding. Plants, animals, and even
            humans live free lives here. Pollution-free environment, clean
            skies, and a chance to experience the purity of nature is what you
            need to let go the toxicity of metro life.
          </Text>

          <SubHeading>Tons of privacy</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/benefits-from-working-from-mountains/privacy.jpg"
                alt="Tons of Privacy"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Living in the Mountains is a great deal for the people who
            appreciate peace and a chance to explore the untouched nature on
            their own. With less population density, it could be easier for you
            to find a remote place as you need and a chance to live without any
            intruding neighbours in eyesight. This is one of the most desirable
            benefits of working from mountains.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/panoramic-treks-around-kasol" passHref>
              <a target="_blank">
                Workcation In Kasol? Unwind With Some Nearby Treks
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>
            Unbeatable views for you to set up your work desk
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/benefits-from-working-from-mountains/views.jpg"
                alt="Unbeatable Views"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            What if you decide what mesmerizing vista would you want to see from
            your balcony? Watching beautiful mountain ranges, clear skies are
            far better and motivating than watching a pile of utensils in your
            kitchen. With good internet speed, it has become easier to set up a
            workstation at several hilly places without any hassle.
          </Text>

          <SubHeading>
            Endless outdoor activities to balance work-life
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/benefits-from-working-from-mountains/outdoor.jpg"
                alt="Endless outdoor activities"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Before the COVID19 outbreak, most of us used to save money so that
            we can plan trekking and biking trips with our friends on the
            weekends. There are numerous good adventure activities likes skiing,
            paragliding, mountain biking, rock climbing, and hiking which make
            the whole idea of living in the mountains so much cooler and
            interesting. It is like you can take a short vacation whenever you
            want, all you have to do is step out of your temporary home.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/reasons-to-choose-manali-for-workation" passHref>
              <a target="_blank">Why Manali Is Our Fave Workcation Spot?</a>
            </Link>
          </SuggestedRead>

          <SubHeading>Inspiration to Be Active</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/benefits-from-working-from-mountains/active.jpg"
                alt="Inspiration to Be Active"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            There’s a magical thing about the sight of mountains that just calls
            the soul. It encourages us to keep our aim high and drive us to work
            harder to reach our goals. Numerous options for outdoor activities
            help us to remain active and fit.
          </Text>

          <SubHeading>Conclusion:</SubHeading>
          <Text>
            Living and working from the mountains is once in a lifetime
            experience. It is the perfect time to plan a workcation and cash all
            the benefits of working from mountains. Mountains are calling again,
            don't miss your chance to answer that call.
          </Text>

          <SocialShare slug={"benefits-from-working-from-mountains"} />
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
