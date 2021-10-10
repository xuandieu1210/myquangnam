jQuery(document).ready(function($) {
    "use strict";
    new WOW().init();
    $(window).on("load", function() {
        $('#status').delay(0).fadeOut();
        $('#preloader').delay(0).fadeOut('slow');
    });
    $('.tags li').hover(function() {
        $(this).find('a').toggleClass("wow flipInY animated");
    });
    $('.f-social li').hover(function() {
        $(this).find('a').toggleClass("wow swing animated");
    });
    $('.social a').hover(function() {
        $(this).find('p').toggleClass("wow fadeInDown animated");
    });
    $('a.read-more').hover(function() {
        $(this).find('span').toggleClass("wow flipInY animated");
    });
    $.scrollUp();
    //$('.open-popup-link').magnificPopup({
    //    removalDelay: 500,
    //    callbacks: {
    //        beforeOpen: function() {
    //            this.st.mainClass = this.st.el.attr('data-effect');
    //        }
    //    },
    //    midClick: true
    //});
    //$('#image-popups').magnificPopup({
    //    delegate: 'a',
    //    type: 'image',
    //    removalDelay: 500,
    //    callbacks: {
    //        beforeOpen: function() {
    //            this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
    //            this.st.mainClass = this.st.el.attr('data-effect');
    //        }
    //    },
    //    closeOnContentClick: true,
    //    midClick: true
    //});
    //$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    //    disableOn: 700,
    //    type: 'iframe',
    //    mainClass: 'mfp-fade',
    //    removalDelay: 160,
    //    preloader: true,
    //    fixedContentPos: false
    //});
    //$('.popup-img').magnificPopup({
    //    type: 'image'
    //});
    //$('.gallery-item').magnificPopup({
    //    type: 'image',
    //    gallery: {
    //        enabled: true
    //    }
    //});
    //$('.masonry-item a.more').hover(function() {
    //    $(this).animate({
    //        paddingLeft: '30px'
    //    }, 400);
    //}, function() {
    //    $(this).animate({
    //        paddingLeft: 15
    //    }, 400);
    //});
    var datetime = null,
        date = null;
    var update = function() {
        date = moment(new Date())
        datetime.html(date.format('DD-MM-YYYY, hh:mm:ss'));
    };
    datetime = $('#time-date')
    update();
    setInterval(update, 1000);
    //$(".search-container").hide();
    //$(".toggle-search").on("click", function(e) {
    //    e.preventDefault();
    //    e.stopPropagation();
    //    $(".search-container").slideToggle(500, function() {
    //        $("#search-bar").focus();
    //    });
    //});

    //$(document).click(function(e) {
    //    var searchWrap = $(".search-container");
    //    if (!searchWrap.is(e.target) && searchWrap.has(e.target).length === 0) {
    //        searchWrap.slideUp(500);
    //    }
    //});
    
    //$("#banner-thumbs").owlCarousel({
    //    autoPlay: true,
    //    navigation: false,
    //    stopOnHover: true,
    //    pagination: false,
    //    items: 4,
    //    itemsDesktop: [1199, 4],
    //    itemsDesktopSmall: [979, 3],
    //    itemsTablet: [768, 3],
    //    itemsMobile: [479, 1],
    //});
    //$("#banner-thumbs-bmk").owlCarousel({
    //    autoPlay: true,
    //    navigation: false,
    //    stopOnHover: true,
    //    pagination: false,
    //    items: 4,
    //    itemsDesktop: [1199, 1],
    //    itemsDesktopSmall: [979, 1],
    //    itemsTablet: [768, 1],
    //    itemsMobile: [479, 1],
    //});
    //$("#banner-thumbs-res").owlCarousel({
    //    autoPlay: true,
    //    navigation: false,
    //    stopOnHover: true,
    //    pagination: false,
    //    items: 4,
    //    itemsDesktop: [1199, 3],
    //    itemsDesktopSmall: [979, 2],
    //    itemsTablet: [768, 2],
    //    itemsMobile: [479, 1],
    //});
    //$("#banner-thumbs-hotel").owlCarousel({
    //    autoPlay: true,
    //    navigation: false,
    //    stopOnHover: true,
    //    pagination: false,
    //    items: 4,
    //    itemsDesktop: [1199, 2],
    //    itemsDesktopSmall: [979, 2],
    //    itemsTablet: [768, 2],
    //    itemsMobile: [479, 1],
    //});
    //$("#banner-thumbs-plan").owlCarousel({
    //    autoPlay: false,
    //    navigation: true,
    //    stopOnHover: true,
    //    pagination: false,
    //    items: 2,
    //    itemsDesktop: [1199, 2],
    //    itemsDesktopSmall: [979, 2],
    //    itemsTablet: [768, 2],
    //    itemsMobile: [479, 1],
    //});
    //$("#banner-thumbs-plan-1col").owlCarousel({
    //    autoPlay: 5000,
    //    navigation: true,
    //    stopOnHover: true,
    //    pagination: false,
    //    items: 1,
    //    itemsDesktop: [1199, 1],
    //    itemsDesktopSmall: [979, 1],
    //    itemsTablet: [768, 1],
    //    itemsMobile: [479, 1],
    //});
    //$("#vid-thumbs").owlCarousel({
    //    navigation: false,
    //    pagination: true,
    //    slideSpeed: 300,
    //    paginationSpeed: 400,
    //    singleItem: true,
    //});
    //$("#owl-lifestyle").owlCarousel({
    //    autoPlay: false,
    //    navigation: true,
    //    pagination: false,
    //    items: 3,
    //    itemsDesktop: [1199, 3],
    //    itemsDesktopSmall: [979, 2],
    //    itemsTablet: [768, 2],
    //    itemsMobile: [479, 1],
    //});
    //$("#owl-video-new").owlCarousel({
    //    autoPlay: false,
    //    navigation: true,
    //    pagination: false,
    //    items: 1,
    //    itemsDesktop: [1199, 1],
    //    itemsDesktopSmall: [979, 1],
    //    itemsTablet: [768, 1],
    //    itemsMobile: [479, 1],
    //});
    //$("#owl-video-view").owlCarousel({
    //    autoPlay: false,
    //    navigation: true,
    //    pagination: false,
    //    items: 1,
    //    itemsDesktop: [1199, 3],
    //    itemsDesktopSmall: [979, 2],
    //    itemsTablet: [768, 2],
    //    itemsMobile: [479, 1],
    //});
    //$("#owl-blog").owlCarousel({
    //    navigation: true,
    //    pagination: false,
    //    slideSpeed: 300,
    //    paginationSpeed: 400,
    //    singleItem: true,
    //});
    //var time = 4;
    //var $progressBar, $bar, $elem, isPause, tick, percentTime;
    //var sync1 = $("#sync1");
    //var sync2 = $("#sync2");
    //sync1.owlCarousel({
    //    singleItem: true,
    //    slideSpeed: 1000,
    //    navigation: true,
    //    pagination: false,
    //    transitionStyle: "fadeUp",
    //    afterAction: syncPosition,
    //    responsiveRefreshRate: 200,
    //    afterInit: progressBar,
    //    afterMove: moved,
    //    startDragging: pauseOnDragging
    //});
    //sync2.owlCarousel({
    //    items: 4,
    //    itemsDesktop: [1199, 4],
    //    itemsDesktopSmall: [979, 3],
    //    itemsTablet: [768, 3],
    //    itemsMobile: [479, 3],
    //    pagination: false,
    //    responsiveRefreshRate: 100,
    //    afterInit: function(el) {
    //        el.find(".owl-item").eq(0).addClass("synced");
    //    }
    //});

    //function syncPosition(el) {
    //    var current = this.currentItem;
    //    $("#sync2").find(".owl-item").removeClass("synced").eq(current).addClass("synced")
    //    if ($("#sync2").data("owlCarousel") !== undefined) {
    //        center(current)
    //    }
    //}
    //$("#sync2").on("click", ".owl-item", function(e) {
    //    e.preventDefault();
    //    var number = $(this).data("owlItem");
    //    sync1.trigger("owl.goTo", number);
    //});

    //function center(number) {
    //    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
    //    var num = number;
    //    var found = false;
    //    for (var i in sync2visible) {
    //        if (num === sync2visible[i]) {
    //            var found = true;
    //        }
    //    }
    //    if (found === false) {
    //        if (num > sync2visible[sync2visible.length - 1]) {
    //            sync2.trigger("owl.goTo", num - sync2visible.length + 2)
    //        } else {
    //            if (num - 1 === -1) {
    //                num = 0;
    //            }
    //            sync2.trigger("owl.goTo", num);
    //        }
    //    } else if (num === sync2visible[sync2visible.length - 1]) {
    //        sync2.trigger("owl.goTo", sync2visible[1])
    //    } else if (num === sync2visible[0]) {
    //        sync2.trigger("owl.goTo", num - 1)
    //    }
    //}

    //function progressBar(elem) {
    //    $elem = elem;
    //    buildProgressBar();
    //    start();
    //}

    //function buildProgressBar() {
    //    $progressBar = $("<div>", {
    //        id: "progressBar"
    //    });
    //    $bar = $("<div>", {
    //        id: "bar"
    //    });
    //    $progressBar.append($bar).prependTo($elem);
    //}

    //function start() {
    //    percentTime = 0;
    //    isPause = false;
    //    tick = setInterval(interval, 10);
    //};

    //function interval() {
    //    if (isPause === false) {
    //        percentTime += 1 / time;
    //        $bar.css({
    //            width: percentTime + "%"
    //        });
    //        if (percentTime >= 100) {
    //            $elem.trigger('owl.next')
    //        }
    //    }
    //}

    //function pauseOnDragging() {
    //    isPause = true;
    //}

    //function moved() {
    //    clearTimeout(tick);
    //    start();
    //}
    //jQuery($elem).on('mouseover', function() {
    //    isPause = true;
    //});
    //jQuery($elem).on('mouseout', function() {
    //    isPause = false;
    //});
});

