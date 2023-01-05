import axios from "axios";
import React, { useEffect, useState } from "react";

export default function App() {
  const [veri, setVeri] = useState();
  const [tarih, setTarih] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
      )
      .then((res) => {
        setVeri(res.data[tarih]);
      })
      .catch((err) => {
        null;
      });
  }, [veri, tarih]);

  return (
    <div className="container">
      <div className="col-md-8 mx-auto mt-4">
        <h2 className="text-light text-center"> COVID-19 ARAMA MOTORU</h2>
        <p className="text-light text-center">
          (11/03/2020 - 31/05/2022 <br />
          Tarihleri Arasını Kapsamaktadır)
        </p>
        <br />
        <input
          onChange={(e) => setTarih(e.target.value)}
          type="text"
          placeholder="GG/AA/YY"
          className="form-control text-center "
        />

        <table className="table text-light text-center">
          <thead>
            <tr>
              <th scope="col">Tarih</th>
              <th scope="col">Test Sayısı</th>
              <th scope="col">Hasta Sayısı</th>
              <th scope="col">Vefat Sayısı</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                scope="row"
                className={veri === undefined ? "bg-danger" : "bg-success"}
              >
                {veri === undefined ? "Veri bekleniyor" : veri.date}
              </td>
              <td className={veri === undefined ? "bg-danger" : "bg-success"}>
                {veri === undefined ? "Veri bekleniyor" : veri.totalTests}
              </td>
              <td className={veri === undefined ? "bg-danger" : "bg-success"}>
                {" "}
                {veri === undefined ? "Veri bekleniyor" : veri.patients}
              </td>
              <td className={veri === undefined ? "bg-danger" : "bg-success"}>
                {" "}
                {veri === undefined ? "Veri bekleniyor" : veri.deaths}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
