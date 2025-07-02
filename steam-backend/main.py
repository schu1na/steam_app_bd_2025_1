
from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from database import SessionLocal, engine
import models, crud, schemas
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:5173"],
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou especifique o frontend: ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

models.Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/tags/counts", response_model=list[schemas.TagCount])
def read_tag_counts(db: Session = Depends(get_db)):
    return crud.get_tags_with_game_counts(db)

@app.get("/players/tag-playtime", response_model=list[schemas.PlayerTagPlaytime])
def read_playtime_per_tag(db: Session = Depends(get_db)):
    return crud.get_players_playtime_by_tag(db)

@app.get("/reviews/150hours", response_model=list[schemas.ReviewText])
def read_long_play_reviews(db: Session = Depends(get_db)):
    return crud.get_reviews_150_hours(db)

@app.get("/games/played-not-owned", response_model=list[schemas.PlayedNotOwned])
def read_games_played_not_owned(db: Session = Depends(get_db)):
    return crud.get_games_played_not_owned(db)

@app.get("/games/above-average-positive", response_model=list[schemas.GameName])
def read_above_avg_positive_games(db: Session = Depends(get_db)):
    return crud.get_above_avg_positive_games(db)