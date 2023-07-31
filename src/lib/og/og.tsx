import React from "react";
import { ImageResponse } from "@vercel/og";
import { readFileSync, readdirSync } from "fs";
import path from "path";

const fontData = readFileSync("./src/lib/assets/NotoSansJP-Medium.ttf");

export const ogGen = async (title: string) => {
  return new ImageResponse(
    (
      <img
        src="https://r2.uboar.net/ubopage/og.png"
        tw="text-slate-50 w-full h-full flex flex-col"
      >
        <div
          tw="w-full p-28 text-9xl font-bold"
          style={{
            fontFamily: "Noto Sans JP",
          }}
        >
          UBOPAGE
        </div>
        <div
          tw="w-full pl-28 text-7xl font-bold"
          style={{
            fontFamily: "Noto Sans JP",
          }}
        >
          {title}
        </div>
      </img>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Noto Sans JP",
          data: fontData,
          weight: 500,
        },
      ],
    }
  );
};
