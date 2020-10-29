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
          Everything you should know about the new face of Travel - Workcations
        </title>
        <meta
          name="description"
          content="Still, have queries about the workcation? Then, check out this FAQ with detailed information related to workcation - the new phase of travel."
        />
        <meta name="keywords" content="Remote Work, Workcations" />
        <meta
          property="og:image"
          content="/workcation-faq-all-you-want-to-know-about/workcation-faq-all-you-want-to-know-about.jpg"
        />
        <meta
          property="og:description"
          content="Still, have queries about the workcation? Then, check out this FAQ with detailed information related to workcation - the new phase of travel."
        />
        <meta
          property="og:title"
          content="Everything you should know about the new face of Travel - Workcations"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/workcation-faq-all-you-want-to-know-about/workcation-faq-all-you-want-to-know-about.jpg)`,
          }}
        >
          Everything you should know about the new face of Travel - Workcations
        </Cover>
        <BlogContent>
          <SocialShare slug={"workcation-faq-all-you-want-to-know-about"} />
          <Tags>
            <span>Remote Work</span>
            <span>Workcations</span>
          </Tags>
          <Text>
            Pandemic has hit all the business sectors to a great extent, but the
            tourism sector has been hit the worst. Due to initial restrictions
            across the country, travel came to a standstill. <br />
            <br />
            However, with the phase-wise unlock, the industry has slowly started
            to revive. Workcation (Work + Vacation) has become the new face of
            travel in the past few months. <br />
            <br />
            Travel enthusiasts are planning long stay vacations to manage their
            work and catch up with the travel vibe together. <br />
            <br />
            There are a lot of speculations going about this new phase of
            travel. We have tried to compile the most frequently asked questions
            to educate people on how they can plan their travel in the COVID
            era.
          </Text>

          <SubHeading>What is Workcation?</SubHeading>
          <Text>
            As dreamy as it sounds, Workcation is a long stay concept at your
            favourite destinations that lets you unwind and relax. If you're a
            remote worker, you can also continue to work from these destinations
            without having to take a break from work! So it's work plus
            vacation! Yay!
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/workcations-the-new-normal-of-work-life" passHref>
              <a target="_blank">
                Workcations: The New Trend That Brings Travel And Work Together{" "}
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>How can someone plan a workcation?</SubHeading>
          <Text>
            WanderOn has started a new venture to plan hassle-free and
            affordable workcations. You just have to let us know your choice of
            destination and the number of days you want to stay. Our team will
            assist you from there.
          </Text>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcation-faq-all-you-want-to-know-about/working-from-mountains.jpg"
                alt="Working From Mountains"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <SubHeading>What all is included in my workcation?</SubHeading>
          <Text>
            Workcations is a home away from home. So you have
            <ol>
              <li>A comfortable stay</li>
              <li>Homely meals</li>
              <li>Uninterrupted WIFI</li>
              <li>Housekeeping</li>
              <li>Recreational activities</li>
              <li>Transportation</li>
              <li>Assistance in E Pass Procedure</li>
            </ol>
          </Text>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcation-faq-all-you-want-to-know-about/workcations-cozy-rooms.jpg"
                alt="Cozy Rooms"
              />
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

          <SubHeading>
            What are the necessary documents required to travel?
          </SubHeading>
          <Text>
            It is compulsory to carry the hard copy E-permit from the state
            government, original address proof, govt. issued ID proof, COVID
            negative certificate (type of COVID certificate advised by
            respective state authorities) and your booking voucher.
          </Text>
          <SubHeading>
            What are the security and sanitization measures at the properties?
          </SubHeading>
          <Text>
            We have contactless check-in facilities at all our properties, every
            stay gets sanitized regularly and operates on the guidelines issued
            by government authorities.
            <br />
            <br />
            We also expect our guests to follow social distancing, wear masks,
            and wash their hands frequently.
          </Text>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcation-faq-all-you-want-to-know-about/covid-safety-measures.jpg"
                alt="Covid Safety Measures"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <SubHeading>
            Will it be safe to travel from one state to another state?
          </SubHeading>
          <Text>
            The state governments have laid out safety guidelines that allow
            travel between two states. Follow them thoroughly and there's
            nothing to worry about.
          </Text>
          <SubHeading>
            How can a workcation help me to balance my work life?
          </SubHeading>
          <Text>
            A workcation will likely help you to break the humdrum affair of
            your daily life, help to reboot your creative mind, hence improve
            your productivity in your work life. Who minds a Lil' getaway from
            the monotony?
          </Text>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/workcation-faq-all-you-want-to-know-about/work-life-balance.jpg"
                alt="Work Life Balance"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/impact-of-remote-working-in-india" passHref>
              <a target="_blank">
                How The World Will Change When Everyone Opt For Remote Working
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>
            How will the team help assist with COVID testing?
          </SubHeading>
          <Text>
            You can refer to the list of government-approved labs in your city
            from where you can get your tests done.
            <br />
            <br />
            For people who need to get their tests done from Delhi, we can
            recommend Govt approved labs where fair and safe testing is
            conducted.
          </Text>
          <SubHeading>
            Can someone residing in a containment zone be allowed to join?
          </SubHeading>
          <Text>
            People from containment zones would not be allowed to travel due to
            the guidelines issued by state authorities.
          </Text>
          <SocialShare slug={"workcation-faq-all-you-want-to-know-about"} />
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
