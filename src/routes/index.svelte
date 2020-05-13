<script>
  /* Utils */
  import { onMount } from "svelte";
  // Components
  import Main from "../components/Main.svelte";
  import Header from "../components/Header.svelte";
  import Sidebar from "../components/Sidebar.svelte";
  import TimeLine from "./../components/TimeLine.svelte";

  let data = {};
  const localUser = {
    user: {
      name: "Visaka Devi",
      nickname: "Visidevi"
    }
  };
  const API = "https://us-central1-pugstagram-co.cloudfunctions.net/data";
  onMount(async () => {
    const response = await fetch(API);
    data = await response.json();
  });
</script>

<Header />
<Main>
  <TimeLine posts={data.posts} />
  <Sidebar {...localUser.user} />
</Main>


