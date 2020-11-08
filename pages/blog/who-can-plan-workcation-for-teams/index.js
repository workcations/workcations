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
        <title>Enjoy A Gorgeous Workcation With Your Work Buddies</title>
        <meta
          name="description"
          content="Want to plan Workations with your team? Here's is how you could incorporate this latest trend in your company culture."
        />
        <meta name="keywords" content="Remote Work, Workcations" />
        <meta
          property="og:image"
          content="/who-can-plan-workcation-for-teams/who-can-plan-workcation-for-teams.jpg"
        />
        <meta
          property="og:description"
          content="Want to plan Workations with your team? Here's is how you could incorporate this latest trend in your company culture."
        />
        <meta
          property="og:title"
          content="Enjoy A Gorgeous Workcation With Your Work Buddies"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/who-can-plan-workcation-for-teams/who-can-plan-workcation-for-teams.jpg)`,
          }}
        >
          Enjoy A Gorgeous Workcation With Your Work Buddies
        </Cover>
        <BlogContent>
          <SocialShare slug={"workation-to-workcation"} />
          <Tags>
            <span>Remote Work</span>
            <span>Workcations</span>
          </Tags>
          <Text>
            It is always a good idea to take a vacation, or in busy times, a
            workcation. A combination of work and vacation, this concept is
            slowly building its way up in the corporate world and work culture.
            Big groups and corporates can take their whole team and work
            together at picturesque locations. Change of scenario and unwinding
            will help professionals work with a fresher perspective.
            <br />
            <br />
            Enjoy a gorgeous workcation with your work buddies and we tell you
            how to plan a kickass one!
          </Text>

          <SubHeading>1. Take Batches of 40-50 people</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/who-can-plan-workcation-for-teams/batches.jpg"
                alt="Batches of People"
              />
              <Caption></Caption>
              <Source>
                Glassdoor: &nbsp;
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://media.glassdoor.com/l/1b/00/97/64/sales-meetings-mountain-hardwear.jpg"
                >
                  https://www.glassdoor.co.in/
                </a>
              </Source>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Whether you are a small startup or a division of a big conglomerate,
            you can take a batch of 40-50 people to some awesome locations
            (hyperlink). Taking in batches will mean that resorts will arrange
            special amenities and facilities for corporates.
          </Text>

          <SubHeading>
            2. Reward A Workcation To Best Performing Employees
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/who-can-plan-workcation-for-teams/reward.jpg"
                alt="Reward Employee"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Instead of rewarding some material things or memento, why not gift
            the best performing team or employees a memorable experience in the
            form of a workcation. This incentive will make sure everyone will
            vie for it in a healthy and motivated way. The best performers can
            enjoy a gorgeous view, rustic resorts and picturesque location while
            still working.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/workcations-story-of-cultural-shift" passHref>
              <a target="_blank">
                From WFH to Workcations, Story behind culture shift in work from
                anywhere
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>3. Small Startups & SaaS Companies</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/who-can-plan-workcation-for-teams/startup.jpg"
                alt="Startup"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Not just small teams, small startups, or SAAS companies could all
            visit these fab destinations. If we think about it, it's perfect as
            the only thing needed to work is the internet! Meetings could be
            organized at scenic places worth enjoying natural beauty.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/workation-to-workcation" passHref>
              <a target="_blank">
                The Buzz Behind the Word C! WTF is Workation with an Extra C - A
                upgraded Travel Trend - Workcations
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>What Can You Do?</SubHeading>
          <Text>
            With your team, you can do meetings at scenic locales or even
            poolside. There can be multiple team bonding exercises and
            activities that will help in spreading harmony and fraternity
            amongst the bunch.
          </Text>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/who-can-plan-workcation-for-teams/team-bonding.jpg"
                alt="Team Bonding"
              />
              <Caption></Caption>
              <Source>
                Riverstone Camps: &nbsp;
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.riverstonecamps.com/wp-content/uploads/2019/04/Yoga-in-rishikesh-1.jpg"
                >
                  https://www.riverstonecamps.com/
                </a>
              </Source>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            <ul>
              <li>
                Workcation will be good for mental health of the employees.
              </li>
              <li>They are great for team bonding. </li>
              <li>
                Change of scenery boosts imagination and gets the creative
                juices flowing.
              </li>
              <li>
                You can travel and work both, accomplish a lot of backlog that
                is being procrastinating.
              </li>
              <li>
                They help to explore hidden gems and embark on adventures.
              </li>
              <li>You get to try local cuisine at different kinds of cafes.</li>
              <li>You can explore the nearby locations too.</li>
            </ul>
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/reasons-to-setup-remote-office" passHref>
              <a target="_blank">
                How Setting Up A Workplace at Remote Location with Employees Is
                A Good Idea?
              </a>
            </Link>
          </SuggestedRead>

          <Text>
            We have told you about plenty of reasons as to why workcation
            culture should be adopted by the companies. What are you waiting
            for? Pack your bags, carry your laptop and get set go on a work
            adventure.
          </Text>

          <SocialShare slug={"who-can-plan-workcation-for-teams"} />
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
