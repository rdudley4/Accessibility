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
    maxWords: 20,
    paragrahs: 4,
    numberMin: 5,
    numberMax: 25,
    createString: () => {
      return `http://www.randomtext.me/api/lorem/p-${loremGenerator.genOptions.paragrahs}/${loremGenerator.genOptions.numberMin}-${loremGenerator.genOptions.numberMax}`;
    }
  }   
};

// NOTE - Possibly add multiple support types. Ipsum and Gibberish.