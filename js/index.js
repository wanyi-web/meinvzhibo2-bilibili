window.playableSDK.addEventListener('visibilityChange', init);

function init(state) {
    if (state.viewable) {
        //页面可见
        $(function() {
            // $(".di").show();
            $("#videoid, .di").one("click", function() {
                $(".click").hide();
                // $(".di").hide();
                $(".hand").hide();

                window.setTimeout(function() {
                    $(".di").hide();

                }, 200);
                // $("#videoid").css("opacity", 0.95);
                // window.setTimeout(function() {
                // 	$("#videoid").css("opacity", 1);
                // }, 10);
                // $("#videoid").fadeIn();
                // document.getElementById("videoid").controls = false;
                // document.getElementById("videoid").currentTime = 0;
                document.getElementById("videoid").play();
                $(".down").addClass("beat");


                // $("#videoid").prop("poster").fadeOut();
                // $("#videoid").fadeIn();
            });

            $(".logo").one("click", function() {

                // console.log("adasdas")

                $(".click").hide();
                // $(".di").hide();
                $(".hand").hide();
                // $("#videoid").css("opacity", 0.95);
                // window.setTimeout(function() {
                // 	$("#videoid").css("opacity", 1);
                // }, 10);
                // $("#videoid").fadeIn();
                // document.getElementById("videoid").controls = false;
                // document.getElementById("videoid").currentTime = 0;
                document.getElementById("videoid").play();
                $(".down").addClass("beat");
                window.setTimeout(function() {
                    $(".di").hide();

                }, 200);
                // $("#videoid").prop("poster").fadeOut();
                // $("#videoid").fadeIn();
            });

            $(".click").one("click", function() {
                $(".click").hide();
                // $(".di").hide();
                $(".hand").hide();
                // $("#videoid").css("opacity", 0.95);
                // window.setTimeout(function() {
                // 	$("#videoid").css("opacity", 1);
                // }, 10);
                // $("#videoid").fadeIn();
                // document.getElementById("videoid").controls = false;
                // document.getElementById("videoid").currentTime = 0;
                document.getElementById("videoid").play();
                $(".down").addClass("beat");
                window.setTimeout(function() {
                    $(".di").hide();

                }, 200);
                // $("#videoid").prop("poster").fadeOut();
                // $("#videoid").fadeIn();
            });

            $(".hand").one("click", function() {
                $(".click").hide();
                $(".di").hide();
                $(".hand").hide();
                // $("#videoid").css("opacity", 0.95);
                // window.setTimeout(function() {
                // 	$("#videoid").css("opacity", 1);
                // }, 10);
                // $("#videoid").fadeIn();
                // document.getElementById("videoid").controls = false;
                // document.getElementById("videoid").currentTime = 0;
                document.getElementById("videoid").play();
                $(".down").addClass("beat");
                window.setTimeout(function() {
                    $(".di").hide();

                }, 400);
                // $("#videoid").prop("poster").fadeOut();
                // $("#videoid").fadeIn();
            });

            $(".down2").on("click", function() {
                $(".click").hide();
                $(".hand").hide();


                document.getElementById("video").play();
                document.getElementById("videoid").pause();

                window.setTimeout(function() {
                    // $(".page").hide();

                    $(".di").hide();
                    $("#videoid").hide();
                }, 400);
                // $(".page1").show();

                // $(".di").hide();
                // $("video").attr("src", "./video/movie.mp4");

                $(".down2").remove();
                $(".down1").addClass("beat");

            })


        });
    } else {

    }

    window.playableSDK.removeEventListener('visibilityChange', init);
}