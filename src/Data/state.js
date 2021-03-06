/*
	The main store for holding the app state and user information.

	Usage: import { state } from './Data/state.js'; and then use
	the methods provided in the return statement for navigating through
	the state.
*/

// imports
// ------------------------------------------------------------------------
import { writable } from "svelte/store";

// module variables
// ------------------------------------------------------------------------
const state = createStore();

// purpose:		creates the custom store
// ************************************************************************
function createStore() {
  // purpose:		sets the variables with user info taken from
  // 				local storage or sets it to defaults
  // ------------------------------------------------------------------------
  let state = {};
  state.page = localStorage.page ? localStorage.page : "Hello";
  state.set = localStorage.set ? parseInt(localStorage.set) : 1;
  state.currentStep = localStorage.currentStep
    ? parseInt(localStorage.currentStep)
    : 0;
  state.isResting = localStorage.isResting
    ? parseInt(localStorage.isResting)
    : 0;
  state.situpsLast = localStorage.situpsLast
    ? parseInt(localStorage.situpsLast)
    : 0;
  state.situpsTotal = localStorage.situpsTotal
    ? parseInt(localStorage.situpsTotal)
    : 0;
  state.lastActive = localStorage.lastActive
    ? parseInt(localStorage.lastActive)
    : Date.now();
  state.congratsShown = localStorage.congratsShown;
  state.popupShown = false;
  state.menuShown = false;
  state.menu = false;
  state.error = false;

  // purpose:		creates the store with data provided in state object
  // ------------------------------------------------------------------------
  const { subscribe, set, update } = writable(state);

  // purpose:		updates the state and sets corresponding page
  // arguments: 	new page name (string)
  // ------------------------------------------------------------------------
  let setPage = (newPage) => {
    update((state) => {
      state.page = newPage;
      localStorage.page = state.page;

      return state;
    });
  };

  // purpose:		updates the state and sets current situps set in a training
  // arguments: 	situps set (int)
  // ------------------------------------------------------------------------
  let setSet = (newSet) => {
    update((state) => {
      state.set = newSet;
      localStorage.set = state.set;

      return state;
    });
  };

  // purpose:		sets index for situps that user is currently doing
  // arguments: 	situps index (int)
  // ------------------------------------------------------------------------
  let setStep = (newIndex) => {
    update((state) => {
      state.currentStep = parseInt(newIndex);
      localStorage.currentStep = state.currentStep;

      return state;
    });
  };

  // purpose:		moves the set one forward
  // ------------------------------------------------------------------------
  let nextSet = () => {
    setSet(state.set + 1);
  };

  // purpose:		sets the number of last situps done
  // arguments: 	last done situps
  // ------------------------------------------------------------------------
  let lastSet = (newsitupsLast) => {
    update((state) => {
      state.situpsLast = newsitupsLast;
      localStorage.situpsLast = state.situpsLast;

      return state;
    });
  };

  // purpose:		updates the total value of situps done
  // arguments: 	the amount of situps to add
  // ------------------------------------------------------------------------
  let totalUpdate = (addsitups) => {
    update((state) => {
      state.situpsTotal += addsitups;
      localStorage.situpsTotal = state.situpsTotal;

      return state;
    });
  };

  // purpose:		sets the info if the user is resting
  // arguments:	1 for user resting (default) or 0 if not
  // ------------------------------------------------------------------------
  let isResting = (resting) => {
    update((state) => {
      state.isResting = resting ? 1 : 0;
      localStorage.isResting = state.isResting;

      return state;
    });
  };

  // purpose:		sets the information about the popup status
  // arguments: 	if popup is visible (true) or not (false)
  // ------------------------------------------------------------------------
  let popupShown = (is) => {
    update((state) => {
      state.popupShown = is;

      return state;
    });
  };

  // purpose:		sets the information about the congratulations screen
  // arguments: 	if congratulations were shown (true) or not (false)
  // ------------------------------------------------------------------------
  let setCongrats = (were) => {
    update((state) => {
      state.congratsShown = were;
      localStorage.congratsShown = were;

      return state;
    });
  };

  // purpose:		sets the information about currently active menu
  // arguments: 	menu id (string)
  // returns:		currently active menu id (string)
  // ------------------------------------------------------------------------
  let setMenu = (id) => {
    update((state) => {
      state.menu = id;

      return state;
    });

    return state.menu;
  };

  // purpose:		sets the error information visible to the user
  // arguments:	user-friendly error message
  // returns:		the error object
  // ------------------------------------------------------------------------
  let setError = (error) => {
    update((state) => {
      state.error = error;

      return state;
    });

    return error;
  };

  // purpose:		returns publicly visible methods to manage the store
  // ------------------------------------------------------------------------
  return {
    subscribe,
    setPage,
    setSet,
    nextSet,
    setStep,
    lastSet,
    totalUpdate,
    isResting,
    popupShown,
    setCongrats,
    setMenu,
    setError,
  };
}

// exports
// ------------------------------------------------------------------------
export default state;
