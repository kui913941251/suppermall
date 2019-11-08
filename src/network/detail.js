import {request}from "./request"

export function getDetail(iid) {
  return request({
    url: "/detail",
    params: {
      iid
    }
  })
}

export class Goods {
  constructor(itemInfo, columns , shopInfo) {
    this.title =  itemInfo.title
    this.desc = itemInfo.desc
    this.lowNowPrice = itemInfo.lowNowPrice
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discountDesc = itemInfo.discountDesc
    this.discountBgColor = itemInfo.discountBgColor
    this.columns = columns
    this.services = shopInfo.services
  }
}

export class Shop {
  constructor(shopInfo) {
    this.shopName = shopInfo.name
    this.cGoods = shopInfo.cGoods
    this.cSells = shopInfo.cSells
    this.allGoodsUrl = shopInfo.allGoodsUrl
    this.score = shopInfo.score
    this.shopUrl = shopInfo.shopUrl
    this.shopLogo = shopInfo.shopLogo
  }
}

export class GoodsParams {
  constructor(itemParams) {
    this.info = itemParams.info
    this.rule = itemParams.rule
  }
}

export function getRecommend() {
  return request({
  url: "/recommend"
})
}