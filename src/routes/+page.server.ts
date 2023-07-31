import { getHeadline } from "@/lib/micocms";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  return await getHeadline({ limit: 5 });
};

export const prerender = true;
export const trailingSlash = "always";
