<template>
  <div>
      <header>
        <div class="main-header">
        <div class="logo">
          <a href=""><img src="/assets/images/logo.png" alt="logo" class="img-fluid"/></a>
        </div>

        <div class="category-search ">
          
              <form>
                <div class="input-group  rounded-1 border">
                <input type="text" class="form-control shadow-none rounded-0 bg-transparent border-0" placeholder="Search Here...." >
                <button class="btn btn-search shadow-none border-0" type="button" ><span class="d-md-block d-none">Search By Category</span> <span v-html="Icons.search" class="d-md-none d-block"></span></button>
              </div>
            </form>

            <div class="navbar">
                <nav >
                  <ul>
                    <li class="nav-item">
                      <a href="" class="nav-link">Mens</a>
                    </li>
                    <li class="nav-item">
                      <a href="" class="nav-link">Womens</a>
                    </li>
                    <li class="nav-item">
                      <a href="" class="nav-link">Electronics</a>
                    </li>
                    <li class="nav-item">
                      <a href="" class="nav-link">Clothes</a>
                    </li>
                    <li class="nav-item">
                      <a href="" class="nav-link">Gallery</a>
                    </li>
                    <li class="nav-item">
                      <a href="" class="nav-link">Profile</a>
                    </li>

                  </ul>
                </nav>
            </div>
        </div>

        

        <div class="login-regiter">
            <div class="commonbtn d-flex align-items-center gap-3">
              <router-link :to="{name:'login'}"><Commonbtn btntext="login" /></router-link>
              <router-link :to="{name:'register'}"><Commonbtn btntext="Register" commonclass="btn-register" /></router-link>
            </div>
            <div class="d-flex justify-content-center gap-4 align-items-center "> 
              <span class="martiicon martiiconfirst"> 
                <svg xmlns="http://www.w3.org/2000/svg" style="width:42px"  viewBox="0 0 1024 1024" id="cart"><path d="M328.3 652.5h489.3v40h-545l41.9-124.2L235 263.4h-.2l-26.3-100.8H80.7v-40h158.7l31.5 120.8h672.4L809.9 588.5h-460zM443.8 818c0 46-37.4 83.4-83.4 83.4-46 0-83.4-37.4-83.4-83.4 0-46 37.4-83.4 83.4-83.4 46 0 83.4 37.4 83.4 83.4zm346 0c0 46-37.4 83.4-83.4 83.4-46 0-83.4-37.4-83.4-83.4 0-46 37.4-83.4 83.4-83.4 46 0 83.4 37.4 83.4 83.4z" fill="#e6af2e" class="color000000 svgShape "></path>
                </svg>
                <span class="martiiconfirstcount">1</span>
              </span> 
              
              <span v-html="Icons.menu" class="toogleicon d-md-none d-block " @click="tooglemenu()"></span>
             
            </div>
        </div>
        <div class="overlaymobile d-md-none d-block" @click="tooglemenu()">

        </div>
        </div>
      </header>
  </div>
</template>


<script >
import Icons from '../assets/Json/Icons.js'; 
import Commonbtn from './Commonbtn.vue';
export default{
  name:'Helloworld',
  components:{
    Commonbtn,
  },
  data() {
    return {
      Icons
    };
  },

  methods:{
    tooglemenu(){
      let categoryservice=document.querySelector('.category-search');
      let overlaymobile=document.querySelector('.overlaymobile');
      categoryservice.classList.toggle('show')
      overlaymobile.classList.toggle('show')

    }
    
  }
}

</script>



<style scoped>

header {
  background:var(--white);
  box-shadow:var(--shadow1);
}
  .main-header {
    padding:var(--fs-13);
    max-width:1320px;
    margin:0 auto;
    width:100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }

  
.logo a img {
  width:80px;
}

.category-search {
 width:800px;
}
.category-search .input-group{
 background-color:var(--cool-white);
 border:1px solid var(--cool-gray);
 padding:var(--fs-3);
 width:100%;

}
.category-search .input-group input {
  font-size:var(--fs-14);
  color:var(--cool-gray);
  font-weight: 500;
}

.btn-search{
  background:var(--cool-gray);
  border-radius:var(--fs-4) !important;
  font-size:var(--fs-14);
  padding:var(--fs-10);
  font-weight:500;
  color:var(--cool-white);
  text-transform: capitalize;
  letter-spacing: 1px;
}
.btn-search:hover {
  background: var(--cool-gold);
  color:var(--cool-white);
  border-radius:var(--fs-4) !important;
  font-size:var(--fs-14);
  padding:var(--fs-10);
  font-weight:500;
}



.navbar ul {
  display:flex;
  gap:var(--fs-30);
  align-items: center;
  padding:0;
  margin:0;
  margin-top:var(--fs-10);
}
.navbar ul li a {
  position:relative;
  color:var(--cool-gray);
  font-weight: 600;
}

.navbar ul li a::after {
  position: absolute;
  content:'';
  width:0%;
  height:var(--fs-2);
  background:var(--cool-gray);
  left:0;
  top:100%;
  transition:0.5s;
}
.navbar ul li a:hover::after{
  width:100%;
}
.marticon {
  text-align: center;
  padding-top:var(--fs-10)
}


.martiiconfirst  {
  position:relative;
  padding-top:var(--fs-10)
}
.martiiconfirstcount {
    position: absolute;
    content: '';
    right:-5%;
    top: 10px;
    min-width: 16px;
    height: 16px;
    border-radius: 50%;
    display:flex;
    justify-content: center;
    align-items: center;
    background: var(--cool-gray);
    color:var(--cool-white);
    font-size:8px;
}
@media  screen and (min-width:992px) and (max-width:1199px) {
  .category-search {
    width:600px;
  }
  
}

@media  screen and (min-width:768px) and (max-width:991px) {
  .category-search {
    width:400px;

  }
  
}


@media  screen and (min-width:320px) and (max-width:767px) {


  .category-search {
    width:80%;
    position: absolute;
    left:-100%;
    top:0;
    background:var(--white);
    box-shadow:var(--shadow1);
    height:100vh;
    padding:var(--fs-20);
    transition:0.5s;
    z-index:10;
  }


  .overlaymobile {
    width:100%;
    height:100vh;
    position: absolute;
    left:-100%;
    top:0;
    background:transparent;
    z-index:7;
    transition:0.5s;
  }
  .show{
    left:0;
  }

  .navbar nav ul {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .navbar nav ul li a {
   margin-left:var(--fs-15);
  }


}
</style>
