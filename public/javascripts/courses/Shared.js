function JumpToBookmark(videoTime) {
    jwplayer().seek(videoTime);
}

//jwplayer().onError(function () {
//    //Play buck bunny for vidoes that have not yet been loaded
//    jwplayer("myElement").setup({
//        aspectratio: "16:9",
//        width: "100%",
//        file: "http://clips.vorwaerts-gmbh.de/VfE_html5.mp4",
//        abouttext: "Stanford Center for Professional Development",
//        aboutlink: "#",
//        autostart: true
//        });

//    jwplayer().play();
//});

$('.video-player-tab').click(function () {
    $(this).siblings().removeClass('active');
    $(this).addClass('active');

    $('.bookmarkList').hide();
    $('.lectureList').hide();
    $('.lectureInfo').hide();

    if ($(this).hasClass('bookmarks')) {
        $('.bookmarkList').show();
    } else if ($(this).hasClass('playlist')) {
        $('.lectureList').show();
        SetLectureScrollPosition();
    } else if ($(this).hasClass('info')) {
        $('.lectureInfo').show();
    }
});

function LoadVideo(lectureId, courseId) {
    $.ajax({
        url: "/Course/LoadVideo",
        type: 'get',
        data: {
            lectureId: lectureId,
            courseId: courseId
        },
        success: function (result) {
            if (result.length > 0) {
                $('#videoArea').html(result);

                $('.bookmarkList').hide();
                $('.lectureList').hide();
                $('.lectureInfo').hide();

                $('.lectureList').show();

                $('.video-player-tab').removeClass('active');
                $('.playlist').addClass('active');

                SetLectureScrollPosition();

                $.getScript("../../Scripts/Shared.js");
            }
        }
    });
}

function SetLectureScrollPosition() {

    var contextScrollElem = document.getElementById("video-player-scrollable-context");
    var scrollbarHeight = contextScrollElem.scrollHeight;
    var scrollclientHeight = contextScrollElem.clientHeight;
    var totalItems = $("#TotalLectures").val();
    var selectedItemIndex = $("#SelectedLectureNumber").val();

    contextScrollElem.scrollTop = (scrollbarHeight - scrollclientHeight) * (selectedItemIndex - 6) / (totalItems - 2 * 6);
}