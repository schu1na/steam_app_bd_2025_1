from sqlalchemy.orm import Session
from sqlalchemy import text

def get_tag_counts(db: Session):
    return db.execute(text("""
        SELECT T.name AS tag_name, COUNT(tag_id) AS total_jogos
        FROM game_tags G
        JOIN Tag T ON G.tag_id = T.marker_id 
        GROUP BY tag_name
        ORDER BY total_jogos DESC
    """)).fetchall()

def get_player_tag_playtime(db: Session):
    return db.execute(text("""
        SELECT P.nickname as apelido, T.name as tag_name,
               sum(PPG.playtime_forever / 60) AS total_hours_tag_played
        FROM Player P
        JOIN player_plays_game PPG ON P.steam_id = PPG.steam_id 
        JOIN game_tags GT ON PPG.game_id = GT.game_id 
        JOIN Tag T ON GT.tag_id = T.marker_id 
        GROUP BY apelido, tag_name
    """)).fetchall()

def get_reviews_with_150_hours(db: Session):
    try:
        result = db.execute(text("""
            SELECT R.review_text, G.name, recommendation 
            FROM Review R
            JOIN Game G ON R.game_id = G.app_id
            WHERE (player_steam_id, game_id) IN (
                SELECT steam_id, game_id 
                FROM player_plays_game 
                WHERE playtime_forever > 150
            )
        """))
        return result.fetchall()
    except Exception as e:
        print("Erro na query /reviews/150hours:", e)
        return []


def get_games_played_not_owned_(db: Session):
    try:
        result = db.execute(text("""
            SELECT 
                PPG.steam_id AS player_id, 
                P.nickname AS apelido,
                G.app_id AS game_id, 
                G.name AS game_name
            FROM player_plays_game PPG
            LEFT JOIN player_owns_game POG 
                ON PPG.steam_id = POG.steam_id AND PPG.game_id = POG.game_id
            JOIN Game G ON PPG.game_id = G.app_id
            JOIN Player P ON PPG.steam_id = P.steam_id
            WHERE POG.game_id IS NULL
        """))
        return result.fetchall()
    except Exception as e:
        print("Erro na query /games/played-not-owned:", e)
        return []

def get_above_average_positive_games(db: Session):
    return db.execute(text("""
        SELECT G.name
        FROM Game G
        WHERE G.price < (
            SELECT AVG(price) FROM Game
        )
        AND (
            SELECT COUNT(*) FROM Review r WHERE r.game_id = G.app_id
        ) > 0
        AND (
            SELECT AVG(CASE WHEN r.recommendation = 1 THEN 1.0 ELSE 0 END) FROM Review r WHERE r.game_id = G.app_id
        ) > 0.5
    """)).fetchall()