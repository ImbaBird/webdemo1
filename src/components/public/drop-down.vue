<template>
  <div class="vue-dropdown default-theme" v-show-extend="show">
    <div class="search-module clearfix" v-show="itemlist.length">
      <van-search
        @search="search($event)"
        placeholder="请输入搜索关键词"
        show-action
        v-model="value"

      />
      <!-- <input class="search-text"
      @keyup='' :placeholder="placeholder" />
      <span>搜索</span> -->
    </div>
    <ul class="list-module" v-show="length">
      <li :key="index" @click="appClick(item)"
          v-for="(item,index) in datalist">
        <span class="list-item-text">{{item.fgoods_name}}</span>
      </li>
    </ul>
    <div class="tip__nodata" v-show="!length">{{nodatatext}}</div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        datalist: []
      }
    },
    props: {
      'show': {//用于外部控制组件的显示/隐藏
        type: Boolean,
        default: true
      },
      'itemlist': Array,
      'placeholder': String,
      'nodatatext': String
    },
    watch: {
      itemlist: function (val) {
        this.datalist = val.concat();
        debugger
      }
    },
    directives: {
      'show-extend': function (el, binding, vnode) {//bind和 update钩子
        let value = binding.value, searchInput = null;
        if (value) {
          el.style.display = 'block';
        } else {//隐藏后，恢复初始状态
          el.style.display = 'none';
          searchInput = el.querySelector(".search-text");
          searchInput.value = '';
          vnode.context.datalist = vnode.context.itemlist;//还原渲染数据
        }
      }
    },
    methods: {
      appClick: function (data) {
        this.$emit('item-click', data);
      },
      search: function (e) {
        let vm = this, searchvalue = e.currentTarget.value;
        vm.datalist = vm.itemlist.filter(function (item, index, arr) {
          return item.name.indexOf(searchvalue) != -1;
        });
      }
    },
    computed: {
      length: function () {
        return this.datalist.length;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .vue-dropdown.default-theme {
    width: 84%;
    display: block;
    margin: 1em auto;
    padding: 1em;
    min-height: 300px;
    z-index: 10;
    box-sizing: border-box;
    -webkit-box-shadow: 0px 0px 10px #ccc;
    box-shadow: 0px 0px 10px #ccc;

    &._self-show {
      display: block !important;
    }

    .search-module {
      position: relative;

      .search-text {
        height: 30px;
        padding-right: 2em;
        padding-left: 0.5em;
        border-radius: 0.5em;
        box-shadow: none;
        border: 1px solid #ccc;

        &:focus {
          border-color: #2198f2;
        }
      }

      .search-icon {
        position: absolute;
        top: 24%;
        right: 0.5em;
        color: #aaa;
      }
    }

    .list-module {
      max-height: 200px;
      overflow-y: auto;

      li {
        &._self-hide {
          display: none;
        }

        margin-top: 0.5em;
        padding: 0.5em;

        &:hover {
          cursor: pointer;
          color: #fff;
          background: #00a0e9;

        }
      }
    }
  }

  .tip__nodata {
    font-size: 12px;
    margin-top: 1em;
  }
</style>
