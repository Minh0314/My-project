<script>

  import {openModal} from "../stores";
</script>

<header class="flex flex-col relative z-30">
  <div
    class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6"
  >
    <a href="/">
      <h1 class="font-semibold text-2xl">
        Swoley <span class="text-indigo-400">Moley</span>
      </h1>
    </a>
    <button on:click={()=>($openModal = true)} class="md:hidden grid place-items-center"
      ><i class="fa-solid fa-bars"></i></button
    >
    <nav class="hidden md:flex items-center gap-4 lg:gap-6">
      <a href="#products" class="duration-200 hover:text-indigo-400">Product</a>
      <a href="#reviews" class="duration-200 hover:text-indigo-400">Review</a>
      <a href="#faqs" class="duration-200 hover:text-indigo-400">FAQs</a>
      <button class="specialButton">
        <p>Start free today</p>
      </button>
    </nav>
  </div>
</header>
