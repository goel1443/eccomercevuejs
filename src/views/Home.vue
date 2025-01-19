<template>
  <div>
    <section class="common-product-category">
      <div class="container">
        
        <div class="row mb-5">
          <div class="col-12">
            <vue-marquee-slider
                id="marquee-slider"
                :space="50"
                :speed="12000"
                :width="280"
              >
                  <div class="usermaindiv" v-for="(item,index) in imageslist" :key="index">
                        <div class="userimage">
                          <img src="/assets/icon/user_image.png" class="img-fluid" />
                        </div>
                        <div class="userdata">
                          <h5>username</h5>
                          <ul>
                            <li><span>Earning Commision </span> <p>RM150 </p></li>
                          </ul>
                        </div>
                      </div>
            </vue-marquee-slider>
           
           
              
              
          </div>
        </div>
        <div class="row justify-content-sm-start justify-content-center">
          <div class="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-10">
              <SearchFilter/>
          </div>

          <div class="col-xxl-10 col-xl-9 col-lg-9 col-md-8 col-sm-7 col-11">
              <div class="row g-4">
                <div class="col-12">
                  <h3 class="searchproduct">Search result for <span>Mens</span></h3>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-6" v-for="(item,index) in product_list" :key="index">
                  <router-link :to="{name:'productdetail'}" class="productlink">
                    <Product :product="item"/>
                  </router-link>
                </div>
              </div>
          </div>
        </div>
      </div>
    </section>

    <section class="newstab">
      <div class="container">
        <div class="row ">
          <div class="col--12">
            <nav>
            <div class="nav nav-tabs border-0 gap-2" id="nav-tab" role="tablist">
              <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
              <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
              <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
            </div>
          </nav>
          <div class="tab-content  mt-3" id="nav-tabContent">
            <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
              <h3>Home</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus cupiditate ipsam quibusdam repellat quis rem placeat soluta! Rem, qui autem.</p>
              <h3>Home</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus cupiditate ipsam quibusdam repellat quis rem placeat soluta! Rem, qui autem.</p>
         
              <h3>Home</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus cupiditate ipsam quibusdam repellat quis rem placeat soluta! Rem, qui autem.</p>
         
            </div>
            <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"> 
              <h3>Profile</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus cupiditate ipsam quibusdam repellat quis rem placeat soluta! Rem, qui autem.</p>
              <h3>Profile</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus cupiditate ipsam quibusdam repellat quis rem placeat soluta! Rem, qui autem.</p>
          
              <h3>Profile</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus cupiditate ipsam quibusdam repellat quis rem placeat soluta! Rem, qui autem.</p>
           
            </div>
            <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"> 
              <h3>Contact</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus cupiditate ipsam quibusdam repellat quis rem placeat soluta! Rem, qui autem.</p>
              <h3>Contact</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus cupiditate ipsam quibusdam repellat quis rem placeat soluta! Rem, qui autem.</p>
              <h3>Contact</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus cupiditate ipsam quibusdam repellat quis rem placeat soluta! Rem, qui autem.</p>
        
          
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

    <section class="newuserdetails">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h2>Top 10 Details</h2>
          </div>
          <div class="col-xl-3 col-md-6">
           
              <h3>My Upline</h3>
                     
            <swiper :navigation="false" :modules="modules" class="userdetailslider p-3"
                  :loop="true"
                  :slides-per-view="1"     
                  :space-between="30"
                  :direction="'vertical'"
                  :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false,
                  }"
                  >
                    <swiper-slide v-for="(item,index) in myuplinelist" :key="index">
                      <div class="commonuser">
                          <ul>
                            <li>
                              <img :src="`/assets/icon/${item.img}`" />
                            </li>
                            <li>
                              <h5>Upline ID: <span>{{item.uplineid}}</span></h5>
                            </li>
                            <li>
                              <h5>Contact: <span>{{item.contact}}</span></h5>
                            </li>
                            <li>
                              <h5>Name: <span>{{item.name}}</span></h5>
                            </li>
                            <li>
                              <h5>Email: <span>{{item.email}}</span></h5>
                            </li>
                          </ul>
                        </div>
                    </swiper-slide>
                  
                </swiper>
            
          </div>
          <div class="col-xl-3 col-md-6">
           
           <h3>New User</h3>
                  
           <swiper :navigation="false" :modules="modules" class="userdetailslider p-3"
                  :loop="true"
                  :slides-per-view="1"     
                  :space-between="30"
                  :direction="'vertical'"
                  :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false,
                  }"
                  >
                 <swiper-slide v-for="(item,index) in myuplinelist" :key="index">
                   <div class="commonuser">
                       <ul>
                         <li>
                           <img :src="`/assets/icon/${item.img}`" />
                         </li>
                         <li>
                           <h5>User ID: <span>{{item.uplineid}}</span></h5>
                         </li>
                         
                       </ul>
                     </div>
                 </swiper-slide>
               
             </swiper>
         
       </div>
       <div class="col-xl-3 col-md-6">
           
           <h3>Top Sponser</h3>
                  
           <swiper :navigation="false" :modules="modules" class="userdetailslider p-3"
                  :loop="true"
                  :slides-per-view="1"     
                  :space-between="30"
                  :direction="'vertical'"
                  :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false,
                  }"
                  >
                 <swiper-slide v-for="(item,index) in myuplinelist" :key="index">
                   <div class="commonuser">
                       <ul>
                         <li>
                           <img :src="`/assets/icon/${item.img}`" />
                         </li>
                         <li>
                           <h5>User ID: <span>{{item.uplineid}}</span></h5>
                         </li>
                         <li>
                           <h5>Total User: <span>50</span></h5>
                         </li>
                         
                       </ul>
                     </div>
                 </swiper-slide>
               
             </swiper>
         
       </div>
       <div class="col-xl-3 col-md-6">
           
           <h3>Top Income</h3>
                  
           <swiper :navigation="false" :modules="modules" class="userdetailslider p-3"
                  :loop="true"
                  :slides-per-view="1"     
                  :space-between="30"
                  :direction="'vertical'"
                  :autoplay="{
                    delay: 5000,
                    disableOnInteraction: false,
                  }"
                  >
                 <swiper-slide v-for="(item,index) in myuplinelist" :key="index">
                   <div class="commonuser">
                       <ul>
                         <li>
                           <img :src="`/assets/icon/${item.img}`" />
                         </li>
                         <li>
                           <h5>User ID: <span>{{item.uplineid}}</span></h5>
                         </li>
                         <li>
                           <h5>Total Income: <span>$500</span></h5>
                         </li>
                         
                       </ul>
                     </div>
                 </swiper-slide>
               
             </swiper>
         
       </div>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
