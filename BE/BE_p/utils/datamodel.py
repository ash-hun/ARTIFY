from pydantic import BaseModel

class TranslateInput(BaseModel):
    info: dict = {
        'language': {
            'from': 'en',
            'to': 'ko'
        },
        'params': {
            'OPENAI_API_KEY': 'user_openai_api_key',
            'temperature': 0.0,
            'top_p': 0.1,
            'frequency_penalty': 1.0,
            'presence_penalty': 0.0
        },
        'template': 'sample_template',
        'user_instruction': 'sample_user_instruction'
    }
