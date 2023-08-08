import { ApiMethods, FetchProps } from "@/types/types.api";
import { urlGql } from "./constants.global";

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

export const randomAlphabet = (uppercase: boolean = true): string => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const random = Math.floor(Math.random() * alphabet.length);
  if (uppercase) {
    return alphabet[random].toUpperCase();
  }
  return alphabet[random];
};

export const generateRandomInt = (max: number, min: number = 0): number => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const generatePurchaseCount = (): number => {
  return Number((Math.random() * 10 ** (Math.random() * 8)).toFixed());
};
