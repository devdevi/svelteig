<script>
// Components
import Main from './../components/Main.svelte';
import Header from './../components/Header.svelte';
import Sidebar from './../components/Sidebar.svelte';
import Timeline from './../components/Timeline.svelte';


</script>
<style>
    :global(body) {
        background-color: blanchedalmond;
        color: blue;
    }
</style>
<Header/>
<Main>
    <Timeline/>
    <Sidebar/>
</Main>