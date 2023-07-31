<script lang="ts">
  import "@fontsource/kosugi-maru";
  import "@fontsource-variable/lexend";
  import "@/app.css";
  import "animate.css";
</script>

<svelte:head>
  <meta charset="utf-8" />
</svelte:head>

<div class="background-layer" />
<div class="dark">
  <slot />
</div>

<style lang="postcss">
  .background-layer {
    @apply fixed -z-50 h-screen w-screen;

    background-image: radial-gradient(
      rgba(14, 14, 14, 0.3) 3px,
      transparent 3px
    );
    background-size: 30px 30px;
  }
</style>
