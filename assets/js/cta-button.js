(function () {
  tinymce.create("tinymce.plugins.cta_button", {
    init: function (ed, url) {
      ed.addButton("cta_button", {
        text: "Insert CTA Button",
        onclick: function () {
          ed.insertContent(
            '<a href="#" class="cta-button green square"><span class="cta-text">Insert Text</span></a>',
          );
        },
      });
    },
  });
  tinymce.PluginManager.add("cta_button", tinymce.plugins.cta_button);
})();
