(function () {
  if (typeof tinymce === "undefined") {
    return;
  }

  tinymce.create("tinymce.plugins.dividerButton", {
    init: function (editor) {
      editor.addButton("divider_button", {
        text: "Dividing Line",
        icon: false,
        onclick: function () {
          editor.insertContent("<hr>");
        },
      });
    },
    createControl: function () {
      return null;
    },
  });

  tinymce.PluginManager.add("divider_button", tinymce.plugins.dividerButton);
})();
