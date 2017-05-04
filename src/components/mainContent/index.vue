<template>
  <div class="main-content ofh" :class="{'no-show-all':!is_show_all}">
    <template v-if="is_show_all">
      <left-slide style="z-index: 150"></left-slide>
      <header-section style="z-index: 150"></header-section>
    </template>
    <el-row>
      <el-col :span="24">
        <div class="wrapper">
          <div class="pageContent">
            <el-row>
              <el-col :span="24">
                <slot></slot>
              </el-col>
            </el-row>
          </div>
        </div>
        <!--<v-footer></v-footer>-->
      </el-col>
    </el-row>
  </div>
</template>
<script type="text/javascript">
  import headerSection from 'components/headerSection'
  import leftSlide from 'components/leftSlide'
  import vFooter from './footer'

  export default{
    props: {
      is_show_all: {
        type: Boolean,
        default: true
      }
    },
    name: 'content',
    data(){
      return {}
    },
    components: {
      vFooter, leftSlide, headerSection
    }
  }
</script>