var loading = {
    showLoading: function () {
        $('.load-more-page').show();
        $("body").css({ "pointer-events": "none" });
    },
    showLoadingMobile: function () {
        $('.load-more-page-mobile').show();
        $("body").css({ "pointer-events": "none" });
    },
    hideLoadingMobile: function () {
        $('.load-more-page-mobile').hide();
        $("body").css({ "pointer-events": "auto" });
    },
    hideLoading: function () {
        $('.load-more-page').hide();
        $("body").css({ "pointer-events": "auto" });
    }
}

var loadingBox = {
    showLoading: function () {
        $('#loading-box').show();
        $("body").css({ "pointer-events": "none" });
    },
    hideLoading: function () {
        $('#loading-box').hide();
        $("body").css({ "pointer-events": "auto" });
    }
}

var config = {
    UrlImage:   function (url) {
        var regExp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
        var value = "";
        if (!regExp.test(url)) {
            //value = "https://media.dalatcity.org/" + url;
            value = "https://scontent.smarttourism.vn/resources/portal" + url;
        } else {
            value = url;
        }
        return value;
        //return url;
    }
}

function isMobile() {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)) || navigator.userAgent.match(/iPad/i) != null) {
        return true;
    } else {
        return false;
    }
}

//function remove unicode character vietnamese
function convertToUnsignChar(source) {
    source = source.toLowerCase();
    source = source.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    source = source.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    source = source.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    source = source.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    source = source.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    source = source.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    source = source.replace(/đ/g, "d");
    source = source.replace(/!|@@|\$|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\'|\"|\&|\#|\[|\]|~/g, "-");
    source = source.replace(/-+-/g, "-"); //thay thế nhiều dấu - thành 1 dấu -
    source = source.replace(/^\-+|\-+$/g, ""); //cắt bỏ ký tự - ở đầu và cuối chuỗi
    return source;
}

function translateDetectLange(text) {
    var url = 'https://translate.yandex.net/api/v1.5/tr.json/detect?key=trnsl.1.1.20180801T035451Z.d7ed5d2acf60cb17.4ea1f03fbad49f12eb8dcf6219d2f5edbda59a0d&text=' + text + '';
    var data;
    $.ajax({
        type: "GET",
        async: false,
        url: url,
        success: function (res) {
            if (res.code == 200) {
                data = res.lang;
            } else {
                data = 0
            }
        }
    });
    
    return data;
}

function translateName(text, lang, currentLang) {

    var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180801T035451Z.d7ed5d2acf60cb17.4ea1f03fbad49f12eb8dcf6219d2f5edbda59a0d&text=" + text + "&lang=" + lang + "-" + currentLang + "";

    var data = "";
    $.ajax({
        type: "GET",
        async: false,
        url: url,
        success: function (res) {
            data = res.text["0"].trim().toLowerCase();
        }
    });

    return data;
}

function isAlphanumeric(str) {
    return /^[0-9a-zA-Z]+$/.test(str);
}