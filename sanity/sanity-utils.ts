import { createClient, groq } from "next-sanity";
import { Project } from "@/Types/Project";
import clientConfig from "./config/client-config";
import { Blog } from "@/Types";

export async function getPosts(): Promise<Blog[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blogPost"]{
      _id,
      _createdAt,
      title,
      author,
      "slug": slug.current,
      "mainTextImg": mainTextImg.asset->url
    }`
  );
}

export async function getPost(slug: string): Promise<Blog> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "blogPost" && slug.current == "${slug}"][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "bannerImg": bannerImg.asset->url,
      mainText,
      "mainTextImg": mainTextImg.asset->url,
      middleText,
      secondText,
      "secondTextImg": secondTextImg.asset->url,
      lastTitle,
      lastText,
      summeryTitle,
      summery
    }`,
    { slug }
  );
}
// *[_type == "blogPost"&& slug.current =="installing-a-new-dishwasher"]