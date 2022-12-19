<template>
    <div class="bg-primary ">
        <div class="container h-[10vh] px-3 items-center mx-auto grid gap-10 grid-cols-2 md:grid-cols-4 " >
            <div class="w-[50px]">
                <img class="w-full " src="/src/assets/logo.svg" alt="">
            </div>
                <div :class="{'ml-[-100%] ' : showNavbar},  {'ml-0' : !showNavbar}"  class="col-span-2  transition-all md:inline-block text-xl absolute left-0 bg-gray-300 w-full h-[90vh] bottom-0 z-50   md:bg-transparent md:static md:h-auto md:flex ">
                    <router-link class="mx-2 block text-center p-2" to="/" >Home</router-link>
                    <router-link class="mx-2 block text-center p-2" to="/" >Shop</router-link>
                    <router-link class="mx-2 block text-center p-2 " to="/" >
                        <el-badge :value="143" class="item ">
                            <el-button class="bg-primary text-xl font-normal border-none" >Cart</el-button>
                        </el-badge>
                    </router-link>
                    <router-link class="mx-2 block text-center p-2" to="/">Login</router-link>
                    <router-link class="mx-2 block text-center p-2" to="/">Register</router-link>
            </div>
            <div class="flex justify-end">
                <div class="flex flex-wrap items-center ">
                        <el-dropdown >
                            <el-button class="w-[140px] h-[44px]" >
                                <img class="w-[30px] mr-2" src="/src/assets/logo.svg" alt="">Sai Win Oo
                            </el-button>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item>
                                        <router-link to="/">Profile Setting</router-link>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </div>
                <div @click="toggleNav" class="block md:hidden">
                    <img v-if="showNavbar" class="h-[60px] max-w-[50px]" src="/src/assets/open.svg" alt="">
                    <img v-else class="h-[60px] max-w-[50px]" src="/src/assets/close.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TheNavbar",
    data() {
        return {
            showNavbar: false,
            windowWidth : window.innerWidth,
        }
    },
    watch:{
      windowWidth(){
          if(this.windowWidth < 767) {
              this.showNavbar = true;
          }else if(this.windowWidth > 767){
              this.showNavbar = false;
          }
      }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },
    methods: {
        onResize() {
            this.windowWidth = window.innerWidth;
        },
        toggleNav() {
            this.showNavbar = !this.showNavbar;
        }
    },
}
</script>

<style scoped>

</style>
