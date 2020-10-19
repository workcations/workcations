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
          How Setting Up A Workplace at Remote Location with Employees Is A Good
          Idea?
        </title>
        <meta
          name="description"
          content="Workcation for team or working from remote location with team? These terms sound interesting isn’t? Here are few reasons to plan a staycation with team. "
        />
        <meta
          name="keywords"
          content="Remote Office, Remote Office Culture, Reasons to setup remote office, remote office culture in india, workcations culture, workcations for teams, workcation for team ideas, team outing, corporate workcations."
        />
        <meta
          property="og:image"
          content="/reasons-to-setup-remote-office/reasons-to-setup-remote-office.jpg"
        />
        <meta
          property="og:description"
          content="Workcation for team or working from remote location with team? These terms sound interesting isn’t? Here are few reasons to plan a staycation with team. "
        />
        <meta
          property="og:title"
          content="How Setting Up A Workplace at Remote Location with Employees Is A Good Idea?"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <BlogContent>
          <Tags>
            <span>Remote Office</span>
            <span>Workcations</span>
          </Tags>
          <BlogTitle>
            How Setting Up A Workplace at Remote Location with Employees Is A
            Good Idea?
          </BlogTitle>
          <SocialShare slug={"reasons-to-setup-remote-office"} />
          <ImageCon>
            <Image
              src="/reasons-to-setup-remote-office/reasons-to-setup-remote-office.jpg"
              alt="How Setting Up A Workplace at Remote Location with Employees Is A Good Idea?"
            />
            <Caption></Caption>
          </ImageCon>
          <Text>
            Regular is boring. One of the best ways to increase productivity
            amongst your employees is to provide them with an environment that
            is relaxing and stimulating at the same time. The pandemic has
            already had an adverse effect on the mental health of the people. A
            change of scenario will make sure that people will be able to work
            with a fresh perspective and increased energy. Plus a lot of us are
            bored working alone from home, here’s why setting up a workplace
            away in some faraway location is a great idea:
          </Text>

          <SubHeading>Break Free From City Life</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-setup-remote-office/workdesk-at-beach.jpg"
                alt="Work at Beach"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            We’ve worked for months from our homes and honestly, the routine has
            become drab. Setting up a workplace at some remote location will
            help you break free from mundane routine. A remote place will also
            be safe and calm, helping you to work more productively. Also, these
            areas are quite low on COVID risk.
          </Text>

          <SubHeading>
            Better Communication & Coordination with fellow co-workers
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-setup-remote-office/team-meeting.jpg"
                alt="Team Meeting"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            When working from home, a lot of miscommunication happens with
            fellow workers. Working with them in the same cabin will enable
            better communication and coordination. That way, you don’t need to
            keep calling your colleagues to clear doubts.
          </Text>

          <SubHeading>Unwinding & Team Bonding Activities</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-setup-remote-office/team-building.jpg"
                alt="Team Building Activities"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Remember the group outings you took during the non-pandemic days?
            Well, such stays tend to have a lot of fun and productive tasks that
            also lead to team bonding. Plus when on a long workcation, you can
            regularly unwind with treks, camping, sports, bonding hobbies etc.
          </Text>

          <SubHeading>
            Peaceful and Focused Environment for better productivity
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-setup-remote-office/yoga.jpg"
                alt="Yoga"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            When away in some remote location, you can focus better on work as
            well as self. Do group yoga to unwind, workout to stay fit and many
            other recreational activities that promote peace in your working
            space.
          </Text>

          <SubHeading>Streamlining the company culture</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/reasons-to-setup-remote-office/company-culture.jpg"
                alt="Company Culture"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Often a company or a start-up finds ways to appreciate the efforts
            put in by employees. Why not offer them a nice workcation at a
            picturesque location. Make your employees feel blessed by sending
            them on long workcation trips and let them enjoy work a bit more
            than before.
          </Text>

          <Text>
            In the end, workcations combine work as well as vacation. It’s
            always a good idea to take care of yourself while chasing work
            targets.
          </Text>

          <SocialShare slug={"reasons-to-setup-remote-office"} />
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
