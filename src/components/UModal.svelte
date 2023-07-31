<script lang="ts">
  export let show = false;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="animate__animated animate__fadeIn background fixed z-40 flex h-screen w-screen items-center justify-center {show
    ? ''
    : 'hidden'}"
  on:click={() => {
    show = false;
  }}
>
  <slot />
</div>

<style>
  .background {
    background-color: rgba(14, 14, 14, 0.5);
  }
</style>
