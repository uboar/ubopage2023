<script lang="ts">
  import uboar_icon from "$lib/assets/img/uboar_white.png";
</script>

<div class="text-center text-lg">uboar / ウボァー</div>
<a class="self-center" href="/">
  <img class="uboar-icon" alt="uboar-icon" src={uboar_icon} />
</a>
<div class="tags">
  NICONICO MEDLEY / DTM / ILLUST / VIDEO / ELECTRIC DEV / VOICE SYNTHESIS / WEB
  DEV etc...
</div>
<div class="contact">CONTACT : uboaruboar@gmail.com</div>

<style lang="postcss">
  .tags {
    @apply w-80 self-center text-justify text-xs;
    text-align-last: justify;
    color: theme(colors.slate.500);
    font-family: "Lexend Variable", sans-serif;
  }

  .contact {
    @apply w-80 self-center text-center text-xs;
    color: theme(colors.slate.500);
    font-family: "Lexend Variable", sans-serif;
  }

  .uboar-icon {
    @apply h-48 w-48 rounded-full;
    transition: all 0.2s ease-in-out;
    filter: drop-shadow(0px 0px 8px #f8fafc32);
  }
  .uboar-icon:hover {
    filter: drop-shadow(0px 0px 24px #f8fafc32);
  }
</style>
