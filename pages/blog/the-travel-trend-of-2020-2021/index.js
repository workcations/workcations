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
        <title>Old Wine, New Bottle: The Travel Trend Of 2020-2021</title>
        <meta
          name="description"
          content="The Travel Industry has been shaken by the COVID-19 outbreak from its core. Here're the future travel trends for 2020-2021!"
        />
        <meta
          name="keywords"
          content="Future of Travel Industry, Travel trends for 2021. Future of Travel Sector"
        />
        <meta
          property="og:image"
          content="/the-travel-trend-of-2020-2021/the-travel-trend-of-2020-2021.jpg"
        />
        <meta
          property="og:description"
          content="The Travel Industry has been shaken by the COVID-19 outbreak from its core. Here're the future travel trends for 2020-2021!"
        />
        <meta
          property="og:title"
          content="Old Wine, New Bottle: The Travel Trend Of 2020-2021"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/the-travel-trend-of-2020-2021/the-travel-trend-of-2020-2021.jpg)`,
          }}
        >
          Old Wine, New Bottle: The Travel Trend Of 2020-2021
        </Cover>
        <BlogContent>
          <SocialShare slug={"the-travel-trend-of-2020-2021"} />
          <Tags>
            <span>Travel Trends</span>
            <span>Future of Travel</span>
          </Tags>
          <Text>
            Remember the good old days when we simply packed our bags and
            embarked on impromptu trips? Well, the onset on new normal has
            changed a lot of aspects in our lives including travel. The year
            2020 and 2021 will be remembered years down the line for giving
            birth to some amazing travel trends that incorporate the new normal
            norms and also help in kick starting the GDP growth.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/why-travel-should-resume" passHref>
              <a target="_blank">
                To Travel, Or Not To Travel: Why Travel Should Resume?
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>The Answer To This Is Long Stays</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/the-travel-trend-of-2020-2021/long-stays.jpg"
                alt="Long Stays"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Venturing out again and again can prove to be risky. Instead, one
            can opt for long stays instead of brief ones. If the travel bug in
            you cannot stay calm, why should you too? Go, book a long stay that
            is one of the major travel trends for 2020 and 2021, Here’s what you
            can experience.
          </Text>

          <SubHeading>Work & Vacay: How About A Workcation?</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/the-travel-trend-of-2020-2021/workcation.jpg"
                alt="Workcation"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The newest term coined — ‘Workcation’ is a combination of work and
            vacation. Work from home has become pretty common nowadays but with
            time, it has added monotony in our lives. Also, the pandemic has had
            an adverse effect on people’s mental health too! Why not refresh and
            rejuvenate with a long stay at some picturesque location? Psst, this
            might be the biggest travel trend of 2020 and 2021.
            <ul>
              <li>Work with a picturesque view of mountains or beaches.</li>
              <li>Change of place will increase productivity.</li>
              <li>
                Workcation strikes a balance between your personal and
                professional life. You can enjoy the best of both.
              </li>
            </ul>
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/tips-to-travel-safely-during-covid19" passHref>
              <a target="_blank">How To Travel Safe During COVID19 Times?</a>
            </Link>
          </SuggestedRead>

          <SubHeading>It’s Hygienic & Clean</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/the-travel-trend-of-2020-2021/hygienic.jpg"
                alt="Hygienic & Clean"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Make sure that the place you check into is hygienic and clean. The
            establishments make sure that they adhere to the sanitation and
            safety norms. The premise is cleaned and sanitized on frequent
            intervals and all the cleanliness standards are maintained.
            Properties are taking extra care these days and we are not
            complaining!
          </Text>

          <SubHeading>Always Book Through Trusted Travel Agents</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/the-travel-trend-of-2020-2021/trusted-travel-agents.jpg"
                alt="Trusted Travel Agent"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            <ul>
              <li>
                Make sure to book your trips via recognized and authorized
                travel agents or agencies only. That way, you can be rest
                assured that the place follows the appropriate safety and
                quality norms.
              </li>
              <li>
                Trusted travel agents will make sure that all the facilities are
                up to the mark and you face no inconvenience.
              </li>
              <li>
                All you have to do is put all worries aside and let them design
                a nice travel plan for you.
              </li>
            </ul>
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/safe-tourism-during-covid19" passHref>
              <a target="_blank">
                Step Out With CARE: Here’s How Communities Can Promote Safe
                Tourism During COVID19
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>
            Spend Quality Time with Fam Members On These Long Vacays
          </SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/the-travel-trend-of-2020-2021/quality-time.jpg"
                alt="Quality Time"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The pandemic might have wreaked havoc in everyone’s lives but we can
            also consider it as a blessing in disguise as it is giving us an
            opportunity to improve our relationships. This travel trend lets you
            enjoy, work not alone but with your fam.
            <br />
            <br />
            You get to spend longer durations with family members and also have
            fun with them. Long trips or even workcations will allow you to
            spend quality time with your family members or significant other and
            also rest.
          </Text>

          <SocialShare slug={"the-travel-trend-of-2020-2021"} />
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
