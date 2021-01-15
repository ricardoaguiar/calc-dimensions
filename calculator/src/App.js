import "./App.css";
import React, { useState } from "react";
import NumberInput from "./NumberInput";

function App() {
  const [colliSize, setColliSize] = useState(1); //start with 1 article per colli
  const [masterDataColliGrossWeight, setMasterDataColliGrossWeight] = useState(
    0
  );
  const [
    masterDataArticleGrossWeight,
    setMasterDataArticleGrossWeight
  ] = useState(0);

  const [masterDataArticleNetWeight, setMasterDataArticleNetWeight] = useState(
    0
  );
  const [articleNetWeight, setArticleNetWeight] = useState(0);

  const stGWData = (Number(masterDataColliGrossWeight) / colliSize).toFixed(3);

  const articleGrossWeightVariation = Number(
    masterDataArticleGrossWeight - stGWData
  ).toFixed(3);
  const articleNetWeightVariation = Number(
    masterDataArticleNetWeight - articleNetWeight
  ).toFixed(3);


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
          <li className="tolerances3">
            Minimum variation before creating a notification
          </li>
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
            <select
              className="select_cl_size"
              value={`${colliSize}`}
              onChange={(e) => setColliSize(Number(e.target.value))}
            >
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
            {/* ST gross weight */}
            <li className="flex">
              <span className="prepend">ST GW</span>
              <NumberInput
                value={masterDataArticleGrossWeight}
                onChange={setMasterDataArticleGrossWeight}
              />
              <span className="append">kg</span>
            </li>

            {/* st net weight */}
            <li className="flex">
              <span>ST NW</span>
              <NumberInput
                value={masterDataArticleNetWeight}
                onChange={setMasterDataArticleNetWeight}
              />
              <span className="append">kg</span>
            </li>

            <li className="flex">
              <span>ST LENGTH</span>
              <input type="text" className="input_center" />
              <span className="append">cm</span>
            </li>
            <li className="flex">
              <span>ST WIDTH</span>
              <input type="text" className="input_center" />
              <span className="append">cm</span>
            </li>
            <li className="flex">
              <span>ST HEIGHT</span>
              <input type="text" className="input_center" />
              <span className="append">cm</span>
            </li>
          </ul>
        </div>

        <div className="sap_data sap_data_verified">
          <h3>MEASURED DATA</h3>
          <ul>
            {/* <li className="flex"><span className="result"></span></li> */}
            <li className="flex">
              <input
                readOnly
                type="text"
                className="verified"
                value={`${(
                  Number(masterDataColliGrossWeight) / colliSize
                ).toFixed(3)}`}
              />
            </li>
            <li className="flex">
              <input
                type="text"
                className="verified"
                value={`${Number(articleNetWeight).toFixed(3)}`}
                onChange={(e) => setArticleNetWeight(e.target.value)}
              />
            </li>
            <li className="flex">
              <input type="text" className="verified" />
            </li>
            <li className="flex">
              <input type="text" className="verified" />
            </li>
            <li className="flex">
              <input type="text" className="verified" />
            </li>
          </ul>
        </div>

        <div className="sap_data sap_data_verified">
          <h3>ST VARIATION</h3>
          <ul>
            <li className="flex">
              <span>ST GW VAR</span>
              <input
                type="text"
                className="input_center"
                readOnly
                value={`${articleGrossWeightVariation}`}
              />
              <span className="append">kg</span>
            </li>

            <li className="flex">
              <span>ST NW</span>
              <input
                type="text"
                className="input_center"
                readOnly
                value={`${articleNetWeightVariation}`}
              />
              <span className="append">kg</span>
            </li>

            <li className="flex">
              <span>ST LENGTH</span>
              <input type="text" className="input_center" />
            </li>
            <li className="flex">
              <span>ST WIDTH</span>
              <input type="text" className="input_center" />
            </li>
            <li className="flex">
              <span>ST HEIGHT</span>
              <input type="text" className="input_center" />
            </li>
          </ul>
        </div>
      </div>

      {/* colli MD */}
      <div className="flex">
        <div className="sap_data">
          <h3>Colli Master Data</h3>
          <ul>
            <li className="flex">
              <span>CAR GW</span>
              <input type="text" className="input_center" />
              <span className="append">kg</span>
            </li>
            <li className="flex">
              <span>CAR WIDTH</span>
              <input type="text" className="input_center" />
              <span className="append">cm</span>
            </li>
            <li className="flex">
              <span>CAR LENGTH</span>
              <input type="text" className="input_center" />
              <span className="append">cm</span>
            </li>
            <li className="flex">
              <span>CAR HEIGHT</span>
              <input type="text" className="input_center" />
              <span className="append">cm</span>
            </li>
          </ul>
        </div>

        <div className="sap_data sap_data_verified">
          <h3>COLLI DATA</h3>
          <ul>
            <li className="flex">
              <input
                className="verified colli_gw"
                type="text"
                value={`${masterDataColliGrossWeight}`}
                onChange={(e) => setMasterDataColliGrossWeight(e.target.value)}
              />
              <span className="append">kg</span>
            </li>
            <li className="flex">
              <input className="verified" type="text" />
              <span className="append">cm</span>
            </li>
            <li className="flex">
              <input className="verified" type="text" />
              <span className="append">cm</span>
            </li>
            <li className="flex">
              <input className="verified" type="text" />
              <span className="append">cm</span>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="flex toMasterData">
        <span>{`${(Number(masterDataColliGrossWeight) / colliSize).toFixed(
          3
        )}`}</span>
      </div>

      <div className="flex">
        <button className="button">CLEAR DATA</button>
      </div> */}
    </main>
  );
}

export default App;
