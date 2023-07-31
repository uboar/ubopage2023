import { getCollection } from "@/lib/micocms";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return await getCollection({ limit: 100 });
};

export const prerender = true;
export const trailingSlash = "always";
