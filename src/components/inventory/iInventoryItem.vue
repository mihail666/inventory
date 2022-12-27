<template>
  <div class="items_grid">
    <div
      class="items__item menu-toggle-wrap"
      v-for="Item in getItems()"
      :key="Item.id" 
      @click="sendItem(Item)">
      <div 
        class="items__content menu-toggle" 
        @click="showSide">
        <div class="drop-zone">
          {{ Item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'


export default defineComponent({
  setup() {
    const showSide = function () {
      this.$store.dispatch('SHOW_SIDE')
    }
    const sendItem = function (Item) {
      this.$store.dispatch('ITEM_FOR_SIDE', Item)
    }
    return {
      showSide,
      sendItem
    }
  },
  data() {
    return {
      elems_matrix: 25,
      items: [

        {
          id: 0,
          title: 'Item A',
          list: 1,
        },
        {
          id: 1,
          title: 'Item B',
          list: 1,
        },
        {
          id: 2,
          title: 'Item C',
          list: 2,
        },
        {
          id: 3,
          title: 'Item D',
          list: 2,
        }
      ],
      get_items: new Array().fill({
        id: null,
        title: null,
        list: null
      }),
    }
  },
  computed: {
    emptyElemsCount() {
      return this.elems_matrix - this.items.length
    },
  },
  methods: {
    getItemsEmpty(count) {
      return new Array(count).fill({
        id: null,
        title: null,
        list: null
      })
    },
    getItems() {
      return [...this.items, ...this.getItemsEmpty(this.emptyElemsCount)]
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/style/variable.scss';


.items_grid {
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(auto-fill, 20%);
  height: 100%;
  width: 100%;
  margin: auto;
  justify-content: center;
}

.items__item {
  height: 16vh;
  position: relative;
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  & img {
    width: 60%;
    background-size: contain;
  }
}
.items__item:not(:nth-child(5n)) {
  border-right: $border-int;
}

.items__item:not(:nth-last-child(-n)) {
  border-bottom: $border-int ;
}

.items__item:nth-child(21),
.items__item:nth-child(22),
.items__item:nth-child(23),
.items__item:nth-child(24),
.items__item:nth-child(25) {
  border-bottom: none;
}

.drop-zone {
  width: 80px;
  height: 80px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
