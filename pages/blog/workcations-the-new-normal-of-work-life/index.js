import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import Layout from "../../../components/layout/layout";
import SocialShare from "../../../components/social-share/social-share";
import BlogSidebarContent from "../../../components/blog-sidebar-content/blog-sidebar-content";

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
        <title>
          Workcations : The New Trend that Brings Travel and Work Together
        </title>
        <meta
          name="description"
          content="With some relaxation in travel, people who are exhausted from their WFH
        life are now preparing to leave their places and move to some remote
        destination for a vacation."
        />
        <meta name="keywords" content="Remote Work, Workcations" />
        <meta
          property="og:image"
          content="https://www.wanderon.in/wp-content/uploads/2020/08/workcations.jpg"
        />
        <meta
          property="og:description"
          content="With some relaxation in travel, people who are exhausted from their WFH
        life are now preparing to leave their places and move to some remote
        destination for a vacation."
        />
        <meta
          property="og:title"
          content="Workcations : The New Trend that Brings Travel and Work Together"
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
            Workcations : The New Trend that Brings Travel and Work Together
          </BlogTitle>
          <SocialShare slug={"workcations-the-new-normal-of-work-life"} />
          <Text>
            Once upon a time, Travel was all we needed to break the humdrum
            affair of our boring work life. Unfortunately, due to the COVID-19
            outbreak, we didn’t get a chance to fulfill the desire of traveling
            even once. Numerous restrictions, Work From Home (WFH) duties, and
            the fear of Coronavirus has forced us to stay at home for the last
            three-four months.
          </Text>
          <ImageCon>
            <Image
              src="https://www.wanderon.in/wp-content/uploads/2020/08/workcations.jpg"
              alt="Workcations : The New Trend that Brings Travel and Work Together"
            />
            <Caption></Caption>
          </ImageCon>
          <Text>
            Now when state governments of Himachal Pradesh, Uttarakhand, Goa,
            and several other states have announced preventive guidelines to
            resume tourism again, everyone is willing to reach their favorite
            travel destinations. But it is not a cakewalk, as all the travelers
            have to follow certain guidelines.
          </Text>
          {loadElements ? (
            <ImageCon>
              <Image
                src="https://www.wanderon.in/wp-content/uploads/2020/08/work-from-remote-location.jpg"
                alt="Covid Travel Guidelines"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/benefits-from-working-from-mountains" passHref>
              <a target="_blank">
                Million Dollar Benefits Of Working From Mountains
              </a>
            </Link>
          </SuggestedRead>
          <SubHeading>
            Key points from the travel guidelines issued by government
            authorities.
          </SubHeading>
          <Text>
            Key points from the travel guidelines issued by government
            authorities
            <ol>
              <li>
                ICMR RT-PCR Covid-19 negative certificate issued 72 hours prior
                to the trip.
              </li>
              <li>E-Permit issued by respective State governments.</li>
              <li>
                People traveling from containment zones will not be allowed to
                enter.
              </li>
              <li>Government IDs and address proofs.</li>
              <li>Proper booking documents.</li>
            </ol>
          </Text>
          <Text>
            After all these precautionary measures government is insisting
            people stay at least 7-15 days at these destinations. Due to these
            reasons, people are willing to plan long stays for all travel
            destinations.
          </Text>
          {loadElements ? (
            <ImageCon>
              <Image
                src="https://www.wanderon.in/wp-content/uploads/2020/08/work-from-home.jpg"
                alt="Remote Work"
              />
              <Source></Source>
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            With some relaxation in travel, people who are exhausted from their
            WFH life are now preparing to leave their places and move to some
            remote destination for a vacation. Considering the present COVID
            situation, the corporate world is witnessing a unilateral shift
            towards remote work where most of the employees are directed to work
            from home. And howsoever attractive work from home might sound, it
            comes with its own set of distractions. <br />
            <br /> So what’s the best way out? It is to combine work and
            vacation, and turn it into a Workcation!
          </Text>
          {loadElements ? (
            <ImageCon>
              <Image
                src="https://www.wanderon.in/wp-content/uploads/2020/08/work-remotely-while-traveling.jpg"
                alt="Workcations"
              />
              <Source>Source: &nbsp; Google</Source>
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/reasons-to-setup-remote-office" passHref>
              <a target="_blank">
                How Setting Up A Workplace At Remote Location With Employees Is
                A Good Idea?
              </a>
            </Link>
          </SuggestedRead>
          <Text>
            Work and Vacation (Workcations) is dreamy and fascinating as it
            sounds, waking up to breathtaking sunrise vistas, sipping a cup of
            tea with a panoramic view of nature, and your work desk pointing
            towards your favorite mountains or beaches, that is all we need now.
            Now you can turn these dreams into reality as we have come up with
            our venture Workcations. It will help you to set up a workstation at
            your favorite travel destination.
          </Text>
          {loadElements ? (
            <ImageCon>
              <Image
                src="https://www.wanderon.in/wp-content/uploads/2020/08/workations-by-wanderon.jpg"
                alt="Workcations"
              />
              <Source>Source: &nbsp; Google</Source>
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
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
          <SubHeading>How can you plan your Workcations?</SubHeading>
          <Text>
            It is as simple as booking a movie ticket! We at Workcations
            designed a platform to plan your work & vacations together. All you
            have to do is pick your favorite destination, book your stay for as
            many days as you want and it’s done!
          </Text>
          {loadElements ? (
            <ImageCon>
              <Image
                src="https://www.wanderon.in/wp-content/uploads/2020/08/remote-work-places-in-india.jpg"
                alt="Workcations"
              />
              <Source>Source: &nbsp; Google</Source>
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Here are the primary services we are going to provide you to give a
            home away from home feeling at your favorite travel destination.
            <br />
            <br />
            <ul>
              <li>Homely Food</li>
              <li>Economic, Clean & Hygienic Stay</li>
              <li>24×7 High Speed Internet</li>
              <li>Dedicated Workspaces</li>
              <li>Recreational Activities to unwind!</li>
            </ul>
            <em>
              Finally, It is time to call off the monotonous affair of your WFH
              life, and plan a Workcation right away.
            </em>
          </Text>

          <SocialShare slug={"workcations-the-new-normal-of-work-life"} />
        </BlogContent>
        <BlogSidebar>
          <BlogSidebarContent />
        </BlogSidebar>
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
