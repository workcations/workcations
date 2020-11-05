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
          From WFH to Workcations, Story behind culture shift in work from
          anywhere
        </title>
        <meta
          name="description"
          content="From working in cubicles to WFH to workations, we have seen the cultural shift in the corporate sector. Know about Workcations - the reason for the shift."
        />
        <meta name="keywords" content="Remote Work, Workcations" />
        <meta
          property="og:image"
          content="/workcations-story-of-cultural-shift/workcations-story-of-cultural-shift.jpg"
        />
        <meta
          property="og:description"
          content="From working in cubicles to WFH to workations, we have seen the cultural shift in the corporate sector. Know about Workcations - the reason for the shift."
        />
        <meta
          property="og:title"
          content="From WFH to Workcations, Story behind culture shift in work from anywhere"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/workcations-story-of-cultural-shift/workcations-story-of-cultural-shift.jpg)`,
          }}
        >
          From WFH to Workcations, Story behind culture shift in work from
          anywhere
        </Cover>
        <BlogContent>
          <SocialShare slug={"workation-to-workcation"} />
          <Tags>
            <span>Remote Work</span>
            <span>Workcations</span>
          </Tags>
          <Text>
            Many people have always dreamt of working from the mountains. The
            possibility of the same has always daunted many of us for the same
            reason we fear change. Shifting, connectivity, family and many other
            things can seem to become an obstacle to live that perfect mountain
            life. Working from a remote location can be challenging but with the
            pandemic set upon us, the dynamics of the world has changed and so
            has the work culture.
          </Text>

          <SubHeading>
            A chance to live surrounded by a natural paradise
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-story-of-cultural-shift/bonfire-camping.jpg"
                alt="Camping Bonfire"
              />
              <Caption></Caption>
              <Source>
                Freepik: &nbsp;
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://img.freepik.com/free-photo/young-woman-working-on-laptop-in-the-mountains_95401-2041.jpg"
                >
                  https://img.freepik.com/
                </a>
              </Source>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Until the pandemic hit us, work from home was not the norm - it
            seemed more like a leave or a vacation where one could still keep
            working at. A blue moon phenomenon, work from home seemed like a way
            to escape the occasional boredom at work. As the lockdown changed
            the entire structure of the world, the entire work/organizational
            culture also took a 360-degree turn. From not only reducing office
            costs such as electricity and rent, work from home also increased
            productivity of the employees. With the advancement in technology,
            communication (as many did not expect) did not hinder the
            functioning and flow of the work.
            <br />
            <br />
            However, the downside to work from home was the loss of personal
            connections and daily interactions with colleagues (read friends).
            The sense of belongingness to one’s organization withered away.
            <br />
            <br />
            How Work from Home differs from workcations is the focus on the
            social element alongside of work.
          </Text>

          <SubHeading>
            1. Workcations focuses on human interaction and relationships
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-story-of-cultural-shift/human-interaction.jpg"
                alt="Human Interaction"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Human beings are social animals. We cannot live in isolation after a
            certain time. Even though work from home seemed quite comforting
            during the first few months of the lockdown, the loss of social
            element started hitting the employees drastically. The unlock phase
            was welcomed by everyone for now they could get back to a common
            destination and resume the normal routine of meeting and interacting
            with others.
          </Text>

          <SubHeading>
            2. Gives importance to face to face conversations and discussion
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-story-of-cultural-shift/discussion.jpg"
                alt="Discussion"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            On one hand, work from home focuses on interaction through
            technology on the other hand, workcation has made us realize that
            the same is not enough. Face to face conversations and discussions
            trump coordination through technology any day. There is less scope
            for miscommunication and more scope of better cooperation and
            efficiency.
          </Text>

          <SubHeading>
            3. Work environment is the key to a successful organization
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-story-of-cultural-shift/work-environment.jpg"
                alt="Work Environment"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            An organization’s success depends not only its employees but also
            the kind of environment the employees work in. The absence of work
            environment in work from home culture not only reduces efficiency
            after a point but also leads to a loss of belongingness to one’s
            organization. This can lead to serious consequences if it culminates
            into loss of interactions with colleagues. At Workations, we have
            setup a perfect environment to continue you work without any hassle.
          </Text>

          <SubHeading>
            4. Focus on leisure activities alongside of work
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-story-of-cultural-shift/leisure.jpg"
                alt="Leisure"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            While work from home gives a lot of flexibility, workation is icing
            on top of the cake. Not only is your schedule flexible but you also
            get the opportunity to travel around the place you’re
            ‘workcationing’ at!
          </Text>

          <SubHeading>5. Meeting like-minded people</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcations-story-of-cultural-shift/like-minded-people.jpg"
                alt="Like Minded People"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Work from home does bring in the bonus opportunity to spend more
            time with your family, whereas on a workcation you can enjoy time
            not only with your family but also like minded travellers that you
            meet on your journey or destination.
          </Text>

          <SocialShare slug={"workcations-story-of-cultural-shift"} />
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
