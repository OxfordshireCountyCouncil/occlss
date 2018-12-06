if ($('div.js-chatbot').length) {
  $(".js-chatbot .chat__header").click(function() {
    $(".js-chatbot").toggleClass("chat--opened");
  });
}