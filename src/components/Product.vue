<template>
  <div>
    <div class="main_product">
      <img :src="`assets/images/${product.img}`" class="productimg" />

      <div class="product_content">
        <h5 class="title">
          {{ product.title }}
        </h5>
        <div class="pricelist d-flex align-items-center g-2">
          <span class="price">RM{{ (product.rm-(product.rm * product.rmdiscount)/100).toFixed(2) }} </span>
          <span class="pricediscount">RM{{ product.rm }}</span>
          <span class="pricepercent">-{{ product.rmdiscount }}%</span>
        </div>
        <div class="solditemrating">
          <span class="solditem">Sold Item:<span>{{product.solditem}}k</span> </span>
          <span class="specialcommision">SC:<span>RM{{product.specialcommision}}</span> </span>
        </div>
       
            <div class="starrate ">
              <img src="../assets/icons/fullstar.png" class="star" />
              <img src="../assets/icons/fullstar.png" class="star" />
              <img src="../assets/icons/fullstar.png" class="star" />
              <img src="../assets/icons/fullstar.png" class="star" />
              <img src="../assets/icons/blankstar.png" class="star" />
              <span>({{product.review}})</span>
            </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Product",
  props:{
    product:Object
  }
};
</script>

<style scoped>
.main_product {
  box-shadow: var(--shadow3);
  height: auto;
  width: 100%;
  background: var(--cool-white);
  border-radius: 5px;
  overflow: hidden;
  transition: 0.5s;
}
.main_product:hover {
    box-shadow: var(--shadow1);
}
.main_product .productimg {
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}


.product_content {
  width: 100%;
  padding: 10px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.title {
  font-size: var(--fs-14);
  margin-bottom: var(--fs-10);
  line-height: var(--fs-20);
  display: -webkit-box;
  max-width: 400px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height:40px;
}
.pricelist {
  margin-bottom: var(--fs-10);
}
.price {
  font-size: 13px;
  background: var(--cool-gray);
  color: var(--cool-white);
  letter-spacing: 0.2px;
  border-radius: var(--fs-2);
  font-weight: 600;
  text-align: center;
  padding: 4px 5px;
}
.price:hover {
  background: var(--cool-gold);
}

.pricediscount {
  font-size: 13px;
  background: transparent;
  letter-spacing: 0.2px;
  border-radius: var(--fs-2);
  font-weight: 600;
  margin-left: var(--fs-5);
  color: var(--cool-gray);
  opacity: 0.8;
  text-align: center;
  text-decoration-line: line-through;
  padding: 4px 5px;
}
.pricepercent {
    font-size:var(--fs-10);
    font-weight: 700;
    background: var(--cool-gold);
    margin-left:var(--fs-5);
    padding:var(--fs-4);
    color:var(--black)

}
.solditemrating {
  display: flex;
  justify-content: space-between;
}
.solditem {
  font-size: 13px;
  background: transparent;
  letter-spacing: 0.2px;
  font-weight: 600;
  color: var(--cool-gold);
  opacity: 0.8;
  margin-bottom: 0;
}

.solditem span {
  color: var(--cool-gray);
  margin-left: var(--fs-5);
}

.specialcommision {
  font-size: 13px;
  background: transparent;
  letter-spacing: 0.2px;
  font-weight: 700;
  color: var(--cool-gold);
  opacity: 0.8;
  margin-bottom: 0;
  border-bottom: 2px solid var(--cool-gray);
}

.specialcommision span {
  color: var(--cool-gray);
  margin-left: var(--fs-5);
}

.starrate {
  text-align: end;
}
.starrate .star {
  width: 13px;
}

.starrate span {
  color: var(--cool-gray);
  margin-left: var(--fs-5);
  font-size: var(--fs-12);
  font-weight: 600;
}


</style>
