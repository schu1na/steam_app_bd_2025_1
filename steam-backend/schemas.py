from pydantic import BaseModel

class TagCount(BaseModel):
    tag_name: str
    total_jogos: int

class PlayerTagPlaytime(BaseModel):
    apelido: str
    tag_name: str
    total_hours_tag_played: float

class ReviewText(BaseModel):
    review_text: str
    name: str
    recommendation: bool

class PlayedNotOwned(BaseModel):
    player_id: str
    apelido: str
    game_id: str
    game_name: str

class GameName(BaseModel):
    name: str