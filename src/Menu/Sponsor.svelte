<!--  
	menu: sponsor
-->



<script>

	// imports
	// ------------------------------------------------------------------------
	import string from '../Data/translations.js';
	import Menu from '../UI/Menu.svelte';

</script>




<Menu
	menuId="Sponsor"
	contentClass="menu-article"
	longContent="{ true }"
>

	{@html string.sponsorContent}

</Menu>