import { VueMarqueeSlider } from 'vue3-marquee-slider';
import '/node_modules/vue3-marquee-slider/dist/style.css'
  import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay,Navigation } from 'swiper/modules';
import Product from '../components/Product.vue';
import SearchFilter from '../components/SearchFilter.vue';
export default {
    name:'Home',
   components:{
    SearchFilter,
    Product,
    Swiper,
      SwiperSlide,
      VueMarqueeSlider
   },
   setup() {
      return {
        modules: [Autoplay, Navigation],
       
      };
    },
   data(){
    return {
      product_list:[
        {
          img:'product1.jpg',
          title:'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod sed diam nonumy eirmod',
          desc:"dddd",
          rm:15.20,
          rmdiscount:10,
          solditem:12,
          specialcommision:150,
          ratingstar:5,
          review:201458
        },
        {
        img: 'product2.jpg',
        title: 'Product 2 Title  Wireless Earbuds dot dot diam nonumy eirmod sed diam nonumy eirmod',
        desc: 'Description for product 2',
        rm: 25.50,
        rmdiscount: 15,
        solditem: 8,
        specialcommision: 100,
        ratingstar: 4,
        review: 854321
      },
      {
        img: 'product3.jpg',
        title: 'Product 3 Title',
        desc: 'Description for product 3',
        rm: 12.99,
        rmdiscount: 5,
        solditem: 20,
        specialcommision: 200,
        ratingstar: 4.5,
        review: 123789
      }
      ,
      {
        img: 'product4.jpg',
        title: 'Product 4 Title',
        desc: 'Description for product 3',
        rm: 12.99,
        rmdiscount: 5,
        solditem: 20,
        specialcommision: 200,
        ratingstar: 4.5,
        review: 123789
      },
      {
          img:'product1.jpg',
          title:'SmartTech Wireless Earbuds SmartTech Wireless Earbuds ',
          desc:"dddd",
          rm:15.20,
          rmdiscount:10,
          solditem:12,
          specialcommision:150,
          ratingstar:5,
          review:201458
        },
        {
        img: 'product2.jpg',
        title: 'Product 2 Title  Wireless Earbuds dot dot',
        desc: 'Description for product 2',
        rm: 25.50,
        rmdiscount: 15,
        solditem: 8,
        specialcommision: 100,
        ratingstar: 4,
        review: 85432
      },
    ],
     
      imageslist:[
          {
            img:'user_image.png'
          },
          {
            img:'user_image.png'
          },
          {
            img:'user_image.png'
          },
          {
            img:'user_image.png'
          },
          {
            img:'user_image.png'
          },
          {
            img:'user_image.png'
          }
          
          
        
        ],
        myuplinelist:[
          {
            img:'user_image.png',
            uplineid:123698,
            contact:7485693214,
            name:'Tom Blend',
            email:'tomblend@email.com'

          },
          {
            img:'user_image.png',
            uplineid:123698,
            contact:7485693214,
            name:'Tom Blend',
            email:'tomblend@email.com'

          },
          {
            img:'user_image.png',
            uplineid:123698,
            contact:7485693214,
            name:'Tom Blend',
            email:'tomblend@email.com'

          },
          {
            img:'user_image.png',
            uplineid:123698,
            contact:7485693214,
            name:'Tom Blend',
            email:'tomblend@email.com'

          },
          {
            img:'user_image.png',
            uplineid:123698,
            contact:7485693214,
            name:'Tom Blend',
            email:'tomblend@email.com'

          },
          {
            img:'user_image.png',
            uplineid:123698,
            contact:7485693214,
            name:'Tom Blend',
            email:'tomblend@email.com'

          },
          {
            img:'user_image.png',
            uplineid:123698,
            contact:7485693214,
            name:'Tom Blend',
            email:'tomblend@email.com'

          },
          {
            img:'user_image.png',
            uplineid:123698,
            contact:7485693214,
            name:'Tom Blend',
            email:'tomblend@email.com'

          }
        ]

    }
   }
}
</script>

