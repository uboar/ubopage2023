<script lang="ts">
  import { Badge, Timeline, TimelineItem } from "flowbite-svelte";
  import { VirtualScroll } from "svelte-virtual-scroll-list";
  import UBackButton from "@/components/UBackButton.svelte";
  import type { PageServerData } from "./$types";
  import { PUBLIC_BASEURL } from "$env/static/public";
  export let data: PageServerData;
</script>

<svelte:head>
  <title>HEADLINE / UBOPAGE</title>
  <meta property="og:title" content="UBOPAGE / HEADLINE" />
  <meta property="og:image" content="{PUBLIC_BASEURL}/staticog/HEADLINE.png" />
</svelte:head>
<!-- svelte-ignore a11y-missing-content -->
<a href="/staticog/HEADLINE.png" />

<div class="my-5" />
<div
  class="animate__animated animate__fadeIn flex flex-col gap-2 md:items-center"
>
  <div class="link-header">HEADLINE</div>
  <div class="mx-12 overflow-y-auto px-2 md:mx-0 md:w-96">
    <Timeline class="dark:border-primary-500">
      <VirtualScroll data={data.contents} key="id" let:data>
        <TimelineItem
          classDiv="dark:bg-primary-500"
          title={data.title}
          date={data.date}
        >
          <div class="my-1 flex gap-4">
            {#each data.tag as tag}
              <Badge rounded>{tag.name}</Badge>
            {/each}
          </div>
          <p class="prose prose-blue text-gray-500">
            {@html data.content}
          </p>
        </TimelineItem>
      </VirtualScroll>
    </Timeline>
  </div>
</div>
<UBackButton />
