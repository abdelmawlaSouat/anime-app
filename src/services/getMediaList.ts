import { gql } from "@apollo/client";
import { client } from "../utils/apolloClient";

export const getMediaList = async (query: string, variables = {}) => {
  try {
    const { data } = await client.query({
      query: gql(query),
      variables,
    });

    return {
      data,
    };
  } catch (error) {
    console.log("getMediaList Error -", error);

    return {
      error,
    };
  }
};
