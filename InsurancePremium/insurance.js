var InsurancePremiumCalculator = /** @class */ (function () {
    function InsurancePremiumCalculator(factors) {
        this.factors = factors;
        this.basePremium = 100;
    }
    InsurancePremiumCalculator.prototype.calculatePremium = function () {
        var premium = this.basePremium;
        if (this.factors.age < 25) {
            premium += 50;
        }
        else if (this.factors.age > 60) {
            premium += 30;
        }
        if (this.factors.gender === 'male') {
            premium += 20; // Assume higher risk for males
        }
        switch (this.factors.healthStatus) {
            case 'average':
                premium += 30;
                break;
            case 'poor':
                premium += 50;
                break;
        }
        if (this.factors.location === 'urban') {
            premium += 40;
        }
        premium += this.factors.coverageAmount * 0.01; // 1% of coverage amount
        return premium;
    };
    return InsurancePremiumCalculator;
}());
var insuranceFactors = {
    age: 30,
    gender: 'male',
    healthStatus: 'good',
    location: 'urban',
    coverageAmount: 50000,
};
var calculator = new InsurancePremiumCalculator(insuranceFactors);
var premium = calculator.calculatePremium();
console.log("The calculated insurance premium is: Rs.".concat(premium.toFixed(2)));
