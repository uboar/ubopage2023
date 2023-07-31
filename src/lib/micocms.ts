import { createClient, type MicroCMSQueries } from "microcms-js-sdk";
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from "$env/static/private";
const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY,
});

//型定義
export type Headline = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  date: string;
  content?: string;
  tag: Tag[];
};
export type Tag = {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

export type HeadlineResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Headline[];
};

//型定義
export type Collection = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  date: string;
  link: string;
  queryString: string;
  type: ("music" | "zip" | "image" | "file" | "repository" | "other")[];
};
export type CollectionResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Collection[];
};

//APIの呼び出し
export const getHeadline = async (queries?: MicroCMSQueries) => {
  return await client.get<HeadlineResponse>({ endpoint: "headline", queries });
};
export const getHeadlineDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Headline>({
    endpoint: "headline",
    contentId,
    queries,
  });
};

export const getCollection = async (queries?: MicroCMSQueries) => {
  return await client.get<CollectionResponse>({
    endpoint: "collection",
    queries,
  });
};
export const getCollectionDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  return await client.getListDetail<Collection>({
    endpoint: "collection",
    contentId,
    queries,
  });
};
