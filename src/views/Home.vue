<template>
  <header id="home" class="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32">
    <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
      <div class="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
        <img src="/logo_urbansos.png" width="200" id="logo"/>
        <h1 class="h1-large mb-5 nomeapp">Urban reporting system</h1>
        <p class="p-large mb-8">Created with the purpose of keeping cities more organized with the help of the population
        </p>        
        <a class="btn-download text-center text-white focus:outline-none font-bold" download="https://s3.sa-east-1.amazonaws.com/urbansos.apk/urbansos-release.apk" href="#download">Download</a>
        <a class="btn-login text-center text-white focus:outline-none font-bold" href="/login">Login</a>
      </div>
      <div class="xl:text-right">
        <img class="inline" src="/demo.png" alt="alternative" />
      </div>
    </div>
  </header>
</template>
  
<style>
body {
  background: #111827;
}

p {
  color: white;
  font: 400 1rem/1.625rem "Open Sans", sans-serif;
}

#home{
  max-width: 1200px;
  margin: auto;
}

#logo{
  margin: -100px auto 0px auto;
}

.nomeapp{
  color: #6750A4 !important;
  font-size: 30pt;
}

.btn-download{
  background-color: #2C7FBF !important;
  padding: 10px 20px;
  border-radius: 50px;
}
.btn-login{
  background-color: #7329BA !important;
  margin-left: 10px;
  padding: 10px 20px;
  border-radius: 50px;
}
</style>