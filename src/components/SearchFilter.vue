<template>
  <div class="searchbyoption">
      <h3><span v-html="Icons.filter"></span><span>Search Filter</span></h3>
      <div class="searcharea">
        <h6>Shipped From</h6>
        <div class="area">
            <div class="form-check">
            <input class="form-check-input shadow-none" type="checkbox" name="area1" value="area1" id="checkboxarea" checked>
            <label class="form-check-label" for="checkboxarea">
                Local
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input shadow-none" type="checkbox" name="area1" value="area1" id="checkboxarea">
            <label class="form-check-label" for="checkboxarea">
                Overseas
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input shadow-none" type="checkbox" name="area1" value="area1" id="checkboxarea">
            <label class="form-check-label" for="checkboxarea">
                East Malaysia
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input shadow-none" type="checkbox" name="area1" value="area1" id="checkboxarea">
            <label class="form-check-label" for="checkboxarea">
                West Malaysia
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input shadow-none" type="checkbox" name="area1" value="area1" id="checkboxarea">
            <label class="form-check-label" for="checkboxarea">
                Johar
            </label>
            </div>

        </div>
      </div>

      <div class="searcharea">
        <h6>Shop Type</h6>
        <div class="area">
            <div class="form-check">
            <input class="form-check-input shadow-none" type="checkbox" name="area1" value="area1" id="checkboxarea" >
            <label class="form-check-label" for="checkboxarea">
                Shoppe Mall
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input shadow-none" type="checkbox" name="area1" value="area1" id="checkboxarea">
            <label class="form-check-label" for="checkboxarea">
                Shoppe Prefered
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input shadow-none" type="checkbox" name="area1" value="area1" id="checkboxarea">
            <label class="form-check-label" for="checkboxarea">
                Shoppe Prefered+
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input shadow-none" type="checkbox" name="area1" value="area1" id="checkboxarea">
            <label class="form-check-label" for="checkboxarea">
               Fullfilled by Shoppe
            </label>
            </div>

        </div>
      </div>
      <div class="searcharea">
        <h6>Price Range</h6>
        <div class="area">
            <div class="price">
                <input class="form-control" type="number" value="" placeholder="RM MIN" />
                <hr/>
                <input class="form-control" type="number" value="" placeholder="RM MAX" />
            </div>
            
            <commonbtn btntext="APPLY" :commonclass="btnprice" />
           
        </div>
      </div>
  </div>
</template>

<script>
import Icons from '../assets/Json/Icons';
import Commonbtn from './Commonbtn.vue';
export default {
  components: { Commonbtn },
name:'SearchFilter',
data(){
    return {
        Icons,
        btnprice:'btn-price'
    }
}
}
</script>

<style scoped>
.searchbyoption {
    padding-right:var(--fs-4);
    white-space: nowrap;
    position:sticky;
    top:20px;
    margin-bottom: 30px;

}
.searchbyoption h3 {
    font-size:var(--fs-18);
    display:flex;
    align-items:center;
    gap:var(--fs-14);
    margin-bottom: 0;
    font-weight: 700;
    text-transform: capitalize;
    color:var(--cool-gray);
}

.searcharea {
    padding:var(--fs-20) var(--fs-5);
    border-bottom:1px solid var(--cool-gray);
}
.searcharea h6 {
    font-size:var(--fs-16);
    text-transform: capitalize;
    color:var(--black);
}

.form-check {
    margin-top:var(--fs-14);
    font-weight: 600;
    margin-left:var(--fs-10);
}
.form-check-label {
    font-size:var(--fs-14);
}

input[type="checkbox"]{
    border-radius: 0px;
    border: 1px solid var(--cool-gold);
}
.form-check-input {
    position: relative;
}
.form-check-input::after {
    position: absolute;
    content:'';
    width:9px;
    height:9px;
    background:transparent;
    z-index:5;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    transition: 0.2s;
}
.form-check-input:checked {
    background: transparent;
}
.form-check-input:checked::after {
    background:var(--cool-gold);
}


.price{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top:var(--fs-10)
}
.price input {
    width:70px;
    padding:var(--fs-5);
    color:var(--cool-gray);
    box-shadow: none;
    border-radius: 0;
    font-size:var(--fs-12);
    font-weight: 600;
    border-color:var(--cool-gray);
}
.price input::placeholder {
    color:var(--cool-gray) ;
  font-size:var(--fs-12) ;
}
.price input:focus {
    border-color:var(--cool-gray);
}

.price hr {
    width: 30px;
    border-top: 2px solid var(--cool-gray);
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}


</style>
