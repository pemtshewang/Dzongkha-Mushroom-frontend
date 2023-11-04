"use client"
import { Mushroom } from "./data";
export function getData({ name }: {
  name: string
}): Promise<{
  name: string,
  dzongkhaName: string,
  scientificName: string,
  edible: string,
  description: string
}> {
  // hold on, this is a fake API call!
  // hold on for 2 seconds
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // if the name is not in the Mushroom object
      // otherwise, resolve with the mushroom data
      resolve(Mushroom[name]);
    }, 6000);
  });
}
