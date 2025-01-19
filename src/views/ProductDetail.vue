<template>
  <div>
    <section class="productdetails">
      <div class="container">
        <div class="row productdetials_row justify-content-between">
          <div class="col-xl-5 col-lg-6">
            <div class="product_img border mb-4">
              <img :src="`/assets/images/${mainimg}`" />
            </div>
            <swiper
              :navigation="true"
              :modules="modules"
              class="product_slider pb-5"
              :loop="true"
              :spaceBetween="10"
              :autoplay="{
                delay: 2000,
                disableOnInteraction: false,
              }"
              :breakpoints="{
                '1400': {
                  slidesPerView: 3,
                },
                '1200': {
                  slidesPerView: 3,
                },
                '992': {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                '768': {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                '576': {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },

                '320': {
                  slidesPerView: 2,
                  spaceBetween: 50,
                },
              }"
            >
              <swiper-slide v-for="(item, index) in imageslist" :key="index">
                <img
                  :src="`/assets/images/${item.img}`"
                  class="imgslide"
                  @mouseover="changeimg(item.img)"
                />
              </swiper-slide>
            </swiper>

            <div class="shareicon">
              <ul>
                <li>
                  <span>Share:</span>
                  <a href=""><img src="../assets/icons/Facebook.gif" /></a>
                  <a href=""><img src="../assets/icons/Pinterest.gif" /></a>
                  <a href=""><img src="../assets/icons/Instagram.gif" /></a>
                  <a href=""><img src="../assets/icons/Twitter.gif" /></a>
                </li>
                <li>
                  <a href=""><img src="../assets/icons/Heart.gif" /></a>
                  <span>Favarite(454)</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-xl-6 col-lg-6">
            <div class="productinformation mt-lg-0 mt-5">
              <h2 class="product_title">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.
              </h2>

              <hr />
              <ul>
                <li>
                  <span class="productratingdata">4.8</span>
                  <img src="../assets/icons/fullstar.png" class="star" />
                  <img src="../assets/icons/halfstar.png" class="star" />
                  <img src="../assets/icons/fullstar.png" class="star" />
                  <img src="../assets/icons/fullstar.png" class="star" />
                  <img src="../assets/icons/fullstar.png" class="star" />
                </li>
                <li>
                  <span class="productratingdata">652</span>
                  <span>Ratings</span>
                </li>
                <li>
                  <span class="productratingdata">2k</span>
                  <span>Sold Item</span>
                </li>
              </ul>
              <hr />
              <ul class="pricelist">
                <li>
                  <span class="price">RM23.10</span>
                </li>
                <li>
                  <h3 class="mb-0 pricerange">RM6.72</h3>
                </li>
                <li>
                  <span class="pricediscout">RM0.55 OFF</span>
                </li>
              </ul>
              <hr />

              <ul class="products_benefit">
                <li>
                  <p>Shop Vouchers :-</p>
                  <div class="shopvouchers">
                    <span class="productdiscount">RM0.55 OFF</span>
                    <span class="productdiscount">RM10.26 OFF</span>
                    <span class="productdiscount">RM58 OFF</span>
                    <span class="productdiscount">RM36 OFF</span>
                  </div>
                </li>

                <li class="return">
                  <p>Return :-</p>
                  <span class="product_return"
                    ><img
                      src="../assets/icons/freereturn.gif"
                      style="width: 40px"
                    />
                    Returns</span
                  >
                </li>
                <li class="shipping">
                  <p>Shipping :-</p>
                  <span class="product_shipping"
                    ><img
                      src="../assets/icons/freeshiping.gif"
                      style="width: 60px"
                    />
                    Shipping</span
                  >
                </li>
                <li class="listcategory">
                  <p>Category :-</p>
                  <div class="productCategory">
                    <button
                      type="button"
                      class="btn rounded-0 btn-category"
                      v-for="(item, index) in categorylist"
                      :key="index"
                      @mouseover="changeimg(item.img)"
                    >
                      <img :src="`/assets/images/${item.img}`" />
                      <span>{{ item.categoryname }}</span>
                    </button>
                  </div>
                </li>
                <li class="quantity">
                  <p>Quantity :-</p>
                  <div class="selectquantity">
                    <button
                      class="btn btn-quantity"
                      @click="quantitydecrement()"
                    >
                      -
                    </button>
                    <button class="btn btn-quantity">{{ quantity }}</button>
                    <button
                      class="btn btn-quantity"
                      @click="quantityincrement()"
                    >
                      +
                    </button>
                  </div>
                  <span class="stockavailable">339859 pieces available</span>
                </li>
                <li>
                  <commonbtn
                    btntext="add to cart"
                    :imagebtn="Icons.cart"
                    commonclass="btn-cart"
                  />
                  <commonbtn btntext="buy now" commonclass="btn-register" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="row mt-5 justify-content-center">
          <div class="col-xl-9 col-lg-8 col-md-7 p-lg-0">
            <div class="productdis">
              <div class="productspecification">
                <h3>Product Specification</h3>
              </div>

              <div class="specificationdata">
                <ul class="specititle">
                  <li>Category</li>
                  <li>Brand</li>

                  <li>Material</li>

                  <li>Stock</li>
                  <li>Ships From</li>
                </ul>
                <ul class="specititle specidata">
                  <li>Category</li>
                  <li>ibumpers</li>
                  <li>Apple</li>
                  <li>342282</li>
                  <li>Mainland China</li>
                </ul>
              </div>
              <div class="productspecification">
                <h3>Product Description</h3>
              </div>

              <div class="specificationdata discription">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                  alias aspernatur quos qui a, sint atque magni placeat, non vel
                  omnis error porro. Aperiam debitis temporibus tempora dolor
                  sed. Velit ipsum fuga debitis impedit aliquid perspiciatis
                  tenetur magnam veritatis corporis!
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                  alias aspernatur quos qui a, sint atque magni placeat, non vel
                  omnis error porro. Aperiam debitis temporibus tempora dolor
                  sed. Velit ipsum fuga debitis impedit aliquid perspiciatis
                  tenetur magnam veritatis corporis!
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                  alias aspernatur quos qui a, sint atque magni placeat, non vel
                  omnis error porro. Aperiam debitis temporibus tempora dolor
                  sed. Velit ipsum fuga debitis impedit aliquid perspiciatis
                  tenetur magnam veritatis corporis!
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                  alias aspernatur quos qui a, sint atque magni placeat, non vel
                  omnis error porro. Aperiam debitis temporibus tempora dolor
                  sed. Velit ipsum fuga debitis impedit aliquid perspiciatis
                  tenetur magnam veritatis corporis!
                </p>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-5">
            <div class="shopvoucherslist mt-md-0 mt-4">
              <h5>Shop Vouchers</h5>
              <div class="voucherlist">
                <ul>
                  <li class="singlevouchers">
                    <div class="offer">
                      <h6>RM0.55 OFF</h6>
                      <p>Min. Spend RM150</p>
                      <span>Valid Till: 15.02.2024</span>
                    </div>
                    <div class="claim">
                      <commonbtn btntext="claim" commonclass="btn-claim" />
                    </div>
                  </li>
                  <li class="singlevouchers">
                    <div class="offer">
                      <h6>RM0.55 OFF</h6>
                      <p>Min. Spend RM150</p>
                      <span>Valid Till: 15.02.2024</span>
                    </div>
                    <div class="claim">
                      <commonbtn btntext="claim" commonclass="btn-claim" />
                    </div>
                  </li>

                  <li class="singlevouchers">
                    <div class="offer">
                      <h6>RM0.55 OFF</h6>
                      <p>Min. Spend RM150</p>
                      <span>Valid Till: 15.02.2024</span>
                    </div>
                    <div class="claim">
                      <commonbtn btntext="claim" commonclass="btn-claim" />
                    </div>
                  </li>
                  <li class="singlevouchers">
                    <div class="offer">
                      <h6>RM0.55 OFF</h6>
                      <p>Min. Spend RM150</p>
                      <span>Valid Till: 15.02.2024</span>
                    </div>
                    <div class="claim">
                      <commonbtn btntext="claim" commonclass="btn-claim" />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Icons from "../assets/Json/Icons";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Commonbtn from "../components/Commonbtn.vue";
export default {
  name: "ProductDetail",
  components: {
    Swiper,
    SwiperSlide,
    Commonbtn,
  },
  setup() {
    return {
      modules: [Autoplay, Navigation],
    };
  },
  data() {
    return {
      imageslist: [
        {
          img: "product1.jpg",
        },
        {
          img: "product2.jpg",
        },
        {
          img: "product3.jpg",
        },
        {
          img: "product4.jpg",
        },
        {
          img: "product5.jpg",
        },
        {
          img: "product6.jpg",
        },
        {
          img: "product4.jpg",
        },
        {
          img: "product5.jpg",
        },
        {
          img: "product6.jpg",
        },
      ],
      categorylist: [
        {
          img: "product1.jpg",
          categoryname: "cat1",
        },
        {
          img: "product2.jpg",
          categoryname: "cat2",
        },
        {
          img: "product3.jpg",
          categoryname: "cat3",
        },
        {
          img: "product4.jpg",
          categoryname: "cat4",
        },
        {
          img: "product5.jpg",
          categoryname: "cat5",
        },
        {
          img: "product6.jpg",
          categoryname: "cat6",
        },

        {
          img: "product1.jpg",
          categoryname: "cat1",
        },
        {
          img: "product2.jpg",
          categoryname: "cat2",
        },
        {
          img: "product3.jpg",
          categoryname: "cat3",
        },
        {
          img: "product4.jpg",
          categoryname: "cat4",
        },
        {
          img: "product5.jpg",
          categoryname: "cat5",
        },
        {
          img: "product6.jpg",
          categoryname: "cat6",
        },
      ],
      quantity: 1,
      mainimg: "product1.jpg",
      Icons,
    };
  },
  methods: {
    changeimg(item) {
      this.mainimg = item;
    },

    quantitydecrement() {
      if (this.quantity > 1) {
        --this.quantity;
      } else {
        this.quantity = 1;
      }
    },

    quantityincrement() {
      ++this.quantity;
    },
  },
};
</script>

<style scoped>
/*image area */
.productdetials_row {
  background: var(--white);
  box-shadow: var(--shadow3);
  padding: var(--fs-15);
}

.product_img {
  border-radius: var(--fs-15);
  width: 100%;
}
.product_img img {
  width: 100%;

  border-radius: var(--fs-15);
}

.product_slider {
  width: 100%;
}
.product_slider img {
  width: 150px;
  border: 1px solid transparent;
  transition: 0.5s;
  cursor: pointer;
}

.product_slider img:hover {
  border: 1px solid red;
}

.shareicon {
  padding: var(--fs-10);
}
.shareicon ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0;
}
.shareicon ul li {
  display: flex;
  gap: 10px;
  align-items: center;
}
.shareicon ul li span {
  font-size: var(--fs-14);
  color: var(--cool-gray);
  font-weight: 700;
}
.shareicon ul li a img {
  width: 30px;
}

