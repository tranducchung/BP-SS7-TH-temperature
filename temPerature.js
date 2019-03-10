function temPerature (C) {
    this.getTemF = function () {
        return (C*1.8)+32;
    };
    this.getTemK = function () {
        return (C+273.15);
    }
}
let Temperature = new temPerature(25);
let temF = Temperature.getTemF();
let temK = Temperature.getTemK();
document.write("Tem F = "+ temF +'<br>'+ "Tem K = "+ temK);