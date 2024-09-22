<script>
  import ProductCard from "./ProductCard.svelte";
import SectionWrapper from "./SectionWrapper.svelte";
let productFeature = [
    {
        featureList:[
            "Daily streaks counter",
            "Weight and creps tracker",
            "Community challenges",
            "Every workout is new and exciting",
        ],
        description:"Swoley moley ensure all users have a great time working out and staying fit. We have a wide range of features that will keep you motivated and excited to workout everyday.",
        imgUrl:'assets/selection.png'
    },
    {
        featureList:[
           'Select your preferences',
           'Personalized workout plans',
           'Guaranteed results',

        ],
        description:"Swoley moley ensure all users have a great time working out and staying fit. We have a wide range of features that will keep you motivated and excited to workout everyday.",
        imgUrl:'assets/training.png'
    },    {
        featureList:[
            'Select your preferences',
            'Personalized workout plans',
            'Guaranteed results',
            'Daily streaks counter',
        ],
        description:"Swoley moley ensure all users have a great time working out and staying fit. We have a wide range of features that will keep you motivated and excited to workout everyday.",
        imgUrl:'assets/goal.png'
    },

]
</script>

<SectionWrapper id="products">
  <div
    class=" flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14"
  >
    <p class="opacity-60 text-base sm:text-lg md:text-xl text-center">
      Start your lifetime <span class="text-indigo-400">gym streak</span>today
    </p>
    <h3
      class="text-black text-4xl sm:text-5xl md:text-6xl max-w-[1000px] mx-auto w-full font-semibold text-center"
    >
      Features For Everyone
    </h3>
    <div>
        {#each productFeature as productFeature,index }
          <ProductCard productFeature={productFeature} {index}>
{#if index === 0}
Experience a beginner exercise <span class="text-indigo-400 font-medium">master </span>
    {:else if index === 1}
   Lay the foundations for <span class="text-idingo-400 font-medium">routine</span> and consistency
 
    {:else}
    Workouts specific to your <span class="text-indigo-400 font-medium">environment</span> and <span class="text-indigo-400 font-medium" >
expertise
    </span>
{/if}
          </ProductCard>
        {/each}
    </div>
  </div>
</SectionWrapper>
