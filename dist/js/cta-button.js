/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./assets/js/cta-button.js ***!
  \*********************************/
(function () {
  tinymce.create("tinymce.plugins.cta_button", {
    init: function init(ed, url) {
      ed.addButton("cta_button", {
        text: "Insert CTA Button",
        onclick: function onclick() {
          ed.insertContent('<a href="#" class="cta-button green square"><span class="cta-text">Insert Text</span></a>');
        }
      });
    }
  });
  tinymce.PluginManager.add("cta_button", tinymce.plugins.cta_button);
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2N0YS1idXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLENBQUMsWUFBWTtFQUNYQSxPQUFPLENBQUNDLE1BQU0sQ0FBQyw0QkFBNEIsRUFBRTtJQUMzQ0MsSUFBSSxFQUFFLFNBQU5BLElBQUlBLENBQVlDLEVBQUUsRUFBRUMsR0FBRyxFQUFFO01BQ3ZCRCxFQUFFLENBQUNFLFNBQVMsQ0FBQyxZQUFZLEVBQUU7UUFDekJDLElBQUksRUFBRSxtQkFBbUI7UUFDekJDLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFBLEVBQWM7VUFDbkJKLEVBQUUsQ0FBQ0ssYUFBYSxDQUNkLDJGQUNGLENBQUM7UUFDSDtNQUNGLENBQUMsQ0FBQztJQUNKO0VBQ0YsQ0FBQyxDQUFDO0VBQ0ZSLE9BQU8sQ0FBQ1MsYUFBYSxDQUFDQyxHQUFHLENBQUMsWUFBWSxFQUFFVixPQUFPLENBQUNXLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDO0FBQ3JFLENBQUMsRUFBRSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3RhLWJ1dHRvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCkge1xuICB0aW55bWNlLmNyZWF0ZShcInRpbnltY2UucGx1Z2lucy5jdGFfYnV0dG9uXCIsIHtcbiAgICBpbml0OiBmdW5jdGlvbiAoZWQsIHVybCkge1xuICAgICAgZWQuYWRkQnV0dG9uKFwiY3RhX2J1dHRvblwiLCB7XG4gICAgICAgIHRleHQ6IFwiSW5zZXJ0IENUQSBCdXR0b25cIixcbiAgICAgICAgb25jbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGVkLmluc2VydENvbnRlbnQoXG4gICAgICAgICAgICAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImN0YS1idXR0b24gZ3JlZW4gc3F1YXJlXCI+PHNwYW4gY2xhc3M9XCJjdGEtdGV4dFwiPkluc2VydCBUZXh0PC9zcGFuPjwvYT4nLFxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICB9KTtcbiAgdGlueW1jZS5QbHVnaW5NYW5hZ2VyLmFkZChcImN0YV9idXR0b25cIiwgdGlueW1jZS5wbHVnaW5zLmN0YV9idXR0b24pO1xufSkoKTtcbiJdLCJuYW1lcyI6WyJ0aW55bWNlIiwiY3JlYXRlIiwiaW5pdCIsImVkIiwidXJsIiwiYWRkQnV0dG9uIiwidGV4dCIsIm9uY2xpY2siLCJpbnNlcnRDb250ZW50IiwiUGx1Z2luTWFuYWdlciIsImFkZCIsInBsdWdpbnMiLCJjdGFfYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==