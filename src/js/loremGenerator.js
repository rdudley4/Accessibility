// ==========================================================================
// Generate Random Lorem Text from http://www.randomtext.me/ API
// ==========================================================================

export const loremGenerator = {
  genData: (loremURL, elms) => {
    fetch(loremURL).then(function(Response) {
      return Response.json();
    }).then(function(myJSON) {
      return myJSON;
    }).then(function(data) {
      for (let elm of elms) {
        elm.innerHTML = `${ data.text_out }<p>Lorem Generated @ ${ data.time }`;
      }
    });
  },
  genOptions: { 
    paragrahs: 5,
    minWords : 5,
    maxWords : 20,
    createString: function () {
      return `https://www.randomtext.me/api/lorem/p-${this.paragrahs}/${this.minWords}-${this.maxWords}`;
    }
  }   
};

// NOTE - Possibly add multiple support types. Ipsum and Gibberish.