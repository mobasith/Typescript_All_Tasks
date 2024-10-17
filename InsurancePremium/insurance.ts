interface InsuranceFactors {
    age: number;
    gender: 'male' | 'female';
    healthStatus: 'good' | 'average' | 'poor';
    location: string; 
    coverageAmount: number; 
}

class InsurancePremiumCalculator {
    private basePremium: number = 100; 

    constructor(private factors: InsuranceFactors) {}

    public calculatePremium(): number {
        let premium = this.basePremium;

        
        if (this.factors.age < 25) {
            premium += 50; 
        } else if (this.factors.age > 60) {
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
    }
}

const insuranceFactors: InsuranceFactors = {
    age: 30,
    gender: 'male',
    healthStatus: 'good',
    location: 'urban',
    coverageAmount: 50000, 
};

const calculator = new InsurancePremiumCalculator(insuranceFactors);
const premium = calculator.calculatePremium();

console.log(`The calculated insurance premium is: Rs.${premium.toFixed(2)}`);
