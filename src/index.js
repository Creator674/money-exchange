// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    else if  (currency <= 0 ) {
        return {};
};
var money = {
  'H' : 0,
  'Q' : 0,
  'D' : 0,
  'N' : 0,
  'P' : 0,
};
count(currency);

for (var key in money) {
    if (money[key] === 0) {
        delete money[key];
    }
}

return money ;

 function count(currency){
    if (currency - 50 >= 0) {
        return money['H']+=1,  count (currency - 50);
    }
    else if (currency - 25 >= 0) {
        return money['Q']+=1,    count (currency - 25);
    }
    else if (currency - 10 >= 0) {
         return money['D']+=1, count (currency - 10);
    }
    else if (currency - 5 >= 0) {
        return money['N']+=1,  count (currency - 5);
    }
    else if (currency - 1 >= 0) {
        return money['P']+=1,  count (currency - 1);
    }
}

};

