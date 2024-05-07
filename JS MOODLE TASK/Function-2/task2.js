
        let num1 = 10;
        let num2 = 0;
        let num3 = 50;
        function findLargest(){
            if (num1>num2 && num1>num3 ){
                document.write(`${num1} is largest number` );
            }
            else if(num2>num1 && num2>num3){
                document.write(`${num2} is largest number` );
            }
            else{
                document.write(`${num3} is largest number` );
            };
        };
        findLargest();
  