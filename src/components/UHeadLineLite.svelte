<script lang="ts">
  import { Badge, Button, Timeline, TimelineItem } from "flowbite-svelte";
  import type { HeadlineResponse } from "@/lib/micocms";
  import { VirtualScroll } from "svelte-virtual-scroll-list";

  export let headlineData: HeadlineResponse;
</script>

<div class="mx-12 h-[400px] overflow-y-auto px-2 md:mx-0 md:w-96">
  <Timeline class="dark:border-primary-500">
    <VirtualScroll data={headlineData.contents} key="id" let:data>
      <TimelineItem
        classDiv="dark:bg-primary-500"
        title={data.title}
        date={data.date}
      >
        {#each data.tag as tag}
          <Badge rounded>{tag.name}</Badge>
        {/each}
        <p class="prose prose-blue text-gray-500">
          {@html data.content}
        </p>
      </TimelineItem>
    </VirtualScroll>
  </Timeline>
  <a href="/headline"> <Button class="mb-4">もっと見る</Button></a>
</div>
