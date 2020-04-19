<script>
 /* Utils */
 import { onMount } from 'svelte';
// Components
import Main from '@components/Main.svelte';
import Header from '@components/Header.svelte';
import Sidebar from '@components/Sidebar.svelte';
import TimeLine from './../components/TimeLine.svelte';

let data = {}
const localUser = {user: {
    name: 'Visaka Devi',
    nickname: 'Visidevi'
}}
const API = "https://us-central1-pugstagram-co.cloudfunctions.net/data"
onMount(async () => {
    const response = await fetch(API)
    data = await response.json()
   
})

</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    :global(body) {
        background-color: #fafafa;
        color: rgba(38,38,38,0.7);
        font-family: "Lato", sans-serif;
        margin: 0;
        padding: 0;
    }
    :global(h1, h2, h3) {
        margin: 0;
        padding: 0,
    }
</style>
<Header/>
<Main>
    <TimeLine posts={data.posts}/>
    <Sidebar {...localUser.user}/>
</Main>