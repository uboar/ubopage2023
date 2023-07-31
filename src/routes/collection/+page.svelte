<script lang="ts">
  import UBackButton from "@/components/UBackButton.svelte";
  import FilesIcon from "@/components/icons/FilesIcon.svelte";
  import { Input } from "flowbite-svelte";
  import { onMount } from "svelte";
  import type { PageServerData } from "./$types";
  import ZipIcon from "@/components/icons/ZipIcon.svelte";
  import GitHubIcon from "@/components/icons/GitHubIcon.svelte";
  import MusicIcon from "@/components/icons/MusicIcon.svelte";
  import { PUBLIC_BASEURL } from "$env/static/public";

  export let data: PageServerData;

  let filterString = "";
  let filterdData = data.contents;

  onMount(() => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("query")) {
      filterString = searchParams.get("query") || "";
      filter();
    }
  });

  const filter = () => {
    filterdData = data.contents.filter((elem) => {
      if (elem.queryString === filterString) return true;
      if (new RegExp(filterString, "ig").test(elem.title)) return true;
      return false;
    });
  };
</script>

<svelte:head>
  <title>COLLECTION / UBOPAGE</title>
  <meta property="og:title" content="UBOPAGE / COLLECTION" />
  <meta
    property="og:image"
    content="{PUBLIC_BASEURL}/staticog/COLLECTION.png"
  />
</svelte:head>

<!-- svelte-ignore a11y-missing-content -->
<a href="/staticog/COLLECTION.png" />

<div class="h-10" />
<div class="animate__animated animate__fadeIn header">
  <div class="flex flex-col gap-2 md:items-center">
    <div class="link-header-wide">COLLECTION</div>
    <Input
      defaultClass="md:w-[560px] mx-4"
      placeholder="絞り込み"
      bind:value={filterString}
      on:input={filter}
    />
    <div class="h-4" />
  </div>
</div>
<div
  class="animate__animated animate__fadeIn mx-4 flex flex-col gap-2 md:mt-20 md:items-center"
>
  {#each filterdData as collection}
    <a class="track-back" href={collection.link} target="_blank">
      <div class="mb-5 flex min-h-[64px] items-center">
        <div class="mx-4 h-12 w-12">
          {#if collection.type[0] === "music"}
            <MusicIcon />
          {/if}
          {#if collection.type[0] === "zip"}
            <ZipIcon />
          {/if}
          {#if collection.type[0] === "repository"}
            <GitHubIcon />
          {/if}
        </div>
        <div class="mr-4 w-full text-left md:text-lg">{collection.title}</div>
      </div>
      <div class="absolute bottom-1 w-full pl-4 text-sm">
        {collection.type[0]}
      </div>
      <div class="absolute bottom-1 w-full pr-4 text-end text-sm">
        {collection.date}
      </div>
    </a>
  {/each}
  <div class="h-20" />
</div>
<UBackButton />

<style lang="postcss">
  .header {
    @apply sticky top-0 z-30 backdrop-blur-md;
  }
  .track-back {
    transition: all 0.2s ease-in-out;
    @apply relative mt-4 w-full rounded-lg border-b border-primary-500 fill-slate-50 stroke-slate-50 text-slate-50 md:mx-0 md:w-[560px];
  }

  .track-back:hover {
    background-color: rgba(248, 250, 252, 0.2);
  }
</style>
