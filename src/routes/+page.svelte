<script lang="ts">
  import UAvatar from "@/components/UAvatar.svelte";
  import ULinkButton from "@/components/ULinkButton.svelte";
  import UHeadLineLite from "@/components/UHeadLineLite.svelte";

  import type { PageServerData } from "./$types";
  import LinkIcon from "@/components/icons/LinkIcon.svelte";
  import AlbumIcon from "@/components/icons/AlbumIcon.svelte";
  import FilesIcon from "@/components/icons/FilesIcon.svelte";

  import { PUBLIC_BASEURL } from "$env/static/public";

  export let data: PageServerData;
</script>

<svelte:head>
  <title>UBOPAGE</title>
  <meta property="og:title" content="UBOPAGE / TOP" />
  <meta property="og:image" content="{PUBLIC_BASEURL}/staticog/TOP.png" />
</svelte:head>
<!-- svelte-ignore a11y-missing-content -->
<a href="/staticog/TOP.png" />

<div
  class="animate__animated animate__fadeIn flex flex-col gap-2 md:items-center"
>
  <div class="my-5" />
  <UAvatar />
  <div class="flex-row-reverse gap-20 lg:flex">
    <div class="flex flex-col gap-2 md:items-center">
      <div class="link-header">CONTENTS</div>
      <ULinkButton
        index="リンク"
        link="/link"
        description="各種サイトやSNSへのリンク集"
        descriptionHover="各種サイトやSNSへのリンク集"
      >
        <LinkIcon />
      </ULinkButton>
      <ULinkButton
        index="アルバム"
        link="/albums"
        description="アルバムの配布ページ"
        descriptionHover="アルバムの配布ページ"><AlbumIcon /></ULinkButton
      >
      <ULinkButton
        index="単品まとめ"
        link="/collection"
        description="今まで作ったもの"
        descriptionHover="今まで作ったもの"><FilesIcon /></ULinkButton
      >
    </div>
    <div>
      <div class="link-header">HEADLINE</div>
      <UHeadLineLite headlineData={data} />
    </div>
  </div>
</div>
