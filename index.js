function lottery(array) {
   
    const names = [...array];
    const winners = [];
    winners.push(names[0]);
    winners.push(names[1]);
    winners.push(names[2]);
    winners.push(names[3]);
    winners.push(names[4]);
    winners.push(names[9]);
    winners.push(names[19]);
    winners.push(names[29]);
    winners.push(names[39]);
    winners.push(names[49]);
    names.splice(49, 1);
    names.splice(39, 1);
    names.splice(29, 1);
    names.splice(19, 1);
    names.splice(9, 1);
    names.splice(0, 5);
  
    winners.push(names[Math.floor(Math.random() * names.length)]);
    return winners;
  }
  
  
  // Create a fake list of 100 users for testing
const names = Array.from({ length: 100 }, (_, i) => `user${i + 1}`);

// Call the function
const winners = lottery(names);

// Print the result to the console
console.log("Winners:", winners);
