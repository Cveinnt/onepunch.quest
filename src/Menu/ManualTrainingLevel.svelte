<!--  
	menu: manually adjusting the training level
-->
<script>
  // imports
  // ------------------------------------------------------------------------
  import state from "../Data/state.js";
  import string from "../Data/translations.js";
  import Menu from "../UI/Menu.svelte";

  // local properties
  // ------------------------------------------------------------------------
  let userSet = $state.set.toString();

  // purpose:		sets the user info according to user input
  // returns:		dispatches a 'manualSkill' event and redirects to Home page
  // ------------------------------------------------------------------------
  function setSkill() {
    window.dispatchEvent(
      new CustomEvent("manualSkill", {
        detail: { set: parseInt(userSet) },
      })
    );

    state.setSet(parseInt(userSet));
    state.setPage("Home");
  }
</script>

<Menu
  menuId="ManualTrainingLevel"
  contentClass="menu-form"
  buttonBackLabel={string.cancel}
  buttonNextLabel={string.accept}
  buttonNextAction={() => setSkill()}
>
  <div class="form-row">
    <h2 class="form-label">{string.setYourLevelTo}</h2>
    <select bind:value={userSet}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>
</Menu>
