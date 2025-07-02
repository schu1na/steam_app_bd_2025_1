import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./styled";

export default function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/reviews/150hours")
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <S.Container>
      <S.BoxContainer>
        <h2>Reviews de Jogadores com +150h</h2>
        <table className="review-table">
          <thead>
            <tr className="table-header-row">
              <th className="table-header-cell">Game ID</th>
              <th className="table-header-cell">Review</th>
              <th className="table-header-cell">Recomendação</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((r, i) => (
              <tr key={i} className="table-body-row">
                <td className="table-cell">{r.name}</td>
                <td className="table-cell">{r.review_text}</td>
                <td className="table-cell">{r.recommendation ? '👍' : '👎'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </S.BoxContainer>
    </S.Container>
  );
}
