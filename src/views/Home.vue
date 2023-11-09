<template>
  <!-- Navigation -->
  <nav class="navbar fixed-top">
    <div class="container sm:px-4 lg:px-8 flex flex-wrap items-center justify-between lg:flex-nowrap">
     
      <a class="inline-block mr-4 py-0.5 text-xl whitespace-nowrap hover:no-underline focus:no-underline"
        href="index.html">
        <img src="/logo_urbansos.png" width="70" alt="alternative" />        
      </a>

      <button
        class="background-transparent rounded text-xl leading-none hover:no-underline focus:no-underline lg:hidden lg:text-gray-400"
        type="button" data-toggle="offcanvas">
        <span class="navbar-toggler-icon inline-block w-8 h-8 align-middle"></span>
      </button>

      <div class="navbar-collapse offcanvas-collapse lg:flex lg:flex-grow lg:items-center" id="navbarsExampleDefault">
        <ul class="pl-0 mt-3 mb-2 ml-auto flex flex-col list-none lg:mt-0 lg:mb-0 lg:flex-row">
          <li>
            <a class="nav-link page-scroll active" href="#">Home <span class="sr-only">(current)</span></a>
          </li>          
          <li>
            <a class="nav-link page-scroll" href="#download">Download</a>
          </li>
          <li>
            <a class="nav-link page-scroll" href="/login">Login</a>
          </li>
          <li>
            <a class="nav-link page-scroll" href="/register">Register</a>
          </li>                             
        </ul>
        <span class="block lg:ml-3.5">
          <a class="no-underline" href="#your-link">
            <i class="fab fa-apple text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200 mr-1.5"></i>
          </a>
          <a class="no-underline" href="#your-link">
            <i class="fab fa-android text-indigo-600 hover:text-pink-500 text-xl transition-all duration-200"></i>
          </a>
        </span>
      </div>
    </div>
  </nav>
  
  <header id="header" class="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32">
    <div class="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
      <div class="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
        <h1 class="h1-large mb-5">Urban reporting system</h1>
        <p class="p-large mb-8">Created with the purpose of keeping cities more organized with the help of the population</p>
        <a class="btn-solid-lg" href="#your-link">Download</a>
        <a class="btn-solid-lg secondary" href="/login">Login</a>
      </div>
      <div class="xl:text-right">
        <img class="inline" src="/demo.png" alt="alternative" />
      </div>
    </div> 
  </header> 

</template>
  
<script lang="ts">
import '../assets/styles.css';
</script>
  