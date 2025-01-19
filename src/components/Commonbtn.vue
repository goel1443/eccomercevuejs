<template>
  <div>
    <button class="btn btn-common" :class="commonclass"><span v-html="imagebtn"></span><span>{{ btntext }}</span></button>
  </div>
</template>

<script>
export default {
  name:'Commonbtn',
  props:{
    btntext:String,
    commonclass:String,
    imagebtn:String
  }
}
</script>

<style scoped>

.btn-common{
  background:var(--cool-gray);
  border-radius:var(--fs-4) !important;
  font-size:var(--fs-14);
  padding:var(--fs-10) var(--fs-15);
  font-weight:500;
  color:var(--cool-white);
  text-transform: capitalize;
  letter-spacing: 1px;
  text-align: center;
  display:flex;
  align-items: center;
  justify-content: center;
}
.btn-common:hover {
  background: var(--cool-gold);
  color:var(--cool-white);
  border-radius:var(--fs-4) !important;
  font-size:var(--fs-14);
  padding:var(--fs-10) var(--fs-15);
  font-weight:500;
}

</style>