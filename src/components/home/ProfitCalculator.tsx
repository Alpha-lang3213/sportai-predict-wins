
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";

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

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-[20%] top-[30%] w-64 h-64 bg-sport-blue-medium/10 rounded-full blur-3xl"></div>
        <div className="absolute right-[25%] bottom-[20%] w-72 h-72 bg-sport-blue-light/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex justify-center mb-8">
          <h2 className="text-3xl font-bold text-gradient">Калькулятор прибыли</h2>
        </div>

        <div className="max-w-lg mx-auto">
          <Card className="neo-blur border-sport-blue-medium/30">
            <CardHeader>
              <CardTitle className="text-gray-300 text-center">Рассчитайте свой потенциальный выигрыш</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label htmlFor="bet-amount" className="block text-sm text-gray-300 mb-1">
                  Сумма ставки (₽)
                </label>
                <Input
                  id="bet-amount"
                  type="number"
                  min="0"
                  value={betAmount}
                  onChange={handleBetAmountChange}
                  className="bg-sport-blue-dark/80 border-gray-600 text-gray-300"
                />
              </div>
              
              <div>
                <label htmlFor="odds" className="block text-sm text-gray-300 mb-1">
                  Коэффициент
                </label>
                <Input
                  id="odds"
                  type="number"
                  step="0.01"
                  min="1"
                  value={odds}
                  onChange={handleOddsChange}
                  className="bg-sport-blue-dark/80 border-gray-600 text-gray-300"
                />
              </div>

              {profit !== null && (
                <div className="mt-6 space-y-3">
                  <div className="p-4 rounded-lg neo-blur">
                    <p className="text-center text-gray-300">Чистая прибыль:</p>
                    <p className="text-center text-2xl font-bold text-sport-accent">
                      {profit.toFixed(2)} ₽
                    </p>
                  </div>
                  
                  <div className="p-4 rounded-lg neo-blur">
                    <p className="text-center text-gray-300">Общий возврат:</p>
                    <p className="text-center text-2xl font-bold text-gray-200">
                      {totalReturn !== null ? totalReturn.toFixed(2) : "0.00"} ₽
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
            
            <CardFooter>
              <Button
                onClick={calculateProfit}
                className="w-full bg-sport-accent hover:bg-sport-accent-hover text-gray-200"
              >
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
