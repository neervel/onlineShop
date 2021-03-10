<template>
  <div class="v-catalog-item">
    <img class="v-catalog-item__image" :src=" require('../assets/images/' + product_data.image) " alt="dd">
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Price: {{product_data.price}}р.</p>
    <button 
      class="v-catalog-item__add_to_cart_btn btn" 
      @click="sendDataToParent"
    >add to cart</button>
  </div>
</template>

<script>
  export default {
    name: "v-catalog-item",
    props: {
      product_data: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      sendDataToParent(){
        this.$emit('sendArticle', this.product_data.article);
      }
    }
  }
</script>

<style lang="scss">
  .v-catalog-item{
    flex-basis: 25%;
    box-shadow: 0 0 8px #e8e8e0;
    padding: 16px;
    margin: 16px;
    &__image{
      width: 100px;
    }
  }
</style>