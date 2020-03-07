export default {
    guideMaskEvent($guideMask, posArrObj, tipPos, tipArrowPos, textArr, leadTextArr, type, domParam) {
        var $tipBox = $guideMask.find('.wind-item'),
            $btnClose = $tipBox.find('.close-btn'),
            $tipArrow = $tipBox.find('.item-icon-drop-down'),
            $text = $tipBox.find('.iot-black'),
            $leadText = $tipBox.find('.item-title'),
            $dot = $tipBox.find('.dot-icon'),
            $btnOk = $tipBox.find('.min');

        domParam.$copyDom.css(domParam.copyArrObj[0]); // copy的主页面 左上角放置
        domParam.$saveCon.append(domParam.$copyDom); // copy的主页面 放在空白框中
        domParam.$tip.css(posArrObj[0]); // 确定空白框的位置及大小
        domParam.$border.removeClass('hide').css(posArrObj[0]); // 空白框边框的位置及大小
        $tipBox.css(tipPos[0]); // 弹框内容框 位置
        $tipArrow.css(tipArrowPos[0]); // 箭头 位置
        $text.text(textArr[0]); 
        $leadText.text(leadTextArr[0]);

        // 关闭按钮事件绑定
        $btnClose.off('click').on('click', function () {
            $dot.eq(0).click();
            $guideMask.addClass('hide');
            domParam.$saveCon.empty();
            if (type === 1) {
                var guideObj = {
                    indexGuide: '0'
                }
            } else {
                var guideObj = {
                    searchGuide: '0'
                }
            }
            // 调用后台借口修正新手指引状态
            // window.loadData('home/updateGuide', true, guideObj, function (data) {});
        });
        // 弹窗原点事件绑定
        $dot.off('click').on('click', function () {
            var $this = $(this),
                thisIndex = $this.index(),
                thisLen = $this.parent().children().length,
                thisCls = $this.hasClass('active');
            // 判定是否为选中状态
            if (thisCls) {
                return;
            }
            // 判定是否为最后一个原点
            if (thisIndex === thisLen - 1) {
                $btnOk.addClass('over').text('立即体验');
            } else {
                $btnOk.removeClass('over').text('下一条');
            }
            $text.text(textArr[thisIndex]);
            $leadText.text(leadTextArr[thisIndex]);
            domParam.$copyDom.removeAttr('style').css(domParam.copyArrObj[0]);
            domParam.$tip.removeAttr('style').css(posArrObj[thisIndex]);
            domParam.$border.removeAttr('style').css(posArrObj[thisIndex]);
            $tipBox.removeAttr('style').css(tipPos[thisIndex]);
            $tipArrow.removeAttr('style').css(tipArrowPos[thisIndex]);
            $this.addClass('active').siblings().removeClass('active');
        });
        // 弹窗按钮事件绑定
        $btnOk.off('click').on('click', function () {
            var $this = $(this),
                $dotActive = $tipBox.find('.dot-icon.active'),
                thisCls = $this.hasClass('over');
            if (thisCls) {
                $btnClose.click();
            } else {
                $dotActive.next().click();
            }
        });
    },
    // 新手指引公共方法
    systemGuide(type) {
        // 根据不同类型加载不同的新手指引
        var $guideMask = type === 1 ? $('#system-guide-index') : $('#system-guide-search'),
            $saveCon = $guideMask.find('.system-guide-box'),
            $tip = $guideMask.find('.sidebar-tip-box'),
            $border = $guideMask.find('.system-guide-border');
        // 进行后台查询是否需要新手指引
        // 判定需要新手指引
        // var resultIndexGuide = parseFloat(data.result.indexGuide),
        //     resultSearchGuide = parseFloat(data.result.searchGuide);
        if (type === 1) {
            // if (resultIndexGuide === 0) { // 后台表示已指引过，不需要再指引
            //     return;
            // }
            var $initDom = $('#app'),
                $copyDom = $initDom.clone(),
                windowW = $(window).width(),
                windowH = $(window).height(),
                itemH = $initDom.find('img').outerHeight(),
                firstPos = $initDom.find('img')[0].getBoundingClientRect(),
                secondPos = $initDom.find('.core-docs')[0].getBoundingClientRect(),
                textArr = [
                    '您可以点击logo,进入官方网站',
                    '您可以在这里查看中文文档'
                ],
                leadTextArr = ['导航使用', '核心文档'],
                posArrObj = [{
                    top: firstPos.top,
                    left: firstPos.left,
                    width: firstPos.width,
                    height: itemH
                },{
                    top: secondPos.top,
                    left: secondPos.left,
                    width: secondPos.width,
                    height: secondPos.height
                }],
                copyArrObj = [{
                    'width': windowW,
                    'height': windowH,
                    'margin': 0
                }, {
                    'width': windowW,
                    'height': windowH,
                    'margin-top': -posArrObj[1].top,
                    'margin-left': -posArrObj[1].left
                }];
            $guideMask.removeClass('hide');
            var $windowCon = $guideMask.find('.window-cont'),
                windowConPosTop = $windowCon.position().top,
                windowConH = $windowCon.outerHeight(),
                tipPos = [{
                    top: posArrObj[0].top, // 提示内容框的高度
                    left: posArrObj[0].left + posArrObj[0].width + 20
                }, {
                    top: posArrObj[1].top,
                    left: posArrObj[1].left + posArrObj[1].width + 20,
                    // bottom: 20
                }],
                tipArrowPos = [{
                    top: windowConPosTop
                }, {
                    top: windowConPosTop
                }];
            var domParam = {
                $copyDom: $copyDom,
                $saveCon: $saveCon,
                $tip: $tip,
                $border: $border,
                copyArrObj: copyArrObj
            }
            this.guideMaskEvent($guideMask, posArrObj, tipPos, tipArrowPos, textArr, leadTextArr, type, domParam);
        } else {
            // if (resultSearchGuide === 0) { // 后台表示已指引过，不需要再指引
            //     return;
            // }
            var $initDom = $('<div class="system-guide-con"></div>');
            $initDom.append($('#pageSidebarMenu').parent().clone());
            $initDom.append($('#content-box').children().eq(1).clone());
            var $saveItem = $('#content-box').children().eq(1),
                $copyDom = $initDom.clone(),
                saveItemSidePos = $saveItem.find('#sidebarAccordion')[0].getBoundingClientRect(),
                staticSearchPox = $saveItem.find('#staticContentContainer')[0].getBoundingClientRect(),
                mapPos = $saveItem.find('#search_map_iframe').parent()[0].getBoundingClientRect();
            textArr = [
                    '您可以在此区域上传需要检索的图片,或输入身份证号',
                    '您可以在此区域设置静态库和动态库的检索条件',
                    '您可以在此区域查看静态库多家算法厂商的比对结果,确认身份信息',
                    '您可以在此区域查看动态库的检索结果,进行轨迹分析',
                    '您可以通过此区域查看每个区域检索图片的数量'
                ],
                leadTextArr = ['图片上传区域', '条件输入区域', '静态库结果区域', '动态库结果区域', '地图区域'],
                posArrObj = [{
                    top: 0,
                    left: saveItemSidePos.left + 6,
                    width: saveItemSidePos.width - 12,
                    height: saveItemSidePos.top,
                }, {
                    top: saveItemSidePos.top,
                    left: saveItemSidePos.left + 6,
                    width: saveItemSidePos.width - 12,
                    height: saveItemSidePos.height,
                }, {
                    top: staticSearchPox.top,
                    left: staticSearchPox.left,
                    width: staticSearchPox.width,
                    height: staticSearchPox.height,
                }, {
                    top: staticSearchPox.height,
                    left: staticSearchPox.left,
                    width: staticSearchPox.width,
                    height: $(window).height() - staticSearchPox.height,
                }, {
                    top: mapPos.top,
                    left: mapPos.left,
                    width: mapPos.width,
                    height: mapPos.height,
                }],
                copyArrObj = [{
                    'width': $(window).width(),
                    'height': $(window).height(),
                    'margin-top': -posArrObj[0].top,
                    'margin-left': -posArrObj[0].left
                }, {
                    'width': $(window).width(),
                    'height': $(window).height(),
                    'margin-top': -posArrObj[1].top,
                    'margin-left': -posArrObj[1].left
                }, {
                    'width': $(window).width(),
                    'height': $(window).height(),
                    'margin-top': -posArrObj[2].top,
                    'margin-left': -posArrObj[2].left
                }, {
                    'width': $(window).width(),
                    'height': $(window).height(),
                    'margin-top': -posArrObj[3].top,
                    'margin-left': -posArrObj[3].left
                }, {
                    'width': $(window).width(),
                    'height': $(window).height(),
                    'margin-top': -posArrObj[4].top,
                    'margin-left': -posArrObj[4].left
                }];
            $guideMask.removeClass('hide');
            var $windowCon = $guideMask.find('.window-cont'),
                $windowConW = $guideMask.find('.wind-item')[0].getBoundingClientRect().width,
                $windowConH = $guideMask.find('.wind-item')[0].getBoundingClientRect().height,
                windowConPosTop = $windowCon.position().top,
                windowConH = $windowCon.outerHeight(),
                tipPos = [{
                    top: (posArrObj[0].height + posArrObj[0].top) / 2,
                    left: posArrObj[0].left + posArrObj[0].width + 20
                }, {
                    top: (posArrObj[1].height + posArrObj[1].top) / 2,
                    left: posArrObj[1].left + posArrObj[1].width + 20
                }, {
                    top: posArrObj[2].height + 20,
                    left: (posArrObj[2].left + posArrObj[2].width) / 2
                }, {
                    bottom: posArrObj[3].height + 20,
                    left: (posArrObj[3].left + posArrObj[3].width) / 2
                }, {
                    top: (posArrObj[4].height + posArrObj[4].top) / 2,
                    right: posArrObj[4].width + 20
                }],
                tipArrowPos = [{
                    top: windowConPosTop
                }, {
                    top: windowConPosTop + (windowConH / 2)
                }, {
                    top: -4,
                    left: $windowConW / 2 - 2,
                    'margin-left': 0,
                }, {
                    'margin-left': 0,
                    'margin-bottom': 0,
                    bottom: -4,
                    left: $windowConW / 2 - 2,
                }, {
                    top: windowConPosTop + (windowConH / 2),
                    'margin-left': 0,
                    left: $windowConW - 5
                }];
            guideMaskEvent($guideMask, posArrObj, tipPos, tipArrowPos, textArr, leadTextArr, type);
        }
    }
}