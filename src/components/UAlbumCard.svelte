<script lang="ts">
  export let title: string;
  export let releaseDate: string;
  export let imageSrc: string;
  export let link: string;
</script>

<a href={link}>
  <div class="card-base group">
    <div class="p-4">
      <img
        class="rounded-2xl border-none object-fill shadow-xl"
        loading="lazy"
        alt={title}
        src={imageSrc}
      />
    </div>
    <h3 class="card-title">{title}</h3>
    <div class="card-release-date">{releaseDate}</div>
    <slot />
  </div>
</a>

<style lang="postcss">
  .card-base {
    @apply w-[360px] rounded-2xl border-2 border-slate-50 p-4;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 10px rgba(248, 250, 252, 0.2),
      inset 0 0 10px 0 rgba(248, 250, 252, 0.1);
  }
  .card-base:hover {
    @apply scale-[1.02] bg-slate-50;
    color: rgb(14, 14, 14);
    box-shadow: 0 0 30px 0 rgba(248, 250, 252, 0.2);
  }
  .card-base:active {
    @apply scale-[1.01];
  }
  .card-title {
    @apply border-b-2 border-slate-50 text-2xl;
  }
  .card-release-date {
    @apply text-end;
  }
</style>
