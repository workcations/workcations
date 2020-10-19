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
        <title>To Travel, Or Not To Travel: Why Travel Should Resume?</title>
        <meta
          name="description"
          content="With uncertainty and fear hanging over traveling, no one knows how quickly the tourism sector will recover. But here are the reasons why travel should start soon."
        />
        <meta
          name="keywords"
          content="Future of Travel, Travel Industry Future, Future of Travel Industry, Reason to start travel, Work form mountains, Workcations"
        />
        <meta
          property="og:image"
          content="/why-travel-should-resume/why-travel-should-resume.jpg"
        />
        <meta
          property="og:description"
          content="With uncertainty and fear hanging over traveling, no one knows how quickly the tourism sector will recover. But here are the reasons why travel should start soon."
        />
        <meta
          property="og:title"
          content="To Travel, Or Not To Travel: Why Travel Should Resume?"
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
            To Travel, Or Not To Travel: Why Travel Should Resume?
          </BlogTitle>
          <SocialShare slug={"why-travel-should-resume"} />
          <ImageCon>
            <Image
              src="/why-travel-should-resume/why-travel-should-resume.jpg"
              alt="To Travel, Or Not To Travel: Why Travel Should Resume?"
            />
            <Caption></Caption>
          </ImageCon>
          <Text>
            India has no dearth of beautiful destinations for travellers. No
            wonder, people all across the world specially come here to explore
            what this largest democracy in the world has to offer. However, this
            industry has borne severe brunt of COVID19. The burning question
            that everyone is dealing with is whether travel should resume? While
            the country is in dual-thoughts, here’s why we think it should
          </Text>

          <SubHeading>
            Travel Industry’s Massive Contribution To India’s GDP
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/why-travel-should-resume/stats.jpg"
                alt="GDP Stats"
              />
              <Caption></Caption>
              <Source>
                Statista: &nbsp;
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.statista.com/statistics/313724/total-contribution-of-travel-and-tourism-to-gdp-in-india-by-segment/"
                >
                  https://www.statista.com/
                </a>
              </Source>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            <ul>
              <li>
                In the recent reports, The World Travel and Tourism Council
                calculated that travel comprises 9.2% of India’s total GDP. In
                2018, the industry contributed around $247 Bn (Source:
                Statista.com).
              </li>
              <li>One out of 10 jobs is somewhat related to travel.</li>
              <li>
                The pandemic has resulted in loss of jobs for several people.
                Many are even sent on unpaid leaves for an indefinite time.
              </li>
            </ul>
            The current steep 23.9% downfall has shaken everyone to their core.
            The burning question is till when should we let ourselves be blind
            spectators of this havoc caused by COVID? The only answer is taking
            a leap of faith and resuming travel operations.
          </Text>

          <SubHeading>
            To Boost Livelihood of Hundreds of Small Local Businesses
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/why-travel-should-resume/livelihood.jpg"
                alt="Boost Livelihood"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            A tourist spot is also a land of multiple businesses. Many big
            travel corporate giants are bearing the brunt of this ongoing
            pandemic. Imagine what small businesses must be facing?
            <ul>
              <li>
                Local inns, hotels, resorts, homestays and other lodging
                establishments have suffered.
              </li>
              <li>
                Shops selling souvenirs endemic to the destination to local food
                joints, businesses who play a vital role in making you
                experience the local culture, are also cash-strapped.
              </li>
              <li>
                Other than that, income of many workers such as mechanics,
                vendors, rental business owners, artisans have completely
                stopped.
              </li>
            </ul>
            Whether you are a traveller who sticks by the itinerary or a solo
            wanderer who travels on his whims, shopping is always a necessary
            part that completes one’s experience. Opening up travel is going to
            restore the lost livelihood of thousands of small-scale businesses
            and give an impetus to remote economy.
          </Text>

          <SubHeading>Travel — A Panacea for Mental Health </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/why-travel-should-resume/mental-health.jpg"
                alt="Mental Health"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Sure, we miss looking at beautiful IG feeds of travel influencers.
            The biggest pain is felt by those who set out on an adventure. There
            is no argument to the fact that travel is therapeutic and a panacea
            for good mental health. Staying in, working from home and not
            stepping out had become a new norm. However, it also caused severe
            impact on people’s mental wellbeing. Resuming travel would mean,
            those in dire need for a change and experience can step out and
            experience the outdoor beauty.
          </Text>

          <SubHeading>Zero Socialization - A BIG Nah</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/why-travel-should-resume/socialisation.jpg"
                alt="Zero Socialization"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Being cut-off from the world, having zero socialization outside of
            your immediate family — that’s not the direction life is supposed to
            towards. Those who are frequent travelers will tell you that the
            people you meet, interactions and rendezvous you have leave a deep
            impact on your very life. Once travel resumes, you can take a
            breather from your life indoors and soak in the local culture.
          </Text>

          <SubHeading>So, We’re Saying</SubHeading>
          <Text>
            Travel should resume, but with a new face. Incorporating the ‘new
            normal’ norms, places should open up and let everyone take a
            breather from their otherwise monotonous routine. Instead of taking
            short vacays, how about working out of scenic locations such as
            snow-clad mountains or picturesque hillocks and opting for long
            stays or Workcations. Something to think about, isn’t it?
          </Text>

          <SocialShare slug={"why-travel-should-resume"} />
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
