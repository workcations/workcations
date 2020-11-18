import { useState, useEffect, Fragment } from "react";
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
  Table,
  TableRow,
  TableHeading,
  TableCell,
} from "../../../components/blogs/blog-item.style";

const BlogItem = () => {
  const isServer = typeof window === "undefined";

  const tableData = [
    ["Value", "Workcations", "Corporate Offsites"],
    ["Duration", "7-14 days", "2-3 days"],
    ["Cost", "$$$", "$$"],
    ["Productivity", "Increases", "May increase mildly"],
    ["Work progress", "Significant", "Inconsiderable"],
    ["Leisure travel", "In-depth", "Superficial"],
    ["Team building", "Visible", "No actual improvements"],
    ["Impression on employees", "Very good", "Fair (may be)"],
    ["Employee retention", "Very high", "Inconsiderable"],
    ["Worth the money", "Yes", "Maybe a fair deal"],
  ];

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
          Corporate Offsite Got a New Lingo and It is Called Workcations for
          Teams
        </title>
        <meta
          name="description"
          content="Pandemic has affected the scenario of the corporate offsite. Know how Workcations for teams have become the favourite of professionals with time."
        />
        <meta
          name="keywords"
          content="Workcations For Teams, Corporate Offsite, Work from remote locations, work from anywhere, workcation, workcations, workation, workations"
        />
        <meta
          property="og:image"
          content="/how-workcations-are-better-than-corporate-offsite/how-workcations-are-better-than-corporate-offsite.jpg"
        />
        <meta
          property="og:description"
          content="Pandemic has affected the scenario of the corporate offsite. Know how Workcations for teams have become the favourite of professionals with time."
        />
        <meta
          property="og:title"
          content="Corporate Offsite Got a New Lingo and It is Called Workcations for Teams"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <BlogContainer>
        <Cover
          style={{
            backgroundImage: `linear-gradient(to top,rgba(0,0,0,.4) 00%, rgba(0,0,0,.4) 100%),url(/how-workcations-are-better-than-corporate-offsite/how-workcations-are-better-than-corporate-offsite.jpg)`,
          }}
        >
          Corporate Offsite Got a New Lingo and It is Called Workcations for
          Teams
        </Cover>
        <BlogContent>
          <SocialShare slug={"workation-to-workcation"} />
          <Tags>
            <span>Remote Work</span>
            <span>Workcations</span>
          </Tags>
          <Text>
            Meetings are an integral part of all businesses. Whether you own a
            startup or a rapidly growing multi-national, getting your best
            brains together every once in a while always helps maintain
            productivity and work quality.
            <br />
            <br />
            However, the bland way of holding meetings is undoubtedly getting
            old and out of trend now. And we can say, that’s happening for good.
          </Text>

          {loadElements ? (
            <ImageCon>
              <Image
                src="/how-workcations-are-better-than-corporate-offsite/work-beach.jpg"
                alt="Working on Beach"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}

          <Text>
            This is an age where the corporate offsite is getting an evident
            facelift with a new stylish name and idea. Yes, we are talking about
            workcations.
            <br />
            <br />
            In this blog, we are taking a quick look at the concept of corporate
            offsites and workcations, comparing them and finding out what sets
            them apart. So, buckle up and read on.
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

          <SubHeading>What’s the Idea?</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/how-workcations-are-better-than-corporate-offsite/the-idea.jpg"
                alt="The Idea"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            Whether we talk about corporate offsites or workcations, the basic
            idea is to explore and expand business opportunities, plus build a
            strong team bond enabling employees to perform better together.
            <br />
            <br />
            Also, a company offsite or workation can provide the employees with
            a rejuvenating getaway from the monotony. At most times, this boosts
            productivity and releases stress.
          </Text>

          <SubHeading>What’s the Difference?</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/how-workcations-are-better-than-corporate-offsite/the-difference.jpg"
                alt="The Difference"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            While a corporate offsite is a quick short trip for a company’s few
            employees to travel to a destination for business and other team
            building purposes, a workcation is comparatively longer.
            <br />
            <br />
            This is an office outing where employees get to spend more time
            knowing their team, the business ethics, and how the company has its
            belief’s set.
            <br />
            <br />
            Apart from this, a workation obviously costs more per head than a
            small and quick corporate offsite. But then, the factor of ROI comes
            into play.
          </Text>

          {loadElements ? (
            <ImageCon>
              <Image
                src="/how-workcations-are-better-than-corporate-offsite/work-mountain.jpg"
                alt="Working on Mountain Top"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}

          <Text>
            While corporate offsites generally fail to show the desired changes
            in the team behaviour, long workcations are proven to show evident
            improvement in work quality, rise in productivity, better team
            bonding and a number of other KPIs progressing in the positive
            direction.
            <br />
            <br />
            Starting off, let’s read a few pointers about workcatinos and
            corporate offsites to know what’s the actual difference between the
            values that both of them bring to the table.
          </Text>

          <Table>
            {tableData.map((item, i) => (
              <TableRow key={`Row No ${i + 1}`}>
                {i === 0 ? (
                  <Fragment>
                    {item.map((subItem, j) => (
                      <TableHeading key={`Cell No: ${i + 1}${j + 1}`}>
                        {subItem}
                      </TableHeading>
                    ))}
                  </Fragment>
                ) : (
                  <Fragment>
                    {item.map((subItem, j) => (
                      <TableCell key={`Cell No: ${i + 1}${j + 1}`}>
                        {subItem}
                      </TableCell>
                    ))}
                  </Fragment>
                )}
              </TableRow>
            ))}
          </Table>

          <SuggestedRead>
            &nbsp;&nbsp;
            <Link href="/blog/who-can-plan-workcation-for-teams" passHref>
              <a target="_blank">
                Enjoy A Gorgeous Workcation With Your Work Buddies
              </a>
            </Link>
          </SuggestedRead>

          <SubHeading>Closing Words</SubHeading>
          {loadElements ? (
            <ImageCon>
              <Image
                src="/how-workcations-are-better-than-corporate-offsite/closing-words.jpg"
                alt="Closing Words"
              />
              <Caption></Caption>
            </ImageCon>
          ) : (
            <ImageCon></ImageCon>
          )}
          <Text>
            If you are a company owner or a human resource manager looking to
            choose between corporate offsites and workcations, this post might
            have helped you. Here we discussed the differences and value
            benefits that both bring up.
            <br />
            <br />
            Hope you could take something away from this.
          </Text>

          <SocialShare
            slug={"how-workcations-are-better-than-corporate-offsite"}
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
