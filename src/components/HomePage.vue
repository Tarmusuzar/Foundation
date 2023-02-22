<template>
  
  <div>
    <header>
      <h1>Bahá’í Family</h1>
	</header>
	<main>
    <p>The Bahai faith is a global religion that emphasizes the spiritual unity of all humankind. It teaches that there is only one God and that all religions are part of a single, progressive process. The faith is committed to promoting peace, justice, and equality for all people, and encourages individuals to strive for personal excellence and to work towards the betterment of society.</p>
		<a href="/HelpMe" class="btn">I Need Help</a>
	</main>
  </div>
</template>
<script>
export default {
  components:{
    
  }
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

header {
  margin-bottom: 2rem;
}

h1 {
  font-size: 3rem;
  font-weight: bold;
  color: #555;
  text-transform: uppercase;
}

main {
  text-align: center;
}

p {
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 1rem 2rem;
  border: none;
  background-color: #555;
  color: #fff;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border-radius: 2rem;
  transition: background-color 0.2s ease-in-out;
}

.btn:hover {
  background-color: #222;
  cursor: pointer;
}

  
</style>