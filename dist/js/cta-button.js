/******/ (() => { // webpackBootstrap
/*!*********************************!*\
  !*** ./assets/js/cta-button.js ***!
  \*********************************/
(function () {
  if (typeof tinymce === "undefined") return;
  tinymce.create("tinymce.plugins.cta_button", {
    init: function init(ed) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2N0YS1idXR0b24uanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLENBQUMsWUFBWTtFQUNYLElBQUksT0FBT0EsT0FBTyxLQUFLLFdBQVcsRUFBRTtFQUVwQ0EsT0FBTyxDQUFDQyxNQUFNLENBQUMsNEJBQTRCLEVBQUU7SUFDM0NDLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFZQyxFQUFFLEVBQUU7TUFDbEJBLEVBQUUsQ0FBQ0MsU0FBUyxDQUFDLFlBQVksRUFBRTtRQUN6QkMsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QkMsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUEsRUFBYztVQUNuQkgsRUFBRSxDQUFDSSxhQUFhLENBQ2QsMkZBQ0YsQ0FBQztRQUNIO01BQ0YsQ0FBQyxDQUFDO0lBQ0o7RUFDRixDQUFDLENBQUM7RUFFRlAsT0FBTyxDQUFDUSxhQUFhLENBQUNDLEdBQUcsQ0FBQyxZQUFZLEVBQUVULE9BQU8sQ0FBQ1UsT0FBTyxDQUFDQyxVQUFVLENBQUM7QUFDckUsQ0FBQyxFQUFFLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jdGEtYnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgdGlueW1jZSA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xuXG4gIHRpbnltY2UuY3JlYXRlKFwidGlueW1jZS5wbHVnaW5zLmN0YV9idXR0b25cIiwge1xuICAgIGluaXQ6IGZ1bmN0aW9uIChlZCkge1xuICAgICAgZWQuYWRkQnV0dG9uKFwiY3RhX2J1dHRvblwiLCB7XG4gICAgICAgIHRleHQ6IFwiSW5zZXJ0IENUQSBCdXR0b25cIixcbiAgICAgICAgb25jbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGVkLmluc2VydENvbnRlbnQoXG4gICAgICAgICAgICAnPGEgaHJlZj1cIiNcIiBjbGFzcz1cImN0YS1idXR0b24gZ3JlZW4gc3F1YXJlXCI+PHNwYW4gY2xhc3M9XCJjdGEtdGV4dFwiPkluc2VydCBUZXh0PC9zcGFuPjwvYT4nLFxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9LFxuICB9KTtcblxuICB0aW55bWNlLlBsdWdpbk1hbmFnZXIuYWRkKFwiY3RhX2J1dHRvblwiLCB0aW55bWNlLnBsdWdpbnMuY3RhX2J1dHRvbik7XG59KSgpO1xuIl0sIm5hbWVzIjpbInRpbnltY2UiLCJjcmVhdGUiLCJpbml0IiwiZWQiLCJhZGRCdXR0b24iLCJ0ZXh0Iiwib25jbGljayIsImluc2VydENvbnRlbnQiLCJQbHVnaW5NYW5hZ2VyIiwiYWRkIiwicGx1Z2lucyIsImN0YV9idXR0b24iXSwic291cmNlUm9vdCI6IiJ9