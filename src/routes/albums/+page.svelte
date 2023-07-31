<script lang="ts">
  import albums from "@/lib/assets/albums.json";
  import UAlbumCard from "@/components/UAlbumCard.svelte";
  import UBackButton from "@/components/UBackButton.svelte";
  import { PUBLIC_BASEURL } from "$env/static/public";
</script>

<svelte:head>
  <title>ALBUMS / UBOPAGE</title>
  <meta property="og:title" content="UBOPAGE / ALBUMS" />
  <meta property="og:image" content="{PUBLIC_BASEURL}/staticog/ALBUMS.png" />
</svelte:head>
<!-- svelte-ignore a11y-missing-content -->
<a href="/staticog/ALBUMS.png" />

<div
  class="animate__animated animate__fadeIn mx-4 flex flex-col gap-2 md:items-center"
>
  <div class="h-10" />
  <div class="link-header">ALBUMS</div>
  <div class="mb-20 mt-10 flex w-full flex-wrap justify-center gap-32">
    {#each albums as album}
      <UAlbumCard
        link={album.path}
        title={album.name}
        releaseDate={album.releaseDate}
        imageSrc={album.albumArtUrl}
      />
    {/each}
  </div>
</div>

<UBackButton />
