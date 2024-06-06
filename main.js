let arr1=[1,3,4,2,2];
for (let index = 0; index < arr1.length; index++) {
     for (let z = index + 1; z < arr1.length; z++) {
      if (arr1[index] === arr1[z]) {
        console.log(arr1[index]);
        break;
      }
        
    }
}
