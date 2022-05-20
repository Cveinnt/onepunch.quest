<!--  
	The page with the initial situps test
-->
<script>
  // imports
  // ------------------------------------------------------------------------
  import { onDestroy } from "svelte";
  import string from "../Data/translations.js";
  import state from "../Data/state.js";
  import { appear, slide } from "../Helpers/transitions.js";
  import MainAction from "../UI/MainAction.svelte";
  import Sidebar from "../UI/Sidebar.svelte";

  // component variables
  // ------------------------------------------------------------------------
  // how many situps the user did in the test (int)
  let situps;

  // purpose:		sets the user set based on situps he did in the test
  // ------------------------------------------------------------------------
  function setSet() {
    state.setSet(Math.floor(Math.max(Math.min(situps, 200), 0) * 0.05));
  }

  // when there is an on-screen keyboard on mobile and we hide the title
  // the screen needs to be smoothly scrolled to the top to give a better
  // feel for the user
  $: if (situps !== null && situps !== "") {
    if (window.scrollY > 0) {
      let interval = setInterval(() => {
        window.scrollTo({
          top: --window.scrollY,
        });

        if (window.scrollY <= 0) {
          clearInterval(interval);
        }
      }, 2);
    }
  }

  // purpose:		function executed after user fills the training data
  //				used mainly for analytics purposes
  // returns:		triggers an event 'testDataFilled' with test data
  // ------------------------------------------------------------------------
  function filled() {
    window.dispatchEvent(
      new CustomEvent("testDataFilled", { detail: { situps: situps } })
    );
  }
</script>

<Sidebar />

<section
  class="main"
  in:slide={{ direction: "in" }}
  out:appear={{ duration: 100 }}
>
  <div class="content content-readable">
    <h1
      class="text-title moveable"
      class:visible={typeof situps === "undefined"}
    >
      {@html string.firstTestYourself}
    </h1>
    <p
      class="text-subtitle moveable"
      class:visible={typeof situps === "undefined"}
    >
      {string.doAsManysitups}
    </p>
    <p class="text-title action-secondary">
      {string.iDid}
      <input
        type="number"
        placeholder="100"
        min="0"
        step="1"
        bind:value={situps}
        on:change={filled}
      />
      {string.situps(situps)}
    </p>
    {#if situps > 150}
      <p in:appear={{ delay: 500 }} out:appear class="text-subtitle">
        {string.impressive}
      </p>
    {:else if situps <= 150 && situps > 75}
      <p in:appear={{ delay: 500 }} out:appear class="text-subtitle">
        {string.niceGoRest}
      </p>
    {:else if situps <= 75 && situps >= 0 && typeof situps !== "undefined"}
      <p in:appear={{ delay: 500 }} out:appear class="text-subtitle">
        {string.tryHalfsitups}
      </p>
    {:else if situps < 0}
      <p in:appear={{ delay: 500 }} out:appear class="text-subtitle">
        {string.negativeJoke}
      </p>
    {/if}
  </div>

  {#if (typeof situps !== "undefined") & (situps > 0)}
    <MainAction delay="900" on:mainAction={setSet} changePageTo="Home"
      >{string.whatsNext}</MainAction
    >
  {/if}
</section>

<style>
  .moveable {
    transition: all 0.4s linear;
  }

  .moveable:not(.visible) {
    max-height: 0;
    margin: 0;
    overflow: hidden;
    opacity: 0;
  }

  .moveable.visible {
    max-height: 4em;
  }

  .text-subtitle.visible {
    margin-bottom: 2rem;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    margin: 0;
    -webkit-appearance: none;
  }
</style>
