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
          Step Out With CARE: Here’s How Communities Can Promote Safe Tourism
          During COVID19
        </title>
        <meta
          name="description"
          content="It will be entirely different this time. Say Hi to COVID19-free road trips with our tips and tricks. Coronavirus Precautions planning a Trip. "
        />
        <meta
          name="keywords"
          content="Coronavirus Precautions during traveling, Tips for traveling during COVID, COVID Safety Tips, Coronavirus Safety Trips"
        />
        <meta
          property="og:image"
          content="/safe-tourism-during-covid19/safe-tourism-during-covid19.jpg"
        />
        <meta
          property="og:description"
          content="It will be entirely different this time. Say Hi to COVID19-free road trips with our tips and tricks. Coronavirus Precautions planning a Trip. "
        />
        <meta
          property="og:title"
          content="Step Out With CARE: Here’s How Communities Can Promote Safe Tourism During COVID19"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/safe-tourism-during-covid19/safe-tourism-during-covid19.jpg)`,
          }}
        >
          Step Out With CARE: Here’s How Communities Can Promote Safe Tourism
          During COVID19
        </Cover>
        <BlogContent>
          <SocialShare slug={"safe-tourism-during-covid19"} />
          <Tags>
            <span>Covid19 Precautions</span>
            <span>Safety Tips</span>
          </Tags>
          <Text>
            To travel or not to travel is the big question looming. However, the
            answer is an eternal YES if safety measures are taken. The thing of
            utmost importance is safety nowadays and one should make sure that
            the place you are visiting and the hotel you are planning to lodge
            at are adhering to safety measures. There are umpteen reasons
            already why travel should resume in India. This is where communities
            play a major role in promoting travel and tourism.
            <br />
            <br />
            Here’s how communities can promote safe touring during COVID times:
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/why-travel-should-resume" passHref>
              <a target="_blank">
                To Travel, Or Not To Travel: Why Travel Should Resume?
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>Following State Guidelines</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/safe-tourism-during-covid19/state-guidelines.jpg"
                alt="Following State Guidelines"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Not every Indian state is on high alert when it comes to the state
            of COVID19. The hotels, resorts, other establishments as well as
            local shops, eateries and other places must make sure that they
            adhere strictly to their own state guidelines as they differ from
            state to state. Also, there should be a cap on the number of
            visitors.
          </Text>

          <SubHeading>Mandatory COVID19 Negative Report</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/safe-tourism-during-covid19/covid19-negative-report.jpg"
                alt="COVID19 Negative Report"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The travellers as well as the service providers, both should have a
            COVID19 negative medical report from an authorized medical lab or
            hospital. Take the RT-PCR or TruNat COVID tests as advised by the
            state governments. Without it, admission of any tourist should not
            be allowed.
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/tips-to-travel-safely-during-covid19" passHref>
              <a target="_blank">How To Travel Safe During COVID19 Times?</a>
            </Link>
          </SuggestedRead>

          <SubHeading>Contactless Check-In, Sanitized Cabs & Hotels</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/safe-tourism-during-covid19/contactless.png"
                alt="Contactless Check-In, Sanitized Cabs & Hotels"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            The word that everyone loves to hear is ‘Contactless’. While every
            other business is adopting the contactless model, why should travel
            industry stay far behind? Communities must make sure that the hotels
            practice contact-less check in, conveyance transport is sanitized
            before and after picking and dropping the passengers. The premises
            should be cleaned and sanitized every now and then to ward off the
            germs.
          </Text>

          <SubHeading>Opt For Long Stay Plans</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/safe-tourism-during-covid19/long-stays.jpg"
                alt="Opt For Long Stay Plans"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            During the pandemic, it is not advisable to venture out again and
            again as you are prone to more risk. Similarly, avoid group
            departures to lessen the risk. Instead, opt for long stays or
            workcations where you can combine spending quality time with loved
            ones and work at picturesque places as well. A lot of resorts are
            offering amazing deals for long workcations and staycation. Go, grab
            them all!
          </Text>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/the-travel-trend-of-2020-2021" passHref>
              <a target="_blank">
                Old Wine, New Bottle: The Travel Trend Of 2020-2021
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>Promoting Remote Locations for Stay</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/safe-tourism-during-covid19/remote-location.jpg"
                alt="Promoting Remote Locations for Stay"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            <ul>
              <li>
                This country is full of hidden gems. Why opt for the regular
                destinations when you can tread on the lesser trodden path?
              </li>
              <li>
                Since, COVID19 is a communicable disease, the chances of
                catching infection in remote locations are minimal as compared
                to crowded locations.
              </li>
              <li>
                Travel, not tour. Whether it’s a solo trip for soul searching
                and getting your mental health right back on track, or simply
                exploring and having fun with your gang, remote locations never
                cease to amaze us.
              </li>
            </ul>
          </Text>

          <SocialShare slug={"safe-tourism-during-covid19"} />
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
