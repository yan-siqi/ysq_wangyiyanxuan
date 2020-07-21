/* css: {
    loaderOptions: {
        postcss: {
            plugins: [
                require('postcss-plugin-px2rem')({
                    rootValue:75,      // 设置转换基数，会自动根据该 基数进行rem值转换，如设置75，页面写入高度175px 则== 1775/75rem,该值通常根据设计稿等分数进行计算，使用淘宝方案等分就是10份
                    mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                    minPixelValue: 3, //设置要替换的最小像素值(3px会被转rem)。 默认 0
                    exclude: /(node_module)/, // 排除指定的包，不对其进行转换，通常用于指定第三方包，默认为false
                }),
            ]
        }
    }
} */
module.exports = {
    lintOnSave: false, // 关闭eslint规则检查
    devServer: {
      proxy: {
            '/api': {
              target: 'http://localhost:3001',
              changeOrigin: true, // 允许跨域
                      pathRewrite: {
                          '^/api': ''	
                      }
        }
      }
    },
    betterScroll:{
        click: true,  // 元素可触发点击事件
        scrollX: true,  // 横向可滑动，默认为false
        scrollY: false,  // 纵向可滑动，默认为true
        bounce: false,  // 当滚动超过边缘的时候无回弹动画
        preventDefaultException: {  // 设置局部某元素原生事件不被禁止（默认preventDefault为true）
         // className: 【正则表达式】
        },
        snap: {  // 滑动切换的一些配置
          speed: 800,  // 滑动切换的速度
          easing: {  // 滑动切换的动画效果
            style: 'ease-in'
          },
          threshold: 0.5,  // 滑动切换到超过一半时切换到下一屏
          stepX: window.innerWidth,  // 横向切换距离为窗口宽度
          stepY: window.innerHeight  // 纵向切换距离为窗口高度
        }
      }
  }