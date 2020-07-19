function remRefresh(){
    // 1. 获取屏幕大小等分
    let clientWidth = document.documentElement.clientWidth;

    // 等分的分数: 10 || 16, 等分的目的:降低单位rem值的大小,便于换算提高精确度
    let rem = clientWidth / 10;

    // 设置根标签字体大小
    document.documentElement.style.fontSize = rem + 'px';

    // 设置body字体大小
    document.body.style.fontSize = '16px'
    }
    // 页面显示
    window.addEventListener('pageshow', () => {
    remRefresh()
    })
    // 窗口大小改变的时候
    window.addEventListener('resize', () => {
    remRefresh()
})