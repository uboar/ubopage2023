<script lang="ts">
  import ULinkButton from "@/components/ULinkButton.svelte";
  import UAvatar from "@/components/UAvatar.svelte";
  import UBackButton from "@/components/UBackButton.svelte";

  import VoskeyIcon from "@/components/icons/VoskeyIcon.svelte";
  import NiconicoIcon from "@/components/icons/NiconicoIcon.svelte";
  import YoutubeIcon from "@/components/icons/YoutubeIcon.svelte";
  import GitHubIcon from "@/components/icons/GitHubIcon.svelte";
  import BlogIcon from "@/components/icons/BlogIcon.svelte";
  import ZennIcon from "@/components/icons/ZennIcon.svelte";
  import NicomedkeyIcon from "@/components/icons/NicomedkeyIcon.svelte";
  import TwitterIcon from "@/components/icons/TwitterIcon.svelte";
  import MissLiIcon from "@/components/icons/MissLiIcon.svelte";
  import IoIcon from "@/components/icons/IoIcon.svelte";
  import MistemsIcon from "@/components/icons/MistemsIcon.svelte";
  import { PUBLIC_BASEURL } from "$env/static/public";
</script>

<svelte:head>
  <title>LINK / UBOPAGE</title>
  <meta property="og:title" content="UBOPAGE / LINK" />
  <meta property="og:image" content="{PUBLIC_BASEURL}/staticog/LINK.png" />
</svelte:head>

<!-- svelte-ignore a11y-missing-content -->
<a href="/staticog/LINK.png" />

<div
  class="animate__animated animate__fadeIn flex flex-col gap-2 md:items-center"
>
  <div class="my-5" />
  <UAvatar />
  <div class="link-header">CREATIVE</div>
  <ULinkButton
    link="https://www.nicovideo.jp/user/21791951"
    index="ニコニコ動画"
    description="21791951"
    descriptionHover="動画はここ"
    svgScale="0.9"
    newTab
    color="#ffffff"
    colorHover="#252525"
  >
    <NiconicoIcon />
  </ULinkButton>
  <ULinkButton
    link="https://www.youtube.com/@_uboar_"
    index="Youtube"
    description="@_uboar_"
    color="#ff0000"
    colorHover="#ffffff"
    newTab
    descriptionHover="基本的にニコニコ動画のミラー"
  >
    <YoutubeIcon />
  </ULinkButton>
  <ULinkButton
    link="https://github.com/uboar"
    index="GitHub"
    description="uboar"
    descriptionHover="コード置き場"
    newTab
    color="#E6EDF3"
    colorHover="#0D1117"
  >
    <GitHubIcon />
  </ULinkButton>
  <ULinkButton
    link="https://uboar.hatenablog.com"
    index="はてなブログ"
    description="uboar.hatenablog.com"
    descriptionHover="雑多な文字書き場、本サイト内に移行予定"
    newTab
    color="#F3EEEB"
    colorHover="#33403D"
  >
    <BlogIcon />
  </ULinkButton>
  <ULinkButton
    link="https://zenn.dev/uboar"
    index="Zenn"
    description="uboar"
    descriptionHover="コーディング関係の文字書き場"
    newTab
    svgScale="0.9"
    color="#3EA8FF"
    colorHover="#F1F5F9"
  >
    <ZennIcon />
  </ULinkButton>
  <div class="link-header">SERVICE</div>
  <ULinkButton
    link="https://nicomedkey.cc"
    index="nicomedkey.cc"
    description="ニコメド愛好家の為の分散SNS"
    descriptionHover="ニコメド愛好家の為の分散SNS"
    color="#F29924"
    svgScale="1.35"
    newTab
    colorHover="#ffffff"
  >
    <NicomedkeyIcon />
  </ULinkButton>
  <ULinkButton
    link="https://uboar.github.io/missli/"
    index="MissLI"
    description="軽量Misskeyクライアント"
    descriptionHover="軽量Misskeyクライアント"
    color="#570DF8"
    colorHover="#ffffff"
    newTab
  >
    <MissLiIcon />
  </ULinkButton>
  <div class="link-header">SOCIAL</div>
  <ULinkButton
    link="https://nicomedkey.cc/@uboar"
    index="nicomedkey.cc"
    description="@uboar@nicomedkey.cc"
    descriptionHover="ニコメド関連のつぶやきはここ"
    color="#F29924"
    svgScale="1.35"
    newTab
    colorHover="#ffffff"
  >
    <NicomedkeyIcon />
  </ULinkButton>
  <ULinkButton
    link="https://voskey.icalo.net/@uboar"
    index="ぼすきー"
    description="@uboar@voskey.icalo.net"
    descriptionHover="合成音声関連のつぶやきはここ"
    color="#33FFA0"
    newTab
    colorHover="#252525"
  >
    <VoskeyIcon />
  </ULinkButton>
  <ULinkButton
    link="https://misskey.io/@uboar"
    index="Misskey.io"
    description="@uboar@misskey.io"
    descriptionHover="雑多なつぶやきはここ"
    color="#86B300"
    svgScale="1.35"
    newTab
    colorHover="#ffffff"><IoIcon /></ULinkButton
  >
  <ULinkButton
    link="https://misskey.systems/@uboar"
    index="みすてむず"
    description="@uboar@misskey.systems"
    descriptionHover="開発系のつぶやきはここ"
    color="#5D86DA"
    svgScale="1.35"
    newTab
    colorHover="#ffffff"
  >
    <MistemsIcon />
  </ULinkButton>
  <ULinkButton
    link="https://twitter.com/_uboar_"
    index="Twitter"
    description="@_uboar_"
    descriptionHover="告知以外ほぼ停止中"
    color="#1D9BF0"
    newTab
    colorHover="#ffffff"><TwitterIcon /></ULinkButton
  >
  <div class="my-5" />
</div>
<UBackButton />
