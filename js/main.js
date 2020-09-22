$(document).ready(function () {
    $('#popover').popover({
        animation: true,
        placement: 'bottom',
        html: true,
        sanitize: false,
        content: $('#myForm').html(),

    });
    $('#popoverU').popover({
        animation: true,
        placement: 'bottom',
        html: true,
        sanitize: false,
        content: $('#myFormU').html(),

    });
    $("#img-2").hover(function () {
        var comma_str = '"';
        var attr_str = $(this).attr("src");
        $(".mainImage img").attr("src", attr_str);
    });
    $("#img-3").hover(function () {
        var comma_str = '"';
        var attr_str = $(this).attr("src");
        $(".mainImage img").attr("src", attr_str);
    });
    $("#img-4").hover(function () {
        var comma_str = '"';
        var attr_str = $(this).attr("src");
        $(".mainImage img").attr("src", attr_str);
    });
    $("#img-5").hover(function () {
        var comma_str = '"';
        var attr_str = $(this).attr("src");
        $(".mainImage img").attr("src", attr_str);
    });
    $("#img-6").hover(function () {
        var comma_str = '"';
        var attr_str = $(this).attr("src");
        $(".mainImage img").attr("src", attr_str);
    });
    $("#img-7").hover(function () {
        var comma_str = '"';
        var attr_str = $(this).attr("src");
        $(".mainImage img").attr("src", attr_str);
    });

    $(".arrowUp span").click(function () {
        $("html,body").scrollTop(0);
    });

    /* $(".arrowUp span").on("click", function () {
        $("html,body").animate({
            scrollTop: 0
        }, 3000);
    }); */

    $("#id-demolotion-plus").click(function () {
        $(this).toggle();
        $(".iconMinus-demolotion").toggle("displayiconMinus");
        $(".activity-right .demolotion .demolition-detail").toggle("slow");
    });
    $("#id-demolotion-minus").click(function () {
        $(this).toggle();
        $(".iconPlus-demolotion").toggle("displayiconPlus");
        $(".activity-right .demolotion .demolition-detail").toggle("slow");
    });

    $("#id-maconnerie-plus").click(function () {
        $(this).toggle();
        $(".iconMinus-maconnerie").toggle("displayiconMinus");
        $(".activity-right .demolotion .maconnerie-detail").toggle("slow");
    });
    $("#id-maconnerie-minus").click(function () {
        $(this).toggle();
        $(".iconPlus-maconnerie").toggle("displayiconPlus");
        $(".activity-right .demolotion .maconnerie-detail").toggle("slow");
    });

    $("#id-electricity-plus").click(function () {
        $(this).toggle();
        $(".iconMinus-electricity").toggle("displayiconMinus");
        $(".activity-right .demolotion .electricity-detail").toggle("slow");
    });
    $("#id-electricity-minus").click(function () {
        $(this).toggle();
        $(".iconPlus-electricity").toggle("displayiconPlus");
        $(".activity-right .demolotion .electricity-detail").toggle("slow");
    });

    $("#id-plomberie-plus").click(function () {
        $(this).toggle();
        $(".iconMinus-plomberie").toggle("displayiconMinus");
        $(".activity-right .demolotion .plomberie-detail").toggle("slow");
    });
    $("#id-plomberie-minus").click(function () {
        $(this).toggle();
        $(".iconPlus-plomberie").toggle("displayiconPlus");
        $(".activity-right .demolotion .plomberie-detail").toggle("slow");
    });

    $("#id-isolation-plus").click(function () {
        $(this).toggle();
        $(".iconMinus-isolation").toggle("displayiconMinus");
        $(".activity-right .demolotion .isolation-detail").toggle("slow");
    });
    $("#id-isolation-minus").click(function () {
        $(this).toggle();
        $(".iconPlus-isolation").toggle("displayiconPlus");
        $(".activity-right .demolotion .isolation-detail").toggle("slow");
    });

    $("#id-carrlage-plus").click(function () {
        $(this).toggle();
        $(".iconMinus-carrlage").toggle("displayiconMinus");
        $(".activity-right .demolotion .carrlage-detail").toggle("slow");
    });
    $("#id-carrlage-minus").click(function () {
        $(this).toggle();
        $(".iconPlus-carrlage").toggle("displayiconPlus");
        $(".activity-right .demolotion .carrlage-detail").toggle("slow");
    });

    $("#id-menuiserie-plus").click(function () {
        $(this).toggle();
        $(".iconMinus-menuiserie").toggle("displayiconMinus");
        $(".activity-right .demolotion .menuiserie-detail").toggle("slow");
    });
    $("#id-menuiserie-minus").click(function () {
        $(this).toggle();
        $(".iconPlus-menuiserie").toggle("displayiconPlus");
        $(".activity-right .demolotion .menuiserie-detail").toggle("slow");
    });

    $("#id-revetement-plus").click(function () {
        $(this).toggle();
        $(".iconMinus-revetement").toggle("displayiconMinus");
        $(".activity-right .demolotion .revetement-detail").toggle("slow");
    });
    $("#id-revetement-minus").click(function () {
        $(this).toggle();
        $(".iconPlus-revetement").toggle("displayiconPlus");
        $(".activity-right .demolotion .revetement-detail").toggle("slow");
    });

    $("#id-parquet-plus").click(function () {
        $(this).toggle();
        $(".iconMinus-parquet").toggle("displayiconMinus");
        $(".activity-right .demolotion .parquet-detail").toggle("slow");
    });
    $("#id-parquet-minus").click(function () {
        $(this).toggle();
        $(".iconPlus-parquet").toggle("displayiconPlus");
        $(".activity-right .demolotion .parquet-detail").toggle("slow");
    });


    $("#id-peinture-plus").click(function () {
        $(this).toggle();
        $(".iconMinus-peinture").toggle("displayiconMinus");
        $(".activity-right .demolotion .peinture-detail").toggle("slow");
    });
    $("#id-peinture-minus").click(function () {
        $(this).toggle();
        $(".iconPlus-peinture").toggle("displayiconPlus");
        $(".activity-right .demolotion .peinture-detail").toggle("slow");
    });

    $("#id-ravalement-plus").click(function () {
        $(this).toggle();
        $(".iconMinus-ravalement").toggle("displayiconMinus");
        $(".activity-right .demolotion .ravalement-detail").toggle("slow");
    });
    $("#id-ravalement-minus").click(function () {
        $(this).toggle();
        $(".iconPlus-ravalement").toggle("displayiconPlus");
        $(".activity-right .demolotion .ravalement-detail").toggle("slow");
    });

    AOS.init();
});