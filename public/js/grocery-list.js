$(document).ready(function() {
  const purchases = $("#purchases");
$(document).on("click", "remove-icon", removePurchases);
$(document).on("click", "add-icon", addPurchases);
$(document).on("click", "move-icon", movePurchases);
$(document).on("click", "edit-icon", editPurchase);

  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(`${data.firstName} ${data.lastName}`);
  });  
const purchases = [];

getPurchases();

function initializeRows() {
  $purchases.empty();
  var rowsToAdd = [];
  for (var i = 0; i < purchases.length; i++) {
    rowsToAdd.push(createNewRow(purchases[i]));
  }
  $purchases.prepend(rowsToAdd);
}

function getPurchases() {
  $.get("/api/purchases", function(data) {
    purchases = data;
    initializeRows();
  })
}

function deletePurchases(event) {
  event.stopPropagation();
  var id = $(this).data("id");
  $.ajax({
    method: "DELETE",
    url: "api/purchases/" + id
  }).then(getPurchases);
}
function editPurchase() {
  var currentPurchase = $(this).data("purchases");
  $(this)
  .children()
  .hide();
$(this)
  .children('input.edit')
  .val(currentTodo.text);
$(this)
  .children('input.edit')
  .show();
$(this)
  .children('input.edit')
  .focus();
}

function toggleComplete(event) {
  event.stopPropagation();
  var purchases = $(this)
  .parent()
  .data("purchases");
  purchases.complete = !purchases.complete;
  updatePurchase(purchases);
}
function finishEdit(event) {
  var updatedPurchase = $(this).data("purchases");
  if (event.which === 13) {
    updatedPurchase.text = $(this)
    .children("input")
    .val()
    .trim();
    $(this).blur();
    updatePurchase(UpdatePurchase);
  }
}
function updatePurchase(purchases) {
  $.ajax({
    method: "PUT",
    url: "/api/purchases",
    data: purchases
  }).then(getPurchases);
}
function createNewRow(purchases) {
  var $newInputRow = $(
    [
    
    ]
  )
}

});