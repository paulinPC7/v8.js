console.log("1 x 1 =", 1 * 1); 
console.log("1 x 2 =", 1 * 2);

T = 1; 
m = 1;
for(T=1; T <= 10; T++) {
    console.log();
    console.log(" ======= T =" + T + " ======= " ); 
    for(M = 1; M <=10; M++) {
        console.log(T + " x " + M +" = ", T*M);
    }
}
