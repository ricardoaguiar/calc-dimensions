import './App.css';
import { useState } from 'react';

function App() {
  const [colliSize, setColliSize] = useState(1); //start with 1 article per colli
  const [masterDataColliGrossWeight, setMasterDataColliGrossWeight] = useState(0); //start with 2 articles per master data(0); //get the MD cll gw
  const [masterDataArticleGrossWeight, setMasterDataArticleGrossWeight] = useState(0);

  const stGWData = (Number(masterDataColliGrossWeight) / colliSize).toFixed(3);
  
  const articleGrossWeightVariation = (Number(masterDataArticleGrossWeight - stGWData).toFixed(3));
  const articleNetWeightVariation = (Number(masterDataArticleNetWeight - stNWData).toFixed(3));

  console.log({
    "colliSize": colliSize,
    "masterDataColliGrossWeight": masterDataColliGrossWeight,
  });


  return (
    <main>
      <header>
        <h1>Master Data Package Measurements</h1>
      </header>

      <div>
        <h2>Weight Tolerances</h2>
        <ul className="grid tolerances">
          <li className="tolerances1">Weight</li>
          <li className="tolerances2">Tolerance</li>
          <li className="tolerances3">Minimum variation before creating a notification</li>
          <li className="tolerances4">0 - 1 kg</li>
          <li className="tolerances5">10%</li>
          <li className="tolerances6">50g</li>
          <li className="tolerances7">1 - 5 kg</li>
          <li className="tolerances8">8%</li>
          <li className="tolerances9">100g</li>
          <li className="tolerances10">5 - 10 kg</li>
          <li className="tolerances11">6%</li>
          <li className="tolerances12">500g</li>
          <li className="tolerances13">10 - 25kg</li>
          <li className="tolerances14">5%</li>
          <li className="tolerances15">1000g</li>
          <li className="tolerances16">&gt; 25kg</li>
          <li className="tolerances17">3%</li>
          <li className="tolerances18">1500g</li>
        </ul>
      </div>

      <h2>CHECK MD</h2>
      <span className="displayCllSizes" name="ckColliSize"></span>
      <div className="flex">
        <ul>
          <li className="flex">
            <select className="select_cl_size" value={`${colliSize}`} onChange={(e) => setColliSize(Number(e.target.value))}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="15">15</option>
            </select>
          </li>
        </ul>
      </div>

      <div className="flex">
        <div className="sap_data">
          <h3>ST Master Data</h3>
          <ul>
            <li className="flex">
              <span>ST GW</span>
              <input type="text" className="input_center" value={`${masterDataArticleGrossWeight}`} onChange={(e) => setMasterDataArticleGrossWeight(e.target.value)} />
              <span className="append">kg</span></li>
            <li className="flex"><span>ST NW</span><input type="text" className="input_center" />
            <span className="append">kg</span></li>
            <li className="flex"><span>ST LENGTH</span><input type="text" className="input_center" />
            <span className="append">cm</span></li>
            <li className="flex"><span>ST WIDTH</span><input type="text" className="input_center" />
            <span className="append">cm</span></li>
            <li className="flex"><span>ST HEIGHT</span><input type="text" className="input_center" />
            <span className="append">cm</span></li>
          </ul>
        </div>

        <div className="sap_data sap_data_verified">
          <h3>ST DATA</h3>
          <ul>
            {/* <li className="flex"><span className="result"></span></li> */}
            <li className="flex"><input readOnly type="text" className="verified" value={`${(Number(masterDataColliGrossWeight) / colliSize).toFixed(3)}`} /></li>
            <li className="flex"><input type="text" className="verified" /></li>
            <li className="flex"><input type="text" className="verified" /></li>
            <li className="flex"><input type="text" className="verified" /></li>
            <li className="flex"><input type="text" className="verified" /></li>
          </ul>
        </div>
        <div className="sap_data sap_data_verified">
          <h3>ST VARIATION</h3>
          <ul>
            <li className="flex">
            <span>ST GW VAR</span>
            <input type="text" className="input_center" readOnly value={`${articleGrossWeightVariation}`} />
            <span className="append">kg</span></li>

            <li className="flex">
            <span>ST NW</span>
            <input type="text" className="input_center" readOnly value={`${articleNetWeightVariation}`}/>
            <span className="append">kg</span></li>

            <li className="flex"><span>ST LENGTH</span><input type="text" className="input_center" /></li>
            <li className="flex"><span>ST WIDTH</span><input type="text" className="input_center" /></li>
            <li className="flex"><span>ST HEIGHT</span><input type="text" className="input_center" /></li>
          </ul>
        </div>
      </div>


      <div className="flex">
        <div className="sap_data">
          <h3>Colli Master Data</h3>
          <ul>
            <li className="flex"><span>CAR GW</span><input type="text" className="input_center" />
          <span className="append">kg</span></li>
            <li className="flex"><span>CAR WIDTH</span><input type="text" className="input_center" />
            <span className="append">cm</span></li>
            <li className="flex"><span>CAR LENGTH</span><input type="text" className="input_center" />
            <span className="append">cm</span></li>
            <li className="flex"><span>CAR HEIGHT</span><input type="text" className="input_center" />
            <span className="append">cm</span></li>
          </ul>
        </div>

        <div className="sap_data sap_data_verified">
          <h3>COLLI DATA</h3>
          <ul>
            <li className="flex">
            <input className="verified colli_gw" type="text" value={`${masterDataColliGrossWeight}`} onChange={(e) => setMasterDataColliGrossWeight(e.target.value)} />
            <span className="append">kg</span></li>
            <li className="flex"><input className="verified" type="text" />
            <span className="append">cm</span></li>
            <li className="flex"><input className="verified" type="text" />
<span className="append">cm</span></li>
            <li className="flex"><input className="verified" type="text" />
<span className="append">cm</span></li>
          </ul>
        </div>
      </div>

      <div className="flex toMasterData">
        <span>{`${(Number(masterDataColliGrossWeight) / colliSize).toFixed(3)}`}</span>

        {/* <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="svg8"
            version="1.1"
            viewBox="0 0 41.249554 56.678066"
            height="56.678066mm"
            width="41.249554mm">
            <path d="m 25.478556,2.1179137 h 29.828998 c 0.831,0 1.5,0.669 1.5,1.5 V 49.510419 c 0,0.831 -0.669,1.5 -1.5,1.5 H 25.478556 c -0.831,0 -1.5,-0.669 -1.5,-1.5 V 3.6179137 c 0,-0.831 0.669,-1.5 1.5,-1.5 z" />
            <path d="m 20.184044,6.6498461 h 29.828998 c 0.831,0 1.5,0.669 1.5,1.5 V 54.042352 c 0,0.831 -0.669,1.5 -1.5,1.5 H 20.184044 c -0.831,0 -1.5,-0.669 -1.5,-1.5 V 8.1498461 c 0,-0.831 0.669,-1.5 1.5,-1.5 z" />
            <path d="m 19.057999,7.9034734 h 29.828998 c 0.831,0 1.5,0.669 1.5,1.5 V 55.295979 c 0,0.831 -0.669,1.5 -1.5,1.5 H 19.057999 c -0.831,0 -1.5,-0.669 -1.5,-1.5 V 9.4034734 c 0,-0.831 0.669,-1.5 1.5,-1.5 z" />
          </svg>
        </span> */}
      </div>
      <div className="flex">
        <button className="button">CLEAR DATA</button>
      </div>



      {/* <div>
        <h2 className="weight-range">WEIGHT RANGE IN KG</h2>
        <ul>
          <li>DIMENSIONS</li>
          <li className="flex">Measurements</li>
          <li className="flex">Lenght:</li>
          <li className="flex">Width:</li>
          <li className="flex">Height:</li>
          <li className="flex">SAP</li>
          <li className="flex"><input type="number" /></li>
          <li className="flex"><input type="number" /></li>
          <li className="flex"><input type="number" /></li>
          <li className="flex">CARTON</li>
          <li className="flex">CARTON LABEL</li>
          <li className="flex">Lenght:</li>
          <li className="flex"><input type="number" /></li>
          <li className="flex">Width:</li>
          <li className="flex"><input type="number" /></li>
          <li className="flex">Height:</li>
          <li className="flex"><input type="number" /></li>
          <li className="flex">Lenght:</li>
          <li className="flex"><input type="number" /></li>
          <li className="flex">Width:</li>
          <li className="flex"><input type="number" /></li>
          <li className="flex">Height:</li>
          <li className="flex"><input type="number" /></li>
        </ul>
      </div> */}
    </main>

  );
}

export default App;
