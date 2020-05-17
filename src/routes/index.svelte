<script context="module">
  export async function preload() {
    let data = {};
    const API = "https://us-central1-pugstagram-co.cloudfunctions.net/data";
    const response = await this.fetch(API);
    data = await response.json();
    return { data };
  }
</script>

<script>
  /* Utils */
  /*   import { onMount } from "svelte"; */
  // Components
  import Main from "../components/Main.svelte";

  import Sidebar from "../components/Sidebar.svelte";
  import TimeLine from "./../components/TimeLine.svelte";

  export let data;

  /*   let data = {};*/
  const localUser = {
    user: {
      name: "Visaka Devi",
      nickname: "Visidevi"
    }
  };
  /*   onMount(async () => {
    const response = await fetch(API);
    data = await response.json();
  }); */
</script>

<!-- Modulo -->
<svelte:head>
  <title>InstagramSvelte</title>

</svelte:head>

<Main>
  <TimeLine posts={data.posts} />
  <Sidebar {...localUser.user} />
</Main>
