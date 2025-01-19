<template>
  <div>
    <footer>
        <div class="container-fluid">
    <div class="row justify-content-center ">
        <div class="col-12 p-0">
        <swiper :navigation="false" :modules="modules" class="footerslider  "
                  :loop="true"
                  :slidesPerView=1
                  :spaceBetween="20"
                  :autoplay="{
                    delay: 3000,
                    disableOnInteraction: false,
                  }"
                  >
                    <swiper-slide v-for="(item,index) in footerlist" :key="index" >
                        <img :src="`/assets/images/${item.img}`" class="footerslideimg"/>
                        <div class="overlaydivfooter"></div>
                    </swiper-slide>
                  
                </swiper>
            </div>

        <div class="col-9 p-0">
            <div class="row mt-5 gap-xl-0 gap-3 footercontent justify-content-between">
                <div class="col-xl-3 col-lg-5 col-md-5">
                    <h5>Category</h5>
                    <ul >
                        <li class="footer-item"><a href="" class="footer-link">Mens</a></li>
                        <li class="footer-item"><a href="" class="footer-link">Womens</a></li>
                        <li class="footer-item"><a href="" class="footer-link">Electronics</a></li>
                        <li class="footer-item"><a href="" class="footer-link">Clothes</a></li>
                        <li class="footer-item"><a href="" class="footer-link">Gallery</a></li>
                        <li class="footer-item"><a href="" class="footer-link">Profile</a></li>
                    </ul>
                  
                </div>
                <div class="col-xl-3 col-lg-5 col-md-5">
                    <h5>Service</h5>
                    <ul>
                        <li class="footer-item"><a href="" class="footer-link">home</a></li>
                        <li class="footer-item"><a href="" class="footer-link">About</a></li>
                        <li class="footer-item"><a href="" class="footer-link">Contact</a></li>
                        <li class="footer-item"><a href="" class="footer-link">Profile</a></li>
                        <li class="footer-item"><a href="" class="footer-link">General</a></li>
                        <li class="footer-item"><a href="" class="footer-link">Profile</a></li>
                    </ul>
                   
                </div>
                <div class="col-xl-3 col-lg-5 col-md-5">
                    <h5>Company</h5>
                    <ul class="companydetials">
                        <li class="footer-item"><a href="" class="footer-link"><img src="/assets/images/logo.png" class="logofooter img-fluid"/></a></li>
                        <li class="footer-item"><a href="" class="footer-link address"><img src="../assets/icons/location.png"/> <span >Kirlin-Brown,845 Ali Gardens Apt. 775</span></a></li>
                        <li class="footer-item"><a href="" class="footer-link email"><img src="../assets/icons/email.png"/><span >tito61@example.net</span></a></li>
                        <li class="footer-item"><a href="" class="footer-link phone"><img src="../assets/icons/phone.png"/><span >+1-704-652-3193</span></a></li>
                    </ul>
                </div>
                <div class="col-xl-3 col-lg-5 col-md-5">
                    <h5>Locate on map</h5>
                    <ul>
                        <li>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13823.016919554415!2d76.58349845!3d29.9864924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1715419641083!5m2!1sen!2sin" width="200" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col-12 p-0">
            <div class="copyrightsection">
                <p>@copyright <a href="">shop mart</a>. all right reserved</p>
                <p>Created by <a href="">shop mart</a></p>
            </div>
        </div>
    </div>
        
</div>
    </footer>
  </div>
</template>

<script>
 import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay,Navigation } from 'swiper/modules';
export default {
name:'Footer',
components:{
    Swiper,
      SwiperSlide,
},
   setup() {
      return {
        modules: [Autoplay, Navigation],
       
      };
    },
   data(){
    return {
    
     
        footerlist:[
          {
            img:'footer1.jpg'
          },
          {
            img:'footer2.jpg'
          },
          {
            img:'footer3.jpg'
          }
          
        
        ],

    }
   }
}
</script>

<style scoped>

footer {
  background:var(--white);
  box-shadow:var(--shadow1);
}



  .footerslideimg {
    width:100%;
    height:400px;
    object-fit: cover;
    position:relative;
  }

.overlaydivfooter {
    position: absolute;
    left:0;
    top:0;
    width: 100%;
    height:100%;
    background:rgba(0,0,0,0.2)
}

.footercontent h5 {
    font-size: var(--fs-20);
    color: var(--cool-gold);
    font-weight: 700;
    margin-bottom: var(--fs-20);
}

.footercontent ul {
    padding:0;
    margin:0;
}
.footercontent ul li a{
    text-decoration: none;
    color:var(--cool-gray);
    font-weight: 600;
    position:relative;
    text-transform: capitalize;
}
.footercontent ul li a::after {
    position:absolute;
    content:'';
    left:0;
    top:100%;
    width:0%;
    height:2px;
    background: var(--cool-gray);
    transition:0.5s;
}


.footercontent ul li a:hover::after{
  width:100%;
}
.footercontent ul li {
    margin-bottom:15px;
}

.logofooter {
    width:50px;
}


ul.companydetials li a:hover::after {
   width:0% ;
}
.address img ,.email img,.phone img {
width:20px;
margin-right:8px;
}

.copyrightsection {
    text-align: center;
    margin-top:20px;
    background: var(--cool-white);
    padding:var(--fs-20);
}
.copyrightsection p {
    font-size:var(--fs-20);
    color:var(--cool-gray);
    margin-bottom:var(--fs-6);
    font-weight: 600;
    text-transform: capitalize;
}
.copyrightsection p a {
    text-decoration: none;
    color:var(--cool-gold);
    
}
</style>