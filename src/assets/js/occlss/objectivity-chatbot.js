if ($('div.js-chatbot').length) {
  $(".js-chatbot .obj-chat__header").click(function() {
    $(".js-chatbot").toggleClass("obj-chat--opened");
  });
}