<script lang="ts">
	import "../app.css"
	import { Navbar, GlobalSidebar } from "$lib/components"
</script>

<Navbar />
<div class="flex">
	<GlobalSidebar />
	<main id="skip-to-content" class="flex-1 p-6">
		<slot />
	</main>
</div>
