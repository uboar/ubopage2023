import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export type AlbumSong = {
  songName: string;
  songUrl?: string;
  nicoId?: string;
  youtubeId?: string;
  songDescription?: string;
  hideDetails?: boolean;
  hidePlay?: boolean;
};

export type AlbumData = {
  albumName: string;
  theme?: string;
  downloadColor?: string;
  releaseDate: string;
  downloadUrl: string;
  albumDescription: string;
  albumArtUrl: string;
  songList: AlbumSong[];
};

import utateg from "$lib/assets/albums/utateg.json";
import ikij from "$lib/assets/albums/ikij.json";
import skut from "$lib/assets/albums/skut.json";
import ubomez from "$lib/assets/albums/ubomez.json";
import nicodo from "$lib/assets/albums/nicodo.json";
import nicogazer from "$lib/assets/albums/nicogazer.json";
import whileontile from "$lib/assets/albums/whileontile.json";
import periodley from "$lib/assets/albums/periodley.json";
import allforyou from "$lib/assets/albums/allforyou.json";
import amx40 from "$lib/assets/albums/amx40.json";
import flywheel from "$lib/assets/albums/flywheel.json";
import chebyshev from "$lib/assets/albums/chebyshev.json";
import astable from "$lib/assets/albums/astable.json";
import hysteresis from "$lib/assets/albums/hysteresis.json";
import schmitttrigger from "$lib/assets/albums/schmitttrigger.json";
import pushpull from "$lib/assets/albums/pushpull.json";
import fieldeffect from "$lib/assets/albums/fieldeffect.json";

export const load = (async ({ params }) => {
  if (params.slug === "utateg") return utateg as AlbumData;
  if (params.slug === "ikij") return ikij as AlbumData;
  if (params.slug === "skut") return skut as AlbumData;
  if (params.slug === "ubomez") return ubomez as AlbumData;
  if (params.slug === "nicodo") return nicodo as AlbumData;
  if (params.slug === "nicogazer") return nicogazer as AlbumData;
  if (params.slug === "whileontile") return whileontile as AlbumData;
  if (params.slug === "periodley") return periodley as AlbumData;
  if (params.slug === "allforyou") return allforyou as AlbumData;
  if (params.slug === "amx40") return amx40 as AlbumData;
  if (params.slug === "flywheel") return flywheel as AlbumData;
  if (params.slug === "chebyshev") return chebyshev as AlbumData;
  if (params.slug === "astable") return astable as AlbumData;
  if (params.slug === "hysteresis") return hysteresis as AlbumData;
  if (params.slug === "schmitttrigger") return schmitttrigger as AlbumData;
  if (params.slug === "pushpull") return pushpull as AlbumData;
  if (params.slug === "fieldeffect") return fieldeffect as AlbumData;
  throw error(404, "Not Found");
}) satisfies PageServerLoad;

export const prerender = true;
export const trailingSlash = "always";
