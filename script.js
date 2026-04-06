$ajaxUtils.sendGetRequest(
  allCategoriesUrl,
  buildAndShowHomeHTML
);
function chooseRandomCategory(categories) {
  var randomIndex = Math.floor(Math.random() * categories.length);
  return categories[randomIndex];
}
function buildAndShowHomeHTML(categories) {
  var randomCategory = chooseRandomCategory(categories);
  var randomCategoryShortName = "'" + randomCategory.short_name + "'";

  $ajaxUtils.sendGetRequest(
    homeHtmlUrl,
    function (homeHtml) {
      var homeHtmlToInsertIntoMainPage =
        insertProperty(homeHtml, "randomCategoryShortName", randomCategoryShortName);

      insertHtml("#main-content", homeHtmlToInsertIntoMainPage);
    },
    false
  );
}
