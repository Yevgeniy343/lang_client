import { useEffect, useState } from "react";

const useCalculator = (tarif_1, tarif_2, tarif_3) => {
  const [calculate, setCalculate] = useState();

  //   console.log(tarif_1, tarif_2, tarif_3, supervisor, part, curators);

  useEffect(() => {
    const t = tarif_1 + tarif_2 + tarif_3;
    setCalculate(t);
  }, [tarif_1, tarif_2, tarif_3]);

  return calculate;
};

export default useCalculator;
