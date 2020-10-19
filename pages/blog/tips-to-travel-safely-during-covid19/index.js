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
        <title>How To Travel Safe During COVID19 Times?</title>
        <meta
          name="description"
          content="Want to plan to a trip but worried about corona? Check out this Road trip checklist to keep yourself safe during Corona."
        />
        <meta
          name="keywords"
          content="Tips to travel during COVID, Travel tips during COVID,  COVID Safety Tips, Safety Tips from Covid"
        />
        <meta
          property="og:image"
          content="/tips-to-travel-safely-during-covid19/tips-to-travel-safely-during-covid19.jpg"
        />
        <meta
          property="og:description"
          content="Want to plan to a trip but worried about corona? Check out this Road trip checklist to keep yourself safe during Corona."
        />
        <meta
          property="og:title"
          content="How To Travel Safe During COVID19 Times?"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <BlogContent>
          <Tags>
            <span>COVID Safety</span>
            <span>Travel Tips</span>
          </Tags>
          <BlogTitle>How To Travel Safe During COVID19 Times?</BlogTitle>
          <SocialShare slug={"tips-to-travel-safely-during-covid19"} />
          <ImageCon>
            <Image
              src="/tips-to-travel-safely-during-covid19/tips-to-travel-safely-during-covid19.jpg"
              alt="How To Travel Safe During COVID19 Times?"
            />
            <Caption></Caption>
          </ImageCon>
          <Text>
            The times are tough and mental health of people as well as our
            economy graph is on a downward spiral. Resuming travel can be
            considered as an excellent move if both, the service providers as
            well as travellers cooperate. Travel, explore, don’t miss out on
            great things but do it responsibly. Here’s how:
          </Text>

          <SubHeading>Plan You Travel Safely</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/tips-to-travel-safely-during-covid19/plan-travel-safely.jpg"
                alt="Plan You Travel Safely"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            If you are travelling, make sure you will adhering to safety norms
            to safeguard yourself as well as other around you.
            <ul>
              <li>
                Plan every detail the trip (places to stay, spots to visit,
                conveyance, budget) in advance.
              </li>
              <li>
                Always book cabs that are sanitized before and after your trip.
              </li>
              <li>
                Check-into verified hotels only as they strictly follow the
                safety measures.
              </li>
              <li>Avoid crowded public transport.</li>
              <li>
                Be vigilant of your surroundings and inform about misadventures
                by miscreants who are seen flouting the norms, immediately to
                the authorities.
              </li>
              <li>
                Before travelling, take the government-prescribed TruNat Covid
                test. Travel only if the test result is negative.
              </li>
            </ul>
          </Text>

          <SubHeading>Carry A Pandemic Medical Kit</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/tips-to-travel-safely-during-covid19/pandemic-medical-kit.jpg"
                alt="Carry A Pandemic Medical Kit"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Here’s what you must carry with yourself while travelling in your
            pandemic toolkit:
            <ul>
              <li>
                Carry a lot of triple-layered protective face masks. They can be
                disposable as well as washable. Comfort matters more.{" "}
              </li>
              <li>
                Buy disposable hand gloves in bulk because they come handy while
                picking up things or touching places.{" "}
              </li>
              <li>Sanitizers are a must-have in your purse all the time. </li>
              <li>Carry PPE kits too to completely shield yourself. </li>
              <li>Carry mask shield too. </li>
              <li>Carry vitamins with you. </li>
              <li>
                You must have a basic medicine (paracetamol) and first-aid kit.{" "}
              </li>
              <li>A thermometer, oxymeter can also be carried. </li>
              <li>
                You must have IDs and negative COVID report as you will require
                them to present them at the time of check-ins.
              </li>
            </ul>
          </Text>

          <SubHeading>Check into Verified Stays</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/tips-to-travel-safely-during-covid19/verified-stays.jpg"
                alt="Verified Stays"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Make sure you always check-into properties that are verified.
            <ul>
              <li>Hotels must be sanitized properly.</li>
              <li>Premises must be clean. .</li>
              <li>
                Prior to booking your stay, check online reviews if the safety
                norms are followed in reality or not. .
              </li>
              <li>
                Avoid staying in a place that is located in containment zone. .
              </li>
              <li>
                Prefer remote places that are less-crowded. Many hotels have cap
                on number of visitors nowadays.
              </li>
            </ul>
          </Text>

          <SubHeading>Monitor Where You Eat & What You Eat</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/tips-to-travel-safely-during-covid19/safe-eating-habits.jpg"
                alt="Monitor Where You Eat & What You Eat"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            While travelling to different destinations, you must consider what
            you eat and where you eat.
            <ul>
              <li>
                Strictly avoid eating at dirty places where food is left open or
                is being cooked in unhygienic conditions.
              </li>
              <li>
                If you are ordering in, make sure food is heated again to kill
                germs, if any.
              </li>
              <li>Opt for cooked food rather than raw items. </li>
              <li>
                When travelling for short distances, you can carry your tiffin
                from home.
              </li>
            </ul>
          </Text>

          <SubHeading>Visit Safe Places Only</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/tips-to-travel-safely-during-covid19/safe-places.jpg"
                alt="Visit Safe Places Only"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Always check the condition of the place beforehand. It is advisable
            to travel only to places where there are negligible to zero COVID
            cases. Places like Himachal or Uttarakhand are some of the gems that
            are ideal for long stays and even workcations.
          </Text>

          <SocialShare slug={"tips-to-travel-safely-during-covid19"} />
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
