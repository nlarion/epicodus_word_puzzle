describe("isVowel", function(){

  it("Will check it see if the char is a vowel", function(){
    expect(isVowel("")).to.equal(false);
  });

  it("Will return true if the char is a vowel", function(){
    expect(isVowel("i")).to.equal(true);
  });
});


describe("replaceVowel", function(){
  it("Will take a vowel and replace with hyphen", function(){
    expect(replaceVowel("a")).to.equal("-");
  });

  it("Will take a vowel and replace with hyphen", function(){
    expect(replaceVowel("b")).to.equal("b");
  });

});


describe("puzzleParser", function(){
  it("Will take a string and parse string to remove vowels and replace with hyphen", function(){
    expect(puzzleParser("some words")).to.equal("s-m- w-rds");
  });
});
