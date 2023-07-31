<script lang="ts">
  import UBackButton from "@/components/UBackButton.svelte";
  import UModal from "@/components/UModal.svelte";
  import type { PageServerData } from "./$types";
  import type { AlbumSong } from "./+page.server";
  import { Button } from "flowbite-svelte";
  import { marked } from "marked";
  import { PUBLIC_BASEURL } from "$env/static/public";

  export let data: PageServerData;

  const ogName = encodeURIComponent(`${data.albumName}：ALBUMS`);

  let show = false;
  let selectedSong: AlbumSong = data.songList[0];
</script>

<svelte:head>
  <title>{data.albumName} / UBOPAGE</title>
  <meta property="og:title" content="{data.albumName} / ALBUMS" />
  <meta property="og:image" content="{PUBLIC_BASEURL}/staticog/{ogName}.png" />
</svelte:head>
<!-- svelte-ignore a11y-missing-content -->
<a href="/staticog/{ogName}.png" />

<UModal bind:show>
  {#if show}
    <div class="modal-card p-4">
      <h2 class="border-b">
        {selectedSong.songName}
      </h2>
      {#if selectedSong.songDescription}
        <div
          class="prose prose-blue prose-p:text-slate-50 prose-strong:text-slate-50"
        >
          {@html marked(selectedSong.songDescription, {
            mangle: false,
            headerIds: false,
          })}
        </div>
      {/if}
      {#if selectedSong.nicoId}
        <script
          type="application/javascript"
          src="https://embed.nicovideo.jp/watch/{selectedSong.nicoId}/script?w=560"
        ></script>
      {/if}
      {#if selectedSong.youtubeId}
        <iframe
          width="520"
          height="315"
          src="https://www.youtube.com/embed/{selectedSong.youtubeId}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      {/if}
    </div>
  {/if}
</UModal>

<div class="animate__animated animate__fadeIn mx-4 grid-cols-2 lg:grid">
  <div
    class="left-0 top-0 flex flex-col gap-2 md:items-center lg:fixed lg:w-1/2"
  >
    <h1 class="album-title">{data.albumName}</h1>
    <div class="album-release-date">{data.releaseDate}</div>
    <img src={data.albumArtUrl} class="album-art" alt="album art" />
    <div class="mx-12 md:mx-0 md:w-96">
      <p>{data.albumDescription}</p>
    </div>
    <a href={data.downloadUrl} target="_blank" class="download-button"
      >DOWNLOAD</a
    >
  </div>
  <div />
  <div class="flex flex-col items-center gap-2 lg:mt-10 lg:items-start">
    <div class="link-header-wide">TRACK LIST</div>
    {#each data.songList as track, index}
      {#if track.hideDetails}
        <div class="track-back-disabled">
          <div class="flex min-h-[64px] items-end">
            <div class="song-index-disabled">{index + 1}</div>
            <div class="mr-2 w-full text-left md:text-lg">{track.songName}</div>
          </div>
        </div>
      {:else}
        <button
          class="track-back"
          on:click={() => {
            selectedSong = track;
            show = true;
          }}
        >
          <div class="flex min-h-[64px] items-end">
            <div class="song-index">{index + 1}</div>
            <div class="mr-2 w-full text-left md:text-lg">{track.songName}</div>
          </div>
        </button>
      {/if}
    {/each}
    <div class="h-24" />
  </div>
</div>

<UBackButton href="/albums" />

<style lang="postcss">
  .album-title {
    @apply mx-12 mt-12 border-b-2 text-3xl font-bold md:mx-0 md:w-96;
    letter-spacing: 0.2em;
  }
  .album-release-date {
    @apply mx-12 mb-2 text-end md:mx-0 md:w-96;
  }
  .album-art {
    @apply mx-12 mb-2 rounded-xl shadow-2xl md:mx-0 md:w-96;
  }

  .download-button {
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 10px rgba(248, 250, 252, 0.2),
      inset 0 0 10px 0 rgba(248, 250, 252, 0.2);
    font-family: "Lexend Variable", sans-serif;
    @apply mx-12 my-4 h-12 content-center rounded-xl border-2 border-slate-50 fill-slate-50 p-1 text-center  text-2xl text-slate-50 md:mx-0 md:w-96;
  }
  .download-button:hover {
    box-shadow: 0 0 30px 0 rgba(248, 250, 252, 0.1);
    @apply scale-[1.02] bg-slate-50 text-gray-900;
  }
  .download-button:active {
    @apply scale-[1.01];
  }

  .track-back {
    transition: all 0.2s ease-in-out;
    @apply mx-4 mt-4 w-full rounded-lg border-b border-primary-500 md:mx-0 md:w-[560px];
  }

  .track-back:hover {
    background-color: rgba(248, 250, 252, 0.2);
  }

  .track-back-disabled {
    @apply mx-4 mt-4 w-full rounded-lg border-b border-primary-800 md:mx-0 md:w-[560px];
  }

  .song-index {
    @apply w-12 text-xl md:text-2xl;
    font-family: "Lexend Variable", sans-serif;
  }

  .song-index-disabled {
    @apply w-12 text-center text-xl md:text-2xl;
    font-family: "Lexend Variable", sans-serif;
  }

  .modal-card {
    @apply flex h-fit w-[560px] flex-col rounded-lg border-2 border-primary-700 text-2xl shadow-xl;
    background-color: rgb(14, 14, 14);
  }
</style>
