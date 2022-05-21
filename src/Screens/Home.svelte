<!--  
	The main screen for logged user
-->
<script>
  // imports
  // ------------------------------------------------------------------------
  import string from "../Data/translations.js";
  import state from "../Data/state.js";
  import training from "../Data/training.js";
  import { appear, slide } from "../Helpers/transitions.js";
  import MainAction from "../UI/MainAction.svelte";
  import Sidebar from "../UI/Sidebar.svelte";

  // get the training data
  // ------------------------------------------------------------------------
  let lastDay =
    $state.set !== 1
      ? training[$state.set]["situps"].reduce((a, b) => a + b, 0)
      : 0;
  $: commingUp = training[$state.set]["situps"].reduce((a, b) => a + b, 0);
  $: sidebarData = [
    ($state.situpsLast * 10) / 31,
    (commingUp * 10) / 31,
    $state.set,
  ];
</script>

<Sidebar data={sidebarData} />

<section class="main" out:slide={{ direction: "out" }}>
  <div class="content">
    <ul class="content-info">
      <li in:appear class="content-info-value">{string.lastDay}</li>
      <li in:appear={{ delay: 200 }} class="content-info-value">
        {string.comingUp}
      </li>
      <li in:appear={{ delay: 400 }} class="content-info-value">
        {string.currentLevel}
      </li>
    </ul>
  </div>

  <MainAction delay="400" changePageTo="Training"
    >{string.startNextTraining}</MainAction
  >
</section>
