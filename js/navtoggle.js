$(document).ready(function () {
  var $x = ($(this).find("h2").html());
  $('.exnav>li:has(ul)').click(function (event) {
    $newul = $(this).find("ul:first");
    if ($newul.css("display") == "none") {
      $newul = $(this).find("ul:first");
      if ($(this).find("h2").html()) {
        $newul.parent().removeClass("drop1");
        $newul.parent().addClass("opendrop1");
        $newul.show("fast");
        $newul.parent().removeClass("togopen1");
      } else {
        $newul.parent().removeClass("drop");
        $newul.parent().addClass("opendrop");
        $newul.show("fast");
        $newul.parent().removeClass("togopen");
      }
    } else {
      $newul = $(this).find("ul:first");
      if ($(this).find("h2").html()) {
        $newul.parent().removeClass("opendrop1");
        $newul.parent().addClass("drop1");
        $newul.hide("fast");
        $newul.parent().removeClass("togopen1");
      } else {
        $newul.parent().removeClass("opendrop");
        $newul.parent().addClass("drop");
        $newul.hide("fast");
        $newul.parent().removeClass("togopen");
      }
    }
  });
  ($('li').has('ul')).each(function () {
    if ($(this).find("h2").html()) {
      $(this).addClass("drop1");
      $(".exnav>li:has(ul)>a").css("display", "inline");
      $(this).show("fast");
    } else {
      $(this).addClass("drop");
      $(".exnav>li:has(ul)>a").css("display", "inline");
      $(this).show("fast");
    }
  });
});
