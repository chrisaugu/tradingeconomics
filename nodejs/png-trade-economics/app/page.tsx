import Image from "next/image";
// import te from 'tradingeconomics';

let apiKey = "ea4b236450e0484:ihy2ql4xlfq8crl";
let url = `https://api.tradingeconomics.com/indicators?c=${apiKey}`;
// te.login(apiKey);

async function getData() {
  const res = await fetch(`https://catfact.ninja/fact`);
  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data)


  // data = te.getIndicatorData(country = ['china', 'portugal']).then(function(data) {
  //   console.log(data)
  // });

  return (
    <p>
      {/* {data[0].fact} */}
    </p>
  );
}
