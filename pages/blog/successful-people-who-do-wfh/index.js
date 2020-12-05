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
          Highly Successful People Who Are Advocating Remote Work from a Long
          Time
        </title>
        <meta
          name="description"
          content="Work from Home and Workcation has evolved in the last few months, but here is a list of five highly Successful People Who are Working from Home from long ago."
        />
        <meta
          name="keywords"
          content="Work From Home, WFH, Work From Anywhere, Work From Life, Remote Work"
        />
        <meta
          property="og:image"
          content="/successful-people-who-do-wfh/successful-people-who-do-wfh.jpg"
        />
        <meta
          property="og:description"
          content="Work from Home and Workcation has evolved in the last few months, but here is a list of five highly Successful People Who are Working from Home from long ago."
        />
        <meta
          property="og:title"
          content="Highly Successful People Who Are Advocating Remote Work from a Long Time"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/successful-people-who-do-wfh/successful-people-who-do-wfh.jpg)`,
          }}
        >
          Highly Successful People Who Are Advocating Remote Work from a Long
          Time
        </Cover>
        <BlogContent>
          <SocialShare slug={"successful-people-who-do-wfh"} />
          <Tags>
            <span>Remote Work</span>
            <span>Workcations</span>
          </Tags>
          <Text>
            One thing that this ongoing pandemic has popularized is the ‘Work
            From Home’ culture. Yes, the phenomenon has existed forever.
            However, it was always underplayed by corporates, conglomerates as
            well as working professionals. While this has two sides like a coin,
            we have experienced it a great deal.
          </Text>
          <SubHeading>Pros</SubHeading>
          <Text>
            <ol>
              <li>WFH allows us to work from the comfort of our homes.</li>
              <li>
                It enables us to maintain a work-life balance as we save a lot
                of time by not commuting, as well as it preserves resources.
              </li>
              <li>
                It gives the same amount of output with little investment.
              </li>
              <li>It allows us to think out-of-the-box.</li>
              <li>We can focus on ourselves and our mental health.</li>
            </ol>
            WFH has given rise to workcation, a work vacation where you combine
            your love for travel and exploring various territories with work.
            You can check into an excellent workcation resort and enjoy working
            with a view.
          </Text>
          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/reasons-to-choose-manali-for-workation" passHref>
              <a target="_blank">Why Manali Is Our Fave Workcation Spot?</a>
            </Link>
          </SuggestedRead>
          <Text>
            There were a few illustrious personalities who adopted this culture
            long before the onset of the pandemic. No wonder, these
            personalities are labelled as ‘visionaries’. Let’s take a look:
          </Text>
          <SubHeading>Bill Gates</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/successful-people-who-do-wfh/bill-gates.jpg"
                alt="Bill Gates"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            This legendary man adopted the WFH culture and has coined the term
            ‘Think Weeks’. Bill Gates takes two week-long retreats annually
            where he introspects about his business, gets his creative juices
            flowing, and comes up with innovative ideas and solutions.
          </Text>

          <SubHeading>Richard Branson</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/successful-people-who-do-wfh/richard-branson.jpg"
                alt="Richard Branson"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Hailed as the king of leisure (business plus leisure) and
            workcation, Richard Branson, founder of the Virgin Group believes in
            this culture wholeheartedly. Proof? He treats his employees to
            unlimited vacation time and allows them to take workcation, enabling
            them to be more productive.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/impact-of-remote-working-in-india" passHref>
              <a target="_blank">
                How the World Will Change When Everyone Opt for Remote Working?
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>James Hamilton</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/successful-people-who-do-wfh/james-hamilton.jpg"
                alt="James Hamilton"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            He is a big shot personality who lives on his boat- The Dirona! We
            kid you not! James Hamilton, the engineer behind Amazon’s successful
            stint is known to sail to Hawaii and work from the islands. Reason?
            He knows the importance of good workcation and its benefits!
          </Text>

          <SubHeading>John Donahoe</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/successful-people-who-do-wfh/john-donahoe.jpg"
                alt="John Donahoe"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The CEO of E-bay plans his vacations. He breaks away from the
            shackles of monotony. He even advocates the importance of reasonable
            work hours and holidays to his employees.
          </Text>

          <SubHeading>Jim Moffatt</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/successful-people-who-do-wfh/jim-moffatt.jpg"
                alt="Jim Moffatt"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The biggest toxic trend nowadays is celebrating burn out and
            overworking. Condemning this toxic work culture, CEO of Deloitte,
            Jim Moffatt makes his employees, especially the people in higher
            management to take a ‘serious vacation’. Read his article, which he
            wrote on the importance of taking a vacation and escaping burnout!
          </Text>

          <SocialShare slug={"successful-people-who-do-wfh"} />
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
