jQuery(document).ready(function(){jQuery("input[name$='payment_option']").click(function(){var a=jQuery(this).val();jQuery(".input-paypal-email").hide(),jQuery(".input-venmo-email").hide(),"Paypal"==a?(jQuery(".input-paypal-email").show(),jQuery(".paypal-detail-text").css("color","black")):jQuery(".paypal-detail-text").css("color","#959EAD"),"Venmo"==a?(jQuery(".input-venmo-email").show(),jQuery(".venmo-detail-text").css("color","black")):jQuery(".venmo-detail-text").css("color","#959EAD"),"Check"==a?jQuery(".check-detail-text").css("color","black"):jQuery(".check-detail-text").css("color","#959EAD")})});var buttonPlus=jQuery(".qty-btn-plus"),buttonMinus=jQuery(".qty-btn-minus"),incrementPlus=buttonPlus.click(function(){var a=jQuery(this).parent(".qty-container").find(".input-qty");a.val(Number(a.val())+1)}),incrementMinus=buttonMinus.click(function(){var a=jQuery(this).parent(".qty-container").find(".input-qty"),b=Number(a.val());b>0&&a.val(b-1)});jQuery(function(){jQuery(".plus, .minus").click(function(){jQuery(".update_cart").prop("disabled")||(jQuery(".update-button").attr("style","border-color: #65e0b8 !important;background-color:#65e0b8 !important"),jQuery(".checkout-button").prop("disabled",!0),jQuery(".checkout-button").attr("style","background-color:#e5e7eb !important"))})});var navMenuDiv=document.getElementById("nav-content"),navMenu=document.getElementById("nav-toggle");function check(a){var b=a&&a.target||event&&event.srcElement;checkParent(b,navMenuDiv)||(checkParent(b,navMenu)&&navMenuDiv.classList.contains("hidden")?navMenuDiv.classList.remove("hidden"):navMenuDiv.classList.add("hidden"))}function checkParent(a,b){for(;a.parentNode;){if(a==b)return!0;a=a.parentNode}return!1}"use strict";document.onclick=check;var testimTimer,touchStartPos,touchEndPos,touchPosDiff,testim=document.getElementById("testim"),testimDots=Array.prototype.slice.call(document.getElementById("testim-dots").children),testimContent=Array.prototype.slice.call(document.getElementById("testim-content").children),testimLeftArrow=document.getElementById("left-arrow"),testimRightArrow=document.getElementById("right-arrow"),testimSpeed=4500,currentSlide=0,currentActive=0,ignoreTouch=30;window.onload=function(){function b(a){for(var c=0;c<testimDots.length;c++)testimContent[c].classList.remove("active"),testimContent[c].classList.remove("inactive"),testimDots[c].classList.remove("active");a<0&&(a=currentSlide=testimContent.length-1),a>testimContent.length-1&&(a=currentSlide=0),currentActive!=currentSlide&&testimContent[currentActive].classList.add("inactive"),testimContent[a].classList.add("active"),testimDots[a].classList.add("active"),currentActive=currentSlide,clearTimeout(testimTimer),testimTimer=setTimeout(function(){b(currentSlide+=1)},testimSpeed)}testimLeftArrow.addEventListener("click",function(){b(currentSlide-=1)}),testimRightArrow.addEventListener("click",function(){b(currentSlide+=1)});for(var a=0;a<testimDots.length;a++)testimDots[a].addEventListener("click",function(){b(currentSlide=testimDots.indexOf(this))});b(currentSlide),document.addEventListener("keyup",function(a){switch(a.keyCode){case 37:testimLeftArrow.click();break;case 39:case 39:testimRightArrow.click()}}),testim.addEventListener("touchstart",function(a){touchStartPos=a.changedTouches[0].clientX}),testim.addEventListener("touchend",function(a){if(touchPosDiff=touchStartPos-(touchEndPos=a.changedTouches[0].clientX),console.log(touchPosDiff),console.log(touchStartPos),console.log(touchEndPos),touchPosDiff>0+ignoreTouch)testimLeftArrow.click();else{if(!(touchPosDiff<0-ignoreTouch))return;testimRightArrow.click()}})}