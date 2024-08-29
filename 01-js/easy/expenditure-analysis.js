/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) 
{let Output = [];
  ls=[];
  while(transactions.length>0){
    let l= [];
    l = transactions.filter(obj => obj['category'] == transactions[0]['category'])
    ls.push(l);
    for(let i=0;i<l.length;i++){
      transactions.splice(transactions.indexOf(l[i]),1);
    }
  }
  for(let i =0 ; i< ls.length ; i++){//ls[i]=list of objects with same category
    let cat ='';
    cat = ls[i][0]['category'];
    let TotalSpent =0;
    for(let j =0 ; j< ls[i].length ; j++){
      TotalSpent=TotalSpent+ls[i][j]['price'];
    }
    let returnobj={
      category : cat ,
      totalSpent : TotalSpent
    }
    Output.push(returnobj)

  }
  return Output
}


module.exports = calculateTotalSpentByCategory ;
