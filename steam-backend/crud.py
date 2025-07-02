from sqlalchemy.orm import Session
from queries import *

def get_tags_with_game_counts(db: Session):
    return get_tag_counts(db)

def get_players_playtime_by_tag(db: Session):
    return get_player_tag_playtime(db)

def get_reviews_150_hours(db: Session):
    return get_reviews_with_150_hours(db)

def get_games_played_not_owned(db: Session):
    return get_games_played_not_owned_(db)

def get_above_avg_positive_games(db: Session):
    return get_above_average_positive_games(db)