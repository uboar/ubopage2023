<script lang="ts">
  export let href = "/";
</script>

<a
  {href}
  class="animate__animated animate__fadeIn group fixed bottom-6 right-6 z-50"
>
  <p class="tooltip">戻る</p>
  <button class="back-button">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="h-10 w-10"
      ><path
        d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"
      /></svg
    >
  </button>
</a>

<style lang="postcss">
  .back-button {
    @apply flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary-600 bg-primary-600 hover:fill-primary-600;
    transition: all 0.2s ease-in-out;
    fill: rgb(14, 14, 14);
    box-shadow: 0 0 10px 0 rgba(37, 37, 110, 40);
  }
  .back-button:hover {
    @apply scale-[1.05];
    background-color: rgb(14, 14, 14);
    box-shadow: 0 0 20px 0 rgba(37, 37, 110, 20) inset 0 0 10px 0
      rgba(37, 37, 110, 20);
  }
  .back-button:active {
    @apply scale-[1.01];
  }
  .tooltip {
    @apply mb-4 text-center opacity-0 group-hover:opacity-100;
    transition: all 0.2s ease-in-out;
  }
</style>
