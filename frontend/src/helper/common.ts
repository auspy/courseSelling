import { ApiMethods, FetchProps } from "@/types/types.api";
import { urlGql } from "./constants";

export const emptyButtonOnClick = (event: { stopPropagation: () => void }) => {
  alert("button was clicked");
  event.stopPropagation();
};
export const convertCamelCaseToSentence = (camelCase: string) => {
  const sentence = camelCase.replace(/([A-Z])/g, " $1");
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};

export const toFetch = async ({
  url = urlGql,
  method = ApiMethods.POST,
  body,
  headers,
}: FetchProps) => {
  console.log("in toFetch", url, method, body, headers);
  try {
    const data = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify(body),
        ...headers,
      },
    });
    return await data.json();
  } catch (error) {
    console.log(error, "in toFetch");
  }
};
