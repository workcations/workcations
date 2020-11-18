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
          Why Remote Work Culture and Workcations Will Stay In Indian Corporate
          Culture?
        </title>
        <meta
          name="description"
          content="Workcations was considered imaginary before the pandemic but slowly and steadily it has become the reality of corporate. Reasons why it will stay here."
        />
        <meta
          name="keywords"
          content="Workcations for Teams, Indian Corporate Culture, Remote Work Culture in India, Remote Work in India, Workcations, Workcations in India, Workations, Workcations, Workcations Spots in India, Work From Mountains"
        />
        <meta
          property="og:image"
          content="/workcations-future-of-indian-coporate-culture/workcations-future-of-indian-coporate-culture.jpg"
        />
        <meta
          property="og:description"
          content="Workcations was considered imaginary before the pandemic but slowly and steadily it has become the reality of corporate. Reasons why it will stay here."
        />
        <meta
          property="og:title"
          content="Why Remote Work Culture and Workcations Will Stay In Indian Corporate Culture?"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/workcations-future-of-indian-coporate-culture/workcations-future-of-indian-coporate-culture.jpg)`,
          }}
        >
          Why Remote Work Culture and Workcations Will Stay In Indian Corporate
          Culture?
        </Cover>
        <BlogContent>
          <SocialShare slug={"workation-to-workcation"} />
          <Tags>
            <span>Remote Work</span>
            <span>Workcations</span>
          </Tags>
          <Text>
            No matter how much we criticize the COVID and the situations that it
            has brought up for all of us, it has given rise to a few good things
            also.
            <br />
            <br />
            While many of us used to work in big cities and offices, living far
            away from our home and family, the COVID outbreak sent us back,
            bringing us close to our loved ones. Yes, the work from home isn’t
            suiting everyone well, we know it! But it is safe, more convenient
            and allows a whole lot of freedom to each employee.
          </Text>

          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-future-of-indian-coporate-culture/work-setup.jpg"
                alt="Work Setup"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}

          <Text>
            So, whether you are working from home or travelling to your
            favourite hill-station with your laptop and virtual workspace, this
            article may be useful for you.
            <br />
            <br />
            Here are four reasons why the remote work culture and workcations
            may be here to stay in the Indian corporate scenario.
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

          <SubHeading>1. Many of Us Have Moved and Evolved</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-future-of-indian-coporate-culture/evolved.jpg"
                alt="Moved & Evolved"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            I remember when I came home in March. In my mind, I was taking COVID
            as a strong flue that’ll pass in a few weeks.
            <br />
            <br />
            I had my vacation planned for two weeks after I started working from
            home. And as time passed, I realised, I should vacate my flat and
            move back to my home permanently.
            <br />
            <br />
            And that was just me. Apart from that, hundreds and thousands of
            people have left the big cities and gone back to their hometowns.
            This has also trained us all to coordinate better from a distance.
            <br />
            <br />
            Unlike earlier, all the workcations, work meetings, interviews and
            group projects are happening online, and that too smoothly.
          </Text>

          <SubHeading>
            2. Government has allowed IT companies for WFH and WFA
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-future-of-indian-coporate-culture/government-regulation.jpg"
                alt="Government Regulation"
              />
              <Caption></Caption>
              <Source>
                New Indian Express: &nbsp;
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://images.newindianexpress.com/uploads/user/imagelibrary/2020/3/18/w1200X800/FDFDNHBUs.jpg"
                >
                  https://images.newindianexpress.com/
                </a>
              </Source>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Keeping the current scenarios and the risk of COVID in mind,
            different state governments, have extended the work from home
            allowances up to 31st December 2020.
            <br />
            <br />
            And that’s not it. Many private companies have sent out notices
            allowing their employees to work from home permanently. This may
            mean that once the situations normalise, the employees may be
            required to visit their offices a few times in a week. In all cases,
            it can be a relief for most of the employees.
            <br />
            <br />
            This is also supposed to impact the workation norms across most
            industries.
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

          <SubHeading>3. Companies are Encouraging Remote Work</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-future-of-indian-coporate-culture/remote-work.jpg"
                alt="Remote Work"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Well, why would they not? Certainly, working from home is economical
            for their resources. From electricity bills to food offerings, cab
            allowances and everything else, companies are getting to save a lot.
            And and and! We can’t forget that a number of organisations have
            their employees work more than they used to do earlier.
            <br />
            <br />
            So, yes, companies are definitely encouraging remote work. This is
            going to impact the work culture highly, and thus workcations may
            become an integral part of the Indian corporate culture.
          </Text>

          <SubHeading>
            4. Work Stress and Travel Deprivation may Revolutionize Workcations
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-future-of-indian-coporate-culture/work-stress.jpg"
                alt="Work Stress"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            As said earlier, many of the corporate employees are now having a
            tough time working from home. Certainly, the workload has increased,
            giving an inevitable rise to the overall stress.
            <br />
            <br />
            All of us need breaks, and a happening workation can provide a
            much-needed break.
            <br />
            <br />
            So, yes, that’s another factor that can influence the corporate
            culture in India.
          </Text>

          <SocialShare slug={"workcations-future-of-indian-coporate-culture"} />
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
