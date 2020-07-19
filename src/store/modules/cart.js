import Vue from "vue";
const state = {
  cartList: [
    {
      promId: 0,
      showPoints: false,
      selected: true,
      count: 2,
      itemTagList: [
        {
          itemId: 1535004,
          tagId: 128111157,
          freshmanExclusive: false,
          name: "暖冬特惠",
          subType: 204,
          forbidJump: false,
          type: 2,
        },
      ],
      rank: 1,
      id: 1535004,
      sellVolume: 4001,
      primaryPicUrl:
        "https://yanxuan-item.nosdn.127.net/f79906f1b1fe86420ea40473de66ec0e.png",
      soldOut: false,
      sortFlag: 0,
      commentCount: 0,
      onSaleTime: 1538101761748,
      picMode: 1,
      commentWithPicCount: 0,
      underShelf: false,
      status: 2,
      couponConflict: true,
      forbiddenBuy: false,
      promotionDesc: "暖冬特惠",
      limitedFlag: 204,
      pieceNum: 0,
      itemSizeTableDetailFlag: false,
      forbidExclusiveCal: false,
      rewardShareFlag: false,
      updateTime: 1575893634989,
      showCommentEntrance: true,
      pieceUnitDesc: "件",
      specialPromTag: "",
      counterPrice: 299,
      categoryL2Id: 0,
      retailPrice: 209,
      primarySkuPreSellPrice: 0,
      preLimitFlag: 0,
      itemPromValid: true,
      promTag: "暖冬特惠",
      source: 0,
      points: 0,
      primarySkuPreSellStatus: 0,
      extraServiceFlag: 0,
      flashPageLink: "",
      autoOnsaleTimeLeft: 0,
      innerData: {},
      saleCenterSkuId: 0,
      pointsStatus: 0,
      extraPrice: "",
      colorNum: 0,
      showTime: 0,
      autoOnsaleTime: 0,
      preemptionStatus: 1,
      isPreemption: 0,
      zcSearchFlag: false,
      name: "男式色拉姆内衣套装2.0",
      appExclusiveFlag: false,
      itemType: 1,
      listPicUrl:
        "https://yanxuan-item.nosdn.127.net/c2eeb1b872af1b8efc179a7515aacdaa.png",
      pointsPrice: 0,
      simpleDesc: "色拉姆发热面料，加厚升级",
      seoTitle: "",
      newItemFlag: false,
      buttonType: 0,
      primarySkuId: 1636062,
      displaySkuId: 1636056,
      productPlace: "",
      itemSizeTableFlag: false,
    },
    {
      promId: 0,
      showPoints: false,
      selected: false,
      count: 2,
      itemTagList: [
        {
          itemId: 1536001,
          tagId: 128111157,
          freshmanExclusive: false,
          name: "暖冬特惠",
          subType: 204,
          forbidJump: false,
          type: 2,
        },
      ],
      rank: 1,
      id: 1536001,
      sellVolume: 3634,
      primaryPicUrl:
        "https://yanxuan-item.nosdn.127.net/32b8b2d07b1c4327593a4a70993eeac2.png",
      soldOut: false,
      sortFlag: 0,
      commentCount: 0,
      onSaleTime: 1538101896296,
      picMode: 1,
      commentWithPicCount: 0,
      underShelf: false,
      status: 2,
      couponConflict: true,
      forbiddenBuy: false,
      promotionDesc: "暖冬特惠",
      limitedFlag: 204,
      pieceNum: 0,
      itemSizeTableDetailFlag: false,
      forbidExclusiveCal: false,
      rewardShareFlag: false,
      updateTime: 1575894115275,
      showCommentEntrance: true,
      pieceUnitDesc: "件",
      specialPromTag: "",
      counterPrice: 299,
      categoryL2Id: 0,
      retailPrice: 209,
      primarySkuPreSellPrice: 0,
      preLimitFlag: 0,
      itemPromValid: true,
      promTag: "暖冬特惠",
      source: 0,
      points: 0,
      primarySkuPreSellStatus: 0,
      extraServiceFlag: 0,
      flashPageLink: "",
      autoOnsaleTimeLeft: 0,
      innerData: {},
      saleCenterSkuId: 0,
      pointsStatus: 0,
      extraPrice: "",
      colorNum: 0,
      showTime: 0,
      autoOnsaleTime: 0,
      preemptionStatus: 1,
      isPreemption: 0,
      zcSearchFlag: false,
      name: "女式色拉姆内衣套装2.0",
      appExclusiveFlag: false,
      itemType: 1,
      listPicUrl:
        "https://yanxuan-item.nosdn.127.net/02b61fb5700aed6761b7524d98ed0837.png",
      pointsPrice: 0,
      simpleDesc: "色拉姆发热面料，加厚升级",
      seoTitle: "",
      newItemFlag: false,
      buttonType: 0,
      primarySkuId: 1634105,
      displaySkuId: 1634104,
      productPlace: "",
      itemSizeTableFlag: false,
    },
  ],
};
const mutations = {
  //添加到购物车
  changeCartList(state, shopItem) {
    //1.判断购物车你中是否已经有要添加的商品
    let result = state.cartList.find((item) => item.id === shopItem.id);
    if (result) {
      //2.如果有,在当前的数据中count+1
      result.count += 1;
    } else {
      //3.如果没有,添加商品,并初始化该商品的数量为一
      //非响应式属性:shopItem.count=1;
      //响应式属性()面试
      Vue.set(shopItem, "count", 1);
      Vue.set(shopItem, "selected", true);
      state.cartList.push(shopItem);
    }
  },
  //修该购物车的数量
  changeCountMutation(state, { isAdd, index }) {
    if (isAdd) {
      state.cartList[index].count += 1;
    } else {
      if (state.cartList[index].count > 1) {
        //如果当前有商品 数量直接减一
        state.cartList[index].count -= 1;
      } else {
        //不太明白(课下看视频)
        state.cartList.splice(index, 1);
      }
    }
  },
  //修该商品的选中状态
  changeSelectedMutaion(state, { selected, index }) {
    state.cartList[index].selected = selected;
  },
  //控制全选和全不选的状态
  changeAllSelectedMutation(state, allSelected) {
    state.cartList.forEach((item) => (item.selected = allSelected));
  },
};
const actions = {};
const getters = {
  //计算全选和全不选
  isAllSelected(state) {
    return state.cartList.every((item) => item.selected);
  },
  //计算总数量
  totalCount(state){
      return state.cartList.reduce((pre,shopItem)=>{
          return pre +=shopItem.selected?shopItem.count:0//选中了就加没有就+0
      },0)
  },
  //计算总钱数
  totalPrice(state){
      return state.cartList.reduce((pre,shopItem)=>{
        return pre +=shopItem.selected?shopItem.count*shopItem.counterPrice:0;
      },0)

  }
};
export default {
  state,
  mutations,
  actions,
  getters,
};
