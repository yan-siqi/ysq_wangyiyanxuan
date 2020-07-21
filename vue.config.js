
module.exports = {
    lintOnSave: false, // 关闭eslint规则检查
    devServer: {
      proxy: {
            '/api': {
              target: 'http://localhost:3002',//代理目标的服务器地址
              changeOrigin: true, // 允许跨域
                      pathRewrite: {
                          '^/api': ''	//重写路径,去掉路径中开头的api
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