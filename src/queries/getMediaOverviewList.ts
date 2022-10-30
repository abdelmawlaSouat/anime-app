export const GET_MEDIA_OVERVIEW_LIST = `
query getMediaOverviewList ($page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      total
      currentPage
      lastPage
      hasNextPage
      perPage
    }
    media {
      id
      episodes
      description
      duration
      format
      genres
      coverImage {
        extraLarge
        large
        medium
      }
      startDate {
        year
      }
      popularity
      endDate {
        year
      }
      type
      title {
        romaji
      }
    }
  }
}
`;
