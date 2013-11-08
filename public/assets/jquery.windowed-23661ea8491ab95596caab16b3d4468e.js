!function(e){"use strict";e.fn.borderWidth=function(){return parseInt(e(this).css("borderLeftWidth"),10)},e.fn.windowed=function(t){var i={},s={_init:function(t){return this.each(function(){i=e.extend(!0,{},e.fn.windowed.defaults,t);var n,a=e(this).prop("type"),d={},h=i.theme===!0?e(this).attr("class"):i.theme,c=e(this).wrap(e("<div />",{"class":"windowed",height:i.height})).parent().addClass(a).addClass(h),o=e(this).find("option"),r=parseInt(c.css("borderTopLeftRadius"),10),l=e('<div class="slider" />').hide().appendTo(c),p=l.borderWidth();l.remove(),i=e.extend({width:c.width(),height:c.height(),disabled:e(this).attr("disabled")},i),i.animate===!1&&(i.animateDuration=0),void 0===e(this).attr("id")&&e(this).attr("id","wp_"+Math.floor(1e16*Math.random())),i.width/=2,d={slider:{css:{borderWidth:p},width:i.width-2*p,height:i.height-2*p},checkstate:{width:i.width,height:i.height,css:{lineHeight:i.height+"px"},on:{css:{borderRadius:r+"px 0px 0px "+r+"px"},text:i.on},off:{css:{borderRadius:"0px "+r+"px "+r+"px 0px"},text:i.off}},li:{height:i.height,css:{lineHeight:i.height+"px"}}},e.extend(!0,i,d),e.each(["on","off"],function(){e.extend(!0,i.checkstate[this],i.checkstate)}),"checkbox"===a?(c.width(2*i.width),e("<label />",{"for":e(this).attr("id")}).appendTo(c).on("click",function(){}),e.each([i.checkstate.on,i.checkstate.off,i.slider],function(t,i){c.append(e("<div />",i))}),s._checkboxChange.apply(e(this),[{data:{duration:0}}])):"select-one"===a&&(n=e("<ul />").appendTo(c),i.vertical&&c.addClass("vertical"),e.each(o,function(t,s){n.append(e("<li />",e.extend({text:s.text,"class":e(s).is(":selected")?"selected":void 0},i.li)))}),c.append(e("<div />",i.slider)),s._selectChange.apply(c.find("li.selected"),[{data:{duration:0}}])),e(this).on("windowed.change",i.change),s[i.disabled?"_disable":"_enable"].apply(e(this))})},_checkboxChange:function(t){var i=e(this).prop("checked"),s=e(this).siblings(".slider"),n=e(this).siblings(".checkstate").removeClass("selected").filter(i?".on":".off").addClass("selected"),a={left:i?0:n.width()};s.animate(a,t.data.duration,e.proxy(function(){e(this).trigger("windowed.change",i,t)},this))},_selectChange:function(t){e(this).addClass("selected").siblings("li").removeClass("selected");var i=e(this).closest("div"),s=i.find(".slider"),n=i.find("select"),a=i.hasClass("vertical"),d=s.borderWidth(),h={width:e(this).outerWidth()-(a?d:2*d),left:a?0:e(this).position().left,top:e(this).position().top-1};s.animate(h,t.data.duration,e.proxy(function(){n[0].selectedIndex=e(this).index(),n.trigger("windowed.change",n.find("option:selected")[0],t).trigger("change")},this))},_enable:function(){var t=e(this).prop("type"),n={duration:i.animateDuration};e(this).prop("disabled",!1).parent().removeClass("disabled"),"checkbox"===t?e(this).on("change",n,s._checkboxChange):"select-one"===t&&e(this).parent().find("li").on("click",n,s._selectChange)},_disable:function(){e(this).attr("disabled",!0).off("change").parent().addClass("disabled").find("li").off("click")},setEnabled:function(t){return s[t?"_enable":"_disable"].apply(e(this)),t},toggleEnabled:function(){return s.setEnabled.apply(e(this),[e(this).prop("disabled")])},setState:function(t){return e(this).prop("checked",t).trigger("change"),t},toggleState:function(){return s.setState.apply(e(this),[!e(this).prop("checked")])},selectOption:function(t){return e(this).parent().find("li").eq(t).trigger("click")[0]}};return t&&s[t]&&"_"!==t.charAt(0)?s[t].apply(this,[].slice.call(arguments,1)):"object"!=typeof t&&t?(e.error("Method "+t+" does not exist on jQuery.windowed"),this):s._init.apply(this,[].slice.call(arguments,0))},e.fn.windowed.defaults={animate:!0,animateDuration:400,change:function(){},css:{},checkstate:{on:{"class":"checkstate on",text:"ON"},off:{"class":"checkstate off",text:"OFF"}},slider:{"class":"slider"}}}(jQuery);