<script>
  // imports
  // ------------------------------------------------------------------------
  import { writable } from "svelte/store";
  import state from "../Data/state.js";

  // purpose:		on errors
  // ------------------------------------------------------------------------
  window.addEventListener("appError", (event) => {
    gtag("event", "app", {
      event_category: "error",
      event_label: event.detail.text,
    });
  });

  // purpose:		when user installs the app as PWA (works on Android)
  // ------------------------------------------------------------------------
  window.addEventListener("appinstalled", () => {
    gtag("event", "app", {
      event_label: "appInstalled",
      value: 1,
    });
  });

  // purpose:		when the info about the pwa is shown
  // ------------------------------------------------------------------------
  window.addEventListener("installPromptShown", () => {
    gtag("event", "app", {
      event_label: "installPromptShown",
      value: 1,
    });
  });

  // purpose:		when user tells us how many situps he made on test
  // ------------------------------------------------------------------------
  window.addEventListener("testDataFilled", (event) => {
    gtag("event", "test", {
      event_label: "situps",
      value: event.detail.situps,
    });
  });

  // purpose:		when user tells us how much time they can dedicate
  // ------------------------------------------------------------------------
  window.addEventListener("timeDataFilled", (event) => {
    gtag("event", "time", {
      event_label: "situps",
      value: event.detail.time,
    });
  });

  // purpose:		when user goes through the next step of training
  // ------------------------------------------------------------------------
  $: ({ currentStep } = $state);

  $: currentStep,
    gtag("event", "training", {
      event_label: "step",
      value: currentStep,
    });

  // purpose:		when a screen is viewed
  // ------------------------------------------------------------------------
  $: ({ page } = $state);

  $: page,
    gtag("event", "page", {
      event_label: page,
      value: 1,
    });

  // purpose:		when user resets the app
  // ------------------------------------------------------------------------
  window.addEventListener("appReset", () => {
    gtag("event", "app", {
      event_label: "reset",
    });
  });

  // purpose:		when user visits the menu
  // ------------------------------------------------------------------------
  $: ({ menu } = $state);

  $: menu,
    gtag("event", "menu", {
      event_label: menu,
    });
</script>
