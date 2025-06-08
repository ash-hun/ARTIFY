# ================================================
#              UNIT TEST config.py
# ================================================

from config import get_settings

def test_config():
    config = get_settings()
    assert isinstance(config.CONTAINER_NAME, str)
    assert isinstance(config.OPENAI_API_KEY, str)