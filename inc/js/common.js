!function(n){n(function(){var t=n(".side__btn--arrow"),e=n(".main__title--h2--renew"),i=n(".main__dl--renew");t.on("click",function(t){t.preventDefault();var e=n(this),i=e.next().next(),o=i.css("display");"none"==o?(e.html("▼"),i.show()):(e.html("▶"),i.hide())}),i.first().show(),e.on("click",function(t){t.preventDefault(),n(this).next().toggle()})})}(jQuery);