/*image information area */

.productinformation hr {
  border: 0.2px solid var(--cool-gray);
}

.product_title {
  font-size: var(--fs-18);
  font-weight: 600;
  color: var(--cool-gray);
  line-height: var(--fs-32);
  display: -webkit-box;
  max-width: 550px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.productinformation ul {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 50px;
}

.productinformation ul li {
  display: flex;
  align-items: center;
  gap: 5px;
}

.productinformation ul li img {
  width: 16px;
}
.productinformation ul li .productratingdata {
  font-size: var(--fs-20);
  font-weight: 600;
  color: var(--cool-gold);
}

.productinformation ul li span {
  font-size: var(--fs-14);
  font-weight: 600;
  color: var(--cool-gray);
}

ul.pricelist {
  gap: 20px;
}

ul.pricelist .price {
  text-decoration: line-through;
}

ul.pricelist .pricerange {
  color: var(--cool-gold);
  font-size: var(--fs-26);
}
ul.pricelist .pricediscout {
  background: var(--cool-gold);
  color: var(--black);
  font-size: var(--fs-13);
  padding: var(--fs-4);
  font-weight: 600;
}

ul.products_benefit {
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

ul.products_benefit li p {
  color: var(--cool-gray);
  font-weight: 600;
  margin-bottom: 0;
  padding-bottom: var(--fs-2);
  white-space: nowrap;
}
ul.products_benefit li {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}
ul.products_benefit .productdiscount {
  background: var(--cool-gray);
  color: var(--white);
  font-size: var(--fs-13);
  padding: var(--fs-4);
  font-weight: 600;
  white-space: nowrap;
}
ul.products_benefit .productdiscount:hover {
  background: var(--cool-gold);
}
ul.products_benefit .product_return {
  color: var(--black);
}
ul.products_benefit .listcategory {
  align-items: flex-start;
}
ul.products_benefit .product_shipping {
  color: var(--black);
}
ul.products_benefit .shopvouchers {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 500px;
  padding-left: 5px;
  padding-top: 5px;
}

ul.products_benefit .shopvouchers .productdiscount {
  height: 30px;
}
ul.products_benefit .productCategory {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 500px;
  padding-left: 5px;
  padding-top: 5px;
  overflow-y: auto;
  height: 180px;
}
ul.products_benefit .productCategory .btn-category {
  background: var(--cool-white);
  padding: 4px 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: var(--shadow2);
  height: 40px;
  border: 1px solid transparent;
}
ul.products_benefit .productCategory .btn-category:hover {
  border: 1px solid red;
}
ul.products_benefit .productCategory .btn-category img {
  width: 40px;
}
ul.products_benefit .productCategory .btn-category span {
  font-size: var(--fs-16);
  font-weight: 600;
  text-transform: capitalize;
  color: var(--cool-gray);
}
ul.products_benefit .selectquantity {
  display: flex;
  align-items: center;
}
ul.products_benefit .selectquantity .btn-quantity {
  border: 1px solid var(--cool-gold);
  border-radius: 0;
  font-size: var(--fs-16);
  padding: var(--fs-3) var(--fs-15);
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
}

ul.products_benefit .stockavailable {
  text-transform: capitalize;
}
ul.products_benefit .return,
ul.products_benefit .shipping,
ul.products_benefit .quantity {
  align-items: center;
}

/*product description css start */

.productdis {
  background-color: var(--white);
  box-shadow: var(--shadow3);
  padding: var(--fs-15);
}

.productspecification {
  background: var(--cool-white);
  padding: var(--fs-10);
  border-radius: 5px;
  box-shadow: var(--shadow3);
}
.productdis h3 {
  font-size: var(--fs-20);
  color: var(--cool-gray);
  margin-bottom: 0;
}

.specificationdata {
  display: flex;
  gap: 20px;
}
.specititle {
  margin: 0;
  padding: var(--fs-10);
  padding-left: var(--fs-20);
}

.discription {
  padding: var(--fs-10);
  flex-direction: column;
}

.discription p {
  font-size: var(--fs-14);
  margin-bottom: 0;
}

.specititle li {
  margin: var(--fs-10) 0;
  font-size: var(--fs-15);
  color: var(--cool-gray);
}

.shopvoucherslist {
  background-color: var(--white);
  box-shadow: var(--shadow3);
  padding: var(--fs-15);
}
.shopvoucherslist h5 {
  font-size: var(--fs-16);
  margin-bottom: 0;
  padding-left: var(--fs-10);
}

.voucherlist ul {
  padding: 0;
  margin: 0;
  margin-top: 20px;
  padding: var(--fs-10);
  height: 300px;
  overflow-y: auto;
}

.singlevouchers {
  background: var(--cool-white);
  height: 100px;
  margin-bottom: 30px;
  box-shadow: var(--shadow3);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--fs-5);
}

.voucherlist ul .singlevouchers:nth-last-of-type() {
  margin-bottom: 0px;
}
.voucherlist ul .singlevouchers .offer {
  padding: var(--fs-14);
}
.voucherlist ul .singlevouchers .offer h6 {
  font-size: var(--fs-14);
  margin-bottom: 0;
  color: var(--cool-gold);
}

.voucherlist ul .singlevouchers .offer p {
  font-size: var(--fs-12);
  margin-bottom: 0;
  color: var(--cool-gray);
}
.voucherlist ul .singlevouchers .offer span {
  font-size: var(--fs-10);
  margin-bottom: 0;
  color: var(--cool-gray);
}

@media screen and (min-width: 320px) and (max-width: 575px) {
  .shareicon ul {
    flex-direction: column;
    gap: 20px;
  }

  .productinformation ul {
    margin: 0;
    padding: 0;
    gap: 15px;
    flex-direction: column;
  }

  ul.products_benefit .selectquantity {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  ul.products_benefit .quantity {
    align-items: flex-start;
    flex-direction: column;
  }
  ul.products_benefit .selectquantity {
    align-items: flex-start;
    flex-direction: row;
  }
}
</style>
