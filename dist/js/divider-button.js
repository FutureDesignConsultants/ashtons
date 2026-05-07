/******/ (() => { // webpackBootstrap
/*!*************************************!*\
  !*** ./assets/js/divider-button.js ***!
  \*************************************/
(function () {
  tinymce.create("tinymce.plugins.dividerButton", {
    init: function init(editor, url) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2pzL2RpdmlkZXItYnV0dG9uLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxDQUFDLFlBQVk7RUFDWEEsT0FBTyxDQUFDQyxNQUFNLENBQUMsK0JBQStCLEVBQUU7SUFDOUNDLElBQUksRUFBRSxTQUFOQSxJQUFJQSxDQUFZQyxNQUFNLEVBQUVDLEdBQUcsRUFBRTtNQUMzQkQsTUFBTSxDQUFDRSxTQUFTLENBQUMsZ0JBQWdCLEVBQUU7UUFDakNDLElBQUksRUFBRSxlQUFlO1FBQ3JCQyxJQUFJLEVBQUUsS0FBSztRQUNYQyxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBQSxFQUFjO1VBQ25CTCxNQUFNLENBQUNNLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDOUI7TUFDRixDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0RDLGFBQWEsRUFBRSxTQUFmQSxhQUFhQSxDQUFBLEVBQWM7TUFDekIsT0FBTyxJQUFJO0lBQ2I7RUFDRixDQUFDLENBQUM7RUFDRlYsT0FBTyxDQUFDVyxhQUFhLENBQUNDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRVosT0FBTyxDQUFDYSxPQUFPLENBQUNDLGFBQWEsQ0FBQztBQUM1RSxDQUFDLEVBQUUsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RpdmlkZXItYnV0dG9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiAoKSB7XG4gIHRpbnltY2UuY3JlYXRlKFwidGlueW1jZS5wbHVnaW5zLmRpdmlkZXJCdXR0b25cIiwge1xuICAgIGluaXQ6IGZ1bmN0aW9uIChlZGl0b3IsIHVybCkge1xuICAgICAgZWRpdG9yLmFkZEJ1dHRvbihcImRpdmlkZXJfYnV0dG9uXCIsIHtcbiAgICAgICAgdGV4dDogXCJEaXZpZGluZyBMaW5lXCIsXG4gICAgICAgIGljb246IGZhbHNlLFxuICAgICAgICBvbmNsaWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZWRpdG9yLmluc2VydENvbnRlbnQoXCI8aHI+XCIpO1xuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfSxcbiAgICBjcmVhdGVDb250cm9sOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9LFxuICB9KTtcbiAgdGlueW1jZS5QbHVnaW5NYW5hZ2VyLmFkZChcImRpdmlkZXJfYnV0dG9uXCIsIHRpbnltY2UucGx1Z2lucy5kaXZpZGVyQnV0dG9uKTtcbn0pKCk7XG4iXSwibmFtZXMiOlsidGlueW1jZSIsImNyZWF0ZSIsImluaXQiLCJlZGl0b3IiLCJ1cmwiLCJhZGRCdXR0b24iLCJ0ZXh0IiwiaWNvbiIsIm9uY2xpY2siLCJpbnNlcnRDb250ZW50IiwiY3JlYXRlQ29udHJvbCIsIlBsdWdpbk1hbmFnZXIiLCJhZGQiLCJwbHVnaW5zIiwiZGl2aWRlckJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=