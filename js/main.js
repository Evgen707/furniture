$(function() {

    $('.slider__inner, .news__slider-inner').slick({
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false

    });

    $('select').styler();


    $('.header__btn-menu').on('click', function() {
        $('.menu ul').slideToggle();
    });

});





! function(a) { var b = null,
        c = { "cloud-team-commerce-tracker-add": function(a, c) { b.push({ event: "cloud-team-commerce-tracker-add", arguments: [c] }) }, "cloud-team-commerce-tracker-remove": function(a, c) { b.push({ event: "cloud-team-commerce-tracker-remove", arguments: [c] }) }, "cloud-team-commerce-tracker-cart-update": function(a, c) { b.push({ event: "cloud-team-commerce-tracker-cart-update", arguments: [c] }) }, "cloud-team-commerce-tracker-detail-product": function(a, c, d) { b.push({ event: "cloud-team-commerce-tracker-detail-product", arguments: [c, d] }) }, "cloud-team-commerce-tracker-detail-category": function(a, c) { b.push({ event: "cloud-team-commerce-tracker-detail-category", arguments: [c] }) }, "cloud-team-commerce-tracker-purchase": function(a, c, d) { b.push({ event: "cloud-team-commerce-tracker-purchase", arguments: [c, d] }) }, "cloud-team-commerce-tracker-event-send": function(a, c, d) { b.push({ event: "cloud-team-commerce-tracker-event-send", arguments: [c, d] }) }, "cloud-team-commerce-tracker-event-vk-pixel-send": function(a, c, d) { b.push({ event: "cloud-team-commerce-tracker-event-vk-pixel-send", arguments: [c, d] }) }, "cloud-team-commerce-tracker-filter": function(a, c, d) { b.push({ event: "cloud-team-commerce-tracker-filter", arguments: [c, d] }) }, "cloud-team-commerce-tracker-order-started": function() { b.push({ event: "cloud-team-commerce-tracker-order-started", arguments: [] }) }, "cloud-team-commerce-tracker-media-nation-entry-and-check": function(a, c, d) { b.push({ event: "cloud-team-commerce-tracker-media-nation-entry-and-check", arguments: [c, d] }) }, "cloud-team-commerce-tracker-media-nation-list-products": function(a, c) { b.push({ event: "cloud-team-commerce-tracker-media-nation-list-products", arguments: [c] }) }, "cloud-team-commerce-tracker-media-nation-detail-product": function(a, c, d) { b.push({ event: "cloud-team-commerce-tracker-media-nation-detail-product", arguments: [c, d] }) }, "cloud-team-commerce-tracker-media-nation-checkout": function(a, c, d, e) { b.push({ event: "cloud-team-commerce-tracker-media-nation-checkout", arguments: [c, d, e] }) }, "cloud-team-commerce-tracker-media-nation-banner": function(a, c, d, e, f, g) { b.push({ event: "cloud-team-commerce-tracker-media-nation-banner", arguments: [c, d, e, f, g] }) }, "cloud-team-commerce-tracker-add-to-wish": function(a, c) { b.push({ event: "cloud-team-commerce-tracker-add-to-wish", arguments: [c] }) }, "cloud-team-commerce-tracker-wish-list-update": function(a, c) { b.push({ event: "cloud-team-commerce-tracker-wish-list-update", arguments: [c] }) }, "cloud-team-commerce-tracker-add-to-cart-from-consumables-block": function(a, c) { b.push({ event: "cloud-team-commerce-tracker-add-to-cart-from-consumables-block", arguments: [c] }) }, "cloud-team-commerce-tracker-rent-popup": function(a, c) { b.push({ event: "cloud-team-commerce-tracker-rent-popup", arguments: [c] }) } },
        d = { init: function() { return null === b ? (b = [], d.on.apply(this)) : this }, on: function() { var b = a("body"); for (var d in c) c.hasOwnProperty(d) && b.on(d, c[d]); return this }, off: function() { var b = a("body"); for (var d in c) c.hasOwnProperty(d) && b.off(d, c[d]); return this }, runQueue: function() { if (a.isArray(b)) { var c = a("body");
                    d.off.apply(this), a.each(b, function(a, b) { c.trigger(b.event, b.arguments) }), b.splice(0), b = null } return this } };
    a.fn.commerceTrackerQueue = function(b) { return d[b] ? d[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Unknown method " + b) : d.init.apply(this, arguments) } }(jQuery), $("body").commerceTrackerQueue();