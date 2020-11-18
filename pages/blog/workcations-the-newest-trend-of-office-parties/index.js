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
          Ditch Office Parties! here's a new way to celebrate success
        </title>
        <meta
          name="description"
          content="Due to the pandemic, we all are missing those office parties! Not anymore, know about Workcations the newest way to celebrate success."
        />
        <meta
          name="keywords"
          content="Workcations For Teams, Workation for teams, workcation, workation, office parties, corporate parties, office parties in mountains, corporate parties planning, corporate success parties"
        />
        <meta
          property="og:image"
          content="/workcations-the-newest-trend-of-office-parties/workcations-the-newest-trend-of-office-parties.jpg"
        />
        <meta
          property="og:description"
          content="Due to the pandemic, we all are missing those office parties! Not anymore, know about Workcations the newest way to celebrate success."
        />
        <meta
          property="og:title"
          content="Ditch Office Parties! here's a new way to celebrate success"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/workcations-the-newest-trend-of-office-parties/workcations-the-newest-trend-of-office-parties.jpg)`,
          }}
        >
          Ditch Office Parties! here's a new way to celebrate success
        </Cover>
        <BlogContent>
          <SocialShare slug={"workation-to-workcation"} />
          <Tags>
            <span>Remote Work</span>
            <span>Workcations</span>
          </Tags>
          <Text>
            Are you a workaholic but also love to party? Do you miss going out
            on the weekends with your friends and colleague after a long week?
            Well, worry not! Here a new way to celebrate success- WORKCATION!
            It’s the perfect balance between work and leisure lifestyle.
            <br />
            <br />
            With the pandemic still on your heads like a sword, workcation is a
            much safer way to celebrate anything.
            <br />
            <br />
            Here’s why we prefer a workcation over office parties
          </Text>

          <SubHeading>
            1. Increases efficiency and happiness quotient of the team
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-the-newest-trend-of-office-parties/happiness-quotient.jpg"
                alt="Happiness Quotient"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            On one hand, work from office involves more work hours on the other
            hand workcation offers more flexibility with work schedule, leisure
            time with colleagues, and personal time with oneself. Such a work
            schedule not only increases the efficiency and productivity of a
            team but also their overall happiness in relation to the team, the
            organization, and the self.
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

          <SubHeading>2. Provides the perfect work environment</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-the-newest-trend-of-office-parties/perfect-work-environment.jpg"
                alt="Perfect Work Environment"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Workcations offer the best work environment one could hope for.
            Imagine working from a remote location nestled in the mountains.
            Isn’t it so much better than working inside a cubicle all day long?
          </Text>

          <SubHeading>3. Celebrate/Party with fellow travelers</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-the-newest-trend-of-office-parties/fellow-travelers.jpg"
                alt="Fellow Travelers"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            There’s something very unique about celebrations in the mountains
            away from the suffocating atmosphere of a city. You not only get a
            chance to celebrate with the team in different locations but also
            with the like-minded travelers you meet on your journey.
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

          <SubHeading>
            4. Increases the mental well being of employees
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-the-newest-trend-of-office-parties/mental-well-being.jpg"
                alt="Mental Well Being"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            In a workcation, you get to celebrate every day. After you’re done
            with your work, you can simply head out to cafes, stroll around the
            streets of the Himalayas and enjoy a beautiful sunset every evening.
            Who wouldn’t want that?
          </Text>

          <SubHeading>5. Support the local economy</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-the-newest-trend-of-office-parties/local-economy.jpg"
                alt="Local Economy"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            By ditching office parties in the cities and celebrating in the
            mountains you are supporting the local economy in various ways.
            Whatever you buy from the locals contribute majorly to their lives.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/who-can-plan-workcation-for-teams" passHref>
              <a target="_blank">
                Enjoy A Gorgeous Workcation With Your Work Buddies
              </a>
            </Link>
          </SuggestedRead>

          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-the-newest-trend-of-office-parties/unity-in-diversity.jpg"
                alt="Unity in Diversity"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            We’ve stated all the reasons why we think a workcation is better
            than office parties. From managing time more productively to
            engaging with the local economy. So, what are you waiting for?
            Gather your team, head to the mountains and celebrate life everyday!
          </Text>

          <SocialShare
            slug={"workcations-the-newest-trend-of-office-parties"}
          />
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
