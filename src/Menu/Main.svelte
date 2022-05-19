<!--  
	menu: main menu navigation
-->
<script>
  // imports
  // ------------------------------------------------------------------------
  import { onMount } from "svelte";
  import state from "../Data/state.js";
  import string from "../Data/translations.js";
  import Menu from "../UI/Menu.svelte";

  onMount(() => {
    document.querySelector(".menu-items li:first-child button").focus();
  });
</script>

<Menu
  menuId="Main"
  allowButtonBack={false}
  transitionInModifier={{ direction: "out" }}
  transitionOutModifier={{ direction: "out" }}
>
  <ul class="menu-items">
    {#if $state.page === "Home"}
      <li class="menu-item">
        <button on:click={() => state.setMenu("ResetApp")}>
          {string.resetApp}
        </button>
      </li>
    {/if}

    {#if $state.page === "Home" || $state.page === "Hello" || $state.page === "Test"}
      <li class="menu-item">
        <button on:click={() => state.setMenu("ManualTrainingLevel")}>
          {string.manuallySetTrainingLevel}
        </button>
      </li>
    {/if}

    {#if $state.page === "Training" || $state.page === "Finish"}
      <li class="menu-item">
        <button on:click={() => state.setMenu("CancelTraining")}>
          {string.cancelTraining}
        </button>
      </li>
    {/if}

    <li class="menu-item">
      <button on:click={() => state.setMenu("Instructions")}>
        {string.instructions}
      </button>
    </li>

    {#if $state.page === "Hello" || $state.page === "Home"}
      <li class="menu-item">
        <button on:click={() => state.setMenu("ManualLanguage")}>
          {string.setLanguage}
        </button>
      </li>
    {/if}

    {#if $state.page !== "Training"}
      <li class="menu-item">
        <button on:click={() => state.setMenu("PrivacyPolicy")}>
          {string.privacyPolicy}
        </button>
      </li>
    {/if}

    <li class="menu-item">
      <button on:click={() => state.setMenu("Sponsor")}>
        {string.sponsor}
      </button>
    </li>
  </ul>

  <a href="https://wensenwu.com" target="_blank" class="credit"
    >{string.appCreatedBy}</a
  >
</Menu>

<style>
  .menu-items {
    margin-left: calc(var(--size-padding) * -1);
    margin-right: calc(var(--size-padding) * -1);
    margin-bottom: var(--size-spacing);
  }

  .menu-item {
    padding: 0.6em var(--size-padding) 0.7em;
    padding-right: calc(var(--size-padding) + 1.5rem);

    border-bottom: 1px solid var(--color-pureSeparator);
    background-image: var(--icon-arrowRight);
    background-position: right var(--size-padding) center;
    background-repeat: no-repeat;
    background-size: 1.2rem;

    user-select: none;
  }

  .menu-item:first-child {
    padding-top: 0;
  }

  @media (prefers-color-scheme: dark) {
    .menu-item {
      background-image: var(--icon-arrowRight-light);
    }
  }

  .credit {
    padding-left: 2.3em;

    background-image: url(/img/logo.svg);
    background-repeat: no-repeat;
    background-position: left center;
    background-size: auto 100%;

    text-transform: uppercase;
    font-size: 0.75rem;
    color: inherit;
  }

  @media (prefers-color-scheme: dark) {
    .credit {
      background-image: url(/img/logo.svg);
    }
  }
</style>
