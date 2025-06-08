from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file="./environments/.env",
        env_file_encoding="utf-8",
    )
    CONTAINER_NAME: str
    OPENAI_API_KEY : str

@lru_cache
def get_settings():
    return Settings()