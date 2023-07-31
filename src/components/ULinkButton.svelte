<script lang="ts">
  export let index: string;
  export let link: string;
  export let newTab = false;
  export let color = "#f8fafc";
  export let colorHover = "#08080E";
  export let svgScale = "1.0";
  export let description = "";
  export let descriptionHover = "";
</script>

<a
  class="u-link-button group"
  href={link}
  target={newTab ? "_blank" : ""}
  style="--color: {color}; --color-shadow-strong: {color +
    '64'}; --color-shadow-weak: {color + '32'}; --color-hover: {colorHover}"
>
  <div class="flex w-full items-center">
    <div class="mx-6 w-10">
      <div class="svg-image" style="--scale: {svgScale}">
        <slot />
      </div>
    </div>
    <div class="flex w-full flex-col">
      <div class="link-index">{index}</div>
      <div class="trans h-0 text-sm opacity-0 group-hover:opacity-100">
        {descriptionHover}
      </div>
      <div class="trans text-sm group-hover:opacity-0">
        {description}
      </div>
    </div>
  </div>
</a>

<style lang="postcss">
  .u-link-button {
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 10px var(--color-shadow-strong),
      inset 0 0 10px 0 var(--color-shadow-weak);
    border-color: var(--color);
    fill: var(--color);
    stroke: var(--color);
    color: var(--color);
    @apply mx-12 h-16 rounded-xl border-2 p-1 md:mx-0 md:w-96;
  }
  .u-link-button:hover {
    box-shadow: 0 0 30px 0 var(--color-shadow-strong);
    background-color: var(--color);
    fill: var(--color-hover);
    stroke: var(--color-hover);
    color: var(--color-hover);
    @apply scale-[1.02];
  }
  .u-link-button:active {
    @apply scale-[1.01];
  }
  .trans {
    transition: opacity 0.1s ease-in-out;
  }
  .link-index {
    letter-spacing: 0.2em;
    @apply w-full self-center text-xl font-bold;
  }
  .svg-image {
    scale: var(--scale);
  }
</style>
