# ================================================
#              UNIT TEST config.py
# ================================================
from config import get_settings
from core.module.translate import Translate

def test_translate():
    user_config = {
        'language': {
            'from': 'en',
            'to': 'ko'
        },
        'params': {
            'OPENAI_API_KEY': get_settings().OPENAI_API_KEY,
            'temperature': 0.0,
            'top_p': 0.1,
            'frequency_penalty': 1.0,
            'presence_penalty': 0.0
        },
        'template': 'sample_template',
        'user_instruction': 'sample_user_instruction'
    }

    translate = Translate(params=user_config['params'])
    # _get_system_prompt
    assert isinstance(translate._get_system_prompt(language="ko"), str)
    # _get_prompt
    assert isinstance(translate._get_prompt(text="Hello, how are you?", language="ko"), str)
    # run
    assert isinstance(translate.run("Hello, how are you?", "ko"), str)