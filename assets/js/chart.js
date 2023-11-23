let svg = d3.select("svg");
const g = svg.append("g");
console.log("hi");
//創建一個地圖投影
let projectmethod = d3.geoMercator().center([123, 24]).scale(5500);
// 地理路徑生成器
let pathGenerator = d3.geoPath().projection(projectmethod);
d3.json("COUNTY_MOI_1090820")
  .then(data => {
    //觀察一下data
    console.log(data)
    const geometries = topojson.feature(data, data.objects["COUNTY_MOI_1090820"])
    // 觀察一下geometries
    console.log(geometries);
  });