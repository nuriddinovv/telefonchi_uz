import { useEffect, useState } from "react";

// Props uchun interfeys
interface StatisticProps {
  title: string;
  value: number;
  precision?: number;
}

const Statistic: React.FC<StatisticProps> = ({
  title,
  value,
  precision = 0,
}) => {
  const [displayValue, setDisplayValue] = useState<string>("0");

  useEffect(() => {
    const incrementValue = value / 100;
    let currentValue = 0;

    const interval = setInterval(() => {
      currentValue += incrementValue;
      if (currentValue >= value) {
        setDisplayValue(
          value.toFixed(precision).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
        clearInterval(interval);
      } else {
        setDisplayValue(
          currentValue.toFixed(precision).replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
      }
    }, 15);

    return () => clearInterval(interval);
  }, [value, precision]);

  return (
    <div className="flex flex-col justify-center items-center text-3xl lg:text-5xl  text-[#193c8c] bg-[#faa500] p-4 rounded h-[200px]">
      <div className="font-bold">{displayValue}+</div>
      <div className="text-[#fff] text-xl lg:text-3xl  text-center">
        {title}
      </div>
    </div>
  );
};

export default Statistic;
