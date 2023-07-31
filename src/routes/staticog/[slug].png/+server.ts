import { ogGen } from "@/lib/og/og";
import type { RequestHandler } from "./$types";

export const GET = (async ({ params }) => {
  return (await ogGen(params.slug)) as Response;
}) satisfies RequestHandler;

export const prerender = true;