<style scoped>

/*common-product-category css start*/
.searchproduct {
    font-size:var(--fs-20);
    display:flex;
    align-items:center;
    gap:var(--fs-14);
    margin-bottom: 0;
    font-weight: 700;
    text-transform: capitalize;
    color:var(--cool-gray);
}
.searchproduct span {
  color:var(--cool-gold);
  text-decoration-line: underline;
  text-underline-offset: 8px;
}


.productlink {
  text-decoration: none;
  width:100%;
  color:var(--cool-gray)
}



/*userdata slider css */ 

.usermaindiv {
  border:1px solid var(--cool-white);
  box-shadow:var(--shadow2);
  display:flex;
  align-items:center;
  padding:var(--fs-15);
  justify-content: space-between;

}
.userimage img{
  width:50px;
  border:1px solid var(--cool-white);
  box-shadow:var(--shadow2);
  border-radius:50%;
}


.userdata h5 {
  font-size:var(--fs-18);
}
.userdata ul {
  padding:0;
  margin:0;
}
.userdata {
  text-align: center;
}
.userdata ul li p {
  font-size:var(--fs-16);
  margin-bottom:0;
  margin-top:5px;
  font-weight:600
}
.userdata ul li span {
  font-size:var(--fs-14);
  background:var(--cool-gray);
  color:var(--cool-white);
  padding:var(--fs-5);
  font-weight:600;
}




/*newstab css start*/


.newstab .nav-link {
  border:0px;
  background:var(--cool-gold);
  color:var(--cool-white);
  font-weight: 600;
  border-radius:0px;
}
.newstab .nav-link.active {
  background:var(--cool-gray);
  color:var(--cool-white);
}

.newstab .tab-content {
  border:1px solid var(--cool-gray);
  box-shadow: var(--shadow3);
}
.newstab .tab-content .tab-pane  {
  padding:20px;
}
.newstab .tab-content .tab-pane h3{
    font-size:var(--fs-22);
    font-weight:600;
    color:var(--black);
}

.newstab .tab-content .tab-pane p{
    font-size:var(--fs-15);
    font-weight:600;
    color:var(--cool-gray);
}

/*newuserdetails */

.newuserdetails h2 {
  text-align: center;
  font-size:var(--fs-28);
  font-weight: 700;
  text-decoration-line: underline;
  text-underline-offset: 20px;
  text-decoration-color: var(--cool-gold);
  margin-bottom:40px
}

.newuserdetails  h3 {
  font-size:var(--fs-22);
  text-transform: capitalize;
  text-align:center;
  margin-bottom:0;
  font-weight: 700;
  margin:10px 0;
}
.newuserdetails .commonuser {
  border:1px solid var(--cool-gray);
  border-radius:10px;
  margin-top:10px;
  box-shadow:var(--shadow3);
  min-height:270px;
}
.newuserdetails .commonuser ul {
  padding:0;
  margin:0;
}
.newuserdetails .commonuser ul li {
  text-align: center;
  margin-top:20px;
 
}
.newuserdetails .commonuser ul li img{
  width:60px;
  height:60px;
  text-align: center;
  border-radius: 50%;
  box-shadow: var(--shadow4);
}

.newuserdetails .commonuser ul li h5{
  font-size:var(--fs-16);
  font-weight: 600;
  text-transform: capitalize;
}
.newuserdetails .commonuser ul li span {
  color:var(--cool-gold);
  font-size:var(--fs-14);
 text-transform: none;   
}
</style>