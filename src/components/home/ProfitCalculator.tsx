
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Calculator, TrendingUp } from "lucide-react";

const ProfitCalculator = () => {
  const [betAmount, setBetAmount] = useState<number>(100);
  const [odds, setOdds] = useState<number>(1.5);
  const [profit, setProfit] = useState<number | null>(null);
  const [totalReturn, setTotalReturn] = useState<number | null>(null);

  // Handle bet amount changes
  const handleBetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setBetAmount(value);
    } else {
      setBetAmount(0);
    }
  };

  // Handle odds changes
  const handleOddsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value >= 1) {
      setOdds(value);
    } else {
      setOdds(1);
    }
  };

  // Calculate both profit and total return
  const calculateProfit = () => {
    const calculatedTotalReturn = betAmount * odds;
    const calculatedProfit = calculatedTotalReturn - betAmount;
    
    setTotalReturn(calculatedTotalReturn);
    setProfit(calculatedProfit);
  };

  // Auto-calculate on initial load
  useEffect(() => {
    calculateProfit();
  }, []);

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[20%] top-[30%] w-64 h-64 bg-sport-blue-medium/20 rounded-full blur-3xl animate-pulse-light"></div>
        <div className="absolute right-[25%] bottom-[20%] w-72 h-72 bg-sport-blue-light/20 rounded-full blur-3xl animate-pulse-light"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex justify-center mb-8">
          <h2 className="text-4xl font-bold text-gradient flex items-center gap-3">
            <Calculator className="text-sport-accent" size={36} strokeWidth={2.5} />
            <span>Калькулятор прибыли</span>
          </h2>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="neo-blur border-sport-blue-medium/50 shadow-lg card-glow animate-glow">
            <CardHeader className="border-b border-sport-blue-medium/30 bg-gradient-to-r from-sport-blue-dark to-sport-blue">
              <CardTitle className="text-gray-200 text-center text-2xl">
                <span className="text-gradient">Рассчитайте свой потенциальный выигрыш</span>
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6 p-8">
              <div className="space-y-4">
                <div>
                  <label htmlFor="bet-amount" className="block text-sm text-gray-300 mb-2 flex items-center gap-1">
                    <span className="text-sport-accent">₽</span> Сумма ставки
                  </label>
                  <Input
                    id="bet-amount"
                    type="number"
                    min="0"
                    value={betAmount}
                    onChange={handleBetAmountChange}
                    className="bg-sport-blue-dark/80 border-sport-blue-medium/40 text-gray-200 text-lg h-12 focus:ring-sport-accent focus:border-sport-accent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="odds" className="block text-sm text-gray-300 mb-2 flex items-center gap-1">
                    <TrendingUp className="text-sport-accent h-4 w-4" /> Коэффициент
                  </label>
                  <Input
                    id="odds"
                    type="number"
                    step="0.01"
                    min="1"
                    value={odds}
                    onChange={handleOddsChange}
                    className="bg-sport-blue-dark/80 border-sport-blue-medium/40 text-gray-200 text-lg h-12 focus:ring-sport-accent focus:border-sport-accent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="mt-8 space-y-4 bg-gradient-to-b from-sport-blue-dark/30 to-sport-blue/10 p-4 rounded-lg">
                <div className="p-4 rounded-lg neo-blur backdrop-blur-xl border-sport-accent/20 border hover:border-sport-accent/40 transition-all duration-300">
                  <p className="text-center text-gray-300">Чистая прибыль:</p>
                  <p className="text-center text-3xl font-bold bg-gradient-to-r from-sport-accent to-sport-yellow bg-clip-text text-transparent animate-pulse-light">
                    {profit !== null ? profit.toFixed(2) : "0.00"} ₽
                  </p>
                </div>
                
                <div className="p-4 rounded-lg neo-blur backdrop-blur-xl border-sport-blue-medium/30 border hover:border-sport-blue-medium/50 transition-all duration-300">
                  <p className="text-center text-gray-300">Общий возврат:</p>
                  <p className="text-center text-2xl font-bold text-gray-200">
                    {totalReturn !== null ? totalReturn.toFixed(2) : "0.00"} ₽
                  </p>
                </div>
              </div>
            </CardContent>
            
            <CardFooter className="bg-gradient-to-r from-sport-blue-dark to-sport-blue border-t border-sport-blue-medium/30 p-6">
              <Button
                onClick={calculateProfit}
                className="w-full bg-sport-accent hover:bg-sport-accent-hover text-gray-100 text-lg py-6 shadow-lg shadow-sport-accent/20 flex items-center justify-center gap-2 group transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Calculator className="w-5 h-5 group-hover:animate-spin-slow" />
                Рассчитать
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfitCalculator;
