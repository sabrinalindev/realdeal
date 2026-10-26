var trash = document.getElementsByClassName("fa-trash");
var purchase = document.getElementsByClassName("deal")

Array.from(purchase).forEach(function(element) {
      element.addEventListener('click', function(){
        const listingId = element.dataset.listingId
        fetch('deal', {
          method: 'put',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            listingId,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const listingId = this.parentNode.parentNode.dataset.listingId
        fetch('listings', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            listingId,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});