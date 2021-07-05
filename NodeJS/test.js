mocha.setup("bdd");
let assert = chai.assert;

describe("sum",function(){
    let test1=[1,2,3,4,5];
    it(`summation of ${test1} is 15`,function(){
        assert.equal(sum(test1),15);
    });
    let test2=[2,6,1,0,-5];
    it(`summation of ${test2} is 4`,function(){
        assert.equal(sum(test2),4);
    });
    let test3=[-1,-2,-3,-4,-5];
    it(`summation of ${test3} is -15`,function(){
        assert.equal(sum(test3),-15);
    });
    let test4=[10,20,30,40,50];
    it(`summation of ${test4} is 150`,function(){
        assert.equal(sum(test4),150);
    });
    let test5=[111,2,444,4,50];
    it(`summation of ${test5} is 611`,function(){
        assert.equal(sum(test5),611);
    });
});

describe("multiply",function(){
    let test1=[1,2,3,4,5];
    it(`multiplication of ${test1} is 120`,function(){
        assert.equal(multiply(test1),120);
    });
    let test2=[2,6,1,0,-5];
    it(`multiplication of ${test2} is 0`,function(){
        assert.equal(multiply(test2),0);
    });
    let test3=[-1,-2,-3,-4,-5];
    it(`multiplication of ${test3} is -120`,function(){
        assert.equal(multiply(test3),-120);
    });
    let test4=[10,20,30,40,50];
    it(`multiplication of ${test4} is 12000000`,function(){
        assert.equal(multiply(test4),12000000);
    });
    let test5=[1,2,444,1,2];
    it(`mutiplication of ${test5} is 1776`,function(){
        assert.equal(multiply(test5),1776);
    });   
});

describe("reverse",function(){
    it("reverse of Seid is dieS",function(){
        assert.equal(reverse("Seid"),"dieS");
    });
    it('reverse of "" is ""',function(){
        assert.equal(reverse(""),"");
    });
    it("reverse of foo is oof",function(){
        assert.equal(reverse("foo"),"oof"); 
    });
});
describe("filterLongWords",function(){
    let testData=["h","he","she","your","ourss"];
    it(`filter ${testData} with 4 is ["ourss"]`,function(){
        assert.deepEqual(filterLongWords(testData,4),["ourss"]);
    })
    it(`filter ${testData} with 3 is ["your","ourss"]`,function(){
        assert.deepEqual(filterLongWords(testData,3),["your","ourss"]);
    })
    it(`filter ${testData} with 1 is ["he","she","your","ourss"]`,function(){
        assert.deepEqual(filterLongWords(testData,1),["he","she","your","ourss"]);
    });
});
window.onload=function(){
    mocha.run();
}