/******/ (() => { // webpackBootstrap
/*!*************************************!*\
  !*** ./assets/js/divider-button.js ***!
  \*************************************/
(function () {
  if (typeof tinymce === "undefined") {
    return;
  }
  tinymce.create("tinymce.plugins.dividerButton", {
    init: function init(editor) {
      editor.addButton("divider_button", {
        text: "Dividing Line",
        icon: false,
        onclick: function onclick() {
          editor.insertContent("<hr>");
        }
      });
    },
    createControl: function createControl() {
      return null;
    }
  });
  tinymce.PluginManager.add("divider_button", tinymce.plugins.dividerButton);
})();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2RpdmlkZXItYnV0dG9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxDQUFDLFlBQVk7RUFDWCxJQUFJLE9BQU9BLE9BQU8sS0FBSyxXQUFXLEVBQUU7SUFDbEM7RUFDRjtFQUVBQSxPQUFPLENBQUNDLE1BQU0sQ0FBQywrQkFBK0IsRUFBRTtJQUM5Q0MsSUFBSSxFQUFFLFNBQU5BLElBQUlBLENBQVlDLE1BQU0sRUFBRTtNQUN0QkEsTUFBTSxDQUFDQyxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7UUFDakNDLElBQUksRUFBRSxlQUFlO1FBQ3JCQyxJQUFJLEVBQUUsS0FBSztRQUNYQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQSxFQUFjO1VBQ25CSixNQUFNLENBQUNLLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDOUI7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0RDLGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFBLEVBQWM7TUFDekIsT0FBTyxJQUFJO0lBQ2I7RUFDRixDQUFDLENBQUM7RUFFRlQsT0FBTyxDQUFDVSxhQUFhLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRVgsT0FBTyxDQUFDWSxPQUFPLENBQUNDLGFBQWEsQ0FBQztBQUM1RSxDQUFDLEVBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RpdmlkZXItYnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gIGlmICh0eXBlb2YgdGlueW1jZSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRpbnltY2UuY3JlYXRlKFwidGlueW1jZS5wbHVnaW5zLmRpdmlkZXJCdXR0b25cIiwge1xuICAgIGluaXQ6IGZ1bmN0aW9uIChlZGl0b3IpIHtcbiAgICAgIGVkaXRvci5hZGRCdXR0b24oXCJkaXZpZGVyX2J1dHRvblwiLCB7XG4gICAgICAgIHRleHQ6IFwiRGl2aWRpbmcgTGluZVwiLFxuICAgICAgICBpY29uOiBmYWxzZSxcbiAgICAgICAgb25jbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGVkaXRvci5pbnNlcnRDb250ZW50KFwiPGhyPlwiKTtcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgY3JlYXRlQ29udHJvbDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSxcbiAgfSk7XG5cbiAgdGlueW1jZS5QbHVnaW5NYW5hZ2VyLmFkZChcImRpdmlkZXJfYnV0dG9uXCIsIHRpbnltY2UucGx1Z2lucy5kaXZpZGVyQnV0dG9uKTtcbn0pKCk7XG4iXSwibmFtZXMiOlsidGlueW1jZSIsImNyZWF0ZSIsImluaXQiLCJlZGl0b3IiLCJhZGRCdXR0b24iLCJ0ZXh0IiwiaWNvbiIsIm9uY2xpY2siLCJpbnNlcnRDb250ZW50IiwiY3JlYXRlQ29udHJvbCIsIlBsdWdpbk1hbmFnZXIiLCJhZGQiLCJwbHVnaW5zIiwiZGl2aWRlckJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=