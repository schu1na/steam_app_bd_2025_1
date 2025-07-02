import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./styled";

export default function TagCountTable() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/tags/counts")
      .then(res => setTags(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <S.Container>
      <S.BoxContainer>
      <h2>Tags e Número de Jogos</h2>
      <table >
        <thead>
          <tr>
            <th >Tag</th>
            <th >Total</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag, i) => (
            <tr key={i}>
              <td >{tag.tag_name}</td>
              <td >{tag.total_jogos}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </S.BoxContainer>
    </S.Container>
  );
}