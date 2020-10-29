import { useState, useEffect } from "react";
import Head from "next/head";

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
          How the World Will Change When Everyone Opt for Remote Working
        </title>
        <meta
          name="description"
          content="Remote work is here to stay! Here is how the corporate world will change if everyone opts for Remote Working."
        />
        <meta name="keywords" content="Remote Work, Workcations" />
        <meta
          property="og:image"
          content="/impact-of-remote-working-in-india/impact-of-remote-working-in-india.jpg"
        />
        <meta
          property="og:description"
          content="Remote work is here to stay! Here is how the corporate world will change if everyone opts for Remote Working."
        />
        <meta
          property="og:title"
          content="How the World Will Change When Everyone Opt for Remote Working "
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/impact-of-remote-working-in-india/impact-of-remote-working-in-india.jpg)`,
          }}
        >
          How the World Will Change When Everyone Opt for Remote Working
        </Cover>
        <BlogContent>
          <SocialShare slug={"impact-of-remote-working-in-india"} />
          <Tags>
            <span>Remote Work</span>
            <span>Workcations</span>
          </Tags>
          <Text>
            COVID-19 hit us fast and hard. Each one of us has been struggling to
            accommodate our mindset and habits so that we could start working
            from places far away from our offices.
            <br />
            <br />
            Most of us have successfully adapted to this culture of remote
            working in our lives. We are loving this freedom of working in an
            environment that makes us more comfortable.
            <br />
            <br />
            There are a lot of surveys going around the same and let us share
            few of their outcomes.
            <br />
            A study by Zapier revealed that 74% of workers would quit their jobs
            for the ability to work from anywhere. Sounds fascinating, isn't it?
            <br />
            <br />
            A separate survey reveals that Two out of three working
            professionals believe that the traditional workplace will be
            obsolete within the next decade.
            <br />
            <br />
            Another survey report from Buffer states that 99% of working
            professionals will love to try remote working at least once!
          </Text>

          <SubHeading>We will observe a brain drain from cities</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/impact-of-remote-working-in-india/brain-drain.jpg"
                alt="Brain Drain from Cities"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The current COVID scenario and freedom of working are directly
            impacting where people live and work. Most of the big tech companies
            announced work from home till next year and employees are getting
            extra allowances to establish better infrastructure for work. <br />
            <br />
            People will start moving to remote places to minimize expenses and
            to enhance their focus on work lives.
          </Text>

          <SubHeading>Less Traffic as fewer People to commute</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/impact-of-remote-working-in-india/traffic.jpg"
                alt="Less Trafic"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The daily commute to the office wastes time and costs a lot of
            money. This exhausting routine adversely affects people's mood,
            productivity, mental health and reduces the enthusiasm for work. For
            the last 4-5 months, People are working from home and they are
            working without the worries of commuting. Thus, remote work will
            lead to lesser traffic in metro cities.
          </Text>

          <SubHeading>
            Consumptions of material goods will shift to experiences
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/impact-of-remote-working-in-india/consumption.jpg"
                alt="Experiences over material goods"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            It is proven the money spent on experiences gives more happiness and
            satisfaction than buying material stuff. That is why people are
            going gaga over the concept of Workcations. Working with a beautiful
            view of mountains and beaches are what dreams look like. With the
            freedom to choose a work location, people will surely move out of
            metro cities.
          </Text>

          <SubHeading>
            The power will shift to employees from employers
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/impact-of-remote-working-in-india/power.jpg"
                alt="More power to employees"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}

          <Text>
            It is the tendency of every working professional to choose
            flexibility over any perk offered by employees. The freedom of
            working from a remote location is the most prominent flexibility
            everyone is looking for in this COVID era. If employees don't get
            this facility, there’s a fair chance they would switch, or would opt
            for freelancing.
          </Text>

          <SubHeading>
            Infrastructure will improve in rural and semi-urban areas with an
            increase in demand.
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/impact-of-remote-working-in-india/infrastructure.jpg"
                alt="Infrastrucutre Improvements"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            It is a real-life fact, supply is directly proportional to demand.
            People will opt for small and optimal places for setting up their
            remote workstations. There would be an increase in the demand of
            strong internet, stable power supply and other basic requirements.
            It is natural that the migration of working professionals will
            surely upscale the Infrastructure of these places.
          </Text>

          <SubHeading>
            People from towns and semi-urban places will come up with innovative
            ideas
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/impact-of-remote-working-in-india/innovative.jpg"
                alt="Brain Drain from Cities"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            It is a well-known proverb, "Necessity is the mother of invention".
            To cater to the needs of people relocating from urban areas, people
            living in remote areas have to produce innovative ideas. It could be
            a coffee house that doubles up as a workspace or at home services
            that are quite prevalent in metro cities.
          </Text>

          <Text>
            <em>
              The culture of remote working is here to stay. And surely, the
              world will change if everyone starts working from remote
              locations.
            </em>
          </Text>

          <SocialShare slug={"impact-of-remote-working-in-india"} />
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
