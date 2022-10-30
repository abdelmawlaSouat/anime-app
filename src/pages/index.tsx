import { MediaList } from "../components/mediaList";
import { GET_MEDIA_OVERVIEW_LIST } from "../queries/getMediaOverviewList";
import { getMediaList } from "../services/getMediaList";
import { MediaOverview } from "../types/MediaOverview";
import { PageInfo } from "../types/PageInfo";
import get from "lodash/get";
import type { NextPage } from "next";

interface Props {
  mediaList: MediaOverview[];
  pageInfo: PageInfo;
}

const Home: NextPage<Props> = ({ mediaList, pageInfo }) => {
  console.log("page info: ", pageInfo);

  return (
    <div>
      <MediaList list={mediaList} />
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await getMediaList(GET_MEDIA_OVERVIEW_LIST);

  return {
    props: {
      mediaList: get(data, "Page.media"),
      pageInfo: get(data, "Page.pageInfo"),
    },
  };
}

export default Home;
