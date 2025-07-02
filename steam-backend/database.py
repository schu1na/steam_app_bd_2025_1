from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Substitua pelos dados reais do seu banco
SQLALCHEMY_DATABASE_URL = "mysql+pymysql://root:CnYVfo5U@localhost:3306/steamdb3"

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()