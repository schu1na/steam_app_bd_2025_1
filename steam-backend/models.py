from sqlalchemy import Column, String, Integer, Date, ForeignKey, Double, Text, Boolean
from sqlalchemy.orm import relationship
from database import Base

class Player(Base):
    __tablename__ = "Player"
    steam_id = Column(String(255), primary_key=True)
    nickname = Column(String(255))
    real_name = Column(String(255))
    profile_image_url = Column(String(255))
    sign_date = Column(Date)
    country = Column(String(255))

class Game(Base):
    __tablename__ = "Game"
    app_id = Column(String(255), primary_key=True)
    name = Column(String(255))
    price = Column(Double)
    release_date = Column(String(255))
    description = Column(Text)

class Tag(Base):
    __tablename__ = "Tag"
    marker_id = Column(Integer, primary_key=True)
    name = Column(String(255))

class Review(Base):
    __tablename__ = "Review"
    review_date = Column(Date)
    review_text = Column(String(255))
    recommendation = Column(Boolean)
    player_steam_id = Column(String(255), ForeignKey("Player.steam_id"), primary_key=True)
    game_id = Column(String(255), ForeignKey("Game.app_id"), primary_key=True)

class PlayerPlaysGame(Base):
    __tablename__ = "player_plays_games"
    steam_id = Column(String(255), ForeignKey("Player.steam_id"), primary_key=True)
    game_id = Column(String(255), ForeignKey("Game.app_id"), primary_key=True)
    playtime_forever = Column(Integer)

class PlayerOwnsGame(Base):
    __tablename__ = "player_owns_games"
    steam_id = Column(String(255), ForeignKey("Player.steam_id"), primary_key=True)
    game_id = Column(String(255), ForeignKey("Game.app_id"), primary_key=True)

class GameTag(Base):
    __tablename__ = "game_tags"
    tag_id = Column(Integer, ForeignKey("Tag.marker_id"), primary_key=True)
    game_id = Column(String(255), ForeignKey("Game.app_id"), primary_key=True)