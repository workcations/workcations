import Fuse from "fuse.js";
import { getProperties } from "../../../utilities/properties";

const convertTitleState = (title, state) => {
  const arr = title.split(" ");
  let finalString = "" + arr[0] + " ";
  for (let i = 1; i < arr.length - 1; i++) {
    finalString += arr[i] + " ";
  }
  finalString += state;

  return finalString;
};

const slugToString = (slug) => {
  const arr = slug.split("-");
  let finalString = "" + arr[0];
  for (let i = 1; i < arr.length; i++) {
    finalString += " " + arr[i];
  }
  return finalString;
};

const performSearch = async (query, page) => {
  const list = await getProperties();

  const displayList = list.map((property) => {
    return {
      titleState: convertTitleState(property.title, property.location.state),
      slugString: slugToString(property.slug),
      slugStringState: convertTitleState(
        slugToString(property.slug),
        property.location.state
      ),
      ...property,
    };
  });

  const options = {
    // isCaseSensitive: false,
    includeScore: true,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: [
      {
        name: "titleState",
        weight: 2,
      },
      {
        name: "slugStringState",
        weight: 3,
      },
      {
        name: "slugString",
        weight: 3.1,
      },
      {
        name: "slug",
        weight: 0.1,
      },
      {
        name: "title",
        weight: 2.1,
      },
      {
        name: "type",
        weight: 1.2,
      },
      {
        name: "location.city",
        weight: 1.3,
      },
      {
        name: "location.state",
        weight: 1.4,
      },
      /*{
        name: "filtersAll",
        weight: 2,
      },*/
    ],
  };

  const fuse = new Fuse(displayList, options);

  const FilteredList = fuse.search(query);

  return {
    list: FilteredList.filter((item, i) => i >= (page - 1) * 9 && i < page * 9),
    maxPage: Math.ceil(FilteredList.length / 9, 0),
  };
};

export default async (req, res) => {
  const {
    params: [searchQuery, pageNo],
  } = req.query;

  const data = await performSearch(searchQuery, Number(pageNo));

  res.status(200).json(data);
};
